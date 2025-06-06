import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router';
/**
 * Navigation for the router
 * @constructor
 */
function NavGlobal() {
  const [group, setGroup] = useState('plane');
  const active = ({ isActive }) => `${isActive ? 'underline' : ''}`;
  return (
    <nav className="flex">
      <NavLink to="/listings" className={active} {...pf.events('id@list')}>
        Listings
      </NavLink>
      <NavLink to="/components" className={active} {...pf.events('id@list')}>
        Components
      </NavLink>
      <NavLink to="/error" className={`${active}`}>
        404
      </NavLink>
    </nav>
  );
}

export default NavGlobal;
