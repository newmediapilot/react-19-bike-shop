import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router"
import DetailDialog from '@local/components/DetailDialog';
import Search, {SearchData} from '@local/components/Search';
import Listings, {ListData, ListDataFields, ListDataKey, ListItem} from '@local/components/Listings';
import {useAppSelector} from '@local/composition/store';
import {selectList, selectListId, selectMode, selectSearch} from '@local/composition/selectors';
import {filterList, FilterListItem} from '@local/transformers/filterList';
import ModeSelect from '@local/components/ModeSelect';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {

    // Query eg. "?detail="
    const [searchParams] = useSearchParams();
    const detailParam: string | null = searchParams.get("detail");
    const detailSearchId: number = (null === detailParam) ? -1 : Number(detailParam);

    // Redux
    const items: ListData = useAppSelector(selectList);
    const search: SearchData = useAppSelector(selectSearch);
    const mode: string = useAppSelector(selectMode);
    const detail: ListItem = useAppSelector(selectListId(detailSearchId));

    // State
    const [filtered, setFiltered] = useState<Array<any>>([]);

    useEffect(() => {

        const listFilter: FilterListItem[] = filterList(search, items, ListDataKey, ListDataFields);
        const listFound: ListItem[] = listFilter.filter(item => item.match).map(item => items.find(i => String(i.id) === String(item.key)));

        // Empty search
        if(!search) setFiltered(listFound as Array<any>);

        // Hides rows
        if ('filter' === mode) setFiltered(listFound as Array<any>);

        // Highlights words
        if ('highlight' === mode) setFiltered(listFound as Array<any>);

        // Highlights words
        if ('decoration' === mode) setFiltered(listFound as Array<any>);

    }, [search, mode]);

    // Filter highlight
    // Filter decoration

    // Render
    return (
        <>
            <Search/>
            <ModeSelect/><span>{mode}</span>
            <Listings list={filtered}/>
            <DetailDialog detail={(null !== detailParam) && detail}/>
        </>
    )
}

export default Index;