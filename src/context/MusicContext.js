import { createContext, useEffect, useRef, useState } from "react";

import datas from "../components/data/data";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

  const initialSong = datas.topChart[0].songs[0]
  
  const [topChart, setTopChart] = useState(datas.topChart)
  const [currentPlay, setCurrentPlay] = useState(initialSong)
  
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  
  const audio = useRef();
  
  
  useEffect(() => {
    audio.current.load();
  }, [])

  useEffect(() => {
    if (play) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [play])

  const handlePausePlay = () => {
    if (play) {
      setPlay((play) => !play);
      audio.current.pause();
    } else {
      setPlay((play) => !play);
      audio.current.play();
    }
  };

  const type = topChart.filter((chart) => chart.type === currentPlay.type)

  const handleReset = () => {
    setPlay(true)
    audio.current.load();
    audio.current.play();
    audio.current.currentTime = 0;
  }

  const handleNext = () => {
    // if it is latest release music list
    if (type.length === 0) {

      const index = datas.release.findIndex(x => x.id === currentPlay.id);

      if (shuffle) {
        setCurrentPlay(datas.release[Math.floor(Math.random() * datas.release.length)])
        handleReset()
        return;
      }

      if (index === datas.release.length - 1) {
        setCurrentPlay(datas.release[index - (datas.release.length - 1)])
      }

      else {
        setCurrentPlay(datas.release[index + 1])
      }
    }

    // if it is charttop music list
    else {
      const index = type[0].songs.findIndex(x => x.id === currentPlay.id);

      if (index === type[0].songs.length - 1) {
        setCurrentPlay(type[0].songs[index - (type[0].songs.length - 1)])
      }
      if (shuffle) {
        setCurrentPlay(type[0].songs[Math.floor(Math.random() * type[0].songs.length)])
        handleReset()
        return;
      }
      else {
        setCurrentPlay(type[0].songs[index + 1])
      }
    }
    handleReset()
  };

  const handlePrev = () => {
    // if it is latest release music list
    if (type.length === 0) {
      const index = datas.release.findIndex(x => x.id === currentPlay.id);

      if (index === 0) {
        setCurrentPlay(datas.release[datas.release.length - 1])
        handleReset()
        return;
      }

      if (shuffle) {
        setCurrentPlay(datas.release[Math.floor(Math.random() * datas.release.length)])
        handleReset()
        return;
      }
      else {
        setCurrentPlay(datas.release[index - 1])
      }
    }
    // if it is charttop music list

    else {
      const index = type[0].songs.findIndex(x => x.id === currentPlay.id);
      if (index === 0) {
        setCurrentPlay(type[0].songs[type[0].songs.length - 1])
        handleReset()
        return;
      }
      if (shuffle) {
        setCurrentPlay(type[0].songs[Math.floor(Math.random() * type[0].songs.length)])
        handleReset()
        return;
      }
      else {
        setCurrentPlay(type[0].songs[index - 1])
      }
    }

    handleReset()
  };


  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const handleRepeat = () => {
    setRepeat(!repeat)
  }

  const handlePlay = (song) => {
    setCurrentPlay(song);
    setPlay(true)
    audio.current.load();
    audio.current.play();
  };

  return <MusicContext.Provider value={{
    topChart,
    currentPlay,
    play,
    audio,
    shuffle,
    repeat,
    handleRepeat,
    setPlay,
    handleNext,
    handlePrev,
    handlePausePlay,
    setCurrentPlay,
    handlePlay,
    handleShuffle,
  }}>{children}</MusicContext.Provider>;
};

export default MusicContext;
