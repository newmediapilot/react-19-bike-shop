import {useForm} from "react-hook-form";
import * as React from 'react';

type SearchInput = {
    search: string
};

/**
 * Search input emitting a value onChange
 * @constructor
 */
function Search() {
    const {
        register,
        handleSubmit,
    } = useForm<SearchInput>();
    return (
        <form
              onChange={handleSubmit((data) => console.log(data))}
              onSubmit={(e) => {e.preventDefault()}}>
            <div>
                <input placeholder="Search..."
                       {...register("search", {required: true})}
                />
            </div>
        </form>
    );
}

export default Search;