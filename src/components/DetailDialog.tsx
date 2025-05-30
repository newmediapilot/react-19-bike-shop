import * as React from 'react';
import {createPortal} from 'react-dom';
import {NavLink} from 'react-router';

type DialogProps = {
    id: number,
    title: string,
    description: string,
}

/**
 * <dialog> that is appended to the end of the <body> element
 * Renders when params are not "falsey"
 * @constructor
 * @param detail
 */
function DetailDialog({detail}: { detail: DialogProps }) {
    const {id, title, description} = detail;
    return (
        createPortal(
            <NavLink to="./">
                <dialog
                    popover="auto"
                    className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    aria-labelledby="detail-h2" open={!!detail}>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <h2 id="detail-h2" className="mb-2 text-2xl font-bold tracking-tight text-gray-90">List Item Detail</h2>
                        <p className="mb-3 font-normal text-gray-700 "><b>ID:</b> {id}</p>
                        <p className="mb-3 font-normal text-gray-700 "><b>Title:</b> {title}</p>
                        <p className="mb-3 font-normal text-gray-700 "><b>Description:</b> {description}</p>
                        <b>Click to close</b>
                    </div>
                </dialog>
            </NavLink>, document.body
        )
    );
}

export default DetailDialog;