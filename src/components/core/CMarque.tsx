/**
 * Adds a marquee animation around a piece of text
 * Used to highlight text within a search result
 */
import * as React from 'react';

function CMarquee({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-1 border-gray-100 border-dotted px-[7px] pt-[2px] pb-[3px] mr-[2px] mb-0 mt-0">
      {children}
    </span>
  );
}

export default CMarquee;
