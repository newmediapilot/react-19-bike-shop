import * as React from 'react';
/**
 * Dialog box for Post[A-Z]
 * @constructor
 */
function PostDialog({children}) {
  return (
      <section className="flex justify-center mt-6 min-w-[320px]">
          <article className="max-w-sm w-full p-6 border space-y-4">
              {children}
          </article>
      </section>
  );
}

export default PostDialog;
