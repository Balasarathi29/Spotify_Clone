import React from "react";
import Navbar from "./Navbar.jsx";
import { albumsData } from "../assets/spotify-assets/assets/assets";
import { songsData } from "../assets/spotify-assets/assets/assets";
import AlbumItem from "./AlbumItem.jsx";
import SongItem from "./SongItem.jsx";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Albums</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <AlbumItem
              key={index}
              name={items.name}
              desc={items.desc}
              image={items.image}
              id={items.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((items, index) => (
            <SongItem
              key={index}
              name={items.name}
              desc={items.desc}
              image={items.image}
              id={items.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
