import React, { useEffect, useState } from 'react';
import DramaCard from '../components/DramaCard';
import { getTrending } from '../api';

export default function Trending() {
  const [dramas, setDramas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const data = await getTrending();
        setDramas(data);
      } catch (error) {
        console.error("Error fetching trending dramas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <main className="page-container">
      <h1>Trending Dramas</h1>
      {loading ? (
        <div className="full-page-loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="drama-grid">
          {dramas.map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      )}
    </main>
  );
}