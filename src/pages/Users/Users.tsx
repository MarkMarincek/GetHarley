import GridWrapper from 'components/GridWrapper';
import StyledCard from 'components/StyledCard';
import React from 'react';

export default function Users() {
  return (
    <>
      <h1>Users list</h1>
      <div>
        <GridWrapper>
          <StyledCard>hello world</StyledCard>
          <StyledCard>hello world</StyledCard>
          <StyledCard>hello world</StyledCard>
          <StyledCard>hello world</StyledCard>
        </GridWrapper>
      </div>
    </>
  );
}
