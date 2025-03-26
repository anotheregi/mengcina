import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchDramas } from '../api';
import DramaCard from '../components/DramaCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('searchValue') || '';
    setQuery(searchQuery);
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [location.search]);

  const performSearch = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchDramas(searchQuery);
      if (response.success) {
        setResults(response.results); // Access the results array
      } else {
        setResults([]);
        setError('No results found');
      }
    } catch (error) {
      console.error("Search error:", error);
      setError('Failed to search. Please try again.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?searchValue=${encodeURIComponent(query.trim())}`);
    }
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
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : results.length > 0 ? (
        <div className="drama-grid">
          {results.map(drama => (
            <DramaCard 
              key={drama.url} // Using URL as key since it's unique
              drama={{
                ...drama,
                id: drama.url // Ensure DramaCard gets an id prop
              }} 
            />
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