import styled from 'styled-components/macro';

const PostCardContainer = styled.div`
  width: 100%;
`;

const PostUserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
  }

  p:first-child {
    margin-bottom: 8px;
  }
`;

const PostContentSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const PostImageWrapper = styled.div`
  position: relative;
  width: 126px;
  height: 126px;
  border-radius: 8px;
  margin-right: 24px;
  overflow: hidden;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    object-fit: contain;
  }

  img.backdrop {
    object-fit: cover;
    filter: blur(8px);
  }
`;

const PostRightSideSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 8px;

    > * {
      margin-right: 8px;
    }
  }
`;

const PostLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;

  p {
    font-weight: bold;
  }

  svg {
    fill: blue;
    margin-right: 8px;
  }
`;

const PostCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;

  > *:not(:first-child) {
    margin-top: 16px;
  }

  .warning__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    font-style: italic;
    color: grey;
  }
`;

export {
  PostCardContainer,
  PostUserSection,
  PostContentSection,
  PostRightSideSection,
  PostImageWrapper,
  PostLikesContainer,
  PostCommentSection,
};
