import {useSearchParams} from "react-router"
import * as React from 'react';
import DetailDialog from '@local/components/DetailDialog';
import Search from '@local/components/Search';
import Listings, {ListData, ListItem} from '@local/components/Listings';
import {useAppSelector} from '@local/composition/store';
import {selectList, selectListId, selectListTokens} from '@local/composition/selectors';

/**
 * Initial "homepage"
 * @constructor
 */
function Index() {
    const listData: ListData = useAppSelector(selectList);
    const [searchParams] = useSearchParams();
    const detailParam: string | null = searchParams.get("detail");
    const detailSearchId: number = (null === detailParam) ? -1 : Number(detailParam);
    const listTokens: ListData = useAppSelector(selectListTokens());
    const detailData: ListItem = useAppSelector(selectListId(detailSearchId));
    return (
        <>
            <Search/>
            <Listings list={listData}/>
            <DetailDialog detail={(null !== detailParam) && detailData}/>
        </>
    )
}

export default Index;