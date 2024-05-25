import "css/content.css"

import { Column } from "components/column"
import { Page } from "components/page"

export function Content(children) {
    return (
        <div className="content">
            {Column(Page(children))}
        </div>
    )
}
