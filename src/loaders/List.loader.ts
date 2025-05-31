/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '../components/Listings';
import {addLoaderSlice, store} from '../redux/store';

export default async function listLoader(): Promise<ListData> {
    return loaderHandler('http://localhost:3000/list', 'listLoader', '/db.json');
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
        result = await fetch(path);
    } catch (e) {
        result = await fetch(fallback);
    }

    data = await result.json();

    store.dispatch(addLoaderSlice({data, key: key}));

    return data;

};