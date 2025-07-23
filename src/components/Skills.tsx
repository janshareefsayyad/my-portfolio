import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'SQL', level: 85},
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 85 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on full-stack development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                className="glass-card p-8 rounded-2xl hover:glow transition-smooth"
              >
                <h3 className="text-xl font-bold mb-6 gradient-text-secondary text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.5 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                            duration: 1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Java', 'Git', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  className="glass-card px-4 py-2 rounded-full text-sm font-medium hover:glow transition-smooth cursor-hover"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-10 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;