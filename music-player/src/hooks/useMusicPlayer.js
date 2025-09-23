import React, { createContext, useContext, useState, useCallback } from 'react';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // 'off', 'all', 'one'

  const playSong = useCallback((song, songList = null) => {
    setCurrentSong(song);
    setIsPlaying(true);
    
    if (songList) {
      setPlaylist(songList);
      const index = songList.findIndex(s => s.id === song.id);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, []);

  const pauseSong = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resumeSong = useCallback(() => {
    if (currentSong) {
      setIsPlaying(true);
    }
  }, [currentSong]);

  const nextSong = useCallback(() => {
    if (playlist.length === 0) return;
    
    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }
    
    setCurrentIndex(nextIndex);
    setCurrentSong(playlist[nextIndex]);
    setIsPlaying(true);
  }, [playlist, currentIndex, isShuffle]);

  const previousSong = useCallback(() => {
    if (playlist.length === 0) return;
    
    let prevIndex;
    if (isShuffle) {
      prevIndex = Math.floor(Math.random() * playlist.length);
    } else {
      prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    }
    
    setCurrentIndex(prevIndex);
    setCurrentSong(playlist[prevIndex]);
    setIsPlaying(true);
  }, [playlist, currentIndex, isShuffle]);

  const toggleShuffle = useCallback(() => {
    setIsShuffle(prev => !prev);
  }, []);

  const toggleRepeat = useCallback(() => {
    const modes = ['off', 'all', 'one'];
    const currentModeIndex = modes.indexOf(repeatMode);
    const nextModeIndex = (currentModeIndex + 1) % modes.length;
    setRepeatMode(modes[nextModeIndex]);
  }, [repeatMode]);

  const setPlaylistAndPlay = useCallback((songs, startIndex = 0) => {
    setPlaylist(songs);
    setCurrentIndex(startIndex);
    setCurrentSong(songs[startIndex]);
    setIsPlaying(true);
  }, []);

  const addToQueue = useCallback((song) => {
    setPlaylist(prev => [...prev, song]);
  }, []);

  const removeFromQueue = useCallback((songId) => {
    setPlaylist(prev => prev.filter(song => song.id !== songId));
  }, []);

  const clearQueue = useCallback(() => {
    setPlaylist([]);
    setCurrentIndex(0);
  }, []);

  const value = {
    // State
    currentSong,
    isPlaying,
    playlist,
    currentIndex,
    volume,
    isShuffle,
    repeatMode,
    
    // Actions
    playSong,
    pauseSong,
    resumeSong,
    nextSong,
    previousSong,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    setPlaylistAndPlay,
    addToQueue,
    removeFromQueue,
    clearQueue,
    
    // Setters (for direct control)
    setCurrentSong,
    setIsPlaying,
    setCurrentIndex,
  };

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};