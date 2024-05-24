import { Column } from "./column"
import { Divider } from "./divider"

export function Footer(children) {
    return (
        <header className="footer">
            {Column(children)}
            {Divider()}
        </header>
    )
}
