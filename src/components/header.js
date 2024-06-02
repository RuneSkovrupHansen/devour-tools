import "components/header.css";
import "common.css";
import logo from "resources/logo.png";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { url_site } from "common";

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
            {HeaderLink("", "Perks")}
            {HeaderLink("", "Maps")}
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
