// @ts-ignore
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {router, routerOptions} from './composition/router';
import * as React from 'react';
import {Provider} from 'react-redux'
import {store} from './composition/store';
import AppVersion from './components/AppVersion';
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {Direction} from "radix-ui";
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true });

// @ts-ignore
if (import.meta.env.DEV) {
    // @ts-ignore
    import.meta.hot?.on("vite:beforeUpdate", console.clear)
}

/**
 * @see https://www.radix-ui.com/themes/docs/components/theme
 * @see https://www.radix-ui.com/primitives/docs/utilities/direction-provider
 */
ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<Provider store={store}>
        <Direction.Provider dir="rtl">
            <AppVersion/>
            <Theme>
                <RouterProvider router={
                    createBrowserRouter(router, routerOptions)
                }/>
            </Theme>
        </Direction.Provider>
    </Provider>);