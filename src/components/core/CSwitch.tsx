import { Switch } from '@skeletonlabs/skeleton-react';
import * as React from 'react';

/**
 * Switch wrapper with label
 * @constructor
 * @param content
 */
const CSwitch = function ({ label = 'Switch' }) {
    return <Switch label={label} />;
};

export default CSwitch;
