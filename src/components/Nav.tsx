import {NavLink} from "react-router";
import * as React from 'react';

/**
 * Navigation for the router
 * @constructor
 */
function Nav() {
    const active = ({isActive}) => `${isActive ? "underline" : ""}`;
    return (<header>
        <nav>
            <NavLink to="/" className={active}>Index</NavLink>
            <NavLink to="/test" className={`${active} pl-3`}>Error</NavLink>
        </nav>
    </header>);
}

export default Nav;