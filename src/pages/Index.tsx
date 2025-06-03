import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router"
import DetailDialog from '@local/components/DetailDialog';
import Search from '@local/components/Search';
import Listings, {ListData, ListDataFields, ListDataKey, ListItem} from '@local/components/Listings';
import {useAppSelector} from '@local/composition/store';
import {selectList, selectListId, selectSearch, selectMode} from '@local/composition/selectors';
import {filterList, FilterListItem} from '@local/transformers/filterList';
import ModeSelect from '@local/components/ModeSelect';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {

    // Query params
    const [searchParams] = useSearchParams();
    const detailParam: string | null = searchParams.get("detail");
    const detailSearchId: number = (null === detailParam) ? -1 : Number(detailParam);

    // Redux
    const items: ListData = useAppSelector(selectList);
    const search: string = useAppSelector(selectSearch);
    const mode: string = useAppSelector(selectMode);
    const detail: ListItem = useAppSelector(selectListId(detailSearchId));

    // State
    const [filtered, setFiltered] = useState<Array<any>>([]);
    useEffect(() => {
        const listFilter: FilterListItem[] = filterList(search, items, ListDataKey, ListDataFields);
        const listFound: ListItem[] = listFilter.filter(item => item.match).map(item => items.find(i => i.id === item.key));
        ('filter' === mode) && setFiltered(listFound);
    }, [search]);

    // Filter highlight
    // Filter decorate

    // Render
    return (
        <>
            <Search/>
            <ModeSelect/>
            <Listings list={filtered}/>
            <DetailDialog detail={(null !== detailParam) && detail}/>
        </>
    )
}

export default Index;