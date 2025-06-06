import { NavLink, useLoaderData } from 'react-router';
import * as React from 'react';
/**
 * Initial "homepage"
 * @constructor
 */
function Catch() {
  return (
    <div>
      <h1>There was an error handling the request.</h1>
      <NavLink to="/">Return Home</NavLink>
    </div>
  );
}
export default Catch;
