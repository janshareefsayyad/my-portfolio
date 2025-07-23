import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'VIT-AP University',
      duration: 'Oct 2022 - Jul 2026',
      cgpa: '8.59',
      location: 'Andhra Pradesh, India',
      icon: GraduationCap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      current: true
    },
    {
      degree: 'Intermediate',
      institution: 'Shastra Academy',
      duration: '2020 - 2022',
      cgpa: '94.44%',
      location: 'India',
      icon: GraduationCap,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      current: false
    },
    {
      degree: 'High School',
      institution: 'Jai Bharath High School',
      duration: '2019 - 2020',
      cgpa: '98.67%',
      location: 'India',
      icon: GraduationCap,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Academic journey that shaped my technical foundation and problem-solving skills
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full hidden md:block"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:glow transition-smooth cursor-hover">
                    {/* Current Badge */}
                    {edu.current && (
                      <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Currently Pursuing
                      </div>
                    )}

                    {/* Institution Icon */}
                    <div className={`inline-flex p-3 rounded-full ${edu.bgColor} mb-4`}>
                      <edu.icon className={`w-6 h-6 ${edu.color}`} />
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold mb-2 gradient-text-secondary">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      {edu.institution}
                    </h4>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    {/* CGPA/Percentage */}
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-bold text-lg">{edu.cgpa}</span>
                      <span className="text-sm text-muted-foreground">
                        {edu.cgpa.includes('%') ? 'Percentage' : 'CGPA'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>


          {/* Background Decoration */}
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl opacity-10 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;