import * as React from 'react';
import { memo, ReactNode } from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const LDialog = memo(({ children }: { children: ReactNode }) => {
  return (
    <dialog popover="auto" open>
      {children}
    </dialog>
  );
});

export default LDialog;
