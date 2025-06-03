import {createAppSelector, RootState} from './store';
import {SearchData} from '@local/components/Search';
import {ListData, ListItem} from '@local/components/Listings';
import {ModeSelectType} from '@local/components/ModeSelect';

/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as SearchData;

/**
 * Return <ModeSelect> value
 */
export const selectMode = (state: RootState) => state.mode as ModeSelectType;
/**
 * Return all listings
 */
export const selectList = (state: RootState): ListData => state.list as ListItem[];
/**
 * Return a single listing by {id}
 */
export const selectListId = (id: number) => {
    return createAppSelector(
        [(state: RootState) => state.list as ListItem[]],
        (list) => list.find(item => Number(item.id) === Number(id)) as ListItem
    );
};
