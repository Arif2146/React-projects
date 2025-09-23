import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import PlayerControls from './components/PlayerControls';
import { MusicPlayerProvider } from './hooks/useMusicPlayer';
import { mockSongs, mockCategories, mockUser } from './data/mockData';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(mockSongs);
  const [filteredSongs, setFilteredSongs] = useState(mockSongs);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter songs based on category and search
  useEffect(() => {
    let filtered = songs;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        song => song.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        song =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSongs(filtered);
  }, [songs, selectedCategory, searchQuery]);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <MusicPlayerProvider>
      <div className="app">
        {/* Section 1: Sidebar */}
        <Sidebar user={mockUser} />
        
        {/* Main Content Area */}
        <div className="main-area">
          {/* Section 2: Header */}
          <Header 
            user={mockUser} 
            onSearch={handleSearch}
            searchQuery={searchQuery}
          />
          
          {/* Section 3: Main Content */}
          <MainContent
            featuredSong={mockSongs[0]}
            categories={mockCategories}
            songs={filteredSongs}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onSongSelect={handleSongSelect}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        </div>
        
        {/* Section 5: Player Controls */}
        <PlayerControls
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songs={songs}
          onSongSelect={handleSongSelect}
        />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
