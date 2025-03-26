import React from 'react';
import './Loading.css'; // We'll create this next

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading Dramas...</p>
    </div>
  );
};

export default Loading;