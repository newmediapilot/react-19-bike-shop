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
        <form className="p-5 pb-0"
              onChange={handleSubmit((data) => console.log(data))}
              onSubmit={(e) => {
                  e.preventDefault()
              }}>
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input placeholder="Search..."
                       className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                       {...register("search", {required: true})}
                />
            </div>
        </form>
    );
}

export default Search;