/**
 * Fetches the resource, registers the resource in cache
 * Returns an object array
 */
import {ListData} from '@local/components/Listings';
import loaderHandler from './loaderHandler';
import {setList} from '@local/composition/store';

// @ts-ignore
import * as localJSON from '../db.json';

/**
 * Fetch list of products
 */
export default async function detailLoader(id:number): Promise<ListData> {
    return await loaderHandler(`http://localhost:3000/list`, 'list', setList, localJSON.default.list);
}