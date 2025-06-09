import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Navigation for the router
 * @constructor
 */
const className = `
        h-[100%] 
        w-[50%]
        s:w-[100%]
        grid 
        grid-flow-col 
        items-center 
        gap-4 
        [&>*]:h-[100%]
        [&>*]:flex 
        [&>*]:items-center 
        [&>*]:justify-center 
    `;
function NavGlobal() {
  const active = ({ isActive }) => `${isActive ? 'underline' : 'hover:underline'}`;
  return (
    <nav
      className={`
        h-[100%] 
        w-[50%]
        s:w-[100%]
        grid 
        grid-flow-col 
        items-center 
        gap-4 
        [&>*]:h-[100%]
        [&>*]:flex 
        [&>*]:items-center 
        [&>*]:justify-center 
    `}
    >
      <NavLink to="/listings" className={active} {...pf.events('id@list')}>
        Listings
      </NavLink>
      <NavLink to="/components" className={active}>
        Components
      </NavLink>
      <NavLink to="/" className={active}>
        Log Out
      </NavLink>
    </nav>
  );
}

export default NavGlobal;
