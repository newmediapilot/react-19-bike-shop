import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
const LDialog = function ({ children }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(undefined);
  useEffect(() => {
    setOpen(!!children);
  }, [children]);
  return (
    <dialog
      popover="auto"
      open={open}
      ref={dialog}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </dialog>
  );
};

export default LDialog;
