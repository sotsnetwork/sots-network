
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
            <p className="text-slate-400 text-sm">
              Building the future of Web3 with ethical principles
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-5 h-5">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
