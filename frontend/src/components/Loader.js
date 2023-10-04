import React from 'react';
import { RingLoader } from 'react-spinners';
import './Loader.css';

function LoadingScreen({ isLoading }) {
  return (
    <div className={`overlay ${isLoading ? 'active' : 'inactive'}`}>
      <RingLoader color="#36D7B7" loading={isLoading} size={150} />
      <p>downloading...</p>
    </div>
  );
}

export default LoadingScreen;
