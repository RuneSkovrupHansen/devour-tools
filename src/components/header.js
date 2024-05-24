import { Column } from "./column"
import { Divider } from "./divider"

export function Header(children) {
    return (
        <header className="header">
            {Column(children)}
            {Divider()}
        </header>
    )
}
