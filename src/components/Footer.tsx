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
      className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/30 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                SOTS
              </span>
              <span className="text-xl font-medium">Network</span>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Innovative AI-Powered Solutions, Simple Workflows, and Seamless Automation to transform your business processes.
            </p>
            
            <div className="flex items-center space-x-3">
              <SocialLink 
                icon={<Instagram className="h-4 w-4" />} 
                href="https://www.instagram.com/sotsnetwork" 
                label="Instagram" 
              />
              <SocialLink 
                icon={<Youtube className="h-4 w-4" />} 
                href="https://www.youtube.com/@sotsnetwork" 
                label="YouTube" 
              />
              <SocialLink 
                icon={<Linkedin className="h-4 w-4" />} 
                href="https://linkedin.com/in/chidera-nwachukwu-32647a216" 
                label="LinkedIn" 
              />
              <SocialLink 
                icon={<X className="h-4 w-4" />} 
                href="https://x.com/realpaulchidera/" 
                label="X" 
              />
              <SocialLink 
                icon={<Instagram className="h-4 w-4" />} 
                href="https://www.tiktok.com/@sotsnetwork" 
                label="TikTok" 
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {["About", "Services", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Case Studies", "Testimonials", "FAQ", "Documentation"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-sm font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Stay updated with the latest news, articles, and resources.
            </p>
            
            <div className="flex flex-col space-y-4">
              <iframe 
                src="https://sotsnetwork.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{ border: "1px solid #EEE", background: "white" }} 
                frameBorder="0" 
                scrolling="no"
                title="SOTS Network Newsletter"
                className="rounded-lg shadow-sm"
              ></iframe>
              
              <p className="text-xs text-muted-foreground">
                Subscribe to our Substack for the latest updates and insights.
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@sotsnetwork.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@sotsnetwork.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+2349032707877" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +234 903 270 7877
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Camp Porbeni, Agudama, Yenagoa, Bayelsa State
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SOTS Network. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
