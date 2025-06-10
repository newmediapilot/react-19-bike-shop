import { CurrencyDollarIcon } from '@heroicons/react/16/solid';
import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostD() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        const postEl:HTMLDivElement = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        postEl.nextSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(setFormShow(indexOf));
        console.log('click');
    };
    return (
        <PostDialog>
            <h6 ref={ref} className="h6">
                What is your asking price?
            </h6>
            <div className="input-group grid-cols-[auto_1fr_auto]">
                <div className="ig-cell preset-tonal">
                    <CurrencyDollarIcon />
                </div>
                <input className="ig-input" type="text" placeholder="Amount" />
                <select className="ig-select">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button onClick={onClick} type="button" className="btn preset-filled">
                    Continue
                </button>
            </div>
        </PostDialog>
    );
}

export default PostD;
