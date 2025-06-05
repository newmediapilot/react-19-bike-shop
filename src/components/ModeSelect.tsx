import * as React from "react";
import { setMode, useAppDispatch } from "@local/composition/store";

export type ModeSelectType = "filter" | "highlight" | "decoration";

/**
 * ModeSelect input emitting a value onChange
 * @constructor
 */
function ModeSelect() {
  const dispatch = useAppDispatch();
  const modes: string[] = ["filter", "highlight", "decoration"];
  return (
    <form>
      {modes.map((mode) => (
        <label key={mode}>
          <input
            type="radio"
            name="mode-select"
            value={mode}
            onClick={() => dispatch(setMode(mode))}
          />
        </label>
      ))}
    </form>
  );
}

export default ModeSelect;
