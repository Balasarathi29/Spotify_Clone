import { createContext, useRef } from "react";

// Step 1: Create the context
export const PlayerContext = createContext();

// Step 2: Create the provider component
 const PlayerContextProvider = (props) => {
  const audioRef = useRef();

  const contextValue = {
    audioRef,
  };

  // Step 3: Use PlayerContext.Provider, not PlayerContextProvider
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
