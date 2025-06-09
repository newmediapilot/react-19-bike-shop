/**
 * Suspense wrapper for `router.ts`
 * @see src/composition/router.ts
 */
import * as React from 'react';

function CSuspense({ children }: { children: React.ReactNode }) {
  return <div>Loading...</div>;
}

export default CSuspense;
