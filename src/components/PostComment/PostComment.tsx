import UserInfo from 'components/UserInfo';
import { Comment } from 'models/interfaces';
import React from 'react';
import { CommentContainer, CommentText } from './PostComment.style';

interface PostCommentProps {
  comment: Comment;
}
export default function PostComment({ comment }: PostCommentProps) {
  return (
    <CommentContainer>
      <UserInfo user={comment.owner} publishDate={comment.publishDate} />
      <CommentText>{comment.message}</CommentText>
    </CommentContainer>
  );
}
