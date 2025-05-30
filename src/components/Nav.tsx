import {NavLink} from "react-router";

/**
 * Navigation for the router
 * @constructor
 */
function Nav() {
    const active = ({isActive}) => `${isActive ? "underline" : ""}`;
    return (<header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-100">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to="/" className={active}>Index</NavLink>
                            {/* other routes */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>);
}

export default Nav;