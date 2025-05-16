
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'zoom-in';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className, 
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-6',
    'slide-up': 'opacity-0 translate-y-12',
    'zoom-in': 'opacity-0 scale-95',
  };
  
  const visibleClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'zoom-in': 'animate-zoom-in',
  };
  
  return (
    <div 
      ref={ref}
      className={cn(
        'transition-all duration-700',
        !isVisible && animationClasses[animation],
        isVisible && visibleClasses[animation],
        isVisible && delay && `animate-delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
