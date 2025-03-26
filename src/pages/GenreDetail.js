import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGenreDetails } from '../api';
import DramaCard from '../components/DramaCard';

export default function GenreDetail() {
  const { genreId } = useParams();
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenreDetails = async () => {
      try {
        const data = await getGenreDetails(genreId);
        setGenre(data);
      } catch (error) {
        console.error("Error fetching genre details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenreDetails();
  }, [genreId]);

  return (
    <main className="page-container">
      {loading ? (
        <div className="full-page-loading">
          <div className="spinner"></div>
        </div>
      ) : genre ? (
        <>
          <h1>{genre.name} Dramas</h1>
          <p className="genre-description">{genre.description}</p>
          <div className="drama-grid">
            {genre.dramas?.map(drama => (
              <DramaCard key={drama.id} drama={drama} />
            ))}
          </div>
        </>
      ) : (
        <p>Genre not found</p>
      )}
    </main>
  );
}