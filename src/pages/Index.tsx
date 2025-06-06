import * as React from 'react';
import ListingsDetail from '@local/components/ListingsDetail';
import Search from '@local/components/Search';
import FilterRadioGroup from '@local/components/FilterRadioGroup';
import LDialog from '@local/components-primitives/LDialog';
import Listings from '@local/components/Listings';
import FilterLabel from '@local/components/FilterLabel';
import ListingsOverlay from '@local/components/ListingsOverlay';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {
  return (
    <>
      <ListingsOverlay />
      <Search />
      <FilterRadioGroup />
      <FilterLabel />
      <Listings />
      <LDialog>
        <ListingsDetail />
      </LDialog>
    </>
  );
}

export default Index;
