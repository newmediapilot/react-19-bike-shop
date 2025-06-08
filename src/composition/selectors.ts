import { searchList } from '@local/transformers/searchList';
import { createSelector } from '@reduxjs/toolkit';
import { ListData, ListItem, RootState } from './store';
/**
 * Return all listings
 */
export const selectList = (state: RootState): ListData => state['@list'] as ListData;
/**
 * Return a single listing by {id}
 */
export const selectListDetail = (id: string) => (state: RootState) => {
  return state[`@list/${id}`] as ListItem;
};
/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as string;
/**
 * Return list filtered by <Search> X <ModeSelect>
 */
export const selectSearchFiltered = createSelector([selectList, selectSearch], (list, search) => {
  return searchList(search, list, ['title', 'description']);
});
