// @ts-ignore
import { default as React } from 'react';
// @ts-ignore
import LTable from '@local/components/core/LTable';
import { selectList } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';

/**
 * <Listings> component hosting <LTable>
 * Filters the list based on <Search> and <Mode>
 */
function Listings() {
  const list: string = useAppSelector(selectList);
  return <LTable list={list} fields={['ID', 'Title', 'Description']} />;
}
export default Listings;
