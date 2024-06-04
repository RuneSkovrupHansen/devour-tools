import "components/footer.css";
import "common.css";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { url_github_devour_tools } from "common";
import { Link } from "react-router-dom";
import { route_faq } from "route";

function Title(text) {
    return <h1>{text}</h1>;
}

function HyperLink(url, text) {
    return <a href={url}>{text}</a>;
}

function RouteLink(route, text) {
    return <Link to={route}>{text}</Link>;
}

export function Footer() {
    const left = (
        <div className="footer_element">
            {Title("Contributing")}
            {HyperLink(url_github_devour_tools, "GitHub")}
            {HyperLink(
                "https://buymeacoffee.com/runeskovruphansen",
                "Buy Me A Coffee"
            )}
        </div>
    );
    const center = (
        <div className="footer_element">
            {Title("About")}
            {RouteLink(route_faq, "FAQ")}
        </div>
    );
    const right = (
        <div className="footer_element">
            {Title("Resources")}
            {HyperLink("https://www.speedrun.com/devour", "Leaderboard")}
            {HyperLink(
                "https://discord.com/channels/920850309599879219/920855552211431455",
                "Discord"
            )}
        </div>
    );

    const container = (
        <div className="footer_container">
            {left}
            {center}
            {right}
        </div>
    );

    const affiliation = (
        <p className="footer_affiliation">
            Devour Tools is not affiliated with or endorsed by Straight Back
            Games.
        </p>
    );

    return (
        <div className="footer">
            {Column(container)}
            {affiliation}
            {Divider()}
        </div>
    );
}
