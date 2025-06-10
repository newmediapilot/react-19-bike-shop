import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostC1() {
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
                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg" />
            </div>
            <div>
                <h5 className="h5 mb-3">Customizations</h5>
                <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                    pedals
                </span>
                <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                    saddle
                </span>
                <span className="chip border-[1px] border-dotted mr-2 pointer-events-none">
                    tires
                </span>
            </div>
            <textarea
                className="textarea min-h-[200px]"
                placeholder="Describe your customizations..."
            ></textarea>
            <div className="flex justify-center">
                <button onClick={onClick} type="button" className="btn preset-filled">
                    Done Customizing
                </button>
            </div>
        </PostDialog>
    );
}

export default PostC1;
