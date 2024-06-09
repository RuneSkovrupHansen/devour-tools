import "components/content.css";
import "common.css";

import { PageColumn } from "components/page_column";

export function Content(content) {
    return (
        <div className="content">
            {PageColumn(<div className="content_page">{content}</div>)}
        </div>
    );
}
