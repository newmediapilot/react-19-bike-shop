import PCatch from '@local/pages/PCatch';
import PComponents from '@local/pages/PComponents';
import PListings from '@local/pages/PListings';
import LDefault from '../layouts/LDefault';
// @ts-ignore
import { pf } from '@local/loaders/core/pf';
import PLogin from '@local/pages/PLogin';
import * as React from 'react';

/**
 * Starter router with one DefaultLayout
 */
export const routerOptions = {
  basename: '/react-19-bike-shop/',
};

export const router = [
  {
    path: '/',
    index: true,
    element: <PLogin />,
  },
  {
    path: '/listings',
    element: <LDefault />,
    children: [
      {
        index: true,
        loader: pf.loader('id@list'),
        element: <PListings />,
        errorElement: <PCatch message="Loader Error" />,
      },
    ],
  },
  {
    path: '/components',
    element: <LDefault />,
    children: [
      {
        index: true,
        element: <PComponents components={false} />,
      },
    ],
  },
  {
    path: '*',
    element: <PCatch message="404 Not found" />,
  },
];
