import { ExternalLink, Github, Star } from 'lucide-react';
import Particles from './Particles';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive weather data visualization platform with predictive analytics and historical data comparison.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with advanced features like real-time messaging, content moderation, and analytics.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "GraphQL", "Redis", "AWS"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: false
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing capabilities and integration with multiple AI models.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto portfolio tracker with advanced charting, alerts, and market analysis tools.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Chart.js", "Node.js", "WebSocket"],
      github: "https://github.com/PriyanshuYadav-aizen",
      live: "https://example.com",
      featured: false
    }
  ];

  return (
 <section id="projects" className="py-20 bg-[#080B14] relative overflow-hidden">


      {/* Particles Background - Previously Silk */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#00f0ff', '#f5f5f5', '#b3e5fc', '#e0f7fa']}

          particleCount={200}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;