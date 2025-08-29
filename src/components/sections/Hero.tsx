import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import AdvancedRotatingObject from '../3D/AdvancedRotatingObject';

interface HeroProps {
  name: string;
  tagline: string;
  subtitle?: string;
}

export default function Hero({ name, tagline, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(148,163,184,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        
        {/* Curved lines for futuristic feel */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,20 Q25,10 50,20 T100,20" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
              fill="none"
            />
            <path 
              d="M0,80 Q25,70 50,80 T100,80" 
              stroke="rgba(148,163,184,0.1)" 
              strokeWidth="0.5" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 leading-relaxed">
                {tagline}
              </p>
              {subtitle && (
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-accent-400/20">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-accent-500 hover:text-accent-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Advanced 3D Object */}
          <div className="h-96 lg:h-[500px] w-full relative">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 60 }}
              className="w-full h-full"
            >
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#d4af37" />
              <pointLight position={[0, 10, 0]} intensity={0.5} color="#ffffff" />
              
              <AdvancedRotatingObject 
                color="#f97316"
                speed={1.2}
                size={2.5}
              />
              
              <Environment preset="night" />
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.8}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
            
            {/* Overlay glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-accent-500/5 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
