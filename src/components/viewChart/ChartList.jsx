import { useContext } from "react";
import { ReactComponent as Info } from "../../assets/img/info.svg";
import MusicContext from "../../context/MusicContext";

function ChartList({ chart }) {
  const { handlePlay } = useContext(MusicContext);

  return (
    <>
      {chart.songs.map((song) => (
        <div
          key={song.id}
          className="flex items-center gap-3"
          onClick={() => handlePlay(song)}
        >
          <img className="w-[50px]" src={song.img} alt={song.artist} />
          <div className="info flex-1">
            <h5>{song.artist}</h5>
            <span>{song.desc}</span>
          </div>
          <div className="control flex flex-col gap-1">
            <Info />
            <h5>{song.duration}</h5>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChartList;
