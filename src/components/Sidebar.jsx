import React from "react";
import { assets } from "../assets/spotify-assets/assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full text-white p-2 hidden lg:flex flex-col gap-2">
      <div className="bg-[#121212] h-[15%] flex flex-col justify-around rounded">
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
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
        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">Its easy we will help you</p>
          <button className="bg-white text-[15px] text-black rounded-full px-4 py-1.5 mt-3">Create Playlist</button>
        </div>
        <div className="bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 p-4 mt-3">
          <h1>Let's findsome podcasts to follow</h1>
          <p className="font-light">We'll keep you update on new episodes</p>
          <button className="bg-white text-[15px] text-black rounded-full px-4 py-1.5 mt-3">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
