import "css/footer.css";
import "css/common.css";

import { Column } from "components/column";
import { Divider } from "components/divider";

export function FooterTitle(text) {
    return <label className="footer_title">{text}</label>;
}

function FooterLink(url, text) {
    return (
        <a href={url} className="link">
            {text}
        </a>
    );
}

export function Footer() {
    const left = (
        <div className="footer_element">
            {FooterTitle("Contributing")}
            {FooterLink(
                "https://github.com/RuneSkovrupHansen/devour-tools",
                "GitHub"
            )}
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
            {FooterLink(
                "https://www.youtube.com/@Affinity001/featured",
                "Affinity's Guides"
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
