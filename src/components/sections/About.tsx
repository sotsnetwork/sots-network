import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  name: string;
  bio: string;
  skills: string[];
  experience: string;
}

export default function About({ name, bio, skills, experience }: AboutProps) {
  const [showFullBio, setShowFullBio] = useState(false);

  const displayedBio = showFullBio ? bio : `${bio.substring(0, 200)}...`;

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
      {/* Background Elements - Same as Hero for consistency */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Curved lines for futuristic feel */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,30 Q25,20 50,30 T100,30" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
              fill="none"
            />
            <path 
              d="M0,70 Q25,80 50,70 T100,70" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-16 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Bio Section */}
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Who I Am</h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              {displayedBio}
            </p>
            {bio.length > 200 && (
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-medium"
              >
                {showFullBio ? 'Read Less' : 'Read More'}
              </button>
            )}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-purple-400">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-slate-700/50 text-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600/50 transition-colors duration-300 border border-slate-600/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-2xl font-bold mb-4 text-blue-400">Experience</h4>
              <p className="text-slate-300 leading-relaxed">
                {experience}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
