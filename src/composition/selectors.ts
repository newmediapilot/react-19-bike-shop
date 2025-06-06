import { ListData, ListItem, RootState } from './store';
import { ModeSelectType } from '@local/components/FilterRadioGroup';

/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as string;
/**
 * Return <ModeSelect> value
 */
export const selectFilter = (state: RootState) => state.filter as ModeSelectType;
/**
 * Return all listings
 */
export const selectList = (state: RootState): ListData => state['@list'] as ListData;
/**
 * Return a single listing by {id}
 */
export const selectListDetail = (id: string) => (state: RootState) => {
  state[`@list/${id}`] as ListItem;
};
