"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-green-100 text-sm font-light tracking-wide">
            Developed by Udara Sembukuttiarachchi.{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;