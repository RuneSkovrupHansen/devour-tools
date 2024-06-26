import { Component, React } from "react";

/* Wrapper class for <img/> to provide additional functionality.

The Image class is created by extending the Coponent class rather
than as a function returning elements to allow for optional
and named arguments / attributes. */

export class Image extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.title = props.title;
        this.onClick = props.onClick;
    }

    render() {
        return (
            <>
                {this.title ? <h3>{this.title}</h3> : null}
                <img
                    src={this.src}
                    onClick={this.onClick ? this.onClick : null}
                />
            </>
        );
    }
}
