import { useState } from 'react';
import PostDialog from '@local/pages/PPost/PostDialog';
import CInfoLabel from '@local/components/core/CInfoLabel';
import {Segment} from '@skeletonlabs/skeleton-react';
import * as React from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostA() {
  const [align, setAlign] = useState('a');
  return (
      <PostDialog>
          <div>
              Choose to <CInfoLabel>upload a photo</CInfoLabel>, or
              <CInfoLabel>write something</CInfoLabel> about your bicycle.
          </div>
          <Segment
              classes="w-full"
              value={align}
              name="align"
              onValueChange={(e) => setAlign(e.value!)}
          >
              <Segment.Item classes="w-[0%] hidden" value="a"></Segment.Item>
              <Segment.Item classes="w-[50%] " value="b">
                  Upload Photo
              </Segment.Item>
              <Segment.Item classes="w-[50%]" value="c">
                  Write Something
              </Segment.Item>
          </Segment>
      </PostDialog>
  );
}

export default PostA;
