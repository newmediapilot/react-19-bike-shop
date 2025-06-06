import { pf } from '@local/loaders/core/pf';
import { Tabs } from '@skeletonlabs/skeleton-react';
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
    <Tabs value={group} vonValueChange={(e) => setGroup(e.value!)}>
      <Tabs.List>
        <Tabs.Control value="a">
          <NavLink to="/" className={active} {...pf.events('id@list')}>
            Index
          </NavLink>
        </Tabs.Control>
        <Tabs.Control value="b">
          <NavLink to="/components" className={active} {...pf.events('id@list')}>
            Components
          </NavLink>
        </Tabs.Control>
        <Tabs.Control value="c">
          <NavLink to="/404" className={`${active}`}>
            404
          </NavLink>
        </Tabs.Control>
      </Tabs.List>
    </Tabs>
  );
}

export default NavGlobal;
