import CInfoLabel from '@local/components/core/CInfoLabel';
import PostDialog from '@local/pages/PPost/PostDialog';
import * as React from 'react';
import CSwitch from '@local/components/core/CSwitch';
/**
 * Step in post process
 * @constructor
 */
function PostC() {
    return (
        <PostDialog>
            <div>
                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg" />
            </div>
            <div className="border-b-3">
                <dt className="h6">Guessed Attributes</dt>
                <dd className="mb-3">
                    Verify the specs below, click <CInfoLabel>Custom</CInfoLabel> if it has been
                    modded.
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
               <CSwitch/>
            </div>
            <div className="flex justify-center">
                <button type="button" className="btn preset-filled">
                    Done Verifying
                </button>
            </div>
        </PostDialog>
    );
}

export default PostC;
