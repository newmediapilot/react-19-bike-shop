import {useForm} from "react-hook-form";
import * as React from 'react';
import {setSearch, useAppDispatch} from '@local/composition/store';

export type SearchData = string | null;

/**
 * Search input emitting a value onChange
 * @constructor
 */
function Search() {
    const {
        register,
        handleSubmit,
        getValues,
        // TODO: type match here
    } = useForm<SearchData>({
        mode: 'onTouched'
    });
    const dispatch = useAppDispatch();
    // TODO: validation via `handleSubmit`
    // const submitHandler = () => dispatch(setSearch(getValues().search));
    const changeHandler = () => dispatch(setSearch(getValues().search));
    return (
        <form
            onKeyUp={() => changeHandler()}
            onChange={() => changeHandler()}
            onSubmit={(e) => {
                e.preventDefault();
                changeHandler()
            }}
        >
            <input placeholder="Search..." {...register("search", {required: true})} />
        </form>
    );
}

export default Search;