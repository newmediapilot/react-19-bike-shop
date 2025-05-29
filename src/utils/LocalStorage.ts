/**
 * Simple LocalStorage built on window.localStorage
 * Emits errors for non-serializable values
 * Uses JSON.stringify/parse
 */
export class LocalStorage {

    /**
     * Saves the value to local storage IF it can be serialized
     * @param key
     * @param value
     */
    static setKey(key: string, value: object) {
        let storeValue;
        try {
            storeValue = JSON.stringify(value);
            window.localStorage.setItem(key, storeValue)
        } catch (e) {
            console.error('LocalStorage cannot serialize', storeValue);
        }
    }

    /**
     * Fetches a local storage value by key
     * @param key
     */
    static getKey(key: string) {
        return window.localStorage.getItem(key);
    }

    /**
     * Fetches all values as a list
     * @param key
     */
    static getAllKeys() {
        const ls = window.localStorage;
        return Object
            .keys(window.localStorage)
            .map(key => {
                return {
                    key,
                    value: ls.getItem(key),
                }
            });
    }

    /**
     * Clears all storage
     */
    static clearKeys() {
        window.localStorage.clear();
        console.error('LocalStorage cleared');
    }
}