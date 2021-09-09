import styled from 'styled-components/macro';

const UserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserCardImg = styled.img`
  border-radius: 4px;
  height: 56px;
  width: 56px;
  object-fit: cover;
`;

const UserCardContentSection = styled.div`
  margin-left: 16px;

  & > a {
    margin-top: 8px;
    margin-right: 8px;
  }
`;

export { UserCardContainer, UserCardImg, UserCardContentSection };
