
import { motion } from 'framer-motion';

interface FooterProps {
  name: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export default function Footer({ name, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">
              {name}
            </h3>
            <p className="text-neutral-400 max-w-md">
              Crafting digital experiences with passion and precision. 
              Let's bring your ideas to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center lg:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {name}. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Built with ❤️ using React, Three.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
