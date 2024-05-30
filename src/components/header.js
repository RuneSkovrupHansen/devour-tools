import 'css/header.css';
import logo from "resources/logo.png"

import { Column } from "components/column"
import { Divider } from "components/divider"
import { Container } from "components/container"
import { Image } from "components/image"

export function Header() {

    const left = <div className="header_left">
        {Image(logo, "Logo")}
        <label>Devour Toolsasdada dasd asda sd</label>
    </div >

    const right = <div className="header_right">
        test
    </div>

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
