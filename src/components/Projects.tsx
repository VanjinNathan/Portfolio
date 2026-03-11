import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI Content Generator',
      description: 'An intelligent platform that generates high-quality content using advanced natural language processing and GPT models.',
      tags: ['React', 'Python', 'TensorFlow', 'OpenAI'],
      gradient: 'from-[#00d4ff] to-[#0099cc]',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Interactive 3D Portfolio',
      description: 'Award-winning portfolio website featuring immersive 3D graphics, smooth animations, and cutting-edge web technologies.',
      tags: ['Three.js', 'React', 'WebGL', 'GSAP'],
      gradient: 'from-[#7b2ff7] to-[#5a1fb8]',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Comprehensive analytics platform with real-time data visualization, machine learning insights, and predictive analytics.',
      tags: ['Next.js', 'D3.js', 'Node.js', 'MongoDB'],
      gradient: 'from-[#ff2e63] to-[#cc254f]',
      image: 'https://images.pexels.com/photos/7672251/pexels-photo-7672251.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding neural network architectures, training processes, and decision-making.',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      gradient: 'from-[#ffa726] to-[#cc8620]',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Blockchain Explorer',
      description: 'Decentralized application for exploring blockchain transactions with real-time updates and advanced search capabilities.',
      tags: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
      gradient: 'from-[#00d4ff] to-[#7b2ff7]',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Voice Assistant Platform',
      description: 'AI-powered voice assistant with natural language understanding, multi-language support, and contextual awareness.',
      tags: ['Python', 'NLP', 'TensorFlow', 'React'],
      gradient: 'from-[#ff2e63] to-[#ffa726]',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
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
    hidden: { opacity: 0, y: 50 },
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
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-[#9090a0] max-w-3xl mx-auto">
            A showcase of innovative solutions and creative experiments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-[#13131a] border border-[#1a1a24] rounded-2xl overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[#9090a0] mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#1a1a24] text-sm rounded-full text-[#00d4ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-[#00d4ff] hover:text-[#00b8e6] transition-colors"
                    >
                      <Github size={18} />
                      Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-[#00d4ff] hover:text-[#00b8e6] transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl -z-10 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
