import * as React from 'react';
import { setFilter, useAppDispatch } from '@local/composition/store';
import LRadioItem from '@local/primitives/LRadioItem';

export type ModeSelectType = 'filter' | 'highlight' | 'decoration';

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function ModeSelect() {
  const dispatch = useAppDispatch();
  const modes: ModeSelectType[] = ['filter', 'highlight', 'decoration'];
  return (
    <form>
      {modes.map((m) => (
        <LRadioItem key={m} name={'m-select'} value={m} onClick={() => dispatch(setFilter(m))} />
      ))}
    </form>
  );
}

export default ModeSelect;
