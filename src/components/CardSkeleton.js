// components/CardSkeleton.js
import React from 'react';
import './App.css';

export const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="skeleton" style={{
        height: '0',
        paddingBottom: '150%',
        borderRadius: '8px 8px 0 0'
      }}></div>
      <div style={{ padding: '15px' }}>
        <div className="skeleton" style={{
          height: '20px',
          marginBottom: '10px',
          borderRadius: '4px'
        }}></div>
        <div className="skeleton" style={{
          height: '15px',
          width: '80%',
          borderRadius: '4px'
        }}></div>
      </div>
    </div>
  );
};