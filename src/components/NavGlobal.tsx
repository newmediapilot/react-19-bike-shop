import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';
/**
 * Navigation for the router
 * @constructor
 */
function NavGlobal() {
  const active = ({ isActive }) => `${isActive ? 'underline' : ''}`;
  return (
    <nav className="flex gap-6 text-sm font-medium border-b pb-2">
      <NavLink
        className="text-gray-700 hover:underline"
        to="/listings"
        className={active}
        {...pf.events('id@list')}
      >
        Listings
      </NavLink>
      <NavLink
        className="text-gray-700 hover:underline"
        to="/components"
        className={active}
        {...pf.events('id@list')}
      >
        Components
      </NavLink>
      <NavLink className="text-gray-700 hover:underline" to="/error" className={`${active}`}>
        404
      </NavLink>
    </nav>
  );
}

export default NavGlobal;
