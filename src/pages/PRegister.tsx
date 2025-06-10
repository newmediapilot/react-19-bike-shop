import * as React from 'react';
import { NavLink } from 'react-router';
/**
 * Login mock
 * @constructor
 */
function PRegister() {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <main className="h-screen flex items-center justify-center p-6  min-w-[320px]">
            <div className="max-w-sm w-full p-6 border space-y-4">
                <h1 className="text-xl font-semibold">Register Account</h1>
                <form className="space-y-4" onSubmit={onSubmit}>
                    <div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium">Username</label>
                            <input id="text" name="dna" type="text" className="input w-full" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium">Email</label>
                            <input id="email" name="email" type="email" className="input w-full" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="input w-full"
                            />
                        </div>
                        <div className="flex items-center gap-2 pt-3">
                            <input
                                id="subscribe"
                                name="subscribe"
                                type="checkbox"
                                className="checkbox"
                            />
                            <label htmlFor="subscribe" className="text-sm font-medium">
                                Subscribe to Updates
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between">
                        <NavLink
                            to="/listings"
                            className="btn btn-primary border border-1 border-gray-200"
                        >
                            Register
                        </NavLink>
                        <NavLink to="/" className="btn btn-primary">
                            Login
                        </NavLink>
                    </div>
                </form>
            </div>
        </main>
    );
}
export default PRegister;
