import React from 'react';

const SongCard = ({ song, onPlay, isCurrentSong, isPlaying }) => {
  const handlePlay = () => {
    onPlay(song);
  };

  return (
    <div className={`song-card ${isCurrentSong ? 'playing' : ''}`}>
      <img
        src={song.cover}
        alt={song.title}
        className="song-cover"
      />
      
      <button className="song-play-btn" onClick={handlePlay}>
        <i className={`fas ${isCurrentSong && isPlaying ? 'fa-pause' : 'fa-play'} play-icon`}></i>
      </button>
      
      <div className="song-info">
        <h4 className="song-title">{song.title}</h4>
        <p className="song-artist">{song.artist}</p>
        <span className="song-duration">{song.duration}</span>
      </div>
    </div>
  );
};

export default SongCard;