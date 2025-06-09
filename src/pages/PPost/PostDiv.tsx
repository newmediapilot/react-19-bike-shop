import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/16/solid';
import * as React from 'react';
/**
 * Dialog box divider
 * @constructor
 */
function PostDiv({ state }) {
  // {
  //     ("loading" == state) ? () : {
  //
  //     }
  // }
  return (
    <div className="flex justify-center mt-6 min-w-[320px]">
      <ChevronDoubleUpIcon width="40px" />
      <ChevronDoubleDownIcon width="40px" />
    </div>
  );
}

export default PostDiv;
