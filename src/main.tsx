import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './main.css';
import {router} from './router';
import * as React from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/store';

ReactDOM
    .createRoot(
        document.getElementById("root")
    )
    .render(
        <Provider store={store}>
            <RouterProvider router={createBrowserRouter(router)}/>
        </Provider>
    );