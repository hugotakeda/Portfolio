import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
          Engenheiro de Software & <br className="hidden md:block"/> 
          Desenvolvedor Full-Stack.
        </h1>
        <p className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl leading-relaxed font-light">
          Desenvolvo desde interfaces web de alta conversão até automações complexas e ecossistemas IoT. Construindo o invisível para destacar o essencial.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-20"
      >
        <a href="#about" className="flex items-center gap-3 text-sm tracking-widest uppercase text-[#a3a3a3] hover:text-white transition-colors">
          <ArrowDown size={16} />
          <span>Explorar</span>
        </a>
      </motion.div>
    </section>
  );
}
