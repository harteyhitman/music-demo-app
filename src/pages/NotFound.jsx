import React from "react";
import { Link } from "react-router-dom";

import notFound from "../assets/img/not-found.jpg";
const NotFound = () => {
  const background = {
    backgroundImage: `url(${notFound})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={background}>
      <div className="flex h-screen">

        <div className="text-center w-[40%] mx-auto my-10">
          <button className=" text-white font-semibold text-base md:text-lg bg-[#0F0F0F] shadow-xl p-4 rounded-lg "><Link to='/'>Go Back</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
