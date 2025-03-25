
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradient = ({ children, className, ...props }: AnimatedGradientProps) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 opacity-40 -z-10 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute -inset-[20%] w-[140%] h-[140%] animate-gradient-x bg-gradient-to-r from-blue-100/30 via-blue-300/50 to-purple-200/30 blur-3xl"></div>
      <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl"></div>
      {children}
    </div>
  );
};

export default AnimatedGradient;
