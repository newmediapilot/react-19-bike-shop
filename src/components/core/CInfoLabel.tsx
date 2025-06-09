import * as React from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const CInfoLabel = function ({ children }) {
  return <span className="h-[100%] p-2 bg-gray-800 text-white text-xs rounded">{children}</span>;
};

export default CInfoLabel;
