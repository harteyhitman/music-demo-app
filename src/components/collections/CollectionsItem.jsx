import { ReactComponent as Play } from "../../assets/img/play.svg";

function CollectionsItem({ collection }) {
  return (
    <div className="collection min-w-[320px] sm:min-w-[213px] lg:min-w-[250px] m-auto">
      <div className="collection-item relative text-white overflow-hidden rounded-3xl h-[30vh] lg:h-[234px]">
        <div className="item relative overflow-hidden w-full">
          <img
            className="w-full object-cover"
            src={collection.img}
            alt={collection.artist}
          />
        </div>

        <div className="absolute lg:bottom-[-50px] bottom-0 left-0 w-full">
          <div className="relative h-full flex flex-col justify-end gap-1 py-4 px-6">
            <div>
              <h2>{collection.info}</h2>
              <span>{collection.artist}</span>
            </div>

            <div className="flex lg:opacity-0 justify-between items-center w-full">
              <h4>{collection.likes}</h4>
              <Play className="w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsItem;
