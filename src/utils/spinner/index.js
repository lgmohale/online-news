import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

const CircularIndeterminate = () => {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '50vh' }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>   
    </Grid>
  );
};

export default CircularIndeterminate;