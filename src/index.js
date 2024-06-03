import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "index.css";

import Home from "pages/home";
import Error from "pages/error";
import Faq from "pages/faq";
import Perks from "pages/perks";

import "route.js";

const stylesheets = (
    <link
        href="https://fonts.googleapis.com/css?family=Inria Sans"
        rel="stylesheet"
    ></link>
);

const router = createBrowserRouter([
    {
        path: "/devour-tools/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/devour-tools/faq",
        element: <Faq />,
    },
    {
        path: "/devour-tools/perks",
        element: <Perks />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        {stylesheets}
        <RouterProvider router={router} />
    </React.StrictMode>
);
