import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';
import LetterGlitch from './LetterGlitch';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.",
      highlights: [
        "Increased application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipelines",
        "Reduced deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design and product teams to deliver exceptional user experiences.",
      highlights: [
        "Built 10+ production applications",
        "Improved code quality by 35%",
        "Implemented automated testing",
        "Reduced bug reports by 50%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebDev Agency",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Specialized in creating responsive, accessible web applications with focus on performance optimization and user experience.",
      highlights: [
        "Developed responsive designs",
        "Optimized loading speeds",
        "Implemented accessibility standards",
        "Collaborated with UX designers"
      ]
    },
    {
      title: "Junior Developer",
      company: "Code Academy",
      location: "Remote",
      period: "2018 - 2019",
      description: "Started my professional journey learning best practices in software development while contributing to various internal projects.",
      highlights: [
        "Learned industry best practices",
        "Contributed to open source",
        "Built internal tools",
        "Participated in code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* LetterGlitch Background */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["rgba(43, 69, 57, 0.2)", "rgba(97, 220, 163, 0.2)", "rgba(97, 179, 220, 0.2)"]}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-gray-900">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-700/50 p-6 rounded-xl backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;