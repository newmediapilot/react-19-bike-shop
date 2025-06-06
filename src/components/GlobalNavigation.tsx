import { NavLink } from 'react-router';
import * as React from 'react';
import { pf } from '@local/loaders/core/pf';
/**
 * Navigation for the router
 * @constructor
 */
function GlobalNavigation() {
  const active = ({ isActive }) => `${isActive ? 'underline' : ''}`;
  return (
    <nav>
      <NavLink to="/" className={active} {...pf.events('id@list')}>
        Index
      </NavLink>
      <NavLink to="/components" className={`${active}`}>
        Components
      </NavLink>
      <NavLink to="/404" className={`${active}`}>
        404
      </NavLink>
    </nav>
  );
}

export default GlobalNavigation;
