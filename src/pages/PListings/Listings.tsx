// @ts-ignore
import {default as React, useEffect} from 'react';
// @ts-ignore
import CTable from '@local/components/core/CTable';
import { selectList } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';

/**
 * <Listings> component hosting <LTable>
 * Filters the list based on <Search> and <Mode>
 */
function Listings({ fields = ['ID', 'Title', 'Description'] }) {
  const list: string = useAppSelector(selectList);

  useEffect(()=> {
    console.log('Listings.useEffect');
  });

  return <CTable list={list} fields={fields} />;
}
export default Listings;
