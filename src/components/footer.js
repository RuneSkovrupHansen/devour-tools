import "components/footer.css";
import "common.css";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { url_github_devour_tools, url_youtube_affinity } from "common";

export function FooterTitle(text) {
    return <label className="footer_title">{text}</label>;
}

function FooterLink(url, text) {
    return <a href={url}>{text}</a>;
}

export function Footer() {
    const left = (
        <div className="footer_element">
            {FooterTitle("Contributing")}
            {FooterLink(url_github_devour_tools, "GitHub")}
            {FooterLink("mailto:runeskovruphansen@gmail.com", "Feedback")}
            {FooterLink(
                "https://buymeacoffee.com/runeskovruphansen",
                "Buy Me A Coffee"
            )}
        </div>
    );
    const center = <div className="footer_element">{FooterTitle("About")}</div>;
    const right = (
        <div className="footer_element">
            {FooterTitle("Resources")}
            {FooterLink("https://www.speedrun.com/devour", "Leaderboard")}
            {FooterLink(
                "https://discord.com/channels/920850309599879219/920855552211431455",
                "Discord"
            )}
            {FooterLink(url_youtube_affinity, "Affinity's Guides")}
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
        <label className="footer_affiliation">
            Devour Tools is not affiliated with or endorsed by Straight Back
            Games.
        </label>
    );

    return (
        <div className="footer">
            {Column(container)}
            {affiliation}
            {Divider()}
        </div>
    );
}
