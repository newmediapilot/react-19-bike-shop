import CInfoLabel from '@local/components/core/CInfoLabel';
import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostB() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        const postEl = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        dispatch(setFormShow(indexOf));
    };
    return (
        <PostDialog>
            <div ref={ref}>
                Upload a clear <CInfoLabel>side photo</CInfoLabel> or
                <CInfoLabel>screenshot</CInfoLabel> of your bicycle.
            </div>
            <label className="label flex justify-center">
                <button onClick={onClick} type="button" className="btn preset-filled">
                    Click to Upload
                </button>
                <input className="hidden" type="file" />
            </label>
        </PostDialog>
    );
}

export default PostB;
