import NavFooter from '@local/components/NavFooter';
import NavGlobal from '@local/components/NavGlobal';
import * as React from 'react';
import { Outlet } from 'react-router';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function LDefault() {
  return (
    <div className="relative grid grid-rows">
      <header className="h-[5vh]">
        <NavGlobal />
      </header>
      <main className="h-[90vh]">
        <Outlet />
      </main>
      <footer className="h-[5vh]">
        <NavFooter />
      </footer>
    </div>
  );
}
