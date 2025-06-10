import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppVersion from './components/AppVersion';
import { router, routerOptions } from './composition/router';
import { setStoreKey, store } from './composition/store';
import './main.css';

// registerSW();
pf.configureStore(store);

// @ts-ignore
if (import.meta.env.DEV) import.meta.hot?.on('vite:beforeUpdate', console.clear); // [HMR] forces console refresh

import * as localJSON from './db.json';

// fixture fallback for gh-pages
if (import.meta.env.PRODUCTION) {
    const { list } = localJSON.default;
    store.dispatch(setStoreKey({ data: list, key: `@list` }));
    list.forEach((item) =>
        store.dispatch(setStoreKey({ data: list[Number(item.id)], key: `@list/${item.id}` }))
    );
}

/**
 * @see https://www.radix-ui.com/themes/docs/components/theme
 * @see https://www.radix-ui.com/primitives/docs/utilities/direction-provider
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AppVersion />
        <RouterProvider router={createBrowserRouter(router, routerOptions)} />
    </Provider>
);
