import * as React from 'react';
import {createPortal} from 'react-dom';
import {NavLink} from 'react-router';

export type DialogProps = {
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
function DetailDialog({detail}: { detail?: DialogProps }) {
    return (
        detail && createPortal(
            <NavLink to="./">
                <dialog
                    popover="auto"
                    aria-labelledby="dialog-detail" open={!!detail}>
                    <div>
                        <h2 id="dialog-detail">List Item Detail</h2>
                        <p><b>ID:</b> {detail.id}</p>
                        <p><b>Title:</b> {detail.title}</p>
                        <p><b>Description:</b> {detail.description}</p>
                        <b>Click to close</b>
                    </div>
                </dialog>
            </NavLink>,
            document.body
        )
    );
}

export default DetailDialog;