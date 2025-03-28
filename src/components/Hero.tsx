
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedGradient from './AnimatedGradient';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // List of automation software platforms
  const automationPlatforms = [
    "Zapier",
    "Slack",
    "HubSpot",
    "Microsoft Power Automate",
    "n8n",
    "Make.com",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <AnimatedGradient>
        {/* AnimatedGradient content */}
      </AnimatedGradient>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/80 px-3 py-1.5 rounded-full backdrop-blur-md animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              <span className="text-xs font-medium">Innovative AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight animate-fade-in animate-delay-1">
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-in animate-delay-2">
              Simple workflows and seamless automation to transform your business processes.
            </p>
            
            <div className="flex items-center space-x-4 pt-4 animate-fade-in animate-delay-3">
              <Button 
                size="lg" 
                className="rounded-full px-6 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                onClick={scrollToConsultation}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-6 border-primary/20 hover:border-primary/40 hover:bg-accent/50"
                onClick={scrollToConsultation}
              >
                <span>Consult with Us</span>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8 animate-fade-in animate-delay-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-xs text-muted-foreground">Projects Delivered</span>
              </div>
              
              <div className="w-px h-10 bg-border"></div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold">50+</span>
                <span className="text-xs text-muted-foreground">Happy Clients</span>
              </div>
            </div>

            {/* Added Automation Software Platforms */}
            <div className="pt-6 animate-fade-in animate-delay-5">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Integrated Automation Platforms:</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {automationPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto md:max-w-none animate-fade-in animate-delay-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              
              {/* First Mockup (Larger) */}
              <div className="relative bg-gradient-to-br from-white to-accent/50 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden animate-float">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                
                <div className="space-y-4">
                  <div className="w-12 h-1.5 bg-blue-600/80 rounded-full"></div>
                  <div className="w-full h-2 bg-gray-200/80 rounded-full"></div>
                  <div className="w-2/3 h-2 bg-gray-200/80 rounded-full"></div>
                  
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full mt-1.5"></div>
                    </div>
                    
                    <div className="bg-white/80 rounded-xl p-4 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                        <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                      <div className="w-2/3 h-1.5 bg-gray-200 rounded-full mt-1.5"></div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="w-full h-24 bg-white/80 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full"></div>
                        <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Image (Workflow Diagram) */}
              <div className="relative mt-8 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-lg p-4 animate-fade-in animate-delay-4">
                <img 
                  src="/lovable-uploads/f91990a5-3425-4805-a0df-bf85108957e0.png" 
                  alt="Workflow Automation Diagram" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-3xl pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full inline-block">
                    Automated Workflow Processes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
