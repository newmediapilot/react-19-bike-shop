import { setSearch, useAppDispatch } from '@local/composition/store';
import * as React from 'react';
import { useForm } from 'react-hook-form';

/**
 * Search input emitting a value `onChange`
 * Emits a value to `redux` using `action`
 * @constructor
 */
function InputSearch({ action = setSearch }) {
    const dispatch = useAppDispatch();
    const { register } = useForm({ mode: 'onChange' });
    const onChange = (e) => dispatch(action(e.currentTarget.value));
    return (
        <input
            className="h-[100%] px-4 border-1 border-gray-600 w-full"
            placeholder="Enter your search..."
            {...register('search', { onChange })}
        />
    );
}

export default InputSearch;
