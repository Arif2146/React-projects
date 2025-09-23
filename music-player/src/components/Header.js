import React, { useState } from 'react';

const Header = ({ user, onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || '');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className="header">
      {/* Search Container */}
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a song"
          value={localSearchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* User Section */}
      <div className="user-section">
        <div className="user-actions">
          <button className="action-btn" title="Favorites">
            <i className="fas fa-heart"></i>
          </button>
          <button className="action-btn" title="Settings">
            <i className="fas fa-cog"></i>
          </button>
        </div>
        
        <img
          src={user.avatar}
          alt={user.name}
          className="user-avatar"
        />
        
        <span className="user-name">{user.name}</span>
      </div>
    </header>
  );
};

export default Header;