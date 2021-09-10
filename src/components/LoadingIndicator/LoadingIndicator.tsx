import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { LoadingIndicatorContainer } from './LoadingIndicator.style';

export default function LoadingIndicator() {
  return (
    <LoadingIndicatorContainer>
      <CircularProgress />
    </LoadingIndicatorContainer>
  );
}
