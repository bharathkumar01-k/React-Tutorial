import React, { useState } from "react";

import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
    const getInitialValues = () => {
        const initialvalue = "2022";
        return initialvalue;
    };
    const [selectedYear, setSeletedYear] = useState(getInitialValues);
    const selectYearHandler = (event) => {
        console.log("selected year", selectedYear);
        setSeletedYear(event.target.value);
        console.log("inside child", selectedYear);
    };
    return (
        <Card>
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                    <label>Filter by year</label>
                    <select value={selectedYear} onChange={selectYearHandler}>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                    {props.onSelectedYear(selectedYear)}
                </div>
            </div>
        </Card>
    );
};
export default ExpenseFilter;
