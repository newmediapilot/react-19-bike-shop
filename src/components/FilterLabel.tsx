import * as React from 'react';
import { useAppSelector } from '@local/composition/store';
import { selectFilter } from '@local/composition/selectors';

/**
 * Displays mode selected by <ModeSelect>
 */
function FilterLabel() {
  const filter: string = useAppSelector(selectFilter);
  console.log('mode', filter);
  return filter ? <span>{filter}</span> : 'No filter selected';
}

export default FilterLabel;
