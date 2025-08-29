import { useState } from 'react';

interface AboutProps {
  name: string;
  bio: string;
  avatarUrl?: string;
  skills?: string[];
  experience?: string;
}

export default function About({ name, bio, avatarUrl, skills, experience }: AboutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar/Photo */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${name} portrait`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                Hi, I'm {name} 👋
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {isExpanded ? bio : `${bio.substring(0, 200)}...`}
                </p>
                
                {bio.length > 200 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline focus:outline-none"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            </div>

            {/* Experience */}
            {experience && (
              <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  Experience
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {experience}
                </p>
              </div>
            )}

            {/* Skills */}
            {skills && skills.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
