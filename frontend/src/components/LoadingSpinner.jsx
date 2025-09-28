import React, { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ 
      minHeight: '100vh', 
      background: '#FFF8F0',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="fs-5 text-muted">Loading GauVeda...</p>
    </div>
  );
};

export default LoadingSpinner;