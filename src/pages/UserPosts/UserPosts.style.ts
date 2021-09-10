import styled from 'styled-components/macro';

const UserPostsTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 48px;

  > * {
    margin-bottom: 0;
    margin-left: 48px;
  }

  h1 {
    margin-right: 0;
  }
`;

export { UserPostsTitleContainer };
