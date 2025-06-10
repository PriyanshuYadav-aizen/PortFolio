import React, { useEffect, useState } from 'react';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import Silk from './Silk';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          setTimeout(() => {
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                setTimeout(() => {
                  setAnimatedSkills(prev => ({
                    ...prev,
                    [skill.name]: skill.level
                  }));
                }, Math.random() * 1000);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "Vue.js", level: 100 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 100 },
        { name: "Python", level: 100 },
        { name: "PostgreSQL", level: 100 },
        { name: "MongoDB", level: 100 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 100 },
        { name: "AWS", level: 100 },
        { name: "Git", level: 100 },
        { name: "CI/CD", level: 100 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", 
    "Tailwind CSS", "GraphQL", "REST APIs", "Microservices"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Silk Background - Previously Particles */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={20}
          scale={1}
          color="#0D1B2A"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 text-gradient-animate ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Zap className="inline-block w-12 h-12 mr-4 animate-bounce" />
            Skills & Technologies
          </h2>
          
          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`glass p-8 rounded-2xl hover:neon-glow transition-all duration-500 hover-lift group ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mb-4 group-hover:animate-bounce`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 text-sm font-semibold">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-2000 ease-out relative`}
                          style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
            <h3 className="text-3xl font-semibold text-white mb-12 animate-glow-pulse">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className={`px-6 py-3 glass rounded-full text-gray-300 border border-gray-600/50 hover:border-blue-500/50 hover:neon-glow transition-all duration-300 transform hover:scale-110 cursor-default animate-bounce-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;