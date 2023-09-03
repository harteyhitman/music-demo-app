import { useContext } from "react";
import MusicContext from "../context/MusicContext";
import ChartItem from "./ChartItem";
import datas from "./data/data";

function Charts() {

  const { topChart } = useContext(MusicContext);

  return (
    <div className="mt-10 lg:m-0">
      <h3 className="text-white font-bold">Top charts</h3>
      <div className="m-auto my-5 lg:my-1">
        <div className="cursor-grab overflow-scroll lg:overflow-hidden flex lg:flex-col gap-4 lg:gap-5">
          {topChart.map((chart) => (
            <ChartItem key={chart.id} chart={chart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Charts;
