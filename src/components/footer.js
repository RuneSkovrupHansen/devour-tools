import "css/footer.css";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { FooterLink } from "components/footer_link";
import { FooterTitle } from "./footer_title";

export function Footer() {
    const contributing = (
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
    const about = <div className="footer_element">{FooterTitle("About")}</div>;
    const resources = (
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
            {contributing}
            {about}
            {resources}
        </div>
    );

    return (
        <div className="footer">
            {Column(container)}
            {Divider()}
        </div>
    );
}
