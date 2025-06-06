import { useForm } from 'react-hook-form';
import * as React from 'react';
import { setSearch, useAppDispatch } from '@local/composition/store';

export type SearchData = string | null;

/**
 * Search input emitting a value onChange
 * Emits a value to redux
 * Emits empty string "" onKeyDown 'Escape'
 * @constructor
 */
function Search() {
  const dispatch = useAppDispatch();
  const { register } = useForm({ mode: 'onChange' });
  const onChange = (e) => dispatch(setSearch(e.currentTarget.value));
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input {...register('search', { onChange })} />
    </form>
  );
}

export default Search;
