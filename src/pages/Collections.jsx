import React from "react";
import { Link } from "react-router-dom";
import CollectionsItem from "../components/collections/CollectionsItem";
import datas from "../components/data/data";

function Collections() {
  return (
    <section className="relative lg:pl-[50px] text-white">
      <div className="container py-6">
        <ul className="info-control coll flex justify-between gap-3 mb-5 max-w-[359px] m-auto md:mx-0">
          <li className="active">My collection</li>
          <li><Link to="/onprogress">Likes</Link> </li>
        </ul>

        <div className="collection-list flex flex-wrap gap-5 md:gap-0 ">
          {datas.collectionsData.map((collection) => (
            <CollectionsItem key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;
