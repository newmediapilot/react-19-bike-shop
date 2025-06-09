import * as React from 'react';
import PostDialog from '@local/pages/PPost/PostDialog';
import CInfoLabel from '@local/components/core/CInfoLabel';
/**
 * Step in post process
 * @constructor
 */
function PostC() {
  return (
      <PostDialog>
          <div>
              <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"/>
          </div>
          <dd className="border-b-3">
              <dt className="h6">Guessed Attributes</dt>
              <dd className="mb-3">Verify the specs below, click <CInfoLabel>Custom</CInfoLabel> if it has been modded.</dd>
          </dd>
          <dd className="grid grid-rows-auto grid-cols-3 border-b-1 border-dotted pb-3">
              <dt className="font-bold">Component</dt>
              <dd>Value</dd>
              <dd>Customized</dd>
          </dd>
          <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
              <b>Brakes</b>
              <dd>Disc</dd>
              <dd>
                  <label className="flex items-center space-x-2">
                      <input className="checkbox" type="checkbox" />
                      <p>Custom</p>
                  </label>
              </dd>
          </div>

          <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
              <b>Tires</b>
              <dd className="line-through">700x32c</dd>
              <dd>
                  <label className="flex items-center space-x-2">
                      <input className="checkbox" type="checkbox" checked/>
                      <p>Custom</p>
                  </label>
              </dd>
          </div>

          <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
              <b>Frame</b>
              <dd>Aluminum</dd>
              <dd>
                  <label className="flex items-center space-x-2">
                      <input className="checkbox" type="checkbox" />
                      <p>Custom</p>
                  </label>
              </dd>
          </div>

          <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
              <b>Saddle</b>
              <dd className="line-through">Comfort</dd>
              <dd>
                  <label className="flex items-center space-x-2">
                      <input className="checkbox" type="checkbox" checked/>
                      <p>Custom</p>
                  </label>
              </dd>
          </div>
          <div className="grid grid-rows-auto grid-cols-3 border-b border-dotted pb-3">
              <b>Pedals</b>
              <dd>Flat</dd>
              <dd>
                  <label className="flex items-center space-x-2">
                      <input className="checkbox" type="checkbox" />
                      <p>Custom</p>
                  </label>
              </dd>
          </div>
          <div className="flex justify-center">
              <button type="button" className="btn preset-filled">Done Verifying</button>
          </div>
      </PostDialog>
  );
}

export default PostC;
