import CInfoLabel from '@local/components/core/CInfoLabel';
import CSwitch from '@local/components/core/CSwitch';
import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import { imgFadeIn } from '@local/util/imgFadeIn';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostC() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        const postEl: HTMLDivElement = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        postEl.nextSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(setFormShow(indexOf));
    };
    return (
        <PostDialog>
            <div ref={ref}>
                <img
                    {...imgFadeIn}
                    src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
                />
            </div>
            <div className="border-b-3">
                <dt className="h6">Guessed Attributes</dt>
                <dd className="mb-3 leading-loose">
                    Verify the specs below, check <CInfoLabel>Customized</CInfoLabel> if it has been
                    customized from its original build.
                </dd>
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b-1 border-dotted pb-3">
                <dt className="font-bold">Component</dt>
                <dd>Value</dd>
                <dd>Customized</dd>
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
                <b>Brakes</b>
                <dt>Disc</dt>
                <CSwitch />
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
                <b>Tires</b>
                <dt>700x32c</dt>
                <CSwitch />
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
                <b>Frame</b>
                <dt>Aluminum</dt>
                <CSwitch />
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
                <b>Saddle</b>
                <dt>Comfort</dt>
                <CSwitch />
            </div>
            <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
                <b>Pedals</b>
                <dt>Flat</dt>
                <CSwitch />
            </div>
            <div className="flex justify-center">
                <button onClick={onClick} type="button" className="btn preset-filled">
                    Done Verifying
                </button>
            </div>
        </PostDialog>
    );
}

export default PostC;
