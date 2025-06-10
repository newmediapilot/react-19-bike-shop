/**
 * Suspense wrapper which fits its container and renders a ring loader
 * @see src/components/core/CProgressCircle.tsx
 */
import CProgressCircle from '@local/components/core/CProgressCircle';
import * as React from 'react';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';

function CSuspense({ children }: { children: React.ReactNode }) {
    const data = useLoaderData();
    return (
        <Suspense
            fallback={
                <div className="w-[100%] h-[100%] flex justify-center items-center">
                    <CProgressCircle />
                </div>
            }
        >
            {children}
        </Suspense>
    );
}

export default CSuspense;
