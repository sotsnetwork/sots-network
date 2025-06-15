
import React from 'react';

export interface AnimatedGradientProps {
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Multiple animated gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/15 to-purple-500/10 blur-3xl opacity-40 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-500/10 to-violet-600/5 blur-2xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/8 via-pink-500/12 to-cyan-500/8 blur-xl opacity-30 animate-gradient-x" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid overlay for futuristic feel */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedGradient;
