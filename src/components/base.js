import "common.css";
import "components/base.css";

import { Header } from "components/header.js";
import { Content } from "components/content.js";
import { Footer } from "components/footer.js";

export function Base(content) {
    return (
        <>
            <div className="base">
                {Header()}
                {Content(content)}
                {Footer()}
            </div>
        </>
    );
}
