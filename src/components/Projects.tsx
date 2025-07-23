import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ShoppingCart, Code } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Green-Cart',
      description: 'MERN e-commerce app with seller/user dashboards, JWT auth, Stripe payments, Cloudinary image upload',
      image: 'images/green-cart.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'JWT'],
      liveUrl: 'https://green-cart-official.vercel.app/',
      codeUrl: 'https://github.com/janshareefsayyad/green-cart',
      icon: ShoppingCart,
      featured: true
    },
    {
      title: 'Code Analyzer',
      description: 'MERN app to analyze and explain time/space complexity using Groq API',
      image: 'images/code-analyzer.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Groq API', 'Express.js'],
      liveUrl: 'https://codeanalyzer-official.vercel.app/',
      codeUrl: 'https://github.com/janshareefsayyad/anexer',
      icon: Code,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of my latest work in full-stack development and web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`group relative ${project.featured ? 'lg:col-span-1' : ''}`}
              >
                <div className="glass-card rounded-2xl overflow-hidden hover:glow transition-smooth cursor-hover">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-secondary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <project.icon className="w-16 h-16 text-white/80" /> */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-contain w-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-3 rounded-full hover:glow transition-smooth"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-3 rounded-full hover:glow transition-smooth"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-primary px-3 py-1 rounded-full text-xs font-medium text-white">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 gradient-text-secondary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="glass-card px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg hover:glow transition-smooth text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg hover:glow transition-smooth text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/janshareefsayyad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-card px-8 py-4 rounded-xl hover:glow transition-smooth cursor-hover font-semibold"
            >
              <Github className="w-5 h-5" />
              View More Projects
            </a>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;