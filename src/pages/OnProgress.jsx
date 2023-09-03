import React from "react";
import { Link } from "react-router-dom";

import comingSoon from "../assets/img/coming-soon.jpg";
const OnProgress = () => {
  const background = {
    backgroundImage: `url(${comingSoon})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={background}>
      <div className="flex h-screen">

        <div className="text-center w-[40%] mx-auto my-10">
          <button className=" text-white font-semibold text-base md:text-lg bg-[#0F0F0F] shadow-xl p-4 rounded-lg "><Link to='/collections'>Go Back</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default OnProgress;
