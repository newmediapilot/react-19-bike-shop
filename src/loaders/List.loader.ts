/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '../components/Listings';
import {addLoaderSlice, store} from '../redux/store';
import * as localJSON from '../../public/db.json';

/**
 * Path constants
 */
const URL_FETCH_LIST: string = 'http://localhost:3000/list';

/**
 * Fetch list of products
 */
export default async function listLoader(): Promise<ListData> {
    return loaderHandler(URL_FETCH_LIST, 'listLoader');
}

/**
 * Generic loader handler with fallback for offline
 * @param path
 * @param key
 */
const loaderHandler = async (
    path: string,
    key: string,
) => {
    let data, result;

    try {
        result = await fetch(path);
    } catch (e) {
        data = localJSON.default.list;
    }

    data = await result.json();

    store.dispatch(addLoaderSlice({data, key: key}));

    return data;
};