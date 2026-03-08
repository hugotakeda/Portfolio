import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Front-end & Interface",
    icon: <Code2 size={24} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />,
    skills: [
      "TypeScript & JavaScript (ES6+)",
      "React & Ecossistema (Vite)",
      "Tailwind CSS (Prototipação acelerada)",
      "HTML UI/UX Dinâmico",
      "Framer Motion"
    ]
  },
  {
    title: "Back-end & Automação",
    icon: <Terminal size={24} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />,
    skills: [
      "Python (CV, Scripts)",
      "Node.js",
      "Web Scraping / Bypasses",
      "Bots e Integrações Discord API",
      "Webhooks & Automação"
    ]
  },
  {
    title: "IoT & Hardware Integrado",
    icon: <Cpu size={24} className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />,
    skills: [
      "Microcontroladores ESP32",
      "Arduino (C/C++)",
      "Sensores PIR e Integração de Relés",
      "Visão Computacional na Nuvem"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-20 max-w-6xl mx-auto border-t border-[#222222]/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-sm tracking-widest uppercase text-[#a3a3a3] mb-16 flex items-center gap-4">
          <span className="w-12 h-px bg-[#a3a3a3]/30"></span>
          Arsenal Técnico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="text-white">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-[#a3a3a3] text-sm flex items-center gap-4">
                    <span className="w-1 h-1 rounded-full bg-[#444444] transition-all group-hover:bg-white/40 group-hover:scale-150"></span>
                    <span className="font-light">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
