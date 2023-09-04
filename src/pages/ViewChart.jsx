import datas from "../components/data/data";
import { useParams } from "react-router-dom";

import { ReactComponent as Play } from "../assets/img/playChart.svg";
import { ReactComponent as Playlist } from "../assets/img/playListChart.svg";
import { ReactComponent as Heart } from "../assets/img/heart.svg";
import {AiFillHeart} from "react-icons/ai"


import ChartList from "../components/viewChart/ChartList";
import { useState } from "react";


function ViewChart() {

  const { id: currentChartId } = useParams();

  const viewChar = datas.topChart.filter((data) => data.id === currentChartId);

  const [{ artist, img }] = viewChar;

  const [likes , setLikes] = useState(false)

  return (
    <section
      className="chart-view relative lg:pl-[50px] pb-24 text-white bg-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "230vh 342vw",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-6">
        <div className=" flex flex-col lg:flex-row items-center gap-6 pb-6">
          <div className="img max-w-[320px] m-auto">
            <img src={img} alt={artist} width="357px" height="289px" />
          </div>
          <div>
            <h1>Tomorrow’s tunes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="my-2">64 songs ~ 16 hrs+</p>
            <div className="info-control flex flex-wrap items-center gap-2 mt-5">
              <li>
                <Play className="inline" />
                <i>Play all</i>
              </li>
              <li>
                <Playlist className="inline" />
                <i> Add to collection</i>
              </li>

              <li onClick={() => setLikes(!likes)}>
                {
                  !likes ? <Heart/> :  <AiFillHeart fill="red"/>
                }
            
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {viewChar.map((chart) => (
            <ChartList key={chart.id} chart={chart} />
          ))}
        </div>
      </div>

      <div className="thumbnail absolute top-0 right-0 left-0 bottom-0 z-[-1px]"></div>
    </section>
  );
}

export default ViewChart;
