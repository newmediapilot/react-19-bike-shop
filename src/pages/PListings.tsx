import CDialog from '@local/components/core/CDialog';
import Listings from '@local/pages/PListings/Listings';
import ListingsDialog from '@local/pages/PListings/ListingsDialog';
import * as React from 'react';

/**
 * Listings page
 * @constructor
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
