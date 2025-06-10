import CSuspense from '@local/components/core/CSuspense';
import * as React from 'react';
import {NavLink} from 'react-router';

/**
 * Login mock
 * @constructor
 */
function PLogin() {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <CSuspense>
            <main className="h-screen flex items-center justify-center p-6  min-w-[320px]">
                <div className="max-w-sm w-full p-6 border space-y-4">
                    <h1 className="text-xl font-semibold">Login</h1>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="input w-full"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="password" className="block text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between">
                            <NavLink
                                to="/listings"
                                className="btn btn-primary border border-1 border-gray-200"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="btn btn-primary border border-1 border-gray-800"
                            >
                                Register
                            </NavLink>
                        </div>
                    </form>
                </div>
            </main>
        </CSuspense>
    );
}

export default PLogin;
