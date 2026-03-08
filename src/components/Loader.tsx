import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Wait a bit at 100% before transitioning out
          return 100;
        }
        // Random increment between 1 and 15
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] text-[#ededed]"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase"
          >
            Hugo Takeda
          </motion.h1>
        </div>
        
        <div className="flex flex-col items-center gap-4 w-64">
          <div className="w-full h-[1px] bg-[#222222] relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          <div className="flex justify-between w-full text-xs tracking-widest text-[#a3a3a3] font-light">
            <span>Carregando a experiência</span>
            <span className="tabular-nums">{Math.min(progress, 100)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
