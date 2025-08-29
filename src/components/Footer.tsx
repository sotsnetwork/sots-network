
import React from 'react';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterProps {
  name: string;
  socialLinks: SocialLink[];
}

export default function Footer({ name, socialLinks }: FooterProps) {
  return (
    <footer className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Aesthetic spotlights with white theme */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-88 h-88 bg-white/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-24 left-24 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-pulse font-['Netflix Sans']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SOTS NETWORK
            </motion.h3>
            <motion.p 
              className="text-slate-300 mb-6 leading-relaxed font-['Netflix Sans']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Web Solutions to Creators & Businesses. Building blockchain solutions that meet Shariah values, 
              designed for builders and businesses with end consumers in mind.
            </motion.p>
            
            {/* Newsletter Signup */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-3 font-['Netflix Sans']">Stay Updated</h4>
              <p className="text-slate-300 text-sm mb-3 font-['Netflix Sans']">
                Subscribe to our newsletter for the latest updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm font-['Netflix Sans']"
                />
                <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-['Netflix Sans']">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              className="text-lg font-semibold text-white mb-4 font-['Netflix Sans']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://sotsnetwork.xyz" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']">
                  SOTS Network
                </a>
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-white/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-400 text-sm font-['Netflix Sans']">
            © {new Date().getFullYear()} SOTS NETWORK. All rights reserved. 
            Built with ❤️ for the Web3 community.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
