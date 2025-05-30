import {Outlet} from "react-router";
import Nav from '../components/nav';
import * as React from 'react';

/**
 * Initial layout with <nav>
 * @constructor
 */
export default function DefaultLayout() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}