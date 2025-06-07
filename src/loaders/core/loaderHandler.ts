import { PrefetchSetType, store } from '@local/composition/store';
import { pf } from '@local/loaders/core/pf';
// @ts-ignore
const VITE_DB = import.meta.env.VITE_DB;
/**
 * Generic loader handler with offline fallback.
 *
 * Attempts to fetch and cache data. On success, it stores the data in Redux and localStorage.
 * On failure, it retrieves from localStorage instead.
 *
 * ### Route Format
 * - `@api/list/item/` — Fetches directly.
 * - `item@api/list/` — Treats `item` as a variable and prepares individual fetch calls for list members.
 *
 * ### Registering a Loader
 * Example:
 * ```ts
 * prefetchLoader('@api/users/');
 * ```
 *
 * ### Calling with Variable
 * ```ts
 * prefetchLoader('id@api/users');
 * ```
 * This fetches:
 * - `@api/users/1`
 * - `@api/users/2`
 * - etc., using values resolved from the initial response.
 *
 * Use `fs.prefetch('id@api/users', id)` anywhere to prefetch individual items.
 * Bind to mouse events like:
 * ```tsx
 * <button {...fs.events('id@api/users', loopKey)} />;
 * ```
 *
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
    store.dispatch(action({ data, key: rpath } as PrefetchSetType));

    if (key) pf.iterate(route, data as Array<any>);

    window.localStorage.setItem(rpath, data);

    return data;
  } catch (e) {
    const data = window.localStorage.getItem(key);
    data && store.dispatch(action({ data, key }));

    return data;
  }
}
