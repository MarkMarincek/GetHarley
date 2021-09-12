import React, { useMemo } from 'react';
import { ROUTES } from 'routes/constants';
import { fillArgumentsForPath } from 'utils/helpers';
import { TagContainer } from './Tag.style';

interface TagPosts {
  tag: string;
  large?: boolean;
}
export default function Tag({ tag, large }: TagPosts) {
  const tagLink = useMemo(() => fillArgumentsForPath(ROUTES.TAG_POSTS, tag), [tag]);
  return (
    <TagContainer $large={large} to={tagLink}>
      {tag}
    </TagContainer>
  );
}
