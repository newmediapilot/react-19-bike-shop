import * as React from 'react';
import ListingsDetail from '@local/components/ListingsDetail';
import Search from '@local/components/Search';
import ModeSelect from '@local/components/ModeSelect';
import LDialog from '@local/primitives/LDialog';
import Listings from '@local/components/Listings';
import ModeLabel from '@local/components/ModeLabel';
import Highlighter from '@local/components/Highlighter';

/**
 * Initial "homepage" for now
 * @constructor
 */
function Index() {
  return (
    <>
      <Highlighter />
      <Search />
      <ModeSelect />
      <ModeLabel />
      <Listings />
      <LDialog>
        <ListingsDetail />
      </LDialog>
    </>
  );
}

export default Index;
