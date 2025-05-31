/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '../components/Listings';
import {addLoaderSlice, store} from '../redux/store';

/**
 * Paths
 */
const URL_FETCH_LIST:string = 'http://localhost:3000/list';
const URL_FETCH_LIST_FB:string = 'http://localhost:3000/list';
// Add more paths

/**
 * FETCH_LIST
 */
export default async function listLoader(): Promise<ListData> {
    return loaderHandler(URL_FETCH_LIST, 'listLoader', URL_FETCH_LIST_FB);
}

/**
 * Generic loader handler with fallback for offline
 * @param path
 * @param key
 * @param fallback - for gh-pages
 */
const loaderHandler = async (
    path: string,
    key: string,
    fallback?: string,
) => {

    let data;
    let result;

    try {
        result = await fetch('d');
    } catch (e) {
        result = await fetch(fallback);
    }

    data = await result.json();

    store.dispatch(addLoaderSlice({data, key: key}));

    return data;
};