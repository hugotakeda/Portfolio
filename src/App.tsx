import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Loader } from './components/Loader';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // h-20
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`bg-[#0A0A0A] bg-grid min-h-screen text-[#ededed] font-sans selection:bg-white/20 transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-glow pointer-events-none"></div>
        <nav className="fixed w-full top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222222]/50">
          <div className="max-w-6xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
            <a href="#" onClick={(e) => scrollToSection(e, 'root')} className="text-white font-medium tracking-wide">HUGO TAKEDA</a>
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#a3a3a3]">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors">Sobre</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors">Projetos</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="hover:text-white transition-colors">Skills</a>
            </div>
          </div>
        </nav>

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>

        <footer className="py-12 border-t border-[#222222]/50 bg-[#050505]">
          <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#555555]">
              © {new Date().getFullYear()} Hugo Takeda. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-[#555555]">
              <a href="https://github.com/hugotakeda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/hugotakeda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@hugotakeda.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
