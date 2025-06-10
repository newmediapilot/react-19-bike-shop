import { BeakerIcon } from '@heroicons/react/16/solid';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import * as React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
/**
 * Step in post process
 * @constructor
 */
function PostG() {
    const navigate = useNavigate();
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        navigate('/preview');
    };
    return (
        <PostDialog>
            <div ref={ref} className="flex flex-col items-center">
                <BeakerIcon width={100} />
                <h6 className="h6 align-center pt-2 pb-5">Your post is almost ready.</h6>
                <div className="flex justify-center">
                    <button onClick={onClick} type="button" className="btn preset-filled">
                        Preview Post
                    </button>
                </div>
            </div>
        </PostDialog>
    );
}

export default PostG;
