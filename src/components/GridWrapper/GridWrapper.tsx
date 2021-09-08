import { Grid } from '@material-ui/core';
import React from 'react';

interface GridWrapperProps {
  children: JSX.Element[];
}
export default function GridWrapper({ children }: GridWrapperProps) {
  return (
    <Grid container spacing={3}>
      {children.map((child, index) => (
        <Grid key={child.key ?? index} item xs={12} md={6}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
