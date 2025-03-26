import React, { useEffect, useState } from 'react';
import DramaCard from '../components/DramaCard';
import { getMustSee } from '../api';

export default function MustSee() {
  const [dramas, setDramas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMustSee = async () => {
      try {
        const data = await getMustSee();
        setDramas(data);
      } catch (error) {
        console.error("Error fetching must-see dramas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMustSee();
  }, []);

  return (
    <main className="page-container">
      <h1>Must-See Dramas</h1>
      {loading ? (
        <p>Loading...</p>
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