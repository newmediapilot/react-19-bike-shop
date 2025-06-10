import { TrophyIcon } from '@heroicons/react/16/solid';
import PostDialog from '@local/pages/PPost/PostDialog';
import * as React from 'react';
import { useState } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostG() {
    const [align, setAlign] = useState('a');
    return (
        <PostDialog>
            <div className="flex flex-col items-center">
                <TrophyIcon width={100} />
                <h6 className="h6 align-center pt-2 pb-5">Congratulations your post is ready.</h6>
                <div className="flex justify-center">
                    <button type="button" className="btn preset-filled">
                        View Post
                    </button>
                </div>
            </div>
        </PostDialog>
    );
}

export default PostG;
