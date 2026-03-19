import { useRef, useState, useEffect } from "react";


type Song = {
  id: string;
  name: string;
  artist: string;
  album: string;
};

const songsExample = [
  {
    id: "1",
    name: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide"
  },
  {
    id: "2",
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours"
  },
  {
    id: "3",
    name: "Someone Like You",
    artist: "Adele",
    album: "21"
  }];

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

  const fetchSongs = async (songsList: Song[]) => {
  setSongs(songsList);
  setCurrentSongIndex(0);
  setIsPlaying(true);
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
    setCurrentSongIndex((prev) => (prev === songs.length - 1 ? prev = 0 : prev = prev + 1));  
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const handlePrev = (): void => {
    setCurrentSongIndex((prev) => (prev === 0 ? prev = songs.length - 1 : prev = prev - 1));
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSeek = (value: number): void => {
  audioRef.current!.currentTime = value;
  setCurrentTime(value);
};

  return {
    songs,
    fetchSongs,
    currentSong,
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
    formatTime,
    handleSeek
  };
}

export default useAudioPlayer;