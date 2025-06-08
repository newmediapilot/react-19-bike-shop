import CDialog from '@local/components/core/CDialog';
import InputSearch from '@local/pages/PListings/InputSearch';
import Listings from '@local/pages/PListings/Listings';
import ListingsDialog from '@local/pages/PListings/ListingsDialog';
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
      <div className="px-3 pb-1 pt-1 w-full">
        <div className="lg:max-w-[50vw]">
          <InputSearch />
        </div>
      </div>
      <Listings />
      <CDialog>
        <ListingsDialog />
      </CDialog>
    </section>
  );
}

export default PListings;
