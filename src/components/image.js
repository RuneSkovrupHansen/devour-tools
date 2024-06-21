import { Component, React } from "react";

/* Wrapper class for <img/> to provide additional functionality. */

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
