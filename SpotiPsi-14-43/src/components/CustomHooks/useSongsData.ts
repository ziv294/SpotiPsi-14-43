import { useEffect, useState } from "react";
import {
  fetchAllSongs,
  fetchFavorites,
  fetchPlaylists,
  addToPlaylistApi,
  toggleFavoriteApi,
} from "../MainSection/MainSection/Pages/Api/songsApi"

export const useSongsData = () => {
  const [songs, setSongs] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    fetchAllSongs().then(setSongs);
    fetchFavorites().then(setFavorites);
    fetchPlaylists().then(setPlaylists);
  }, []);

  const toggleFavorite = async (id: string) => {
    const updated = await toggleFavoriteApi(id, favorites.includes(id));
    setFavorites(updated);
  };

  const addToPlaylist = async (playlistId: string, songId: string) => {
    await addToPlaylistApi(playlistId, songId);
    setOpenMenuId(null);
  };

  return {
    songs,
    favorites,
    playlists,
    openMenuId,
    setOpenMenuId,
    toggleFavorite,
    addToPlaylist,
  };
};