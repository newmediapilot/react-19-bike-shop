/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '@local/components/Listings';
import loaderHandler from './loaderHandler';
import {setList} from '@local/composition/store';

/**
 * Fetch list of products
 */
export default async function listLoader(id:number): Promise<ListData> {
    return await loaderHandler(`http://localhost:3000/list`, 'list', setList, localJSON.default.list);
}