import React from "react";
import { assets } from "../assets/spotify-assets/assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full text-white p-2 hidden lg:flex flex-col gap-2">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around rounded">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <button className="font-bold">Home</button>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <button className="font-bold">Search</button>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="" />
            <button className="font-semibold">Your Library</button>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
