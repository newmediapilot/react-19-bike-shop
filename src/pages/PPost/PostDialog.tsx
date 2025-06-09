import * as React from 'react';
/**
 * Dialog box for Post[A-Z]
 * @constructor
 */
function PostDialog({ children }) {
  return (
    <article className="flex justify-center mt-6 min-w-[320px]">
      <section className="max-w-sm w-full p-6 border space-y-4">{children}</section>
    </article>
  );
}

export default PostDialog;
