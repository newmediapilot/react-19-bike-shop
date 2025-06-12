import prefetchLoader from '@local/loaders/core/prefetchLoader';

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
    _loaders = {};
    store = null;

    /**
     * Returns a copy of the loaders object
     */
    get loaders() {
        return { ...this._loaders };
    }

    /**
     * Configure with store so we can check values against routes
     * @param store
     */
    configureStore(store) {
        this.store = store;
    }

    /**
     * Runs a loader
     * @param route
     */
    prefetch(route: string) {
        // console.log('PrefetchResolver :: prefetch ::', route, this._loaders[route]);
        if (typeof this._loaders[route] === 'function') {
            this._loaders[route]();
        }
    }

    /**
     * Sets a loader and returns it
     * @param route
     * @param loader?
     */
    loader(route: string) {
        // console.log('PrefetchResolver :: register ::', route, this._loaders[route]);
        if (!this._loaders[route] && this._loaders[route] !== route) {
            this._loaders[route] = prefetchLoader(route);
        }
        return this._loaders[route];
    }

    /**
     * Runs `register` against aa list of potential fetches
     * @param route
     * @param list
     */
    iterate(route: string, list: Array<any>) {
        return list.map((item) => {
            let [key, path] = route.split('@');
            path = `@${path}/${item[key]}`;
            // console.log('PrefetchResolver :: registerAsIterable :: ', item.id, path);
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
            // @ts-ignore
            onMouseOver: (e) => {
                this.prefetch(route);
                //console.log(`PrefetchResolver :: events :: onMouseOver :: ${route}`);
            },
        };
    }
}

const pf = new PrefetchResolver();

export { pf };
