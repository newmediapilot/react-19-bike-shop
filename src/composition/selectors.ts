import { RootState } from './store';
import { SearchData } from '@local/components/Search';
import { ListData, ListItem } from '@local/components-primitives/LTable';
import { ModeSelectType } from '@local/components/FilterRadioGroup';

/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as SearchData;
/**
 * Return <ModeSelect> value
 */
export const selectFilter = (state: RootState) => state.mode as ModeSelectType;
/**
 * Return all listings
 */
export const selectList = (state: RootState): ListData => state['@list'] as ListItem[];
/**
 * Return a single listing by {id}
 */
export const selectListDetail = (id: string) => (state: RootState) =>
  state[`@list/${id}`] as ListItem;
