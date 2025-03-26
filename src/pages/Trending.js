import React, { useEffect, useState } from 'react';
import DramaCard from '../components/DramaCard';
import CardSkeleton from '../components/CardSkeleton';
import { getTrending } from '../api';

export default function Trending() {
  const [dramas, setDramas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrending();
        // Simulate network delay to see skeletons (remove in production)
        await new Promise(resolve => setTimeout(resolve, 2000));
        setDramas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching trending dramas:", error);
        setError("Failed to load trending dramas. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTrending();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Trending Dramas</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={`skeleton-${index}`} />
          ))
        ) : dramas.length > 0 ? (
          dramas.map(drama => (
            <DramaCard key={drama.id} drama={drama} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            No trending dramas found.
          </div>
        )}
      </div>
    </div>
  );
}