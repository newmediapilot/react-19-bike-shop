import * as React from 'react';
import {createPortal} from 'react-dom';
const appVersionMeta = <meta name="APP_VERSION" description={__APP_VERSION__}/>;

/**
 * Just the app version @search __APP_VERSION__
 * Defined by `vite.config.ts`
 * @constructor
 */
function AppVersion() {
    return (
        createPortal(
            appVersionMeta,
            document.head,
        )
    );
}

export default AppVersion;