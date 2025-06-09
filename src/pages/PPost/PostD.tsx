import PostDialog from '@local/pages/PPost/PostDialog';
import { Segment } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
import { useState } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostD() {
  const [align, setAlign] = useState('a');
  return (
    <PostDialog>
      <div>
        <h6 className="h6">Choose more photos?</h6>
      </div>
      <Segment
        classes="w-full"
        value={align}
        name="align"
        onValueChange={(e) => setAlign(e.value!)}
      >
        <Segment.Item classes="w-[0%] hidden" value="a"></Segment.Item>
        <Segment.Item classes="w-[50%] " value="b">
          Upload More
        </Segment.Item>
        <Segment.Item classes="w-[50%]" value="c">
          Skip...
        </Segment.Item>
      </Segment>
    </PostDialog>
  );
}

export default PostD;
