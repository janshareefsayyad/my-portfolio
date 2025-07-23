import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cpu, Trophy } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: SiLeetcode, label: 'LeetCode Problems', value: '400+', color: 'text-grey-400' },
    { icon: Database, label: 'Projects Built', value: '3+', color: 'text-blue-400' },
    { icon: Cpu, label: 'Technologies', value: '15+', color: 'text-purple-400' },
    { icon: Trophy, label: 'Certifications', value: '3+', color: 'text-yellow-400' },
  ];

  return (
    <section id="about" className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text-secondary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fast-learning software developer with strong foundations in data structures, algorithms, 
                  and backend development. Actively building real-world projects and solving 400+ LeetCode 
                  problems. Eager to contribute in a dynamic product-driven environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing B.Tech in Computer Science Engineering at VIT-AP University with a 
                  CGPA of 8.59. Passionate about creating scalable web applications and solving complex 
                  algorithmic challenges.
                </p>
              </div>

              {/* Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-card p-6 rounded-xl border-l-4 border-primary"
              >
                <h4 className="font-semibold mb-2 text-primary">Development Philosophy</h4>
                <p className="text-sm text-muted-foreground">
                  "For me, coding isn’t just about solving problems<br/>
                  — it’s about building cool stuff that actually works and feels good to use."
                </p>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-xl text-center hover:glow transition-smooth cursor-hover"
                >
                  <div className={`inline-flex p-3 rounded-full bg-opacity-20 mb-4 ${stat.color.replace('text-', 'bg-')}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-5 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;