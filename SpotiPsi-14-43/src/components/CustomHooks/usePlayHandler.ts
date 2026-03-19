import { useAudioPlayerContext } from "./AudioPlayerContext";

export const usePlayHandler = () => {
  const { fetchSongs } = useAudioPlayerContext();

  const playFromList = (list: any[], index: number) => {
    const recordedSongs = [
      ...list.slice(index),
      ...list.slice(0, index),
    ];
    fetchSongs(recordedSongs);
  };

  return { playFromList };
};