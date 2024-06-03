import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import Home from "pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const stylesheets = (
    <link
        href="https://fonts.googleapis.com/css?family=Inria Sans"
        rel="stylesheet"
    ></link>
);

root.render(
    <React.StrictMode>
        {stylesheets}
        <div className="index_container">
            <Home />
        </div>
    </React.StrictMode>
);
