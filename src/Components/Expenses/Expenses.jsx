import React from "react";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    console.log("here in expenses.jsx");
    console.log(props.items);
    // const [listItems, setListItems] = useState(props.items);
    const selectYearHandler = (selectedYear) => {
        const filteredYear = props.items.filter(
            (comp) => comp.props.expenseDate.year === String(selectedYear)
        );
        // setListRow((prevItems) => [...filteredYear]);
        console.log(filteredYear);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter onSelectedYear={selectYearHandler} />
            {props.items}
        </Card>
    );
};

export default Expenses;
