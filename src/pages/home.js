// import { useState } from "react";

import "common.css";

import { Base } from "components/base.js";

import {
    url_github_rune,
    url_site_perks,
    url_site_maps,
    url_youtube_affinity,
} from "common.js";

function Home() {
    const content = (
        <>
            <h1>Welcome!</h1>
            <p>
                Welcome to Devour Tools - your hub for Devour speedrunning
                tools.
            </p>
            <p>
                Figure out which perk saves you the most time using the{" "}
                <a href={url_site_perks} className="visible_link">
                    Perks
                </a>{" "}
                tool.
            </p>
            <p>
                View the five devour maps with or without an item overlay with
                the{" "}
                <a href={url_site_maps} className="visible_link">
                    Maps
                </a>{" "}
                tool.
            </p>
            <p>
                This site is an open-source project by community member{" "}
                <a href={url_youtube_affinity} className="visible_link">
                    Affinity
                </a>{" "}
                and{" "}
                <a href={url_github_rune} className="visible_link">
                    Rune
                </a>
                {""}.
            </p>
        </>
    );

    return Base(content);
}

export default Home;
