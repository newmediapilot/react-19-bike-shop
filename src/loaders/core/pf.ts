import prefetchLoader from '@local/loaders/core/prefetchLoader';
import _ from 'lodash';

/**
 * Strategy to run loaders independently of routes and prefetch
 * eg. A user hovers over a link, the loader will hydrate redux early >:)
 * @param unique identifier across the entire app
 * @param loader that matchers react-router
 * @event helper to pass mouse events directly components
 * @see src/loaders/core/prefetchLoader.ts;
 * @see src/loaders/core/loaderHandler.ts;
 */
class PrefetchResolver {
  loaders = {};
  store = null;

  /**
   * Configure with store so we can check values against routes
   * @param store
   */
  configureStore(store) {
    this.store = store;
  }

  /**
   * Runs a loader if it is `{ready:true}`
   * @param route
   */
  prefetch(route: string) {
    //console.log('PrefetchResolver :: prefetch ::', route);
    const stored = this.store.getState()[route];
    stored && stored?.ready && this.loaders[route]();
  }

  /**
   * Sets a loader and returns it, prevents setting twice
   * @param route
   * @param loader
   */
  loader(route: string, loader?) {
    if (_.has(this.loaders, route)) {
      return this.loaders[route];
    } else {
      this.loaders[route] = loader || prefetchLoader(route);
    }
    //console.log('PrefetchResolver :: register ::', route);
    return this.loaders[route];
  }

  /**
   * Runs `register` against aa list of potential fetches
   * @param route
   * @param list
   */
  iterate(route: string, list: Array<any>) {
    //console.log('PrefetchResolver :: registerAsIterable :: ', list);
    return list.map((item) => {
      let [key, path] = route.split('@');
      path = `@${path}/${item[key]}`;
      this.loader(path);
    });
  }

  /**
   * Returns a set of listeners to add onto component
   * eg. `<button {...events(path)}`
   * @param route
   * @param id
   */
  events(route: string, id?: string): { onMouseOver: () => void } {
    return {
      onMouseOver: () => {
        this.prefetch(route);
        //console.log(`PrefetchResolver :: events :: onMouseOver :: ${route}`);
      },
    };
  }
}

const pf = new PrefetchResolver();

export { pf };
