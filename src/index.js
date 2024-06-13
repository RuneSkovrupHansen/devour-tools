import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "index.css";

import Home from "pages/home";
import Error from "pages/error";
import Faq from "pages/faq";
import Root from "pages/root";

import { route_home, route_perks, route_maps, route_faq } from "route";
import Perks from "pages/perks";
import { feature_flag, flag_maps, flag_perks } from "feature_flag";
import Maps from "pages/maps";

let children = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: route_faq,
        element: <Faq />,
    },
];

if (feature_flag(flag_perks)) {
    children.push({
        path: route_perks,
        element: <Perks />,
    });
}

if (feature_flag(flag_maps)) {
    children.push({
        path: route_maps,
        element: <Maps />,
    });
}

// Switch to createBrowserRouter for deployment to own site
const router = createHashRouter([
    {
        path: route_home,
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: route_home,
                element: <Home />
            },
            {
                path: route_faq,
                element: <Faq />
            },
            {
                path: route_perks,
                element: <Perks />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
