import { PaginationProps, Pagination } from '@material-ui/lab';
import React from 'react';
import { StyledPaginationContainer } from './StyledPagination.style';

export default function StyledPagination(props: PaginationProps) {
  return (
    <StyledPaginationContainer>
      <Pagination {...props} />
    </StyledPaginationContainer>
  );
}
