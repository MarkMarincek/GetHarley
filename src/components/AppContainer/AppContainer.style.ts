import { Container } from '@material-ui/core';
import styled from 'styled-components/macro';

const StyledContainer = styled(Container)`
  /* Increasing specificity to override the MUI display style */
  &.MuiContainer-root {
    display: flex;
  }
  height: 92vh;
  margin-top: 6vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 8px;
  background: white;
  padding: 16px;
`;

export { StyledContainer, ContentWrapper };
