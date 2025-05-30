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
function DetailDialog({detail = {id: 1, title: "title", description: "description"}}: { detail: DialogProps }) {
    const {id, title, description} = detail;
    return (
        createPortal(
            <dialog
                aria-labelledby="detail-h2"
                open>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 id="detail-h2" className="mb-2 text-2xl font-bold tracking-tight text-gray-90">List Item Detail</h2>
                    <p className="mb-3 font-normal text-gray-700 "><b>ID:</b> {id}</p>
                    <p className="mb-3 font-normal text-gray-700 "><b>Title:</b> {title}</p>
                    <p className="mb-3 font-normal text-gray-700 "><b>Description:</b> {description}</p>
                    <NavLink to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Close Detail
                    </NavLink>
                </div>
            </dialog>
            , document.body
        )
    );
}

export default DetailDialog;