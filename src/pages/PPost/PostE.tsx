import * as React from 'react';
import { useState } from 'react';
import PostDialog from '@local/pages/PPost/PostDialog';
import {CurrencyDollarIcon} from '@heroicons/react/16/solid';
/**
 * Step in post process
 * @constructor
 */
function PostD() {
    return (
        <PostDialog>
            <h6 class="h6">What is your asking price?</h6>
            <div className="input-group grid-cols-[auto_1fr_auto]">
                <div className="ig-cell preset-tonal">
                    <CurrencyDollarIcon size={16}/>
                </div>
                <input className="ig-input" type="text" placeholder="Amount"/>
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
