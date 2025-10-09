import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Body from '../Body/Body';
import HomeBody from '../HomeBody/HomeBody';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Body,

        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('trendingAppData.json'),
                Component: HomeBody
            }

        ]
    },
    {

    }
]);
