import React, { useMemo } from 'react';
import { ROUTES } from 'routes/constants';
import { fillArgumentsForPath } from 'utils/helpers';
import { TagContainer } from './Tag.style';

interface TagPosts {
  tag: string;
}
export default function Tag({ tag }: TagPosts) {
  const tagLink = useMemo(() => fillArgumentsForPath(ROUTES.TAG_POSTS, tag), [tag]);
  return <TagContainer to={tagLink}>{tag}</TagContainer>;
}
