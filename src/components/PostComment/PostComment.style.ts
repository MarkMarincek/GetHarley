import styled from 'styled-components/macro';

const CommentContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.1);
  padding: 8px;
`;

const CommentText = styled.p`
  margin-top: 16px;
  text-overflow: ellipsis;
  max-height: 40px;
`;

export { CommentContainer, CommentText };
