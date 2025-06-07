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
      <div className="relative">
          {nav && (
              <header className="sticky top-[0] z-[1] bg-black">
                  <NavGlobal />
              </header>
          )}
          <div className="grid grid-rows-[auto_1fr_auto]">
              <main>
                  <Outlet />
              </main>
              {footer && (
                  <footer>
                      <NavFooter />
                  </footer>
              )}
          </div>
      </div>
  );
}
