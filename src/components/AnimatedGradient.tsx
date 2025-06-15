
import React from 'react';

export interface AnimatedGradientProps {
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Subtle animated overlays that work with the main background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/8 to-purple-500/5 blur-3xl opacity-60 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-indigo-500/6 to-violet-600/3 blur-2xl opacity-80 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/4 via-pink-500/7 to-cyan-500/4 blur-xl opacity-40 animate-gradient-x" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
