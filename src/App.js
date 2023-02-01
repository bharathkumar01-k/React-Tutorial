import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpenses/NewExpense";
import React, { useState } from "react";

function App() {
    const expenses = [
        {
            expenseDate: new Date(2022, 2, 22),
            expenseItem: "Car Insurance",
            expenseAmount: 2000,
        },
        {
            expenseDate: new Date(2020, 12, 16),
            expenseItem: "Bike Insurance",
            expenseAmount: 700,
        },
        {
            expenseDate: new Date(2022, 7, 23),
            expenseItem: "Rent",
            expenseAmount: 8000,
        },
        {
            expenseDate: new Date(2022, 1, 6),
            expenseItem: "Medical Insurance",
            expenseAmount: 6000,
        },
    ];
    const rows = expenses.map((expense, index) => {
        return (
            <ExpenseItem
                key={index}
                expenseDate={{
                    day: expense.expenseDate.toLocaleString("en-IN", {
                        day: "2-digit",
                    }),
                    month: expense.expenseDate.toLocaleString("en-IN", {
                        month: "long",
                    }),
                    year: expense.expenseDate.toLocaleString("en-IN", {
                        year: "numeric",
                    }),
                }}
                expenseItem={expense.expenseItem}
                expenseAmount={expense.expenseAmount}
            />
        );
    });
    const [listRow, setListRow] = useState(rows);
    console.log("rowsss......", listRow);
    const addNewExpenseHandler = (newExpense) => {
        // console.log(newExpense);
        setListRow((prevItems) => [
            ...prevItems,
            <ExpenseItem
                key={newExpense["id"]}
                expenseDate={{
                    day: newExpense.newDate.toLocaleString("en-IN", {
                        day: "2-digit",
                    }),
                    month: newExpense.newDate.toLocaleString("en-IN", {
                        month: "long",
                    }),
                    year: newExpense.newDate.toLocaleString("en-IN", {
                        year: "numeric",
                    }),
                }}
                expenseItem={newExpense.newTitle}
                expenseAmount={newExpense.newAmount}
            />,
        ]);
        // console.log(rows);
        console.log("rows here", listRow);
    };

    return (
        <div>
            <NewExpense onAddNewExpense={addNewExpenseHandler} />
            <Expenses items={listRow} />
        </div>
    );
}

export default App;
