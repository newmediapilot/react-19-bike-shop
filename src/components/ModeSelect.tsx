import * as React from 'react';
import {setMode, useAppDispatch} from '@local/composition/store';

export type ModeSelectType = "filter" | "highlight" | "decoration";

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function ModeSelect() {
    const dispatch = useAppDispatch();
    const modes: string[] = ["filter", "highlight", "decoration"];
    return (
        <>
            {modes.map(mode => (
                <label key={mode}>
                    <input type="radio"  name="mode-select" onClick={() => dispatch(setMode(mode))} value={mode}/>
                </label>
            ))}
        </>
    );
}

export default ModeSelect;