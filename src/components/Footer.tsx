
import React from 'react';
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import the X icon (formerly Twitter)
import { X } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => {
  return (
    <a 
      href={href}
      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

// Custom TikTok Icon component
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
    <path d="M10.97 2.06646C10.8508 1.96353 10.7942 1.81475 10.7942 1.66667C10.7942 1.5186 10.8508 1.36981 10.97 1.26688C11.0892 1.16394 11.2512 1.11116 11.4133 1.11116C11.5755 1.11116 11.7375 1.16394 11.8567 1.26688C11.9758 1.36981 12.0325 1.5186 12.0325 1.66667C12.0325 1.81475 11.9758 1.96353 11.8567 2.06646C11.7375 2.1694 11.5755 2.22218 11.4133 2.22218C11.2512 2.22218 11.0892 2.1694 10.97 2.06646Z" fill="currentColor"/>
    <path d="M8.30593 6.0001V5.90843C8.22764 5.90278 8.14842 5.90278 8.07012 5.90843C8.14842 5.90843 8.22764 5.90278 8.30593 5.90843V6.0001Z" fill="currentColor"/>
    <path d="M8.07012 5.90843C6.18678 5.90843 4.66678 7.42843 4.66678 9.31177C4.66678 11.1951 6.18678 12.7151 8.07012 12.7151C9.95345 12.7151 11.4735 11.1951 11.4735 9.31177V5.50177C11.9235 5.85177 12.4601 6.07177 13.0068 6.07177V4.4051C11.6468 4.40343 10.5068 3.30843 10.5068 1.9051H8.86012C8.86012 2.31177 8.86012 4.4051 8.86012 4.4051C8.86012 4.40343 8.86012 2.2651 8.86012 1.89843H8.30593V5.9051C8.22764 5.89944 8.14842 5.89944 8.07012 5.9051V5.90843Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.07012 11.5151C8.19412 11.5151 8.31645 11.5001 8.43645 11.4751C9.64178 11.2834 10.5568 10.2201 10.5568 8.9501C10.5568 7.5201 9.40012 6.36344 8.00012 6.36344C6.55678 6.36344 5.40012 7.5201 5.40012 8.9651C5.40012 10.4101 6.57012 11.5651 8.01345 11.5651C8.03178 11.5651 8.05012 11.5651 8.06845 11.5651L8.07012 11.5151ZM7.91845 7.76511C8.33845 7.76511 8.67678 8.10344 8.67678 8.52344C8.67678 8.94344 8.33845 9.28177 7.91845 9.28177C7.49845 9.28177 7.16012 8.94344 7.16012 8.52344C7.16012 8.10344 7.49845 7.76511 7.91845 7.76511Z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 px-4 md:px-6 relative overflow-hidden">
      {/* Background elements matching the main theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          <div className="md:col-span-5 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                SOTS
              </span>
              <span className="text-lg md:text-xl lg:text-2xl font-medium text-slate-100">Network</span>
            </div>
            
            <p className="text-sm md:text-base text-slate-300 max-w-md leading-relaxed">
              Innovative AI-Powered Solutions, Simple Workflows, and Seamless Automation to transform your business processes.
            </p>
            
            <div className="flex items-center space-x-3 md:space-x-4">
              <SocialLink 
                icon={<Instagram className="h-4 w-4 md:h-5 md:w-5" />} 
                href="https://www.instagram.com/sotsnetwork" 
                label="Instagram" 
              />
              <SocialLink 
                icon={<Youtube className="h-4 w-4 md:h-5 md:w-5" />} 
                href="https://www.youtube.com/@sotsnetwork" 
                label="YouTube" 
              />
              <SocialLink 
                icon={<Linkedin className="h-4 w-4 md:h-5 md:w-5" />} 
                href="https://linkedin.com/in/chidera-nwachukwu-32647a216" 
                label="LinkedIn" 
              />
              <SocialLink 
                icon={<X className="h-4 w-4 md:h-5 md:w-5" />} 
                href="https://x.com/realpaulchidera/" 
                label="X" 
              />
              <SocialLink 
                icon={<TikTokIcon />} 
                href="https://www.tiktok.com/@sotsnetwork" 
                label="TikTok" 
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm md:text-base font-semibold text-slate-100">Company</h3>
            <ul className="space-y-3">
              {["About", "Services", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm md:text-base text-slate-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm md:text-base font-semibold text-slate-100">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Case Studies", "Testimonials", "FAQ", "Documentation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm md:text-base text-slate-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-4 md:space-y-6">
            <h3 className="text-sm md:text-base font-semibold text-slate-100">Subscribe to Our Newsletter</h3>
            <p className="text-sm md:text-base text-slate-300">
              Stay updated with the latest news, articles, and resources.
            </p>
            
            <div className="flex flex-col space-y-4">
              <iframe 
                src="https://sotsnetwork.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{ border: "1px solid rgba(71, 85, 105, 0.5)", background: "rgba(30, 41, 59, 0.5)", borderRadius: "12px" }} 
                frameBorder="0" 
                scrolling="no"
                title="SOTS Network Newsletter"
                className="rounded-lg shadow-sm backdrop-blur-sm"
              ></iframe>
              
              <p className="text-xs md:text-sm text-slate-400">
                Subscribe to our Substack for the latest updates and insights.
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                <a href="mailto:sotsnetwork001@gmail.com" className="text-sm md:text-base text-slate-400 hover:text-cyan-400 transition-colors">
                  sotsnetwork001@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-slate-400" />
                <a href="tel:+2349032707877" className="text-sm md:text-base text-slate-400 hover:text-cyan-400 transition-colors">
                  +234 903 270 7877
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-slate-400 mt-0.5" />
                <span className="text-sm md:text-base text-slate-400">
                  Camp Porbeni, Agudama, Yenagoa, Bayelsa State
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs md:text-sm text-slate-400">
            © {currentYear} SOTS Network. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-cyan-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
