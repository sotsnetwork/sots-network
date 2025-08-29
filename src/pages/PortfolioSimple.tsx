import React from 'react';
import HeroSimple from '../components/sections/HeroSimple';

// Sample data - replace with your actual information
const portfolioData = {
  name: "John Doe",
  tagline: "Full-Stack Developer & Creative Technologist",
  subtitle: "I build digital experiences that matter, combining cutting-edge technology with thoughtful design to create solutions that inspire and engage.",
};

export default function PortfolioSimple() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <main>
        <HeroSimple 
          name={portfolioData.name}
          tagline={portfolioData.tagline}
          subtitle={portfolioData.subtitle}
        />
        
        <div className="py-20 bg-neutral-50 dark:bg-neutral-900">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Portfolio Working! 🎉
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              This is a simplified version to test basic functionality.
            </p>
            <div className="mt-8 p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Next Steps:</h3>
              <ul className="text-left space-y-2 text-neutral-600 dark:text-neutral-400">
                <li>✅ Basic React components working</li>
                <li>✅ Tailwind CSS styling working</li>
                <li>✅ Routing working</li>
                <li>🔄 Testing 3D components...</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
