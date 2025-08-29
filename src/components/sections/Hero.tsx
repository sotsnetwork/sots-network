import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  tagline: string;
  subtitle?: string;
}

export default function Hero({ name, tagline, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ width: '100vw', height: '100vh' }}
        >
          <source src="https://cdn.midjourney.com/video/d87c3fa3-6693-4ba9-a5b5-e7df580bf96e/0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight font-['Horizon']"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {name}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 leading-relaxed font-['Horizon']"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {tagline}
              </motion.p>
              
              {subtitle && (
                <motion.p 
                  className="text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-['Horizon']"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#work"
                aria-label="View my portfolio"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-['Horizon']"
              >
                View My Work
              </a>
              <a
                href="#contact"
                aria-label="Get in touch"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-['Horizon']"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
