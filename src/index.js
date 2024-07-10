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
import Maps from "pages/maps";

let children = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: route_home,
        element: <Home />,
    },
    {
        path: route_faq,
        element: <Faq />,
    },
];

children.push({
    path: route_perks,
    element: <Perks />,
});

children.push({
    path: route_maps,
    element: <Maps />,
});

// Switch to createBrowserRouter for deployment to own site
const router = createHashRouter([
    {
        path: route_home,
        element: <Root />,
        errorElement: <Error />,
        children: children,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
