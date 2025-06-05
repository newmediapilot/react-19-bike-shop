import { useForm } from "react-hook-form";
import * as React from "react";
import { setSearch, useAppDispatch } from "@local/composition/store";

export type SearchData = string | null;

/**
 * Search input emitting a value onChange
 * Emits a value to redux
 * Emits empty string "" onKeyDown 'Escape'
 * @constructor
 */
function Search() {
  const {
    register,
    // handleSubmit, // TODO: validation via `handleSubmit`
    getValues,
    setValue,
    // @ts-ignore
  } = useForm<SearchData>({
    // TODO: type match here
    mode: "onTouched",
  });
  const dispatch = useAppDispatch();
  const changeHandler = () => dispatch(setSearch(getValues().search));
  // const submitHandler = () => handleSubmit(()=>changeHandler());
  const keyDownHandler = (e) => {
    if (e.key === "Escape") setValue("search", "", { focus: true });
  };
  return (
    <form
      onKeyDown={(e) => keyDownHandler(e)}
      onKeyUp={() => changeHandler()}
      onChange={() => changeHandler()}
      onSubmit={(e) => {
        e.preventDefault();
        changeHandler();
      }}
    >
      <input
        placeholder="Search..."
        {...register("search", { required: true })}
      />
    </form>
  );
}

export default Search;
