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
    console.log('listData', listData);
    return (
        <>
            <Search/>
            <Listings list={undefined}/>
            <DetailDialog detail={undefined}/>
        </>
    )
}

export default Index;