import "common.css";
import "components/site.css";

import { Header } from "components/header.js";
import { Content } from "components/content.js";
import { Footer } from "components/footer.js";

export function Site(content) {
    return (
        <div className="site">
            {Header()}
            {Content(content)}
            {Footer()}
        </div>
    );
}
