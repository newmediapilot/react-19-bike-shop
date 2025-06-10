import { Progress } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
/**
 * Generic <dialog> Wraps any component with a dialog
 * @constructor
 * @param content
 */
function CProgressBar() {
    return <Progress value={null} meterAnimate="progress-infinite" />;
}

export default CProgressBar;
