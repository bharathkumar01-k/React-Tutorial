import React, { Component } from "react";
import "./ExpenseItem.css";
import Calendar from "./Calendar";
import Card from "../UI/Card";

class ExpenseItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenseItem: props.expenseItem,
        };
    }
    // state = { ...this.props };
    clickHandler = () => {
        this.setState({ expenseItem: "Changed Value" });
        console.log(this.state);
    };
    render() {
        console.log(this.props);
        return (
            <Card className="expense-item">
                <Calendar {...this.props.expenseDate} />
                <div className="expense-item__description">
                    <h2>{this.props.expenseItem}</h2>
                    <div className="expense-item__price">
                        ₹{this.props.expenseAmount}
                    </div>
                    <button onClick={this.clickHandler}>Change Title</button>
                </div>
            </Card>
            // <Card>
            //     <div className="expense-item">
            //         <Calendar {...this.props.expenseDate} />
            //         <div className="expense-item__description">
            //             <h2>{this.props.expenseItem}</h2>
            //         </div>
            //         <div className="expense-item__price">
            //             {`₹${this.props.expenseAmount}`}
            //         </div>
            //     </div>
            // </Card>
        );
    }
}

export default ExpenseItem;
