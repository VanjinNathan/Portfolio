import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]"
    >
      <div className="relative">
        <motion.div
          className="w-64 h-64 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 border-4 border-transparent border-t-[#00d4ff] border-r-[#7b2ff7] rounded-full"></div>
          <div className="absolute inset-4 border-4 border-transparent border-b-[#ff2e63] border-l-[#ffa726] rounded-full"></div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold gradient-text mb-4"
            >
              {progress}%
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-[#9090a0] tracking-widest uppercase"
            >
              Loading Experience
            </motion.div>
          </div>
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-[#13131a] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00d4ff] via-[#7b2ff7] to-[#ff2e63]"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -10,
              opacity: 0.3,
            }}
            animate={{
              y: window.innerHeight + 10,
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
