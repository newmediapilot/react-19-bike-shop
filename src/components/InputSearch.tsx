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
    <label className="label">
      <span className="label-text">Filter</span>
      <input className="input" {...register('search', { onChange })} />
    </label>
  );
}

export default InputSearch;
