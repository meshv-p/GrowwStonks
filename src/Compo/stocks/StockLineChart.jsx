'use client'
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from "react";


function convertJsonToLineChartArray(jsonData) {
    const lineChartData = [];

    for (const date in jsonData["Time Series (Daily)"]) {
        const closingPrice = jsonData["Time Series (Daily)"][date]["4. close"];

        lineChartData.push({
            date: date,
            price: closingPrice,
        });
    }

    return lineChartData;
}

const StockLineChart = ({ data }) => {
    const [chart, setChart] = useState(null);
    const lineChartData = convertJsonToLineChartArray(data);


    useEffect(() => {

        const res = fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo').then(res => res.json()).then(data => {
            console.log(data)

            const lineChartData = convertJsonToLineChartArray(data);
            lineChartData.slice(0, 10);
            console.log(lineChartData)




            console.log(lineChartData, data)
            const canvas = document.querySelector("canvas");
            const ctx = canvas.getContext("2d");

            if (canvas && ctx) {
                const newChart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: lineChartData.map((item) => item.date),
                        datasets: [
                            {
                                label: "Stock Price",
                                data: lineChartData.map((item) => item.price),
                            },
                        ],
                    },
                    options: {},
                });

                // newChart.destroy();
                setChart(newChart);

                return () => {
                    newChart.destroy()
                }
            }


        })





    }, [data]);

    return (
        <div>
            <canvas width={900} height={450} />
        </div>
    );
};

export default StockLineChart;
