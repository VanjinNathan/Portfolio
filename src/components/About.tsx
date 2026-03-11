import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const features = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Building intelligent systems using machine learning and neural networks',
      gradient: 'from-[#00d4ff] to-[#0099cc]',
    },
    {
      icon: Code2,
      title: 'Web Mastery',
      description: 'Creating responsive, performant web applications with modern frameworks',
      gradient: 'from-[#7b2ff7] to-[#5a1fb8]',
    },
    {
      icon: Sparkles,
      title: 'Creative Tech',
      description: 'Exploring the boundaries of interactive design and digital art',
      gradient: 'from-[#ff2e63] to-[#cc254f]',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing the limits of what\'s possible with cutting-edge technology',
      gradient: 'from-[#ffa726] to-[#cc8620]',
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-[#13131a] border border-[#00d4ff]/20 rounded-full text-sm text-[#00d4ff] tracking-wider mb-6">
              ABOUT ME
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Transforming Ideas into{' '}
              <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="text-xl text-[#9090a0] max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who thrives at the intersection of technology and creativity.
              With expertise spanning AI, web development, and software engineering, I craft solutions
              that are both innovative and impactful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" />
                <div className="relative bg-[#13131a] border border-[#1a1a24] rounded-2xl p-8 h-full hover:border-[#00d4ff]/30 transition-all duration-300">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-[#9090a0] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 bg-[#13131a] border border-[#1a1a24] rounded-2xl px-12 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-[#9090a0] uppercase tracking-wider">Projects</div>
              </div>
              <div className="w-px h-12 bg-[#1a1a24]" />
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-[#9090a0] uppercase tracking-wider">Years Exp</div>
              </div>
              <div className="w-px h-12 bg-[#1a1a24]" />
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-[#9090a0] uppercase tracking-wider">Passion</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
