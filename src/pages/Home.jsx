import artistImg from "../assets/img/artistImg.svg";
import heart from "../assets/img/heart.svg";
import headerImg from "../assets/img/headerImg.svg";
import headerImgBig from "../assets/img/headerImgBig.svg";
import headervec from "../assets/img/headervec.svg";

import headerImgBigPerson from "../assets/img/headerImgBigPerson.svg";

import TopChart from "../components/Charts";
import Release from "../components/Release";

function Home() {

  return (
    <div className="container py-6 lg:pl-[30px]">
      <div className="lg:flex justify-between w-full lg:mb-10 items-start lg:max-h-full">

        <header className="max-w-sm lg:max-w-full m-auto lg:m-0 lg:w-[65%]">
          <div className="relative text-white">
            <div className="img relative overflow-hidden ">
              <img
                className="w-full lg:hidden"
                src={headerImg}
                alt="headerImg"
              />
              <img
                className="w-full hidden lg:block"
                src={headerImgBig}
                alt="headerImgBig"
              />

              <img
                className="absolute hidden lg:block top-0 right-0 rotate--45"
                src={headervec}
                width="1115.62px"
                height="277px"
                alt="headervec"
              />

              <img
                className="absolute hidden lg:block bottom-0 right-0"
                src={headerImgBigPerson}
                alt="headerImgBigPerson"
              />
            </div>

            <div className="absolute top-0 h-full">
              <div className="h-full flex flex-col justify-between p-8 lg:w-[53%]">
                <span className="text-sm flex-1 lg:flex-none">
                  Currated playlist
                </span>
                <div className="text">
                  <h1>R & B Hits</h1>
                  <p>
                    All mine, Lie again, Petty call me everyday, Out of time, No
                    love, Bad habit, and so much more
                  </p>
                </div>
                <div className="flex items-center justify-between lg:justify-start lg:gap-4 mt-10 lg:mt-0">
                  <img src={artistImg} alt="artist Imgage" />
                  <img src={heart} alt="heart" />
                  <h2>33k Likes</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="lg:w-[33%]">
          <TopChart />
        </div>

      </div>

      <Release />
    </div>
  );
}

export default Home;
