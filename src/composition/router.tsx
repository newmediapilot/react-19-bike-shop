import PCatch from '@local/pages/PCatch';
import PComponents from '@local/pages/PComponents';
import PListings from '@local/pages/PListings';
import LDefault from '../layouts/LDefault';
// @ts-ignore
import { pf } from '@local/loaders/core/pf';
import * as React from 'react';
import { NavLink } from 'react-router';

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
    element: <NavLink to="/">Return Home</NavLink>,
  },
  {
    path: '/listings',
    element: <LDefault />,
    children: [
      {
        path: '/listings',
        loader: pf.loader('id@list'),
        element: <PListings />,
        errorElement: <PCatch />,
      },
    ],
  },
  {
    path: '/components',
    element: <PComponents components={false} />,
  },
  {
    path: '*',
    element: <PCatch />,
  },
];
