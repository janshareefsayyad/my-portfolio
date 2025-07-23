import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Code2, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
    const response = await fetch('https://formspree.io/f/mdkdedpn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. Try again later.');
  } finally {
    setIsSubmitting(false);
  }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'janshareef.sd@gmail.com',
      link: 'mailto:janshareef.sd@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@janshareefsayyad',
      link: 'https://github.com/janshareefsayyad',
      color: 'text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jan Shareef Sayyad',
      link: 'https://www.linkedin.com/in/jan-shareef-sayyad/',
      color: 'text-blue-400'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      value: '@ap_22bce9554',
      link: 'https://leetcode.com/u/ap_22bce9554/',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to collaborate or have a question? Let's connect and build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or just chat about technology. Feel free to reach out through any of these platforms!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:glow transition-smooth cursor-hover group"
                    >
                      <div className={`p-3 rounded-full bg-opacity-20 ${info.color.replace('text-', 'bg-')}`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="glass-card p-6 rounded-xl"
              >
                <h4 className="font-bold mb-4 gradient-text-secondary">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">400+</div>
                    <div className="text-xs text-muted-foreground">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Send a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-primary transition-smooth bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-primary transition-smooth bg-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-primary transition-smooth bg-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:ring-2 focus:ring-primary transition-smooth resize-none bg-transparent"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold hover:glow transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-5 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;