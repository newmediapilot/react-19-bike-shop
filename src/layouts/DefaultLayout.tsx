import { Outlet } from 'react-router';
import GlobalNavigation from '@local/components/GlobalNavigation';
import * as React from 'react';
import { Box, Grid } from '@radix-ui/themes';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function DefaultLayout() {
  return (
    <Grid columns="1" gap="3" rows="repeat(auto, 100%)" width="auto">
      <Box width="100%">
        <GlobalNavigation />
      </Box>
      <Box width="100%">
        <Outlet />
      </Box>
    </Grid>
  );
}
