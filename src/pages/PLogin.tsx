import * as React from 'react';
import { NavLink } from 'react-router';
/**
 * Login mock
 * @constructor
 */
function PLogin() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full p-6 border space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input id="email" name="email" type="email" className="input" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input id="password" name="password" type="password" className="input" />
          </div>
          <div className="flex gap-2">
            <NavLink to="/listings" className="btn btn-primary w-full">
              Login
            </NavLink>
            <NavLink to="/listings" className="btn btn-primary w-full">
              Register
            </NavLink>
          </div>
        </form>
      </div>
    </main>
  );
}
export default PLogin;
