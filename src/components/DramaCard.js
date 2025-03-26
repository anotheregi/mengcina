import React from 'react';
import { Link } from 'react-router-dom';

export default function DramaCard({ drama }) {
  // Extract episode number from the "episode" field (e.g., "63Episode" → "63")
  const episodeNumber = drama.episode?.replace(/\D/g, '') || 'N/A';
  
  return (
    <div className="drama-card">
      <Link to={drama.url || `/drama/${drama.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <div className="card-image">
          <img 
            src={drama.image || '/placeholder-image.jpg'} 
            alt={drama.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder-image.jpg';
            }}
          />
          {episodeNumber && (
            <span className="episode-badge">{episodeNumber} EP</span>
          )}
        </div>
        <div className="card-content">
          <h3>{drama.title}</h3>
          <p className="genre">{drama.genre || 'Drama'}</p>
          <p className="intro">{drama.intro?.substring(0, 60)}...</p>
        </div>
      </Link>
    </div>
  );
}