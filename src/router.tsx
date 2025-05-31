import DefaultLayout from './layouts/DefaultLayout';
import listLoader from './loaders/listLoader';
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
            /**
             * Invoked if `loader` throws an exception, or if the URL is incorrect
             */
            {
                path: '*',
                element: <Catch/>,
            }
        ]
    }
];