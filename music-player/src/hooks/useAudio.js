import { useState, useRef, useEffect, useCallback } from 'react';

export const useAudio = (src) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  // Create audio element when src changes
  useEffect(() => {
    if (src) {
      const audioElement = new Audio(src);
      audioElement.preload = 'metadata';
      
      // Set up event listeners
      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };
      
      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };
      
      const handleEnded = () => {
        setPlaying(false);
      };
      
      const handleCanPlay = () => {
        console.log('Audio can play');
      };
      
      const handleError = (e) => {
        console.error('Audio error:', e);
      };

      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('ended', handleEnded);
      audioElement.addEventListener('canplay', handleCanPlay);
      audioElement.addEventListener('error', handleError);

      setAudio(audioElement);
      audioRef.current = audioElement;

      // Cleanup previous audio
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleEnded);
          audioRef.current.removeEventListener('canplay', handleCanPlay);
          audioRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [src]);

  const play = useCallback(async () => {
    if (audio) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  }, [audio]);

  const pause = useCallback(() => {
    if (audio) {
      audio.pause();
      setPlaying(false);
    }
  }, [audio]);

  const seek = useCallback((time) => {
    if (audio) {
      audio.currentTime = time;
    }
  }, [audio]);

  const setVolumeLevel = useCallback((volume) => {
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, volume));
    }
  }, [audio]);

  const toggle = useCallback(() => {
    if (playing) {
      pause();
    } else {
      play();
    }
  }, [playing, play, pause]);

  return {
    audio,
    playing,
    duration,
    currentTime,
    play,
    pause,
    seek,
    setVolumeLevel,
    toggle
  };
};