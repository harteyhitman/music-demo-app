import { ReactComponent as Play } from "../assets/img/play.svg";
import { ReactComponent as Next } from "../assets/img/next.svg";
import { ReactComponent as Shuffle } from "../assets/img/shuffle.svg";
import { ReactComponent as Repeat } from "../assets/img/repeat.svg";
import { ReactComponent as VolumeIcon } from "../assets/img/volumeIcon.svg";
import { FaPauseCircle } from "react-icons/fa";

import { useContext, useRef } from "react";
import MusicContext from "../context/MusicContext";

function BottomNav() {
  
    const {
      setCurrentPlay,
      currentPlay,
      play,
      audio,
      handleNext,
      handlePrev,
      handlePausePlay,
      handleShuffle,
      shuffle,
      repeat,
      handleRepeat,
    } = useContext(MusicContext);

    const { img, artist, desc, song } = currentPlay;

  const clickRef = useRef();
  const vol = useRef();

  const changePlay = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = Math.floor((offset / width) * 100);

    const time = (divprogress / 100) * audio.current.duration;
    audio.current.currentTime = time;
  };

  const changeVol = (e) => {
    let width = vol.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divprogress = Math.floor((offset / width) * 100);
    const volumeLevel = divprogress / 100;
    audio.current.volume = volumeLevel;
  };

  const isPlaying = (e) => {
    const dur = audio.current.duration;
    const ct = audio.current.currentTime;

    const progress = Math.floor((ct / dur) * 100);
    setCurrentPlay({ ...currentPlay, progress: progress, lenght: dur });
  };

  return (
    <div className="nav-2 py-5 lg:py-2 fixed bottom-0 left-0 right-0 z-40 text-white">
      <div className="flex w-11/12 m-auto gap-2 items-center lg:hidden">
        <img className="w-20 h-20 block" src={img} alt="chartImg1" />
        <div className="flex-1">
          <h3>{artist}</h3>
          <p>{desc}</p>
        </div>
        {play ? (
          <FaPauseCircle
            fill="#FACD66"
            className="w-[50px] h-[35px]"
            onClick={handlePausePlay}
          />
        ) : (
          <Play onClick={handlePausePlay} />
        )}
        <Next onClick={handleNext} />
      </div>

      <div className="lg:flex justify-between w-11/12 m-auto gap-2 items-center hidden">

        <div className="flex items-center gap-5 lg:w-[30%]">
          <img className="w-20 h-20 block" src={img} alt="chartImg1" />
          <div>
            <h3>{artist}</h3>
            <p>{desc}</p>
          </div>
        </div>

        <div className="control flex flex-1 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-8">
              <Shuffle
                onClick={handleShuffle}
                className={shuffle ? "bg-[#FACD66] rounded-full p-1" : ""}
              />
              <Next className="rotate-180" onClick={handlePrev} />
              <div className="play">
                {play ? (
                  <FaPauseCircle fill="#FACD66" onClick={handlePausePlay} />
                ) : (
                  <Play onClick={handlePausePlay} />
                )}
              </div>
              <Next onClick={handleNext} />
              <Repeat
                onClick={handleRepeat}
                className={repeat ? "bg-[#FACD66] rounded-full p-1" : ""}
              />

              <audio
                ref={audio}
                onEnded={handleNext}
                loop={repeat ? "true" : ""}
                className="block"
                onTimeUpdate={isPlaying}
              >
                <source src={song} type="audio/mpeg" />
              </audio>
            </div>

            <div
              ref={clickRef}
              className="navigation-wrapper border border-[#74633A] rounded-full w-full h-1 my-5"
              onClick={changePlay}
            >
              <div
                className={`seek_bar border border-[#FACD66] leading-1 w-[0]`}
                style={{ width: `${currentPlay.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-[15%] flex gap-2 items-center">
          <VolumeIcon />
          <div
            ref={vol}
            className="border border-[#74633A] rounded-full w-full h-1 my-5"
            onClick={changeVol}
          >
            <div
              className={`border border-[#FACD66] leading-1 w-[0]`}
              style={{ width: `${audio.current?.volume * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
