import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import { Segment } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
import { useRef, useState } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostD() {
    const [align, setAlign] = useState('a');
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onValueChange = (e) => {
        const postEl: HTMLDivElement = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        (postEl.nextSibling as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(setFormShow(indexOf));
        setAlign(e.value!);
    };
    return (
        <PostDialog>
            <div ref={ref}>
                <h6 className="h6">Choose more photos?</h6>
            </div>
            <Segment classes="w-full" value={align} name="align" onValueChange={onValueChange}>
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
