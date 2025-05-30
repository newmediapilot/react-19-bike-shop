import DetailDialog from '../components/DetailDialog';
import Search from '../components/Search';
import Listings, {ListData} from '../components/Listings';
import {useLoaderData, useSearchParams} from "react-router"
import * as React from 'react';
import {selectLoaderSlice} from '../redux/List.selector';
import {useAppSelector} from '../redux/store';

/**
 * Initial "homepage"
 * @constructor
 */
function Index() {
    const listData: ListData = useAppSelector(selectLoaderSlice('listLoader'));
    const [searchParams] = useSearchParams();
    const detailParam: string = searchParams.get("detail");
    // @ts-ignore
    const detailData = listData.find(item => item.id === Number(searchParams.get("detail")));
    return (
        <>
            <Search/>
            <Listings list={listData}/>
            <DetailDialog detail={detailParam !== null && detailData}/>
        </>
    )
}

export default Index;