import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchDramas } from '../api';
import DramaCard from '../components/DramaCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      performSearch(searchQuery);
    }
  }, [location.search]);

  const performSearch = async (searchQuery) => {
    setLoading(true);
    try {
      const data = await searchDramas(searchQuery);
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <main className="page-container">
      <h1>Search Dramas</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-box">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for dramas..."
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {loading ? (
        <div className="full-page-loading">
          <div className="spinner"></div>
        </div>
      ) : results.length > 0 ? (
        <div className="drama-grid">
          {results.map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      ) : query ? (
        <p>No results found for "{query}"</p>
      ) : (
        <p>Enter a search term to find dramas</p>
      )}
    </main>
  );
}