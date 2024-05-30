import 'css/header.css';
import logo from "resources/logo.png"

import { Column } from "components/column"
import { Divider } from "components/divider"
import { Container } from "components/container"

export function Header() {

    const left = <div className="header_left">
        {/* <img src={logo} alt="Logo" className='header_logo' /> */}
        test
    </div >
    const right = <div className="header_right">
        {/* <img src={logo} alt="Logo" className='header_logo' /> */}
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
