import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
function Trend(props) {
  // aggregate cases data
  const [currentCases, casesUpdate] = useState("");
  const [date, dateUpdate] = useState("");
  const [figure, figureUpdate] = useState("");
  //setting up line graph
  const stats = {
    labels: date,
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#E1F4E1",
        borderColor: "#EAECEA",
        borderWidth: 2,
        data: figure,
      },
    ],
  };

  useEffect(() => {
    let url = "https://disease.sh/v3/covid-19/historical/all?lastdays=30";
    if (props.country) {
      url = `https://disease.sh/v3/covid-19/historical/${props.country}?lastdays=30`;
    }
    async function getHistorical() {
      const resp = await fetch(url);
      const data = await resp.json();
      // const { timeline } = data;
      const { cases, deaths, recovered, updated } = data;
      // let keys = Object.keys(cases);
      // let values = Object.values(cases);
      casesUpdate(cases);
      dateUpdate(updated);
      // figureUpdate(values);
    }
    getHistorical();
  }, [props.country]);
  return (
    <section id="chart">
      <Line
        data={stats}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "30 Days Trend",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </section>
  );
}

export default Trend;
