import NavFooter from '@local/components/NavFooter';
import NavGlobal from '@local/components/NavGlobal';
import { Grid } from '@radix-ui/themes';
import * as React from 'react';
import { Outlet } from 'react-router';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function DefaultLayout() {
  return (
    <Grid
      className={`
            p-4
        `}
    >
      <header>
        <NavGlobal />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavFooter />
      </footer>
    </Grid>
  );
}
