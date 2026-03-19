export const fetchAllSongs = async () => {
    const res = await fetch("http://localhost:5001/api/songs");
    return res.json();
};

export const fetchFavorites = async () => {
    const res = await fetch("http://localhost:5001/api/favorites");
    return res.json();
};

export const fetchPlaylists = async () => {
    const res = await fetch("http://localhost:5001/api/playlists");
    return res.json();
};

export const addToPlaylistApi = async (playlistId: string, songId: string) => {
    await fetch(`http://localhost:5001/api/playlists/${playlistId}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playlistId, songId }),
    });
};

export const toggleFavoriteApi = async (songId: string, isFavorite: boolean) => {
    const url = isFavorite
        ? "http://localhost:5001/api/favorites/remove"
        : "http://localhost:5001/api/favorites/add";

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ songId }),
    });
    return res.json();
};