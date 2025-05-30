import DetailDialog from '../components/DetailDialog';
import Search from '../components/Search';
import Listings, {ListData} from '../components/Listings';
import {useLoaderData, useSearchParams} from "react-router"
import * as React from 'react';

/**
 * Initial "homepage"
 * @constructor
 */
function Index() {
    const listData: ListData = useLoaderData();
    const [searchParams, _] = useSearchParams();
    const detailData = listData.find(item => item.id === Number(searchParams.get("detail")));
    return (
        <>
            <Search/>
            <Listings list={listData}/>
            <DetailDialog detail={detailData}/>
        </>
    )
}

export default Index;