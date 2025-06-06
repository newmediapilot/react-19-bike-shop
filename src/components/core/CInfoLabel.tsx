import * as React from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const CInfoLabel = function ({ children }) {
  return (
    <div className="my-2">
      <span className="bg-gray-800 text-white text-xs p-2 mt-2 rounded">{children}</span>
    </div>
  );
};

export default CInfoLabel;
