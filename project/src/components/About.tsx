import React, { useEffect, useState } from 'react';
import { Code, Coffee, Lightbulb, Target, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Dedication",
      description: "Committed to delivering exceptional results",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 text-gradient-animate ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Sparkles className="inline-block w-12 h-12 mr-4 animate-bounce" />
            About Me
          </h2>
          
          {/* Profile Image and Social Links - Positioned Absolutely */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'} mb-10 lg:absolute lg:top-0 lg:right-10 lg:w-96 lg:h-96 lg:mx-0`}>
            <div className="relative w-full h-full">
              {/* Outer Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-300"></div>
              {/* Profile Image - Base */}
              <img
                src="/Profile.jpg"
                alt="Priyanshu Kumar Yadav"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                style={{ objectPosition: '55% center' }}
              />
            </div>
            {/* Experience Counter - now directly below the image circle container */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 animate-glow-pulse">...</div>
                <div className="text-gray-400 whitespace-nowrap">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 animate-glow-pulse">...</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 animate-glow-pulse">100%</div>
                <div className="text-gray-400 whitespace-nowrap">Client Satisfaction</div>
              </div>
            </div>
            {/* Social Links - now below the experience counter */}
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/PriyanshuYadav-aizen" 
                 className="group p-4 rounded-full glass hover:neon-glow transition-all duration-300 transform hover:scale-110">
                <Github size={32} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/priyanshu-kumar-yadav-hey" 
                 className="group p-4 rounded-full glass hover:neon-glow transition-all duration-300 transform hover:scale-110">
                <Linkedin size={32} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a href="mailto:yadavkumarpriyanshu@gmail.com" 
                 className="group p-4 rounded-full glass hover:neon-glow transition-all duration-300 transform hover:scale-110">
                <Mail size={32} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Text Content - Adjusted for image placement */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} lg:max-w-3xl lg:mr-auto lg:pr-10`}>
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Hi, I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> specializing in the <span className="text-green-400 font-semibold">MERN stack (MongoDB, Express, React, Node.js)</span> with strong proficiency in <span className="text-purple-400 font-semibold">TypeScript</span>. I build robust, scalable web applications that deliver seamless user experiences and efficient backend performance.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                With a deep understanding of both frontend and backend technologies, I bring a holistic approach to web development — from designing dynamic interfaces with React and Tailwind CSS to building secure, RESTful APIs using Express and Node.js. I prioritize clean, maintainable code, responsive design, and performance optimization in every project.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                I'm also experienced in implementing authentication (JWT/OAuth), integrating cloud services, and deploying full-stack apps with tools like Vercel, Render, or MongoDB Atlas.
              </p>
            </div>
            
            {/* Animated Tags */}
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 glass rounded-full text-blue-300 border border-blue-500/30 hover:neon-glow transition-all duration-300 hover:scale-105 animate-bounce-in">
                Problem Solver
              </span>
              <span className="px-6 py-3 glass rounded-full text-green-300 border border-green-500/30 hover:neon-glow transition-all duration-300 hover:scale-105 animate-bounce-in delay-200">
                Team Player
              </span>
              <span className="px-6 py-3 glass rounded-full text-purple-300 border border-purple-500/30 hover:neon-glow transition-all duration-300 hover:scale-105 animate-bounce-in delay-300">
                Continuous Learner
              </span>
            </div>
          </div>

          {/* Highlights Grid (remains outside the main grid for now, or can be nested if preferred) */}
          <div className={`grid grid-cols-2 gap-6 mt-16 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className={`glass p-8 rounded-2xl hover:neon-glow transition-all duration-500 transform hover:scale-105 hover-lift group animate-bounce-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-white mb-6 p-4 rounded-xl bg-gradient-to-r ${item.color} group-hover:animate-bounce inline-block`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;