// @ts-ignore
import { default as React, useState } from 'react';
// @ts-ignore
import CInfoLabel from '@local/components/core/CInfoLabel';
import CTable from '@local/components/core/CTable';
import { selectSearchFiltered } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';
import { useEffectDebounced } from '@local/effects/useEffectDebounced';

/**
 * <Listings> component hosting <LTable>
 * Filters the list based on <Search> and <Mode>
 */
function Listings({
  fields = ['', 'Title', 'Description', 'Action'],
  classItems = ['w-[0%]', 'w-[25%]', 'w-[65%]', 'w-[10%]'],
}) {
  const filtered: Array<any> = useAppSelector(selectSearchFiltered);
  const [reduced, setReduced] = useState([]);
  useEffectDebounced(
    () => {
      setReduced(filtered.filter((i) => i.$match.length));
    },
    [filtered],
    100
  );
  return reduced.length ? (
    <CTable list={reduced} fields={fields} classItems={classItems} />
  ) : (
    <div class="ml-3">
      <CInfoLabel>No matches found</CInfoLabel>
    </div>
  );
}
export default Listings;
