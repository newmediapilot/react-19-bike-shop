import CProgressCircle from '@local/components/core/CProgressCircle';
import * as React from 'react';
/**
 * Generic preloader
 * @constructor
 */
function PostPreloader() {
    return (
        <div className="flex justify-center mt-6 min-w-[320px]">
            <CProgressCircle />
        </div>
    );
}

export default PostPreloader;
