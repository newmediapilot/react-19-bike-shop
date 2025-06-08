import NavFooter from '@local/components/NavFooter';
import NavGlobal from '@local/components/NavGlobal';
import * as React from 'react';
import { Outlet } from 'react-router';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function LDefault({ nav = true, footer = true }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      {nav && (
        <header className="h-[6vh]">
          <NavGlobal />
        </header>
      )}
      <div className="h-[90vh] overflow-y-scroll">
        <main>
          <Outlet />
        </main>
      </div>
      <div className="h-[4vh]">
          {footer && (
              <footer>
                  <NavFooter />
              </footer>
          )}
      </div>
    </div>
  );
}
