import React from 'react';
import { StyledContainer, ContentWrapper } from './AppContainer.style';

interface AppContainerProps {
  children: React.ReactNode;
}
export default function AppContainer({ children }: AppContainerProps) {
  return (
    <StyledContainer maxWidth="md">
      <ContentWrapper>{children}</ContentWrapper>
    </StyledContainer>
  );
}
