import "css/content.css";

import { Column } from "components/column";
import { Page } from "components/page";

export function Content() {
    const content = <label>Content</label>;

    return <div className="content">{Column(content)}</div>;
}
