/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '../components/Listings';

// @ts-ignore
export default async function listLoader(): Promise<ListData> {
    const fetchPath = 'http://localhost:3000/list';
    const result = await fetch(fetchPath);
    const body = await result.json();
    // install the reducer so we can use it
    return body;
}