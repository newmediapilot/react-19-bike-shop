import CInfoLabel from '@local/components/core/CInfoLabel';
import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import { Segment } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
import { useRef, useState } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostA() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const [align, setAlign] = useState('a');
    const selectTab = (e) => {
        setAlign(e.value!);
        const postEl:HTMLDivElement = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        postEl.nextSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(setFormShow(indexOf));
    };
    return (
        <PostDialog>
            <div ref={ref}>
                Choose to <CInfoLabel>upload a photo</CInfoLabel>, or
                <CInfoLabel>write something</CInfoLabel> about your bicycle.
            </div>
            <Segment
                classes="w-full"
                value={align}
                name="align"
                onValueChange={(e) => selectTab(e.value!)}
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
