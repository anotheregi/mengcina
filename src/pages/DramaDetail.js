import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDramaDetails } from '../api';

export default function DramaDetail() {
  const { id } = useParams();
  const [drama, setDrama] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDramaDetails = async () => {
      try {
        const data = await getDramaDetails(id);
        setDrama(data);
      } catch (error) {
        console.error("Error fetching drama details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDramaDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!drama) return <p>Drama not found</p>;

  return (
    <main className="page-container">
      <div className="drama-detail">
        <img src={drama.image} alt={drama.title} className="detail-image" />
        <div className="detail-content">
          <h1>{drama.title}</h1>
          <p className="meta">{drama.year} • {drama.genre}</p>
          <p className="rating">Rating: {drama.rating}</p>
          <p className="synopsis">{drama.synopsis}</p>
        </div>
      </div>
    </main>
  );
}