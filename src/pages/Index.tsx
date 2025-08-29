
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to portfolio after a short delay
    const timer = setTimeout(() => {
      navigate('/portfolio');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-neutral-300 mb-8">
          Redirecting you to my 3D portfolio website...
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-neutral-400 mt-6">
          Or <button 
            onClick={() => navigate('/portfolio')} 
            className="text-primary-400 hover:text-primary-300 underline"
          >
            click here
          </button> to continue immediately
        </p>
      </div>
    </div>
  );
};

export default Index;
