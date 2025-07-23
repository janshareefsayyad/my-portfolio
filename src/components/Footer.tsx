import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/janshareefsayyad',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jan-shareef-sayyad/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:janshareef.sd@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/ap_22bce9554/',
      label: 'LeetCode',
      color: 'hover:text-yellow-400'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-glass-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">Jan Shareef Sayyad</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                MERN Stack Developer passionate about creating exceptional web experiences 
                and solving complex algorithmic challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold mb-4 gradient-text-secondary">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block mx-auto text-muted-foreground hover:text-primary transition-colors cursor-hover text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4 gradient-text-secondary">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>📧 janshareef.sd@gmail.com</div>
                <div>🎓 VIT-AP University</div>
                <div>📍 Andhra Pradesh, India</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`glass-card p-3 rounded-full hover:glow transition-smooth cursor-hover ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-glass-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Jan Shareef Sayyad.</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Built with React + Tailwind</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-5 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-secondary rounded-full blur-3xl opacity-5 -z-10"></div>
      </div>
    </footer>
  );
};

export default Footer;