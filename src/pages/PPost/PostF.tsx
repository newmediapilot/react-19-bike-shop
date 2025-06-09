import * as React from 'react';
import { useState } from 'react';
import PostFialog from '@local/pages/PPost/PostFialog';
import {CurrencyDollarIcon} from '@heroicons/react/16/solid';
import PostDialog from '@local/pages/PPost/PostDialog';
import CInfoLabel from '@local/components/core/CInfoLabel';
import {Segment} from '@skeletonlabs/skeleton-react';
/**
 * Step in post process
 * @constructor
 */
function PostF() {
    const [align, setAlign] = useState('a');
    return (
        <PostDialog>
            <h6 className="h6">
                How will it be delivered?
            </h6>
            <Segment
                classes="w-full"
                value={align}
                name="align"
                onValueChange={(e) => setAlign(e.value!)}
            >
                <Segment.Item classes="w-[0%] hidden" value="a"></Segment.Item>
                <Segment.Item classes="w-[33%] " value="b">
                    Pick-up
                </Segment.Item>
                <Segment.Item classes="w-[33%]" value="c">
                    Delivery
                </Segment.Item>
                <Segment.Item classes="w-[33%]" value="d">
                    Meet
                </Segment.Item>
            </Segment>
        </PostDialog>
    );
}

export default PostF;
