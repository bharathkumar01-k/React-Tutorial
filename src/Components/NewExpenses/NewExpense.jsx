import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const newExpenseData = {
            ...enteredExpenseData,
            id: uuid(),
        };
        console.log(newExpenseData);
        props.onAddNewExpense(newExpenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenses={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
