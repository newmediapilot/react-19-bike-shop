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
    return await loaderHandler(URL_FETCH_LIST, 'listLoader', localJSON.default.list);
}

/**
 * Generic loader handler with fallback for offline
 * @param path
 * @param key
 * @param defaultData
 */
const loaderHandler = async (
    path: string,
    key: string,
    defaultData?: string,
) => {
    let result, data;
    try {
        result = await fetch(path);
        data = await result.json();
    } catch (e) {
        console.warn("Using localJSON" , defaultData);
        data = defaultData;
    }
    store.dispatch(addLoaderSlice({data, key: key}));
    return data;
};