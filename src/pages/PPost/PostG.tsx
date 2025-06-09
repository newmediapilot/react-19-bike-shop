import * as React from 'react';
import { useState } from 'react';
import PostDialog from '@local/pages/PPost/PostDialog';
/**
 * Step in post process
 * @constructor
 */
function PostG() {
    const [align, setAlign] = useState('a');
    return (
        <PostDialog>
            <h6 className="h6">
                Congratulations your post is ready.
            </h6>
            <div className="flex justify-center">
                <button type="button" className="btn preset-filled">View Post</button>
            </div>
        </PostDialog>
    );
}

export default PostG;
