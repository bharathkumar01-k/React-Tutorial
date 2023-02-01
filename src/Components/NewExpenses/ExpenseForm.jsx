import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //other approaches
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //approach - 1
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // approach - 2
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            newTitle: enteredTitle,
            newAmount: enteredAmount,
            newDate: new Date(enteredDate),
        };
        props.onSaveExpenses(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        name=""
                        id="title_text"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                        name=""
                        id="title_amount"
                        min="100"
                        step="100"
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        name="title_date"
                        id=""
                        min="2019-01-01"
                        max="2023-03-01"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
