import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router';
/**
 * Navigation for the router
 * @constructor
 */
function NavFooter() {
  const [value, setValue] = useState('/');
  return (
    <footer>
      <nav className="p-4 flex space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Privacy</NavLink>
      </nav>
      <span>© 2025 React19 Bike Shop. All rights reserved.</span>
    </footer>
  );
}

export default NavFooter;
