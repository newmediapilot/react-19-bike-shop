import {createAppSelector, RootState} from './store';
import {SearchData} from '@local/components/Search';
import {ListData, ListItem} from '@local/components/Listings';

/**
 * Return all listings
 */
export const selectList = (state: RootState) => state.list as ListData;
/**
 * Return a single listing by {id}
 */
export const selectListId = (id: number) => createAppSelector(
    [
        selectList,
        (list: ListData) => {
            return Array.from(list).find((item: ListItem) => item.id === id) as ListItem;
        },
    ],
    (item: ListItem) => item
);
/**
 * Return listings filtered by `selectSearch`
 */
export const selectFilteredSearchList = (state: RootState) => {
    return state.list as ListData;
};
/**
 * Return listings mapped as word tokens, filtered by `selectSearch`
 */
export const selectFilteredSearchTokens = (state: RootState) => {
    return state.list as ListData;
};
/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as SearchData;