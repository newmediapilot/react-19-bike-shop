import { ProgressRing } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
/**
 * Generic ring loader
 * @constructor
 * @param content
 */
function CProgressRing() {
    return (
        <ProgressRing
            value={null}
            size="size-14"
            meterStroke="stroke-white"
            trackStroke="stroke-none"
        />
    );
}

export default CProgressRing;
