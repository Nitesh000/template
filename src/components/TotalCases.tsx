type TotalCasesProps = {
  updated: number;
  cases: number;
  todayCases: number;
  recovered: number;
};

const TotalCases = ({
  updated,
  cases,
  todayCases,
  recovered,
}: TotalCasesProps) => {
  return (
    <div className="flex flex-col gap-1">
      {/*Just have to print out the total cases like some template*/}
      <div>
        <span className="text-darkBrown font-semibold text-xl">
          Total Cases:{" "}
        </span>
        <span className="text-red-800">{cases}</span>
      </div>
      <div>
        <span className="text-darkBrown font-semibold text-xl">
          Today's Cases:{" "}
        </span>
        <span className="text-red-800">{todayCases}</span>
      </div>
      <div>
        <span className="text-darkBrown font-semibold text-xl">
          Total Recovered:{" "}
        </span>
        <span className="text-green-700">{recovered}</span>
      </div>
      <span className="text-end underline decoration-black">
        {new Date(updated).toLocaleDateString()}
      </span>
    </div>
  );
};

export default TotalCases;
