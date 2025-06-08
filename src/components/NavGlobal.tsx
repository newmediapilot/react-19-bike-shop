import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Navigation for the router
 * @constructor
 */
function NavGlobal() {
  const active = ({ isActive }) => `${isActive ? 'hover:underline underline' : 'hover:underline'}`;
  return (
    <nav className="grid grid-flow-col items-center gap-4 h-full">
      <NavLink to="/listings" className={`${active} m-4`} {...pf.events('id@list')}>
        Listings
      </NavLink>
      <NavLink to="/components" className={`${active} m-4`}>
        Components
      </NavLink>
      <NavLink to="/" className="hover:underline m-4">
        Log Out
      </NavLink>
    </nav>
  );
}

export default NavGlobal;
