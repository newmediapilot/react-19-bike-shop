import FilterRadioGroup from '@local/pages/PListings/FilterRadioGroup';
import FilterRadioLabel from '@local/pages/PListings/FilterRadioLabel';
import InputSearch from '@local/pages/PListings/InputSearch';
import Listings from '@local/pages/PListings/Listings';
import ListingsDialog from '@local/pages/PListings/ListingsDialog';
import ListingsOverlay from '@local/pages/PListings/ListingsOverlay';
import CDialog from '@local/components/core/CDialog';
import * as React from 'react';

/**
 * Listings page
 * @constructor
 * @see src/pages/PListings/FilterRadioGroup.tsx
 * @see src/pages/PListings/FilterRadioLabel.tsx
 * @see src/pages/PListings/InputSearch.tsx
 * @see src/pages/PListings/Listings.tsx
 * @see src/pages/PListings/ListingsDialog.tsx
 * @see src/pages/PListings/ListingsOverlay.tsx
 * @see src/pages/PListings/FilterRadioGroup.tsx
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
