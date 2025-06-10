// @ts-ignore
import { default as React, useEffect, useState } from 'react';
// @ts-ignore
import CInfoLabel from '@local/components/core/CInfoLabel';
import CTable from '@local/components/core/CTable';
import { selectSearchFiltered } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';

/**
 * <Listings> component hosting <LTable>
 * Filters the list based on <Search> and <Mode>
 */
function Listings({
    fields = ['', 'Title', 'Description', 'Action', ''],
    classItems = ['w-[5%]', 'w-[20%]', 'w-[60%]', 'w-[10%]', 'w-[5%]'],
}) {
    const filtered: Array<any> = useAppSelector(selectSearchFiltered);
    const [reduced, setReduced] = useState([]);
    useEffect(() => {
        setReduced(filtered.filter((i) => i.$match.length));
    }, [filtered]);
    return reduced.length ? (
        <CTable list={reduced} fields={fields} classItems={classItems} />
    ) : (
        <div className="h-[85vh]">
            <CInfoLabel children={`No matches found`} />
        </div>
    );
}
export default Listings;
