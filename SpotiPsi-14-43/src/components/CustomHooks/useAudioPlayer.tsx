import { useRef, useState, useEffect } from "react";


type Song = {
  id: string;
  name: string;
  artist: string;
  album: string;
};

function useAudioPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
  if (isPlaying && audioRef.current) {
    audioRef.current.play();
  }
  }, [currentSongIndex]);

  const fetchSongs = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/songs");
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = (): void => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  };

  const handleNext = (): void => {
    setCurrentSongIndex((prev) => (prev + 1 === songs.length - 1 ? prev = 0 : prev = prev + 1));
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const handlePrev = (): void => {
    setCurrentSongIndex((prev) => (prev - 1 === 0 ? prev = songs.length - 1 : prev = prev - 1));
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return {
    songs,
    fetchSongs,
    currentSong,
    currentSongIndex,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    setCurrentTime,
    setDuration,
    setIsPlaying,
    handlePlayPause,
    handleNext,
    handlePrev,
    formatTime
  };
}

export default useAudioPlayer;