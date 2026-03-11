import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-[#13131a] border border-[#00d4ff]/20 rounded-full text-sm text-[#00d4ff] tracking-wider">
            CREATIVE DEVELOPER
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
        >
          <span className="block">Building the</span>
          <span className="block gradient-text">Future</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-[#9090a0] max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting immersive digital experiences at the intersection of{' '}
          <span className="text-[#00d4ff]">AI</span>,{' '}
          <span className="text-[#7b2ff7]">Web Development</span>, and{' '}
          <span className="text-[#ff2e63]">Creative Technology</span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] rounded-full font-semibold text-white shadow-lg"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#00d4ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#13131a] hover:border-[#00d4ff] rounded-full font-semibold transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <motion.a
            href="#"
            whileHover={{ y: -5, color: '#00d4ff' }}
            className="text-[#9090a0] transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -5, color: '#00d4ff' }}
            className="text-[#9090a0] transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -5, color: '#00d4ff' }}
            className="text-[#9090a0] transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-[#00d4ff]" />
      </motion.div>
    </section>
  );
}
