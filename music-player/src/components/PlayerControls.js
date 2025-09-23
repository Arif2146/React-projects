import React, { useState, useRef, useEffect } from 'react';
import { useAudio } from '../hooks/useAudio';
import { formatTime } from '../utils/formatTime';

const PlayerControls = ({ currentSong, isPlaying, setIsPlaying, songs, onSongSelect }) => {
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState('off'); // 'off', 'all', 'one'

  const {
    audio,
    play,
    pause,
    seek,
    setVolumeLevel
  } = useAudio(currentSong?.audio);

  useEffect(() => {
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleEnd = () => {
        if (repeatMode === 'one') {
          audio.currentTime = 0;
          play();
        } else if (repeatMode === 'all' || repeatMode === 'off') {
          handleNext();
        }
      };

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleEnd);

      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleEnd);
      };
    }
  }, [audio, repeatMode]);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);

  useEffect(() => {
    if (audio) {
      setVolumeLevel(volume);
    }
  }, [volume, audio, setVolumeLevel]);

  const handlePlayPause = () => {
    if (!currentSong) return;
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!currentSong || !songs.length) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let nextIndex;
    
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentIndex + 1) % songs.length;
    }
    
    onSongSelect(songs[nextIndex]);
  };

  const handlePrevious = () => {
    if (!currentSong || !songs.length) return;
    
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    let prevIndex;
    
    if (isShuffle) {
      prevIndex = Math.floor(Math.random() * songs.length);
    } else {
      prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    }
    
    onSongSelect(songs[prevIndex]);
  };

  const handleProgressClick = (e) => {
    if (!audio) return;
    
    const progressBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const newTime = (clickX / width) * duration;
    
    seek(newTime);
  };

  const handleVolumeChange = (e) => {
    const volumeBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = volumeBar.offsetWidth;
    const newVolume = clickX / width;
    
    setVolume(newVolume);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setRepeatMode(modes[nextIndex]);
  };

  if (!currentSong) {
    return (
      <div className="player-controls">
        <div className="player-message">
          Select a song to start playing
        </div>
      </div>
    );
  }

  return (
    <div className="player-controls">
      {/* Current Song Info */}
      <div className="current-song-info">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="current-album-cover"
        />
        <div className="current-song-details">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="playback-controls">
        <div className="control-buttons">
          <button 
            className={`control-btn ${isShuffle ? 'active' : ''}`}
            onClick={toggleShuffle}
            title="Shuffle"
          >
            <i className="fas fa-random control-icon small"></i>
          </button>
          
          <button className="control-btn" onClick={handlePrevious}>
            <i className="fas fa-step-backward control-icon small"></i>
          </button>
          
          <button className="control-btn play-pause" onClick={handlePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} control-icon`}></i>
          </button>
          
          <button className="control-btn" onClick={handleNext}>
            <i className="fas fa-step-forward control-icon small"></i>
          </button>
          
          <button 
            className={`control-btn ${repeatMode !== 'off' ? 'active' : ''}`}
            onClick={toggleRepeat}
            title={`Repeat: ${repeatMode}`}
          >
            <i className={`fas ${repeatMode === 'one' ? 'fa-redo' : 'fa-retweet'} control-icon small`}></i>
          </button>
        </div>

        <div className="progress-section">
          <span className="time-display">{formatTime(currentTime)}</span>
          <div className="progress-bar" onClick={handleProgressClick}>
            <div 
              className="progress-fill"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            ></div>
          </div>
          <span className="time-display">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="volume-controls">
        <button className="control-btn">
          <i className={`fas ${volume === 0 ? 'fa-volume-mute' : volume < 0.5 ? 'fa-volume-down' : 'fa-volume-up'} control-icon small`}></i>
        </button>
        <div className="volume-slider" onClick={handleVolumeChange}>
          <div 
            className="volume-fill"
            style={{ width: `${volume * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;