import DetailDialog from '../components/DetailDialog';
import Search from '../components/Search';
import Listings from '../components/Listings';
import {useLoaderData} from "react-router"
import * as React from 'react';
/**
 * Initial "homepage"
 * @constructor
 */
function Index() {
    const listData = useLoaderData();
    return (
        <>
            <Search/>
            <Listings list={listData}/>
            <DetailDialog detail={{id: 12345, title: "title", description: "description"}}/>
        </>
    )
}
export default Index;