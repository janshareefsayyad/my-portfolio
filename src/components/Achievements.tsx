import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code, Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Code,
      title: 'LeetCode Excellence',
      description: 'Solved 400+ problems with 1530+ rating',
      detail: 'Top 34.1% globally with 8 badges',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      link: 'https://leetcode.com/u/ap_22bce9554/'
    },
    {
      icon: Award,
      title: 'MongoDB Certification',
      description: 'Associate Node.js Developer',
      detail: 'Professional certification in MongoDB',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      link: 'https://www.credly.com/badges/6d88525e-a95a-4734-9bc1-3d5f8b6f871b/public_url'
    },
    {
      icon: Trophy,
      title: 'Best Project Award',
      description: 'Top 10 out of 509 projects',
      detail: 'Street Fault Detection System recognition',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
      link: 'https://drive.google.com/file/d/1cKbp-axDtZLC-zGaFSwCC3ziQhReF1_j/view'
    },
  ];

  const certifications = [
    {
      title: 'MongoDB Associate Node.js Developer',
      issuer: 'MongoDB University',
      link: 'https://www.credly.com/badges/6d88525e-a95a-4734-9bc1-3d5f8b6f871b/public_url',
      year: '2024'
    },
    {
      title: 'MERN Full Stack Developer',
      issuer: 'Ethnus',
      link: 'https://drive.google.com/file/d/1WCqlNK9eKz5h84CuFasT9HO_6ahC7d6X/view',
      year: '2024'
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Achievements & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Recognition and certifications that showcase my commitment to excellence
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 gradient-text-secondary text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.a
                  key={achievement.title}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="glass-card p-6 rounded-2xl hover:glow transition-smooth cursor-hover group"
                >
                  <div className={`inline-flex p-4 rounded-full ${achievement.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 gradient-text-secondary group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  
                  <p className="font-medium mb-2">{achievement.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.detail}</p>
                  
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium mr-2">View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text-secondary text-center">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="glass-card p-6 rounded-xl hover:glow transition-smooth cursor-hover group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <span className="inline-block bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {cert.year}
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-accent rounded-full blur-3xl opacity-10 -z-10"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-10 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;