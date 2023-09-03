import { useContext } from "react";
import MusicContext from "../context/MusicContext";

function ReleaseItem({ rel }) {


  const {handlePlay} = useContext(MusicContext) 

  // console.log(rel , 'rell')


  return (
    <div className="min-h-8"  onClick={() => handlePlay(rel)}>
      <div className="relative h-full rounded-xl py-3 px-2 bg-dark">
        <div className="w-40 h-40">
          <img
            className="block rounded pointer-events-none cursor-pointer"
            src={rel.img}
            alt='new release music'
          />
        </div>
      </div>
    </div>
  );
}

export default ReleaseItem;
