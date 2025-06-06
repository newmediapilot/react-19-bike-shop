import * as React from 'react';

/**
 * Generic <input type="radio">
 * @constructor
 * @param name
 * @param value
 * @param onClick
 */
const LRadioItem = function ({
  name,
  label = '',
  value,
  onClick,
}: {
  label: string;
  name: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <label>
      <span className="label-text">{label}</span>
      <input type="radio" className="radio" name={name} value={value} onClick={onClick} />
    </label>
  );
};

export default LRadioItem;
