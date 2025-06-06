import { setFilter, useAppDispatch } from '@local/composition/store';
import * as React from 'react';
import { useState } from 'react';

export type ModeSelectType = 'filter' | 'highlight' | 'decoration';

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function FilterRadioGroup() {
  const dispatch = useAppDispatch();
  const filters: ModeSelectType[] = ['filter', 'highlight', 'decoration'];
  const [selected, setSelected] = useState();
  const onClickRadio = (m) => {
    setSelected(m);
    dispatch(setFilter(m));
  };
  return (
    <div className="flex gap-2">
      {filters.map((m) => (
        <label key={m} className="py-2">
          <input
            type="radio"
            name="m-select"
            value={m}
            onChange={() => {}}
            checked={selected === m}
            onClick={() => onClickRadio(m)}
          />
          <span className="pl-2">{m.charAt(0).toUpperCase() + m.slice(1)}</span>
        </label>
      ))}
    </div>
  );
}

export default FilterRadioGroup;
