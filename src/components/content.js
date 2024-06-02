import "components/content.css";
import "common.css";

import { Column } from "components/column";
import { Page } from "components/page";
import { url_github_rune, url_youtube_affinity } from "common.js";

export function Content() {
    const content = (
        <>
            <h1>Welcome!</h1>
            <p>
                Welcome to Devour Tools - your hub for Devour speedrunning
                tools.
            </p>
            <p>
                Figure out which perk saves you the most time using the perk
                tool [Link].
            </p>
            <p>
                View the five devour maps with or without an item overlay with
                the map tool [Link].
            </p>
            <p>
                This site is an open-source project by community member{" "}
                <a className="visible_link" href={url_youtube_affinity}>
                    Affinity
                </a>{" "}
                and{" "}
                <a className="visible_link" href={url_github_rune}>
                    Rune
                </a>
                .
            </p>
        </>
    );

    return <div className="content">{Column(Page(content))}</div>;
}
