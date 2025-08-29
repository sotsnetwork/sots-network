import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-hidden">
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
              d="M0,40 Q25,30 50,40 T100,40" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
              fill="none"
            />
            <path 
              d="M0,60 Q25,70 50,60 T100,60" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
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
            My Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {project.title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-200 text-xs rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full border border-slate-600/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-slate-600 text-slate-300 text-center text-sm font-medium rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
