// @ts-ignore
import {useForm} from "react-hook-form";
// @ts-ignore
import * as React from 'react';
// @ts-ignore
import {Box} from '@radix-ui/themes';
import {setSearch, useAppDispatch} from '@local/composition/store';

export type SearchData = {
    search: string | undefined
};

/**
 * Search input emitting a value onChange
 * @constructor
 */
function Search() {
    const {
        register,
        handleSubmit,
        getValues,
    } = useForm<SearchData>({
        mode: 'onTouched'
    });
    const dispatch = useAppDispatch();
    const submitHandler = () => dispatch(setSearch(getValues().search));
    return (
        <Box>
            <form
                onChange={handleSubmit(submitHandler)}
                onSubmit={e => handleSubmit(submitHandler) && e.preventDefault()}>
                <input placeholder="Search..." {...register("search", {required: true})} />
            </form>
        </Box>
    );
}

export default Search;