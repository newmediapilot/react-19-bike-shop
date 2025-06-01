import {ListItem} from '@local/components/Listings';

/**
 * Takes `items` join and searches against it using `searchQuery`
 * Returns list matching
 */
const filterMapWords = (
    search: string,
    items: Array<ListItem | object>,
    map: Array<string>
): Array<any> => {
    return [];
};

/**
 * Takes `items` join and searches against it using `searchQuery`
 * Returns a filtered list with truthy `indexOf` matches based on index
 */
const filterMapTokens = (
    search: string,
    items: Array<ListItem | object>,
    map: Array<string>
): Array<any> => {
    return [];
};

export default {
    filterMapWords,
    filterMapTokens,
}