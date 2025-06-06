import * as React from 'react';

/**
 * Generic <input type="radio">
 * @constructor
 * @param content
 */
const LRadioItem = function ({
  name,
  value,
  onClick,
}: {
  name: string;
  value: string;
  onClick: () => void;
}) {
  return <input type="radio" name={name} value={value} onClick={onClick} />;
};

export default LRadioItem;
