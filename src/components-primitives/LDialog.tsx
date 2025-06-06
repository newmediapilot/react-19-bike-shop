import * as React from 'react';
import { memo, ReactNode, useEffect } from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const LDialog = function ({ children }) {
  useEffect(() => {
    console.log('changed');
  }, [children]);
  return (
    <dialog className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" popover="auto" open>
      {children}
    </dialog>
  );
};

export default LDialog;
