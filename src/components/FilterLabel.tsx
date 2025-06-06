import { selectFilter } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';
import * as React from 'react';

/**
 * Displays mode selected by <ModeSelect>
 */
function FilterLabel() {
  const filter: string = useAppSelector(selectFilter);
  return filter ? (
    <span className="label">{filter}</span>
  ) : (
    <span className="label">No filter selected</span>
  );
}

export default FilterLabel;
