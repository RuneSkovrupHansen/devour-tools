import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "index.css";

import Home from "pages/home";
import Error from "pages/error";
import Faq from "pages/faq";
import Root from "pages/root";

import { route_home, route_perks, route_maps, route_faq } from "route";

import "route.js";

const stylesheets = (
    <link
        href="https://fonts.googleapis.com/css?family=Inria Sans"
        rel="stylesheet"
    ></link>
);

const router = createBrowserRouter([
    {
        path: route_home,
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: route_faq,
                element: <Faq />,
            },
            // Perks
            // Maps
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        {stylesheets}
        <RouterProvider router={router} />
    </React.StrictMode>
);
