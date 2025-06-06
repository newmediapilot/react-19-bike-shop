import LRadioItem from '@local/components-primitives/LRadioItem';
import { setFilter, useAppDispatch } from '@local/composition/store';
import * as React from 'react';

export type ModeSelectType = 'filter' | 'highlight' | 'decoration';

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function FilterRadioGroup() {
  const dispatch = useAppDispatch();
  const filters: ModeSelectType[] = ['filter', 'highlight', 'decoration'];
  return (
    <>
      {filters.map((m) => (
        <LRadioItem
          label={m}
          key={m}
          value={m}
          name={'m-select'}
          onClick={() => dispatch(setFilter(m))}
        />
      ))}
    </>
  );
}

export default FilterRadioGroup;
