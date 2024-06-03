import "components/header.css";
import "common.css";
import logo from "resources/logo.png";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { url_site, url_site_perks, url_site_maps } from "common";
import { feature_flag, flag_maps, flag_perks } from "feature_flag";

function HeaderLink(url, text) {
    return (
        <a href={url} className="header_link">
            {text}
        </a>
    );
}

export function Header() {
    // Note that the entire left container is a hyperlink which
    // also inherrits from 'header_section_container'.
    const left = (
        <a
            href={url_site}
            className="header_section_container"
            draggable="false"
        >
            <img
                src={logo}
                alt="Logo"
                className="header_logo"
                draggable="false"
            ></img>
            <h1>Devour Tools</h1>
        </a>
    );

    const right = (
        <div className="header_section_container header_section_container_right">
            {feature_flag(flag_perks, HeaderLink(url_site_perks, "Perks"))}
            {feature_flag(flag_maps, HeaderLink(url_site_maps, "Maps"))}
        </div>
    );

    const container = (
        <div className="header_container">
            {left}
            {right}
        </div>
    );

    return (
        <header className="header">
            {Column(container)}
            {Divider()}
        </header>
    );
}
