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
                <h5 className="h5 mb-3" >Customizations</h5>
                <span className="chip border-[1px] border-dotted mr-2">pedals</span>
                <span className="chip border-[1px] border-dotted mr-2">saddle</span>
                <span className="chip border-[1px] border-dotted mr-2">tires</span>
            </div>
            <textarea
                className="textarea min-h-[200px]"
                placeholder="Describe your customizations..."
            ></textarea>
            <div className="flex justify-center">
                <button type="button" className="btn preset-filled">
                    Done Customizing
                </button>
            </div>
        </PostDialog>
    );
}

export default PostC1;
