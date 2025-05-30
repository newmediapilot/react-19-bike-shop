import DefaultLayout from './layouts/DefaultLayout';
import listLoader from './loaders/List.loader';
import Index from './pages/Index';
import * as React from 'react';
import Catch from './pages/Catch';

/**
 * Starter router with one DefaultLayout
 */
export const router = [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <Index/>,
                errorElement: <Catch/>,
                loader: listLoader,
            },
        ]
    },
    {
        path: '*',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <Catch/>,
            },
        ]
    }
];