import DefaultLayout from './layouts/DefaultLayout';
import listLoader from './loaders/List.loader';
import Index from './pages';
import * as React from 'react';

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
                loader: listLoader,
                element: <Index/>
            }
            // More Routes
        ]
    },
    // More Layouts
];