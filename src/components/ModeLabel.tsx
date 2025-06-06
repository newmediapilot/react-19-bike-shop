import * as React from 'react';
import { useAppSelector } from '@local/composition/store';
import { selectFilter } from '@local/composition/selectors';

/**
 * Displays mode selected by <ModeSelect>
 */
function ModeLabel() {
  const mode: string = useAppSelector(selectFilter);
  return mode && <span>{mode}</span>;
}

export default ModeLabel;
