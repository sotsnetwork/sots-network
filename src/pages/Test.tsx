import React from 'react';

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Test Page Working! 🎉</h1>
        <p className="text-xl mb-4">If you can see this, React is working correctly.</p>
        <div className="space-y-4">
          <div className="p-4 bg-white/10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">3D Portfolio Components</h2>
            <p>Your portfolio should be working at /portfolio</p>
          </div>
          <div className="p-4 bg-white/10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Navigation</h2>
            <a href="/portfolio" className="text-blue-300 hover:text-blue-200 underline">
              Go to Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
