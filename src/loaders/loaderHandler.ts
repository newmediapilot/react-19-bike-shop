import {store} from '@local/composition/store';

/**
 * Generic loader handler with fallback for offline
 * Redux hydrates and maintains state
 * If fetch fails, local storage is checked and returned
 * @param path
 * @param key
 * @param fixture
 */
export default async function loaderHandler(
    path: string,
    key: string,
    action: any,
    fixture: any,
) {
    let data;
    try {

        // If redux hydrated use it
        // Attempt to fetch the data from server
        // Save to localStorage
        // Send to store

        data = store.getState()[key];
        if (data) return data;

        const result = await fetch(path);
        data = await result.json();

        const json = JSON.stringify(data);
        window.localStorage.setItem(key, json);

        store.dispatch(action({data, key: key}));

        return data;

    } catch (e) {

        // Stub with fixture if no-connection
        // Attempt to fetch the local store
        // Send to store

        data = fixture;

        let local = window.localStorage.getItem(key);
        if (local) data = JSON.parse(local);

        store.dispatch(action({data, key: key}));

        return data;
    }
};