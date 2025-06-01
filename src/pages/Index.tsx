import {useSearchParams} from "react-router"
import * as React from 'react';
import DetailDialog from '@local/components/DetailDialog';
import Search from '@local/components/Search';
import Listings, {ListData, ListItem} from '@local/components/Listings';
import {useAppSelector} from '@local/composition/store';
import {selectList, selectListId} from '@local/composition/selectors';

/**
 * Initial "homepage"
 * @constructor
 */
function Index() {
    const listData: ListData = useAppSelector(selectList);
    const [searchParams] = useSearchParams();
    const detailParam: string = searchParams.get("detail");
    const detailData: ListItem = useAppSelector(selectListId(Number(detailParam)));
    return (
        <>
            <Search/>
            <Listings list={listData}/>
            <DetailDialog detail={detailData}/>
        </>
    )
}

export default Index;