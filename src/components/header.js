import 'css/header.css';

import { Column } from "components/column"
import { Divider } from "components/divider"
import { Container } from "components/container"

export function Header() {

    const left = <div className="header_left">Left</div>
    const right = <div className="header_right">right</div>

    const items = <>
        {left}
        {right}
    </>

    return (
        <header className="header">
            {Column(Container(items))}
            {Divider()}
        </header>
    )
}
