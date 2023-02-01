import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    state = {};
    render() {
        console.log(this.props);
        const classes = "card " + this.props.className;
        return <div className={classes}>{this.props.children}</div>;
    }
}

export default Card;
