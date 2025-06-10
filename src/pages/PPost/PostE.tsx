import { CurrencyDollarIcon } from '@heroicons/react/16/solid';
import PostDialog from '@local/pages/PPost/PostDialog';
import * as React from 'react';
/**
 * Step in post process
 * @constructor
 */
function PostD() {
    return (
        <PostDialog>
            <h6 className="h6">What is your asking price?</h6>
            <div className="input-group grid-cols-[auto_1fr_auto]">
                <div className="ig-cell preset-tonal">
                    <CurrencyDollarIcon />
                </div>
                <input className="ig-input" type="text" placeholder="Amount" />
                <select className="ig-select">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                </select>
            </div>
        </PostDialog>
    );
}

export default PostD;
