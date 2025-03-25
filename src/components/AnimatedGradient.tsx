
import React from 'react';

export interface AnimatedGradientProps {
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-20 animate-gradient"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
