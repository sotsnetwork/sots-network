import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  name: string;
  bio: string;
  skills: string[];
  experience: string;
}

export default function About({ name, bio, skills, experience }: AboutProps) {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Aesthetic spotlights */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-88 h-88 bg-indigo-500/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-24 left-24 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-pink-400/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Curved accent lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,30 Q25,20 50,30 T100,30" 
              stroke="rgba(147,51,234,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,70 Q25,60 50,70 T100,70" 
              stroke="rgba(59,130,246,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,50 Q25,40 50,50 T100,50" 
              stroke="rgba(236,72,153,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            About {name}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get to know me better and discover what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50">
              <h3 className="text-3xl font-bold mb-6 text-blue-400">My Story</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {bio}
              </p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50">
              <h3 className="text-3xl font-bold mb-6 text-purple-400">Experience</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {experience}
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50">
              <h3 className="text-3xl font-bold mb-6 text-green-400">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-2 p-3 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
