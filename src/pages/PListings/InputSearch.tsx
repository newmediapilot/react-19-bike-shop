import { setSearch, useAppDispatch } from '@local/composition/store';
import * as React from 'react';
import { useForm } from 'react-hook-form';

/**
 * Search input emitting a value onChange
 * Emits a value to redux
 * Emits empty string "" onKeyDown 'Escape'
 * @constructor
 */
function InputSearch() {
  const dispatch = useAppDispatch();
  const { register } = useForm({ mode: 'onChange' });
  const onChange = (e) => dispatch(setSearch(e.currentTarget.value));
  return (
    <div className="py-2">
      <input
        className="p-4 border-1 border-gray-600 w-full"
        placeholder="Enter your search..."
        {...register('search', { onChange })}
      />
    </div>
  );
}

export default InputSearch;
