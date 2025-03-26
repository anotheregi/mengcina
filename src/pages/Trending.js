import React, { useEffect, useState } from 'react';
import DramaCard from '../components/DramaCard';
import CardSkeleton from '../components/CardSkeleton';
import { getTrending } from '../api';

export default function Trending() {
  const [dramas, setDramas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTrending();
        setDramas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching trending dramas:", error);
        setError("Failed to load trending dramas. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <main className="page-container p-4">
      <h1 className="text-2xl font-bold mb-6">Trending Dramas</h1>
      
      {error ? (
        <div className="error-message text-red-500">{error}</div>
      ) : (
        <div className="drama-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 8 }).map((_, index) => (
              <CardSkeleton key={`skeleton-${index}`} />
            ))
          ) : dramas.length > 0 ? (
            dramas.map(drama => (
              <DramaCard key={drama.id} drama={drama} />
            ))
          ) : (
            <p className="col-span-full text-center py-10">No trending dramas found.</p>
          )}
        </div>
      )}
    </main>
  );
}