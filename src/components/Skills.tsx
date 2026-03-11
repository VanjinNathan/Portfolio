import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', level: 95, color: '#00d4ff' },
    { name: 'TypeScript', level: 90, color: '#7b2ff7' },
    { name: 'Python', level: 88, color: '#ff2e63' },
    { name: 'Node.js', level: 85, color: '#ffa726' },
    { name: 'Three.js', level: 82, color: '#00d4ff' },
    { name: 'AI/ML', level: 80, color: '#7b2ff7' },
    { name: 'Next.js', level: 92, color: '#ff2e63' },
    { name: 'TailwindCSS', level: 95, color: '#ffa726' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[#13131a]/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#13131a] border border-[#00d4ff]/20 rounded-full text-sm text-[#00d4ff] tracking-wider mb-6">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-[#9090a0] max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-[#9090a0]">{skill.level}%</span>
              </div>
              <div className="relative h-3 bg-[#13131a] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    boxShadow: `0 0 20px ${skill.color}66`,
                  }}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={isInView ? { x: '400%' } : { x: '-100%' }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {['JavaScript', 'Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'WebGL'].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#13131a] border border-[#1a1a24] rounded-xl p-6 text-center hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <span className="text-lg font-semibold">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
