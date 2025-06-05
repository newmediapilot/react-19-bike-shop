import DefaultLayout from "../layouts/DefaultLayout";
import Index from "../pages";
import * as React from "react";
import Catch from "../pages/Catch";
import Components from "../pages/Components";
import prefetchLoader from "@local/loaders/core/prefetchLoader";
import { pf } from "@local/loaders/core/pf";

/**
 * Starter router with one DefaultLayout
 */
export const routerOptions = {
  basename: "/react-19-bike-shop/",
};

export const router = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        loader: pf.register("id@list"),
        element: <Index />,
        errorElement: <Catch />,
      },
      {
        path: "/components",
        element: <Components />,
      },
      {
        path: "*",
        element: <Catch />,
      },
    ],
  },
];
