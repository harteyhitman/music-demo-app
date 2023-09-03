import { useNavigate } from "react-router-dom";
import heart from "../assets/img/heartTransparent.svg";

function ChartItem({ chart }) {
  const navigate = useNavigate();

  const getChart = () => {
    navigate(`/viewChart/${chart.id}`);
  };

  return (
    <div className="min-h-8 min-w-[90%] sm:min-w-[50%]" onClick={getChart}>
      <div className="bg-dark relative h-full rounded-xl py-3 px-2 lg:flex items-center justify-between gap-3">
        <div className="w-28 lg:w-[63px] mb-5 h-24 lg:h-[63px]">
          <img
            className="block rounded pointer-events-none cursor-pointer"
            src={chart.img}
            alt={chart.desc}
          />
        </div>

        <div className="py-3 lg:py-0 text-white lg:flex-1">
          <h4 className="mt-2 lg:m-0">{chart.artist}</h4>
          <p className="mb-4 lg:m-0 text-gray-600"> {chart.desc}</p>
        </div>
        <div className="absolute top-3 right-4 lg:static">
          <div className="border border-white rounded-full p-1">
            <img src={heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartItem;
