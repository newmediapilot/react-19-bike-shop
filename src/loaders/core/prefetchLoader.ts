/**
 * Registers a loader for later use;
 */
import loaderHandler from "./loaderHandler";
import { setPrefetch, store } from "@local/composition/store";
// @ts-ignore

/**
 * Return a loader with route to key
 * Process exclusively via `setPrefetch` reducer
 */
export default function prefetchLoader(route: string) {
  store.dispatch(setPrefetch({ data: { ready: true }, key: route })); // TODO: debug line

  return () => loaderHandler(route, setPrefetch);
}
