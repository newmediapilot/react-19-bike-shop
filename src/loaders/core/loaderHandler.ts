import { store } from '@local/composition/store';
import { pf } from '@local/loaders/core/pf';
// @ts-ignore
const VITE_DB = import.meta.env.VITE_DB;
/**
 * Generic loader handler with offline fallback.
 * @param {string} route - Format: `@api/...` or `key@api/...`
 * @param {Function} action - Redux dispatch action to apply fetched result.
 */
export default async function loaderHandler(route: string, action: any) {
    let [key, path] = route.split('@');
    let rpath = `@${path}`;
    let url = `${VITE_DB}/${path}`;
    let data = store.getState()[rpath];

    if (data !== rpath && !!data) return data;

    try {
        const result = await fetch(url);
        data = await result.json();
        store.dispatch(action({ data, key: rpath }));

        if (key) pf.iterate(route, data as Array<any>);

        window.localStorage.setItem(rpath, data);

        return data;
    } catch (e) {
        const data = window.localStorage.getItem(key);
        data && store.dispatch(action({ data, key }));

        return data;
    }
}
