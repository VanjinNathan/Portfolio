import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@developer.com',
      href: 'mailto:hello@developer.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#13131a] border border-[#00d4ff]/20 rounded-full text-sm text-[#00d4ff] tracking-wider mb-6">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-[#9090a0] max-w-3xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 bg-[#13131a] border border-[#1a1a24] rounded-xl hover:border-[#00d4ff]/30 transition-all duration-300 group"
                >
                  <div className="p-4 bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#9090a0] mb-1">{info.title}</div>
                    <div className="text-lg font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="pt-8">
                <p className="text-[#9090a0] mb-6">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="p-4 bg-[#13131a] border border-[#1a1a24] rounded-xl hover:border-[#00d4ff]/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={24} className="text-[#00d4ff]" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#13131a] border border-[#1a1a24] rounded-xl focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#13131a] border border-[#1a1a24] rounded-xl focus:border-[#00d4ff] focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-[#13131a] border border-[#1a1a24] rounded-xl focus:border-[#00d4ff] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-12 border-t border-[#1a1a24] text-center text-[#9090a0]"
        >
          <p>&copy; 2024 Creative Developer Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
