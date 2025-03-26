import React, { useEffect, useState } from 'react';
import DramaCard from '../components/DramaCard';
import { getHiddenGems } from '../api';

export default function HiddenGems() {
  const [dramas, setDramas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHiddenGems = async () => {
      try {
        const data = await getHiddenGems();
        setDramas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHiddenGems();
  }, []);

  return (
    <main className="page-container">
      <h1>Hidden Gem Dramas</h1>
      {loading ? (
        <div className="full-page-loading">
          <div className="spinner"></div>
        </div>
      ) : dramas.length > 0 ? (
        <div className="drama-grid">
          {dramas.map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      ) : (
        <p>No hidden gems found. Check back later!</p>
      )}
    </main>
  );
}