import CInfoLabel from '@local/components/core/CInfoLabel';
import PostDialog from '@local/pages/PPost/PostDialog';
import * as React from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostB() {
  return (
    <PostDialog>
      <div>
        Upload a clear <CInfoLabel>side photo</CInfoLabel> or
        <CInfoLabel>screenshot</CInfoLabel> of your bicycle.
      </div>
      <label className="label flex justify-center">
        <button type="button" className="btn preset-filled">
          Click to Upload
        </button>
        <input className="hidden" type="file" />
      </label>
    </PostDialog>
  );
}

export default PostB;
