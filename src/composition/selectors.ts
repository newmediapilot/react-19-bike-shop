import {createAppSelector, RootState} from './store';
import {SearchData} from '@local/components/Search';
import {ListData, ListItem} from '@local/components/Listings';
import {filterList} from '@local/transformers/filterMap';

/**
 * Return <Search> value
 */
export const selectSearch = (state: RootState) => state.search as SearchData;
/**
 * Return all listings
 */
export const selectList = (state: RootState): ListData => state.list;
/**
 * Return a single listing by {id}
 */
export const selectListId = (id: number) => {
    return createAppSelector(
        [(state: RootState) => state.list as ListItem[]],
        (list) => list.find(item => Number(item.id) === Number(id)) as ListItem
    );
};
/**
 * Return an object of matches based on word input
 * Mappable to a dom tree
 * > The reason we have selectors as separate inputs is because they are consumed later and are immutable
 * > This allows us to simply split the state without mutating it to keep things quick
 * > The last method receives a "mutable" combinator declared selectors and its result is cached
 */
export const selectListTokens = () => {
    return createAppSelector([
            (state: RootState) => state.list,
            (state: RootState) => state.search,
        ],
        (list, search) => filterList(search, list, "id", ["title", "description"]) as ListData
    );
};
