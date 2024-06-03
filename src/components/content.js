import "components/content.css";
import "common.css";

import { Column } from "components/column";

export function Content(content) {
    return (
        <div className="content">
            {Column(<div className="content_page">{content}</div>)}
        </div>
    );
}
