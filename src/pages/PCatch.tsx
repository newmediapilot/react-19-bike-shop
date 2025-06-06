import * as React from 'react';
import { NavLink } from 'react-router';
/**
 * Initial "homepage"
 * @constructor
 */
function PCatch() {
  return (
    <main className="p-4">
      <h1>There was an error handling the request.</h1>
      <div className="pt-4">
        <NavLink to="/">Return Home</NavLink>
      </div>
    </main>
  );
}
export default PCatch;
