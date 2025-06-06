import LDialog from '@local/components-primitives/LDialog';
import FilterLabel from '@local/components/FilterLabel';
import FilterRadioGroup from '@local/components/FilterRadioGroup';
import InputSearch from '@local/components/InputSearch';
import Listings from '@local/components/Listings';
import ListingsDialog from '@local/components/ListingsDialog';
import ListingsOverlay from '@local/components/ListingsOverlay';
import * as React from 'react';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {
  return (
    <>
      <InputSearch />
      <FilterRadioGroup />
      <FilterLabel />
      <>
        <Listings />
        <ListingsOverlay />
      </>
      <LDialog>
        <ListingsDialog />
      </LDialog>
    </>
  );
}

export default Index;
