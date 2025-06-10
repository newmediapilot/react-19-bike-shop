import * as React from 'react';
import {Switch} from '@skeletonlabs/skeleton-react';

/**
 * Switch wrapper with label
 * @constructor
 * @param content
 */
const CSwitch = function ({ label = "Switch" }) {
    return (
        <Switch label={label} />
    );
};

export default CSwitch;
