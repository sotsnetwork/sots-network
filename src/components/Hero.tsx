
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedGradient from './AnimatedGradient';
import { ArrowRight, Bot, Zap, Brain, Sparkles } from 'lucide-react';
import CountUp from './CountUp';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      <AnimatedGradient>
        {/* AnimatedGradient content */}
      </AnimatedGradient>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <div className="inline-flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50 animate-fade-in">
              <Bot className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">Next-Gen AI Automation Platform</span>
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight animate-fade-in animate-delay-1">
              <span className="block text-slate-100">Intelligent</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                AI Agents
              </span>
              <span className="block text-slate-100">For Tomorrow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-lg animate-fade-in animate-delay-2 leading-relaxed">
              Unleash the power of autonomous AI agents that think, learn, and execute with unprecedented intelligence.
            </p>
            
            <div className="flex items-center space-x-4 pt-4 animate-fade-in animate-delay-3">
              <Button 
                size="lg" 
                className="rounded-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all group border-0 text-white font-semibold text-sm md:text-base"
                onClick={scrollToConsultation}
              >
                <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span>Deploy AI Agent</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-6 md:px-8 py-3 md:py-4 border-2 border-slate-600/50 bg-slate-800/30 backdrop-blur-sm text-slate-300 hover:bg-slate-700/40 hover:border-slate-500/60 transition-all text-sm md:text-base"
                onClick={handleLearnMore}
              >
                <Brain className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                <span>Explore AI</span>
              </Button>
            </div>
            
            <div className="flex flex-col space-y-6 pt-8 animate-fade-in animate-delay-4">
              <div className="flex items-center space-x-6 md:space-x-8">
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <CountUp end={278} className="text-2xl md:text-3xl font-bold text-slate-100" />
                    <span className="text-cyan-400 font-bold">+</span>
                  </div>
                  <span className="text-xs md:text-sm text-slate-400">AI Deployments</span>
                </div>
                
                <div className="w-px h-8 md:h-10 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <CountUp end={113} className="text-2xl md:text-3xl font-bold text-slate-100" />
                    <span className="text-purple-400 font-bold">+</span>
                  </div>
                  <span className="text-xs md:text-sm text-slate-400">Enterprises</span>
                </div>
                
                <div className="w-px h-8 md:h-10 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl md:text-3xl font-bold text-slate-100">99.9</span>
                    <span className="text-pink-400 font-bold">%</span>
                  </div>
                  <span className="text-xs md:text-sm text-slate-400">Uptime</span>
                </div>
              </div>
              
              {/* Contra Hire Button */}
              <div className="pt-4">
                <div 
                  className="contra-hire-me-button" 
                  data-analyticsUserId="7c4472bb-5cc9-4283-8261-69263f8cdde0" 
                  data-theme="dark" 
                  data-username="sotsnetwork"
                ></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            {/* AI Visualization */}
            <div className="relative w-full max-w-lg mx-auto animate-fade-in animate-delay-2">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              
              {/* Main Container */}
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
                {/* Header */}
                <div className="p-4 md:p-6 border-b border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">AI_AGENT_v2.5.1</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6 space-y-4">
                  <div className="flex items-center space-x-3 text-cyan-300">
                    <Bot className="w-5 h-5" />
                    <span className="font-mono text-sm">Initializing AI Agent...</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Neural Network</span>
                      <span className="text-green-400">ACTIVE</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Learning Rate</span>
                      <span className="text-purple-400">OPTIMIZED</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '92%', animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 md:p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-slate-200">Latest Output</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed">
                      Task automation complete. 
                      <span className="text-green-400">+47% efficiency</span> achieved.
                      Ready for next directive.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Code Elements */}
              <div className="absolute -top-4 -right-4 bg-slate-800/70 backdrop-blur-sm p-3 rounded-lg border border-slate-600/50 animate-float">
                <code className="text-xs text-cyan-300 font-mono">{"if (task.complete) { optimize() }"}</code>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-slate-800/70 backdrop-blur-sm p-3 rounded-lg border border-slate-600/50 animate-float" style={{ animationDelay: '1s' }}>
                <code className="text-xs text-purple-300 font-mono">{"ai.learn() → success"}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
