import React, { createContext, useContext } from "react";
import useAudioPlayer from "../CustomHooks/useAudioPlayer";

const AudioPlayerContext = createContext<any>(null);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audioPlayer}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  return useContext(AudioPlayerContext);
};