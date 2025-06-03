import {NavLink} from "react-router";
import * as React from 'react';
/**
 * Navigation for the router
 * @constructor
 */
function Nav() {
    const active = ({isActive}) => `${isActive ? "underline" : ""}`;
    return (
        <nav>
            <NavLink to="/" className={active}>Index</NavLink>
            <NavLink to="/components" className={`${active} pl-3`}>Components</NavLink>
            <NavLink to="/test" className={`${active} pl-3`}>Error</NavLink>
        </nav>
    );
}

export default Nav;