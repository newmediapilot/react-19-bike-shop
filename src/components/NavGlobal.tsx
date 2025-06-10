import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Navigation for the router
 * @constructor
 */
function NavGlobal() {
    const active = ({ isActive }) => `${isActive ? 'underline' : 'hover:underline'}`;
    return (
        <nav
            className={`
                w-full
                h-[100%]
                sm:w-[50vw]
                flex
                flex-row
                gap-3
                justify-center
                items-center
          `}
        >
            <NavLink to="/post" className={active}>
                Post
            </NavLink>
            <NavLink to="/preview" className={active}>
                Preview
            </NavLink>
            <NavLink to="/listings" className={active} {...pf.events('id@list')}>
                Search
            </NavLink>
            <NavLink to="/test" className={active}>
                Test
            </NavLink>
            <NavLink to="/" className={active}>
                Log Out
            </NavLink>
        </nav>
    );
}

export default NavGlobal;
