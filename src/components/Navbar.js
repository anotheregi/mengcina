import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery(''); // Clear input after search
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Mengcina</Link>
        
        <div className="nav-links">
          <Link to="/genres">Genre</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/must-see">Must See</Link>
          <Link to="/hidden-gems">Hidden Gems</Link>
          <form onSubmit={handleSearchSubmit} className="search-box">
            <input
              type="text"
              placeholder="Search drama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        
        <button className="mobile-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}