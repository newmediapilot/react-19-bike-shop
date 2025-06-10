import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/16/solid';
import * as React from 'react';
import { useRef } from 'react';
/**
 * Dialog box divider
 * @constructor
 */
function PostDiv({ direction = true }) {
    const ref = useRef<HTMLDivElement>(null);
    const onClick = () => {
        const { current: el } = ref;
        const dialog = el.closest('[data-post]');
        const previous = dialog?.previousElementSibling?.previousElementSibling;
        previous
            ? previous.scrollIntoView({ behavior: 'smooth', block: 'start' })
            : document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div
            ref={ref}
            aria-label="Scrolls to previous form"
            className="flex justify-center mt-6 min-w-[320px]"
        >
            {!direction ? (
                <ChevronDoubleDownIcon onClick={onClick} width="40px" />
            ) : (
                <ChevronDoubleUpIcon onClick={onClick} width="40px" />
            )}
        </div>
    );
}

export default PostDiv;
