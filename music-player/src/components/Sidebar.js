import React, { useState } from 'react';

const Sidebar = ({ user }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [playlistsOpen, setPlaylistsOpen] = useState(true);

  const navItems = [
    { id: 'home', name: 'Home', icon: 'fas fa-home' },
    { id: 'categories', name: 'Categories', icon: 'fas fa-th' },
    { id: 'artists', name: 'Artists', icon: 'fas fa-user' },
  ];

  const playlists = [
    'Liked & LnB',
    'Recently Played',
    'Rhythm & Poetry'
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <i className="fas fa-music logo-icon"></i>
        <span className="logo-text">RhythmoTune</span>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.id);
                }}
              >
                <i className={`${item.icon} nav-icon`}></i>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
          
          {/* Playlists Section */}
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${activeItem === 'playlists' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveItem('playlists');
                setPlaylistsOpen(!playlistsOpen);
              }}
            >
              <i className="fas fa-list nav-icon"></i>
              <span>Playlists</span>
              <i className={`fas fa-chevron-${playlistsOpen ? 'down' : 'right'}`} style={{marginLeft: 'auto', fontSize: '12px'}}></i>
            </a>
            
            {playlistsOpen && (
              <div className="playlist-submenu">
                {playlists.map((playlist, index) => (
                  <a
                    key={index}
                    href="#"
                    className="playlist-item"
                    onClick={(e) => e.preventDefault()}
                  >
                    {playlist}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <button className="logout-btn">
        <i className="fas fa-sign-out-alt" style={{marginRight: '8px'}}></i>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;