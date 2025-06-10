/**
 * Suspense wrapper for `router.ts`
 * @see src/composition/router.ts
 */
import * as React from 'react';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';

function CSuspense({ children }: { children: React.ReactNode }) {
    const data = useLoaderData();
    return <Suspense fallback={<div>Loading component...</div>}>{children}</Suspense>;
}

export default CSuspense;
