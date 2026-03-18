import React, { useEffect, useState } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import "./MediaPlayer.css";

type Song = {
  name: string;
  artist: string;
  duration: number;
};

const songs: Song[] = [
  { name: "song 1", artist: "artist1", duration: 247 },
  { name: "song 2", artist: "artist2", duration: 200 },
  { name: "song 3", artist: "artist3", duration: 203 }
];

const MediaPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (!isPlaying){
         return;
    }

    const timer = setInterval(() => {
      setCurrentTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, currentSong]);

  const handlePlayPause = (): void => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = (): void => {
    
    setCurrentSongIndex(prev => prev + 1 === songs.length ? prev = 0: prev = prev + 1); // make it in circle
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handlePrev = (): void => {
    setCurrentTime(0);
    setIsPlaying(false);
    setCurrentSongIndex(prev => prev - 1 === -1 ? prev = songs.length - 1: prev = prev - 1); // make it in circle
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60); // removes decimal of the minute
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="MediaPlayer">
      <div className="songInfo">
        <h2 className="songName">{currentSong.name}</h2>
        <p className="artistName">{currentSong.artist}</p>
      </div>

      <div className="controls">
        
        <button className="controlButton" onClick={handleNext}>
          <FaStepForward />
        </button>

        <button className="playButton" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button className="controlButton" onClick={handlePrev}>
          <FaStepBackward />
        </button>
      </div>

      <div className="timeBarSection">
        <span className="timeText">{formatTime(currentTime)}</span>

        <input className="timeBar" type="range" min="0" max={currentSong.duration} value={currentTime}/>

        <span className="timeText">{formatTime(currentSong.duration)}</span>
      </div>
    </div>
  );
};

export default MediaPlayer;