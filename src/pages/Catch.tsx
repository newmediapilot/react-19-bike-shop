import {NavLink, useLoaderData} from "react-router"
import * as React from 'react';
/**
 * Initial "homepage"
 * @constructor
 */
function Catch() {
    return (
        <div class="p-5">
            <h1 className="mb-5">There was an error handling the request.</h1>
            <NavLink to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Return Home
            </NavLink>
        </div>
    )
}
export default Catch;