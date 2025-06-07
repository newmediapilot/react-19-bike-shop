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
    <nav className="flex justify-between text-sm font-medium border-b border-gray-600 pb-2">
      <div className="flex gap-6">
        <NavLink to="/listings" className={active} {...pf.events('id@list')}>Listings</NavLink>
        <NavLink to="/components" className={active}>Components</NavLink>
      </div>
      <div className="flex">
        <NavLink to="/" className="hover:underline">Log Out</NavLink>
      </div>
    </nav>
  );
}

export default NavGlobal;
