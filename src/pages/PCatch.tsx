import * as React from 'react';
import { NavLink } from 'react-router';

/**
 * Initial "homepage"
 * @constructor
 */

function PCatch({ message = 'Path Error' }) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full p-6 border shadow-md space-y-4">
        <h1 className="text-xl text-center font-semibold">{message}</h1>
        <div className="flex gap-2 justify-center">
          <NavLink to="/" className="btn btn-primary border border-1 border-gray-600">
            Return to Login
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default PCatch;
