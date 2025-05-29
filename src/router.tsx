import DefaultLayout from './layouts/DefaultLayout';
import {fetchList} from './services/List';
import Index from './pages';
import * as React from 'react';

export const router = [
    {
        path: '/',
        element: <DefaultLayout/>,
        loader: fetchList,
        children: [
            {
                index: true,
                element: <Index/>
            }
        ]
    },
];