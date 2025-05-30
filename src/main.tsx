// @ts-ignore
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './main.css';
import {router} from './router';
import * as React from 'react';

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<RouterProvider router={createBrowserRouter(router)}/>);