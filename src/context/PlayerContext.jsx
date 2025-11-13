import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/spotify-assets/assets/assets";

// Step 1: Create the context
export const PlayerContext = createContext();

// Step 2: Create the provider component
 const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track , setTrack] = useState(songsData[1])
  const [playerStatus , setPlayerStatus] = useState(false)
  const [time , setTime] = useState({
    currentTime : {
      second :0,
      minute : 0
    },
    totalTime:{
      second : 0,
      minute : 0,
    }
  })

  const play = ()=>{
    audioRef.current.play();
    setPlayerStatus(true)
  }
  const pause = ()=>{
    audioRef.current.pause();
    setPlayerStatus(false)
  }

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    play,
    pause
  };

  // Step 3: Use PlayerContext.Provider, not PlayerContextProvider
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
