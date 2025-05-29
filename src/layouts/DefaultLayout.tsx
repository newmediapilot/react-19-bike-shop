import {Outlet} from "react-router";
import Nav from '../components/nav';

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