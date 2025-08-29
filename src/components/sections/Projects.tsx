import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Aesthetic spotlights */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-88 h-88 bg-white/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-24 left-24 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Curved accent lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,30 Q25,20 50,30 T100,30" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,70 Q25,60 50,70 T100,70" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,50 Q25,40 50,50 T100,50" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-['Netflix Sans']">
            My Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-['Netflix Sans']">
            Explore a selection of my work, showcasing diverse skills and creative solutions.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-['Netflix Sans'] ${
                selectedCategory === category
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50 hover:border-white/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/50 overflow-hidden hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  {/* Project Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full font-['Netflix Sans']">
                      {project.title.split(' ').map(word => word.charAt(0)).join('')}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-['Netflix Sans']">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-['Netflix Sans']">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50 font-['Netflix Sans']"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600/50 font-['Netflix Sans']">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 text-center font-['Netflix Sans']"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg hover:border-white hover:text-white transition-all duration-300 text-center font-['Netflix Sans']"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
