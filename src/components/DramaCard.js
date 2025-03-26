import React from 'react';
import { Link } from 'react-router-dom';

export default function DramaCard({ drama }) {
  return (
    <div className="drama-card">
      <Link to={`/drama/${drama.id}`}>
        <div className="card-image">
          <img src={drama.image} alt={drama.title} />
          <span className="rating">{drama.rating}</span>
        </div>
        <div className="card-content">
          <h3>{drama.title}</h3>
          <p>{drama.year} • {drama.genre}</p>
        </div>
      </Link>
    </div>
  );
}