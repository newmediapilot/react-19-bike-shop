import FilterRadioGroup from '@local/components/FilterRadioGroup';
import FilterRadioLabel from '@local/components/FilterRadioLabel';
import InputSearch from '@local/components/InputSearch';
import Listings from '@local/components/Listings';
import ListingsDialog from '@local/components/ListingsDialog';
import ListingsOverlay from '@local/components/ListingsOverlay';
import CDialog from '@local/components/core/CDialog';
import * as React from 'react';

/**
 * Initial "homepage" for now
 * @constructor
 */
function PListings() {
  return (
    <section>
      <div className="w-full sm:w-1/2">
        <InputSearch />
        <FilterRadioGroup />
        <FilterRadioLabel />
      </div>
      <Listings />
      <ListingsOverlay />
      <CDialog>
        <ListingsDialog />
      </CDialog>
    </section>
  );
}

export default PListings;
