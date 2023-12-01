// pages/index.js

import React from 'react';
import ThreeScene from './ThreeScene';

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <ThreeScene />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-slate-900">Welcome to my Three.js Background</h1>
        </div>
      </div>
      {/* Other content goes here */}
    </div>
  );
};

export default Home;

