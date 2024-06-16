import { Link } from "react-router-dom";

import "common.css";
import "components/header.css";
import logo from "resources/horns.png";

import { route_home, route_perks, route_maps } from "route";
import { feature_flag, flag_maps, flag_perks } from "feature_flag";

import { PageColumn } from "components/page_column";
import { Divider } from "components/divider";

function HeaderLink(route, text) {
    return (
        <Link className="header_link" to={route}>
            {text}
        </Link>
    );
}

export function Header() {
    /* Note that the entire left container is a link which
    also inherrits from 'header_section_container'. */
    const left = (
        <Link
            to={route_home}
            className="header_section_container"
            draggable="false"
        >
            <img
                src={logo}
                alt="Logo"
                className="image_fit_parent"
                draggable="false"
            ></img>
            <h1>Devour Tools</h1>
        </Link>
    );

    const right = (
        <div className="header_section_container header_section_right">
            {feature_flag(flag_perks, HeaderLink(route_perks, "Perks"), <></>)}
            {feature_flag(flag_maps, HeaderLink(route_maps, "Maps"), <></>)}
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
            {PageColumn(container)}
            {Divider()}
        </header>
    );
}
