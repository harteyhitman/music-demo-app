import datas from "./data/data";
import ReleaseItem from "./ReleaseItem";

function Release() {

  return (
    <div className="mt-5">
      <h3 className="text-white font-bold">New release</h3>
      <div className="my-5">
        <div className="cursor-grab overflow-auto flex gap-1">
          {datas.release.map((rel) => (
            <ReleaseItem key={rel.id} rel={rel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Release;
