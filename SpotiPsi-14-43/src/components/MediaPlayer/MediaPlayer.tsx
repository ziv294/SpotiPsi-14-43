import React, { useEffect } from "react";
import "./MediaPlayer.css";
import useAudioPlayer from "../CustomHooks/useAudioPlayer";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const MediaPlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    fetchSongs,
    audioRef,
    setCurrentTime,
    setDuration,
    setIsPlaying,
    handlePlayPause,
    handleNext,
    handlePrev,
    formatTime
  } = useAudioPlayer();

  useEffect(() => {
    fetchSongs();
  }, []);

  const songPath = currentSong ? `/songs/${currentSong.id}.mp3` : "";

  return (
    <div className="MediaPlayer">
      <div className="songInfo">
        <h2 className="songName">{currentSong?.name ?? "No song selected"}</h2>
        <p className="artistName">{currentSong?.artist ?? ""}</p>
      </div>

      <audio key={currentSong?.id} ref={audioRef} src={songPath} onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
onLoadedMetadata={(e) => setDuration(Math.floor(e.currentTarget.duration))}
onEnded={() => {
    setIsPlaying(false);
    handleNext();
        }}
      />

      <div className="controls">
        <button className="controlButton" onClick={handlePrev}>
          <FaStepForward />
          
        </button>

        <button className="playButton" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button className="controlButton" onClick={handleNext}>
          <FaStepBackward />
        </button>
      </div>

      <div className="timeBarSection">
        <div className="timeText">{formatTime(currentTime)}</div>

        <input className="timeBar" type="range" min="0" max={duration} value={currentTime} readOnly/>  

        <div className="timeText">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default MediaPlayer;