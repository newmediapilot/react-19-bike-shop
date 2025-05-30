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
            <dialog aria-labelledby="detail-h2" open>
                <h1>List Item Detail</h1>
                <span className="block">ID: {id}</span>
                <span className="block">Title: {title}</span>
                <span className="block">Description: {description}</span>
                <NavLink to={`./`}>Close Detail</NavLink>
            </dialog>
            , document.body
        )
    );
}

export default DetailDialog;