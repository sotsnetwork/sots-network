
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  duration?: number; // in milliseconds
  className?: string;
}

const CountUp = ({ end, duration = 2000, className = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count === end) return;
    
    // Don't start from 0 for better UX
    const startValue = Math.max(0, Math.floor(end * 0.5));
    setCount(startValue);
    
    // Calculate the increment based on the duration
    const steps = 30; // Frames per second * seconds
    const increment = Math.ceil((end - startValue) / steps);
    
    // Use setTimeout to animate the counting
    const interval = setInterval(() => {
      setCount(prev => {
        const nextValue = prev + increment;
        return nextValue >= end ? end : nextValue;
      });
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [end, duration]);
  
  return <span className={className}>{count}+</span>;
};

export default CountUp;
