import "css/footer.css";

import { Column } from "components/column";
import { Divider } from "components/divider";
import { Container } from "components/container";

export function Footer() {
    // const left = <div className="footer_left">Left</div>
    // const center = <div className="footer_center">center</div>
    // const right = <div className="footer_right">right</div>

    // const items = <>
    //     {left}
    //     {center}
    //     {right}
    // </>

    // {
    //     /* {Column(Container(items))} */
    // }

    const content = <>Footer</>;

    return (
        <div className="footer">
            {Column(content)}
            {Divider()}
        </div>
    );
}
