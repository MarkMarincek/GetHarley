import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
  }

  &.title__date__wrapper {
  }

  p:first-child {
    margin-bottom: 8px;
  }
`;

export { UserInfoContainer };
