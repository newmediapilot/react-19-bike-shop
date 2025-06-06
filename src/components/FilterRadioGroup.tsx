import * as React from 'react';
import { setFilter, useAppDispatch } from '@local/composition/store';
import LRadioItem from '@local/components-primitives/LRadioItem';

export type ModeSelectType = 'filter' | 'highlight' | 'decoration';

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function FilterRadioGroup() {
  const dispatch = useAppDispatch();
  const modes: ModeSelectType[] = ['filter', 'highlight', 'decoration'];
  return (
    <>
      {modes.map((m) => (
        <LRadioItem key={m} name={'m-select'} value={m} onClick={() => dispatch(setFilter(m))} />
      ))}
    </>
  );
}

export default FilterRadioGroup;
