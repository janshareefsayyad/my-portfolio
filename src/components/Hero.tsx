import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Github, Linkedin, } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";

const Hero = () => {
  const viewResume = () => {
    window.open('https://drive.google.com/file/d/18eZzGxsqPMC1dvBBXVbf_0q0ukd4inu-/view?usp=drive_link', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto glass-card rounded-full p-1 glow">
              <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-7xl font-bold text-white">JS</span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            Jan Shareef Sayyad
          </motion.h1>

          {/* Typewriter Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'DSA Enthusiast',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-4xl font-semibold text-muted-foreground"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional web experiences with modern technologies. 
            Currently solving algorithmic challenges and building scalable applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={viewResume}
              className="glass-card px-8 py-4 rounded-xl hover:glow transition-smooth cursor-hover flex items-center gap-3 bg-gradient-primary text-white font-semibold"
            >
              <IoDocumentTextOutline className="w-5 h-5" />
              View Resume
            </button>
            <button
              onClick={scrollToContact}
              className="glass-card px-8 py-4 rounded-xl hover:glow transition-smooth cursor-hover flex items-center gap-3 font-semibold"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/janshareefsayyad"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl hover:glow transition-smooth cursor-hover"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jan-shareef-sayyad/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl hover:glow transition-smooth cursor-hover"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/ap_22bce9554/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-xl hover:glow transition-smooth cursor-hover"
            >
              <SiLeetcode className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;