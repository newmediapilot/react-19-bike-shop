import { Navigation } from '@skeletonlabs/skeleton-react';
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1" />
      <nav>
        <Navigation.Bar value={value} onValueChange={setValue}>
          <Navigation.Tile asChild id="/">
            <NavLink to="/">Home</NavLink>
          </Navigation.Tile>
          <Navigation.Tile asChild id="/about">
            <NavLink to="/about">About</NavLink>
          </Navigation.Tile>
          <Navigation.Tile asChild id="/contact">
            <NavLink to="/contact">Contact</NavLink>
          </Navigation.Tile>
        </Navigation.Bar>
      </nav>
      <footer className="p-4 text-center text-sm text-gray-500">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default NavFooter;
