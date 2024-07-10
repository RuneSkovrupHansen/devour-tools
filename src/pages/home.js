import { Link } from "react-router-dom";

import "common.css";

import { url_github_rune, url_youtube_affinity } from "common.js";

import { route_perks, route_maps } from "route";
import { Flag, feature_flag } from "feature_flag";

export default function Home() {
    const maps = (
        <p>
            View the maps{" "}
            {feature_flag(Flag.map_overlays, "with item overlays ", "")}with the{" "}
            <Link to={route_maps} className="visible_link">
                Maps
            </Link>{" "}
            tool.
        </p>
    );

    const content = (
        <>
            <h1>Welcome!</h1>
            <p>
                Welcome to Devour Tools - your hub for Devour speedrunning
                tools.
            </p>
            <p>
                Figure out which perk saves you the most time using the{" "}
                <Link to={route_perks} className="visible_link">
                    Perks
                </Link>{" "}
                tool.
            </p>
            {maps}
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

    return content;
}
