import "css/header.css";
import "css/common.css";
import logo from "resources/logo.png";

import { Column } from "components/column";
import { Divider } from "components/divider";

function HeaderLink(url, text) {
    return (
        <a href={url} className="header_link link">
            {text}
        </a>
    );
}

export function Header() {
    // const main_site = "http://localhost:3000/devour-tools";
    const main_site = "https://runeskovruphansen.github.io/devour-tools/";

    // Note that the entire left container is a hyperlink
    // with both 'header_section_container' and 'link' classes.
    const left = (
        <a
            href={main_site}
            className="header_section_container link"
            draggable="false"
        >
            <img
                src={logo}
                alt="Logo"
                className="header_logo"
                draggable="false"
            ></img>
            <label className="title">Devour Tools</label>
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
