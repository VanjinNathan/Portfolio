import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      icon: Briefcase,
      type: 'Work Experience',
      items: [
        {
          title: 'Senior Full Stack Developer',
          company: 'Tech Innovations Inc.',
          period: '2022 - Present',
          description: 'Leading development of cutting-edge AI-powered applications and mentoring junior developers.',
          color: '#00d4ff',
        },
        {
          title: 'Full Stack Developer',
          company: 'Digital Solutions Co.',
          period: '2020 - 2022',
          description: 'Built scalable web applications using modern frameworks and cloud technologies.',
          color: '#7b2ff7',
        },
        {
          title: 'Frontend Developer',
          company: 'Creative Agency',
          period: '2019 - 2020',
          description: 'Developed interactive user interfaces and optimized performance for high-traffic websites.',
          color: '#ff2e63',
        },
      ],
    },
    {
      icon: Award,
      type: 'Achievements',
      items: [
        {
          title: 'Best Developer Award 2023',
          company: 'Tech Summit',
          period: '2023',
          description: 'Recognized for outstanding contribution to open-source projects.',
          color: '#ffa726',
        },
        {
          title: 'Hackathon Winner',
          company: 'Global Code Challenge',
          period: '2022',
          description: 'First place in AI category for innovative machine learning solution.',
          color: '#00d4ff',
        },
      ],
    },
    {
      icon: GraduationCap,
      type: 'Education',
      items: [
        {
          title: 'Computer Science Degree',
          company: 'University of Technology',
          period: '2015 - 2019',
          description: 'Specialized in AI, Machine Learning, and Software Engineering.',
          color: '#7b2ff7',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
            JOURNEY
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-[#9090a0] max-w-3xl mx-auto">
            A timeline of growth, learning, and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {experiences.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] rounded-xl">
                  <section.icon size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">{section.type}</h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-[#1a1a24] hover:border-[#00d4ff]/50 transition-colors duration-300"
                  >
                    <div
                      className="absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ring-4 ring-[#0a0a0f]"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="bg-[#13131a] border border-[#1a1a24] rounded-xl p-6 hover:border-[#00d4ff]/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <span className="text-sm text-[#9090a0]">{item.period}</span>
                      </div>
                      <p className="text-[#00d4ff] mb-2">{item.company}</p>
                      <p className="text-[#9090a0]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
