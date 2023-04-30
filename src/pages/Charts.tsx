import { useQuery } from "@tanstack/react-query";
import TotalCases from "../components/TotalCases";
import LineGraph from "../components/LineGraph";

const Charts = () => {
  const allDataQuery = useQuery({
    queryKey: ["allData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()),
  });

  if (allDataQuery.isLoading) {
    return <div className="flex justify-center w-full h-full">.....</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center my-4 w-full gap-4 ">
        <TotalCases
          updated={allDataQuery.data?.updated}
          cases={allDataQuery.data?.cases}
          recovered={allDataQuery.data?.recovered}
          todayCases={allDataQuery.data?.todayCases}
        />
        <LineGraph />
      </div>
    </>
  );
};

export default Charts;
