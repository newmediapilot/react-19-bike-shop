import CDialog from '@local/components/core/CDialog';
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
            <Listings />
            <CDialog>
                <ListingsDialog />
            </CDialog>
        </section>
    );
}

export default PListings;
