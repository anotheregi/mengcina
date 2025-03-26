import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGenres } from '../api';

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  return (
    <main className="page-container">
      <h1>Browse by Genres</h1>
      {loading ? (
        <div className="full-page-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="genre-grid">
          {genres.map(genre => (
            <Link to={`/genres/${genre.id}`} key={genre.id} className="genre-card">
              <h3>{genre.name}</h3>
              <p>{genre.count}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}