import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    console.log("datapoint values", dataPointValues);
    const totalMaximum = Math.max(...dataPointValues);
    console.log("total max", totalMaximum);
    return (
        <div className="chart">
            {props.dataPoints.map((data) => (
                <ChartBar
                    key={data.label}
                    value={data.value}
                    maxvalue={totalMaximum}
                    label={data.label}
                />
            ))}
        </div>
    );
};
export default Chart;
