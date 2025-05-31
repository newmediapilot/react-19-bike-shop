import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {router} from './router';
import * as React from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/store';
import AppVersion from './components/AppVersion';

ReactDOM
    .createRoot(
        document.getElementById("root")
    )
    .render(
        <Provider store={store}>
            <AppVersion/>
            <RouterProvider router={createBrowserRouter(router)}/>
        </Provider>
    );