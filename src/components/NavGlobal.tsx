import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';
/**
 * Navigation for the router
 * @constructor
 */
function NavGlobal() {
  const active = ({ isActive }) => `${isActive ? 
      'hover:underline underline' : 
      'hover:underline'}`;
  return (
    <nav className="flex gap-6 text-sm font-medium border-b pb-2">
      <NavLink
        to="/listings"
        className={active}
        {...pf.events('id@list')}
      >
        Listings
      </NavLink>
      <NavLink
        to="/components"
        className={active}
      >
        Components
      </NavLink>
      <NavLink
          to="/error"
          className={`${active}`}
      >
        404
      </NavLink>
    </nav>
  );
}

export default NavGlobal;
