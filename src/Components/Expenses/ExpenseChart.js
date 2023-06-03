import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
    const chartDataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 },
    ];
    const expenseArray = props.expenses.map((expense) => expense.props);
    const getMonthNumberFromName = (monthName) => {
        const year = new Date().getFullYear();
        return new Date(`${monthName} 1, ${year}`).getMonth() + 1;
    };
    for (const expense of expenseArray) {
        const expenseMonth =
            getMonthNumberFromName(expense.expenseDate.month) - 1;
        console.log("expense month", expenseMonth);
        chartDataPoints[expenseMonth].value += expense.expenseAmount;
    }
    console.log("chart data points", chartDataPoints);
    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
