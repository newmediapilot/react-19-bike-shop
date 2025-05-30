import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './main.css';
import {CacheStrategy} from './utils/CacheStrategy';
import {router} from './router';
import * as React from 'react';

CacheStrategy.configure({timeout: 5000});

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<RouterProvider router={createBrowserRouter(router)}/>);