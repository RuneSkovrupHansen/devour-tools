import { Column } from "./column"

export function Content(children) {
    return (
        <div className="content">
            {Column(children)}
        </div>
    )
}
