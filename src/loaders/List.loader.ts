/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '../components/Listings';
import {addLoaderSlice, store} from '../redux/store';

export default async function listLoader(): Promise<ListData> {
    const fetchPath = 'http://localhost:3000/list';
    const result = await fetch(fetchPath);
    const data = await result.json();
    store.dispatch(addLoaderSlice({data, key: fetchPath}));
    return data;
}