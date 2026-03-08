import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-sm tracking-widest uppercase text-[#a3a3a3] mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-[#a3a3a3]/30"></span>
          Sobre a Jornada
        </h2>
        <div className="text-lg md:text-2xl font-light leading-relaxed max-w-4xl space-y-6 text-[#ededed]">
          <p>
            Minha missão na tecnologia é clara: <span className="font-medium text-white">resolver problemas reais construindo aplicações de alta conversão e automações eficientes.</span>
          </p>
          <p className="text-[#a3a3a3]">
            Desenvolvo primariamente no ecossistema <span className="font-medium text-white">TypeScript/JavaScript</span> (com React, Vite e Node.js) para criar interfaces web rápidas e escaláveis. Quando o desafio envolve back-end pesado, integrações complexas (Webhooks/Discord) ou Visão Computacional, meu foco vai direto para o <span className="font-medium text-white">Python</span>. 
          </p>
          <p className="text-[#a3a3a3]">
            Além disso, também estendi meus conhecimentos para arquitetura IoT com <span className="font-medium text-white">C/C++</span>, programando microcontroladores e roteando hardwares independentes.
          </p>
          <p>
            Sou um desenvolvedor focado em <span className="text-white">performance e em construir do zero (End-to-End) o que realmente importa.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
