import CInfoLabel from '@local/components/core/CInfoLabel';
import CMarquee from '@local/components/core/CMarque';
import { selectFilter } from '@local/composition/selectors';
import { useAppSelector } from '@local/composition/store';
import * as React from 'react';

/**
 * Displays mode selected by <ModeSelect>
 */
function FilterRadioLabel() {
  const filter: string = useAppSelector(selectFilter);
  const text = {
    filter: 'Only displays rows that match the search.',
    highlight: (
      <>
        <CMarquee>Highlights</CMarquee> words which match the search.
      </>
    ),
    decoration: 'Generates links on words that match the search.',
  };
  return <CInfoLabel>{text[filter] || 'No filter selected.'}</CInfoLabel>;
}

export default FilterRadioLabel;
