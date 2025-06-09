import PostDialog from '@local/pages/PPost/PostDialog';
import * as React from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostC1() {
  return (
    <PostDialog>
      <div>
        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg" />
      </div>
      <div>
        <textarea
          className="textarea"
          placeholder="Any custom information worth mentioning..."
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="button" className="btn preset-filled">
          Done Customizing
        </button>
      </div>
    </PostDialog>
  );
}

export default PostC1;
