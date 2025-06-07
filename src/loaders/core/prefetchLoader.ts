/**
 * Registers a loader for later use;
 */
import { setStoreKey, store } from '@local/composition/store';
import loaderHandler from './loaderHandler';

/**
 * Return a loader with route to key
 * Process exclusively via `setStoreKey` reducer
 */
export default function prefetchLoader(route: string) {
  let rpath = `@${route.split('@')[1]}`;
  store.dispatch(setStoreKey({ data: rpath, key: rpath }));
  return () => loaderHandler(route, setStoreKey);
}
