import * as React from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const CInfoLabel = function ({ children }) {
  return (
    <div className="h-[100%]">
      <div className="inline-block p-2 bg-gray-800 text-white text-xs rounded">{children}</div>
    </div>
  );
};

export default CInfoLabel;
