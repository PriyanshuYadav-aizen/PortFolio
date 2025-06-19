import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Zap } from 'lucide-react';
import FallingText from './FallingText';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate matrix characters
  const matrixChars = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="matrix-char"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }}
    >
      {String.fromCharCode(0x30A0 + Math.random() * 96)}
    </div>
  ));

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-shift"></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {matrixChars}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles}
        </div>
        
        {/* Interactive Mouse Glow */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/30 rotate-45 animate-rotate"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/30 animate-float"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-pink-500/30 rounded-full animate-float delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
         

          {/* Animated Logo/Icon */}
          <div className={`mb-8 ${isLoaded ? 'animate-bounce-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse-glow">
              <Code className="w-12 h-12 text-white animate-float" />
            </div>
          </div>
          
          {/* Main Heading with Typewriter Effect */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 text-gradient-animate ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Hi, I'm Priyanshu
          </h1>
          
          {/* Subtitle with Glow Effect */}
          <p className={`text-2xl md:text-3xl text-blue-400 mb-4 animate-glow-pulse ${isLoaded ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Full Stack Developer (MERN Stack + Typescript)
          </p>
          
          {/* Description */}
          <p className={`text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed ${isLoaded ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            Passionate about creating <span className="text-blue-400 font-semibold">elegant solutions</span> to complex problems. 
            I specialize in <span className="text-purple-400 font-semibold">modern web technologies</span> and love building applications 
            that make a <span className="text-pink-400 font-semibold">difference</span>.
          </p>

          {/* Animated Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 ${isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <div className="glass rounded-xl p-4 hover-lift">
              <div className="text-3xl font-bold text-blue-400 animate-glow-pulse">...</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="glass rounded-xl p-4 hover-lift">
              <div className="text-3xl font-bold text-purple-400 animate-glow-pulse">...</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="glass rounded-xl p-4 hover-lift">
              <div className="text-3xl font-bold text-pink-400 animate-glow-pulse">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isLoaded ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 neon-glow hover-lift flex items-center gap-3">
              <Zap className="w-5 h-5 group-hover:animate-bounce" />
              View My Work
            </button>
            <button className="group glass border-2 border-gray-500 text-gray-300 hover:text-white hover:border-blue-400 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover-lift flex items-center gap-3">
              <ExternalLink className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Social Links with Enhanced Animations */}
          <div className={`flex justify-center space-x-8 ${isLoaded ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
            <a href="https://github.com/PriyanshuYadav-aizen" className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover-lift">
              <div className="p-4 rounded-full glass group-hover:neon-glow">
                <Github size={32} className="group-hover:animate-bounce" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-kumar-yadav-hey" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover-lift">
              <div className="p-4 rounded-full glass group-hover:neon-glow">
                <Linkedin size={32} className="group-hover:animate-bounce" />
              </div>
            </a>
            <a href="mailto:yadavkumarpriyanshu@gmail.com" className="group text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover-lift">
              <div className="p-4 rounded-full glass group-hover:neon-glow">
                <Mail size={32} className="group-hover:animate-bounce" />
              </div>
            </a>
            <a href="#" className="group text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover-lift">
              <div className="p-4 rounded-full glass group-hover:neon-glow">
                <ExternalLink size={32} className="group-hover:animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;