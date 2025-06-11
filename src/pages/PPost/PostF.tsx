import { setFormShow, useAppDispatch } from '@local/composition/store';
import PostDialog from '@local/pages/PPost/core/PostDialog';
import { Segment } from '@skeletonlabs/skeleton-react';
import * as React from 'react';
import { useRef, useState } from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostF() {
    const [align, setAlign] = useState('a');
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const onValueChange = (e) => {
        setAlign(e.value!);
        const postEl: HTMLDivElement = ref.current.closest('[data-post]');
        const indexOf = Array.from(postEl.parentElement.children).indexOf(postEl);
        (postEl.nextSibling as Element)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dispatch(setFormShow(indexOf));
    };
    return (
        <PostDialog>
            <h6 ref={ref} className="h6">
                How will it be delivered?
            </h6>
            <Segment classes="w-full" value={align} name="align" onValueChange={onValueChange}>
                <Segment.Item classes="w-[0%] hidden" value="a"></Segment.Item>
                <Segment.Item classes="w-[33%] " value="b">
                    Pick-up
                </Segment.Item>
                <Segment.Item classes="w-[33%]" value="c">
                    Parcel
                </Segment.Item>
                <Segment.Item classes="w-[33%]" value="d">
                    Meet
                </Segment.Item>
            </Segment>
        </PostDialog>
    );
}

export default PostF;
