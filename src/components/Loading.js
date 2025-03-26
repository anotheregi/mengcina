import React from 'react';
import './Loading.css'; // Create this file

const Loading = ({ fullPage = false, message = 'Loading...' }) => {
  return (
    <div className={fullPage ? 'full-page-loading' : 'inline-loading'}>
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
};

export default Loading;