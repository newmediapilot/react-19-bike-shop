import { pf } from '@local/loaders/core/pf';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Direction } from 'radix-ui';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import AppVersion from './components/AppVersion';
import { router, routerOptions } from './composition/router';
import { store } from './composition/store';
import './main.css';

registerSW();

// @ts-ignore
if (import.meta.env.DEV) import.meta.hot?.on('vite:beforeUpdate', console.clear); // [HMR] forces console refresh

pf.configureStore(store);

/**
 * @see https://www.radix-ui.com/themes/docs/components/theme
 * @see https://www.radix-ui.com/primitives/docs/utilities/direction-provider
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Direction.Provider dir="rtl">
      <AppVersion />
      <Theme>
        <RouterProvider router={createBrowserRouter(router, routerOptions)} />
      </Theme>
    </Direction.Provider>
  </Provider>
);
