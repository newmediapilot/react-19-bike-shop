import DefaultLayout from '../layouts/DefaultLayout';
import listLoader from '../loaders/listLoader';
import Index from '../pages';
import * as React from 'react';
import Catch from '../pages/Catch';
import Components from '../pages/Components';

/**
 * Starter router with one DefaultLayout
 */
export const routerOptions = {
    basename: '/react-19-bike-shop/',
};
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
            {
                path: '/components',
                element: <Components/>,
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