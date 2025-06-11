import NavFooter from '@local/components/NavFooter';
import NavGlobal from '@local/components/NavGlobal';
import InputSearch from '@local/pages/PListings/InputSearch';
import * as React from 'react';
import { Outlet } from 'react-router';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function LDefault() {
    return (
        <div className={`
                    relative 
                    grid 
                    grid-rows 
                    h-100vh 
                    overflow-hidden
                `}>
            <header
                className={`
                    h-[5vh]
                `}
            >
                <NavGlobal />
            </header>
            <aside
                className={`
                    h-[5vh]
                `}
            >
                <InputSearch />
            </aside>
            <main
                className={`
                    h-[85vh]
                `}
            >
                <Outlet />
            </main>
            <footer
                className={`
                    h-[5vh]
                `}
            >
                <NavFooter />
            </footer>
        </div>
    );
}
