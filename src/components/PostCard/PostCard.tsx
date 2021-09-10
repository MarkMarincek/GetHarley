import StyledCard from 'components/StyledCard';
import { DATE_FORMAT } from 'config';
import { format } from 'date-fns';
import { PostPreview } from 'models/interfaces';
import React, { useMemo } from 'react';
import { getFullName } from 'utils/helpers';
import { PostCardContainer, PostUserSection } from './PostCard.style';

interface PostCardProps {
  post: PostPreview;
}
export default function PostCard({ post }: PostCardProps) {
  const userFullName = getFullName(post.owner);
  const timeOfPost = useMemo(() => {
    return format(new Date(post.publishDate), DATE_FORMAT);
  }, [post.publishDate]);

  return (
    <StyledCard>
      <PostCardContainer>
        <PostUserSection>
          <img src={post.owner.picture} alt="User profile" />
          <div>
            <p>{userFullName}</p>
            <p>{timeOfPost}</p>
          </div>
        </PostUserSection>
      </PostCardContainer>
    </StyledCard>
  );
}
