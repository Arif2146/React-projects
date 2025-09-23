import React from 'react';
import CategoryFilter from './CategoryFilter';
import SongCard from './SongCard';

const MainContent = ({
  featuredSong,
  categories,
  songs,
  selectedCategory,
  onCategoryChange,
  onSongSelect,
  currentSong,
  isPlaying
}) => {
  const handleFeaturedPlay = () => {
    onSongSelect(featuredSong);
  };

  return (
    <main className="main-content">
      {/* Featured Section */}
      <section className="featured-section">
        <div className="featured-bg"></div>
        <div className="featured-content">
          <img
            src={featuredSong.cover}
            alt={featuredSong.title}
            className="featured-album-cover"
          />
          <div className="featured-info">
            <h2>{featuredSong.title}</h2>
            <p>{featuredSong.artist}</p>
            <button className="play-btn" onClick={handleFeaturedPlay}>
              <i className="fas fa-play play-icon"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="category-section">
        <div className="category-header">
          <h3 className="section-title">Select Categories</h3>
          <div className="category-nav">
            <button className="nav-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </section>

      {/* Popular Songs Section */}
      <section className="songs-section">
        <div className="category-header">
          <h3 className="section-title">Popular songs</h3>
          <div className="category-nav">
            <button className="nav-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="nav-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div className="songs-grid">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onPlay={onSongSelect}
              isCurrentSong={currentSong && currentSong.id === song.id}
              isPlaying={isPlaying}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;