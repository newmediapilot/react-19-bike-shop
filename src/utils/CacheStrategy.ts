import {LocalStorage} from './LocalStorage';

export class CacheStrategy {
    /**
     * Time before the cache records are flushed
     */
    static cacheTimeout = 10000;

    /**
     * Overwrites timeout property
     * @param cacheTimeout
     */
    static configure(cacheTimeout) {
        this.cacheTimeout = cacheTimeout;
    };

    /**
     * Reports whether the latest cache is >cacheTimeout old
     */
    static flushEligible() {
        const allKeys = LocalStorage.getAllKeys();
        console.log('allKeys', allKeys);
    };

    /**
     * Stores an entry based on current time
     * @param result
     */
    static storeEntry(result) {
        LocalStorage.setKey(String(new Date().getTime()), result);
    };
}