import { BeakerIcon } from '@heroicons/react/16/solid';
import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostG() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        const postEl = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        dispatch(setFormShow(indexOf));
    };
    return (
        <PostDialog>
            <div ref={ref} className="flex flex-col items-center">
                <BeakerIcon width={100} />
                <h6 className="h6 align-center pt-2 pb-5">Congratulations your post is ready.</h6>
                <div className="flex justify-center">
                    <button onClick={onClick} type="button" className="btn preset-filled">
                        View Post
                    </button>
                </div>
            </div>
        </PostDialog>
    );
}

export default PostG;
