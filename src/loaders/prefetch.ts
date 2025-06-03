/**
 * Strategy to run loaders independently of routes and prefetch
 * ie. User hovers over a link, find the loader for that link and hydrate redux early
 */
class PrefetchResolver {

    config = {};

    info = `
        Usage:
        pf.path("./abc");                // in the router "path" field
        pf.loader("./abc", loader);      // in the router "loader" field
        pf.fetch("./abc");               // on hover 
    `;

    /**
     * Sets a path and returns it, prevents setting twice
     * @param path
     */
    path(path: string) {
        if (!!this.config[path]) {
            console.warn(`PrefetchResolver path exists = "${path}" ${this.config[path]}`);
            console.info(this.info);
        } else {
            this.config[path] = true;
        }
        return path;
    }

    /**
     * Runs a loader if it is defined by `loader`, prevents running otherwise
     * @param path
     */
    fetch(path: string) {
        if (this.config[path] !== true && !!this.config[path]) {
            this.config[path]();
        } else {
            console.warn(`PrefetchResolver loader not set  = "${path}" ${this.config[path]}`);
            console.info(this.info);
        }
    }

    /**
     * Sets a loader and returns it, prevents setting twice
     * @param path
     * @param loader
     */
    loader(path: string, loader) {
        if (this.config[path]) {
            console.warn(`PrefetchResolver loader exists = "${path}" ${this.config[path]}`);
            console.info(this.info);
        } else {
            this.config[path] = true;
        }
        return path;
    }

}

export default {
    ...new PrefetchResolver(),
};