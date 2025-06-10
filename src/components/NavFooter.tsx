import * as React from 'react';
/**
 * Navigation for the router
 * @constructor
 */
function NavFooter() {
    return (
        <footer className="text-xs text-right my-3 pr-2">
            <div className="opacity-[50%]">©{new Date().getFullYear()} React19 Bike Shop.</div>
        </footer>
    );
}

export default NavFooter;
