import { Grid } from '@material-ui/core';
import React from 'react';

interface GridWrapperProps {
  children: JSX.Element | (undefined | JSX.Element)[] | undefined;
}
export default function GridWrapper({ children }: GridWrapperProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <Grid container spacing={3}>
      {childrenArray.map((child, index) => (
        <Grid key={child?.key ?? index} item xs={12} md={6}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
}
