import React from "react";
import { useState } from "react";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    console.log("here in expenses.jsx");
    console.log(props.items);
    const [filteredYear, setFilteredYear] = useState("2022");
    const selectYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(
        (comp) => comp.props.expenseDate.year === String(filteredYear)
    );
    console.log(filteredExpenses);
    return (
        <Card className="expenses">
            <ExpenseFilter onSelectedYear={selectYearHandler} />
            {filteredExpenses.length === 0 ? (
                <p>No Expenses Found...</p>
            ) : (
                <ul className="expenses-list">{filteredExpenses}</ul>
            )}
        </Card>
    );
};

export default Expenses;
