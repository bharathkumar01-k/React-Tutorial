import React, { Component } from "react";
import "./Calendar.css";

class Calendar extends Component {
    state = {};
    render() {
        console.log("props in calendar", this.props);
        return (
            <div className="expense-date">
                <div className="expense-date__year">{this.props.year}</div>
                <div className="expense-date__month">{this.props.month}</div>
                <div className="expense-date__day">{this.props.day}</div>
            </div>
        );
    }
}

export default Calendar;
