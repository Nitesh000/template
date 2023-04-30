import { useQuery } from "@tanstack/react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { MyObjectType } from "../types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "covid cases over time",
    },
    zoom: {
      enable: true,
      mode: "x",
    },
    pan: {
      enable: true,
      mode: "x",
    },
  },
};

const LineGraph = () => {
  const covidWithDates = useQuery({
    queryKey: ["covidCases"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res) => res.json())
        .catch((e) => console.log(e)),
  });
  var labels;
  var cases;
  var deaths;
  var recovered;
  if (covidWithDates.isSuccess) {
    const casesList = covidWithDates.data["cases"];
    const recoveredList = covidWithDates.data["recovered"];
    const deathList = covidWithDates.data["deaths"];
    labels = getLabel(casesList);
    cases = getData(casesList);
    deaths = getData(deathList);
    recovered = getData(recoveredList);

    function getData(data: MyObjectType) {
      var list = [];
      for (const i in data) {
        list.push(data[i]);
      }
      return list;
    }

    function getLabel(data: MyObjectType) {
      var l: string[] = [];
      for (const i in data) {
        l.push(i);
      }
      return l;
    }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Recovered",
        data: recovered,
        borderColor: "#41644A",
        backgroundColor: "#41644A",
      },
      {
        label: "Cases",
        data: cases,
        borderColor: "#19A7CE",
        backgroundColor: "#19A7CE",
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="h-5/6">
      {/* Line graph of the covid survey with the dates */}
      <Line className="h-5/6" options={options} data={data} />
    </div>
  );
};

export default LineGraph;
