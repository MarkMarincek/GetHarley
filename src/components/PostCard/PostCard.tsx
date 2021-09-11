import StyledCard from 'components/StyledCard';
import Tag from 'components/Tag';
import { PostPreview } from 'models/interfaces';
import React, { useEffect } from 'react';
import {
  PostCardContainer,
  PostCommentSection,
  PostContentSection,
  PostImageWrapper,
  PostLikesContainer,
  PostRightSideSection,
} from './PostCard.style';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import UserInfo from 'components/UserInfo';
import useApiHook from 'hooks/useApi.hook';
import { getComments } from 'utils/api';
import LoadingIndicator from 'components/LoadingIndicator';
import PostComment from 'components/PostComment';
interface PostCardProps {
  post: PostPreview;
}
export default function PostCard({ post }: PostCardProps) {
  const [commentsState, requestComments] = useApiHook(getComments);

  useEffect(() => {
    requestComments(post.id);
  }, [post.id, requestComments]);

  function renderComments() {
    if (commentsState.loading) return <LoadingIndicator />;
    if (commentsState.error) return <p className="warning__text">Something went wrong</p>;
    if (!commentsState.response?.data.data.length)
      return <p className="warning__text">No comments</p>;

    return commentsState.response.data.data
      .slice(0, 2)
      .map((comment) => <PostComment comment={comment} key={comment.id} />);
  }

  return (
    <StyledCard>
      <PostCardContainer>
        <UserInfo user={post.owner} publishDate={post.publishDate} />
        <PostContentSection>
          <PostImageWrapper>
            <img className="backdrop" src={post.image} alt="Post backdrop" />
            <img src={post.image} alt="Post" />
          </PostImageWrapper>
          <PostRightSideSection>
            <p>{post.text}</p>
            <div>
              {post.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <PostLikesContainer>
              <ThumbUpIcon />
              <p>{post.likes}</p>
            </PostLikesContainer>
          </PostRightSideSection>
        </PostContentSection>
        <PostCommentSection>{renderComments()}</PostCommentSection>
      </PostCardContainer>
    </StyledCard>
  );
}
