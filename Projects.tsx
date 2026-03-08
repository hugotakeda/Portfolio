import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "SafeAccess | Segurança IoT com IA",
    problem: "O controle de acesso físico tradicional é um sistema fechado e sem feedback visual na era digital.",
    solution: "Um ecossistema IoT integrado de ponta a ponta. Configurei câmeras ESP32 integradas a scripts Python de reconhecimento facial que abrem portas fisicamente via relé e documentam, em tempo real, cada acesso enviando foto do visitante direto para um canal seguro do Discord.",
    tech: ["Python", "C/C++", "Discord API", "OpenCV"],
    github: "https://github.com/hugotakeda/DetectorFacial",
    image: "/projeto-safeaccess.jpg" // Coloque sua imagem na pasta public
  },
  {
    title: "MedalBypass | Scraper & Downloader",
    problem: "Jogadores e editores esbarravam em barreiras sistemáticas e interfaces carregadas para simplesmente extrair seus próprios clipes do Medal.tv.",
    solution: "Uma ferramenta web assíncrona, direta ao ponto e extremamente minimalista. O sistema faz bypass e age como extrator, entregando instantaneamente o link do arquivo .mp4 nativo em 1-click.",
    tech: ["TypeScript", "Web Scraping", "DOM Manipulation"],
    github: "https://github.com/hugotakeda/MedalBypass",
    live: "https://medal-bypass-pts.vercel.app",
    image: "/projeto-medal.jpg" // Coloque sua imagem na pasta public
  },
  {
    title: "Smart Monitor PIR | Alarme IoT",
    problem: "Softwares corporativos de monitoramento são muito caros e engessados para pequenos setups.",
    solution: "Um sistema assíncrono projetado usando sensores PIR físicos conectados a um núcleo em Node.js com automação direta. Detectou movimento real? O dono é notificado com urgência direto no celular via webhooks customizados.",
    tech: ["Node.js", "HTML/CSS", "Sensores IoT"],
    github: "https://github.com/hugotakeda/PIRDetector",
    image: "/projeto-pir.jpg" // Coloque sua imagem na pasta public
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 max-w-6xl mx-auto border-t border-[#222222]/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-sm tracking-widest uppercase text-[#a3a3a3] mb-16 flex items-center gap-4">
          <span className="w-12 h-px bg-[#a3a3a3]/30"></span>
          Projetos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl bg-[#0d0d0d] border border-[#222222] hover:bg-[#121212] hover:border-[#333333] transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Imagem do Projeto */}
              <div className="w-full h-48 bg-[#1a1a1a] relative overflow-hidden border-b border-[#222222]">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#333333]">
                    <span>Imagem do Projeto</span>
                  </div>
                )}
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-[#555555] shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-5 mb-8 flex-grow">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#666666] mb-2 font-medium">O Problema</h4>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#666666] mb-2 font-medium">A Solução</h4>
                    <p className="text-sm text-[#ededed] leading-relaxed font-light">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-4 py-1.5 rounded-full bg-black border border-[#222222] text-[#888888] shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
