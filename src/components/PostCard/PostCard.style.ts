import styled from 'styled-components';

const PostCardContainer = styled.div``;

const PostUserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  &.title__date__wrapper {
  }
`;

export { PostCardContainer, PostUserSection };
