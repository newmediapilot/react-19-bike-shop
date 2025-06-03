// @ts-ignore
import {useSearchParams} from "react-router"
// @ts-ignore
// @ts-ignore
import * as React from 'react';
import {useEffect, useState} from 'react';
import DetailDialog from '@local/components/DetailDialog';
import Search from '@local/components/Search';
import Listings, {ListData, ListDataFields, ListDataKey, ListItem} from '@local/components/Listings';
import {useAppSelector} from '@local/composition/store';
import {selectList, selectListId, selectSearch} from '@local/composition/selectors';
import {filterList, FilterListItem} from '@local/transformers/filterList';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {
    const items: ListData = useAppSelector(selectList);
    const search: string = useAppSelector(selectSearch);
    const [searchParams] = useSearchParams();
    const detailParam: string | null = searchParams.get("detail");
    const detailSearchId: number = (null === detailParam) ? -1 : Number(detailParam);
    const detailData: ListItem = useAppSelector(selectListId(detailSearchId));
    const [filtered, setFiltered] = useState<Array<any>>([]);
    useEffect(() => {
        const listFilter:FilterListItem[] = filterList(search, items, ListDataKey, ListDataFields);
        setFiltered(listFilter
            .filter(item => item.match)
            .map(item => items.find(i => i.id === item.key))
        );
    }, [search]);
    return (
        <>
            <Search/>
            <Listings list={filtered}/>
            <DetailDialog detail={(null !== detailParam) && detailData}/>
        </>
    )
}

export default Index;