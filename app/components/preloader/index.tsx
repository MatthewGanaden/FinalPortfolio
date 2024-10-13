// Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen">
      <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Preloader;
