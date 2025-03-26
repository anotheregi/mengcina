import { Link } from 'react-router-dom';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Mengcina</Link>
        
        <div className="nav-links">
        <Link to="/genres">Genre</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/must-see">Must See</Link>
          <Link to="/hidden-gems">Hidden Gems</Link>
          <div className="search-box">
            <input type="text" placeholder="Search drama.." />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        
        <button className="mobile-menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}