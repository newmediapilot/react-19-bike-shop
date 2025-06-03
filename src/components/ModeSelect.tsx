import * as React from 'react';
import {RadioGroup} from "radix-ui";
import {useAppDispatch, setMode} from '@local/composition/store';

export type ModeSelectType = "filter" | "highlight" | "decorate";

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function ModeSelect() {
    const dispatch = useAppDispatch();
    const modes: string[] = ["filter", "highlight", "decorate"];
    const clickMode = (mode: string) => dispatch(setMode(mode));;
    return (
        <RadioGroup.Root defaultValue={modes[0]}>
            {modes.map(mode => (
                <RadioGroup.Item
                    key={mode} value={mode} onClick={() => clickMode(mode)}>
                    <RadioGroup.Indicator/>
                    <label className="Label" htmlFor="r1">
                        {mode}
                    </label>
                </RadioGroup.Item>
            ))}
        </RadioGroup.Root>
    );
}

export default ModeSelect;