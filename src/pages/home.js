import { Link } from "react-router-dom";

import "common.css";

import { url_github_rune, url_youtube_affinity } from "common.js";
import { feature_flag, flag_maps, flag_perks } from "feature_flag";

import { route_perks, route_maps } from "route";

export default function Home() {
    const perks = feature_flag(
        flag_perks,
        <p>
            Figure out which perk saves you the most time using the{" "}
            <Link to={route_perks} className="visible_link">
                Perks
            </Link>{" "}
            tool.
        </p>,
        <></>
    );

    const maps = feature_flag(
        flag_maps,
        <p>
            View the five devour maps with or without an item overlay with the{" "}
            <Link to={route_maps} className="visible_link">
                Maps
            </Link>{" "}
            tool.
        </p>,
        <></>
    );

    const content = (
        <>
            <h1>Welcome!</h1>
            <p>
                Welcome to Devour Tools - your hub for Devour speedrunning
                tools.
            </p>
            {perks}
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
