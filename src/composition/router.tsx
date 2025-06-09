import PCatch from '@local/pages/PCatch';
import PListings from '@local/pages/PListings';
import LDefault from '../layouts/LDefault';
// @ts-ignore
import { pf } from '@local/loaders/core/pf';
import PLogin from '@local/pages/PLogin';
import PPost from '@local/pages/PPost';
import PRegister from '@local/pages/PRegister';
import * as React from 'react';
import NavGlobal from '@local/components/NavGlobal';

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
    path: '/register',
    index: true,
    element: <PRegister />,
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
    path: '/post',
    element: <PPost />,
    errorElement: <PCatch message="Loader Error" />,
  },
  {
    path: '/test',
      element: <div className="h-[5vh]"><NavGlobal/></div>,
    errorElement: <PCatch message="Loader Error" />,
  },
  {
    path: '*',
    element: <PCatch message="404 Not found" />,
  },
];
