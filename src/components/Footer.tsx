
import React from 'react';
import { motion } from 'framer-motion';

// Types
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterProps {
  name: string;
  socialLinks: SocialLink[];
}

// Constants
const ANIMATION_DELAYS = {
  companyInfo: 0,
  quickLinks: 0.1,
  services: 0.2,
  contact: 0.3,
  bottomBar: 0.8,
} as const;

const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: 'easeOut',
} as const;

// Social Media Icons Component
const SocialIcons: React.FC = () => (
  <div className="flex space-x-4 mt-4">
    {/* YouTube */}
    <a 
      href="https://youtube.com/@sotsnetwork" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors duration-300"
      aria-label="YouTube"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
    
    {/* Instagram */}
    <a 
      href="https://instagram.com/sotsnetwork" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors duration-300"
      aria-label="Instagram"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
      </svg>
    </a>
    
    {/* Twitter/X */}
    <a 
      href="https://twitter.com/sotsnetwork" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors duration-300"
      aria-label="Twitter"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
    
    {/* Discord */}
    <a 
      href="https://discord.gg/sotsnetwork" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-gray-300 transition-colors duration-300"
      aria-label="Discord"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
      </svg>
    </a>
  </div>
);

// Company Info Component
const CompanyInfo: React.FC = () => (
  <div>
    <motion.div
      className="flex items-center space-x-3 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.companyInfo }}
    >
      {/* Logo */}
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
        <span className="text-black font-bold text-xl">S</span>
      </div>
      <h3 className="text-xl font-bold text-white font-['Netflix Sans']">
        SOTS NETWORK
      </h3>
    </motion.div>
    
    <motion.p
      className="text-slate-300 mb-4 leading-relaxed font-['Netflix Sans']"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.companyInfo + 0.1 }}
    >
      Web Solutions to Creators & Businesses. Building blockchain solutions that meet Shariah values, 
      designed for builders and businesses with end consumers in mind.
    </motion.p>
    
    <SocialIcons />
  </div>
);

// Quick Links Component
const QuickLinks: React.FC = () => {
  const links = [
    { href: '#about', label: 'About Us' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://sotsnetwork.xyz', label: 'SOTS Network', external: true },
  ];

  return (
    <div>
      <motion.h4
        className="text-lg font-semibold text-white mb-4 font-['Netflix Sans']"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.quickLinks }}
      >
        Quick Links
      </motion.h4>
      
      <motion.ul
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.quickLinks + 0.1 }}
      >
        {links.map((link, index) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']"
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

// Services Component
const Services: React.FC = () => {
  const services = [
    'Web Development',
    'Blockchain Solutions',
    'Smart Contracts',
    'Web3 Integration',
  ];

  return (
    <div>
      <motion.h4
        className="text-lg font-semibold text-white mb-4 font-['Netflix Sans']"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.services }}
      >
        Services
      </motion.h4>
      
      <motion.ul
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.services + 0.1 }}
      >
        {services.map((service, index) => (
          <li key={index}>
            <span className="text-slate-300 hover:text-white transition-colors duration-300 font-['Netflix Sans']">
              {service}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

// Contact Component
const Contact: React.FC = () => (
  <div>
    <motion.h4
      className="text-lg font-semibold text-white mb-4 font-['Netflix Sans']"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.contact }}
    >
      Contact
    </motion.h4>
    
    <motion.div
      className="space-y-2 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.contact + 0.1 }}
    >
      <p className="text-slate-300 font-['Netflix Sans']">
        Lagos, Nigeria & United Kingdom
      </p>
      <p className="text-slate-300 font-['Netflix Sans']">
        chidera@sotsnetwork.xyz
      </p>
      <p className="text-slate-300 font-['Netflix Sans']">
        +234 XXX XXX XXXX
      </p>
    </motion.div>

    {/* Newsletter Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.contact + 0.2 }}
    >
      <h5 className="text-sm font-semibold text-white mb-2 font-['Netflix Sans']">
        Newsletter
      </h5>
      <div className="flex justify-center">
        <iframe 
          src="https://sotsnetwork.substack.com/embed" 
          width="480" 
          height="150" 
          style={{border:'1px solid #EEE', background:'white'}} 
          frameBorder="0" 
          scrolling="no"
          className="rounded-lg shadow-lg"
          title="SOTS Network Newsletter Subscription"
        />
      </div>
    </motion.div>
  </div>
);

// Bottom Bar Component
const BottomBar: React.FC = () => (
  <motion.div
    className="pt-8 border-t border-white/30 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ...ANIMATION_CONFIG, delay: ANIMATION_DELAYS.bottomBar }}
  >
    <p className="text-slate-400 text-sm font-['Netflix Sans']">
      © {new Date().getFullYear()} SOTS NETWORK. All rights reserved. 
      Built with ❤️ for the Web3 community.
    </p>
  </motion.div>
);

// Main Footer Component
const Footer: React.FC<FooterProps> = ({ name, socialLinks }) => {
  return (
    <footer className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <CompanyInfo />
          <QuickLinks />
          <Services />
          <Contact />
        </div>
        
        <BottomBar />
      </div>
    </footer>
  );
};

export default Footer;
