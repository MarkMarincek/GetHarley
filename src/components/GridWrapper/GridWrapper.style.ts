import styled from 'styled-components/macro';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;

  > * {
    margin: 8px;
  }
`;

export default CardsWrapper;
