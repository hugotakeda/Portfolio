// Simple navigation logic for the TUI portfolio

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const contentSections = document.querySelectorAll('.content-section');

  // Handle navigation clicks
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');

      // Hide all content sections
      contentSections.forEach(section => section.classList.remove('active'));
      
      // Show targeted section
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      }
    });
  });

  // Uptime counter (Age based on birthdate)
  const uptimeElement = document.getElementById('uptime');
  const aboutUptimeElement = document.getElementById('about-uptime');
  
  // Set your birthdate here! (Year, Month (0-indexed), Day)
  const birthDate = new Date(2004, 7, 7); 
  let startTime = Date.now();

  function updateUptime() {
    const now = new Date();
    
    // --- About Section (Age) ---
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Check current language (assuming currentLang is accessible here)
    const isPt = typeof currentLang !== 'undefined' && currentLang === 'pt';
    const ageStr = isPt 
      ? `${years} anos, ${months} meses, ${days} dias`
      : `${years} years, ${months} months, ${days} days`;
      
    if (aboutUptimeElement) aboutUptimeElement.textContent = ageStr;

    // --- Sidebar Section (Session Uptime) ---
    const diff = now.getTime() - startTime;
    const sessionMinutes = Math.floor(diff / 60000);
    const sessionHours = Math.floor(sessionMinutes / 60);
    const remainingMinutes = sessionMinutes % 60;
    const remainingSeconds = Math.floor((diff % 60000) / 1000);

    let sessionStr = "";
    if (sessionHours > 0) {
      sessionStr = `${sessionHours}h ${remainingMinutes}m`;
    } else {
      sessionStr = `${remainingMinutes}m ${remainingSeconds}s`;
    }
    if (uptimeElement) uptimeElement.textContent = sessionStr;
  }

  // Update every second
  setInterval(updateUptime, 1000);

  // --- Translation Logic ---
  const translations = {
    "en": {
      "status-online": "online",
      "nav-title": "navigation",
      "nav-about": "/about",
      "nav-projects": "/projects",
      "nav-contact": "/contact",
      "sys-title": "system",
      "uptime-label": "uptime:",
      "subtitle": "a tui-style portfolio.",
      "fetch-host": "Back-end & Automation Engineer",
      "fetch-lang-comp-lbl": ". Languages.Computer:",
      "fetch-lang-real-lbl": ". Languages.Real:",
      "fetch-lang-real": "Portuguese, English",
      "fetch-contact-hdr": "- Contact -------------------------",
      "fetch-stats-hdr": "- GitHub Stats --------------------",
      "fetch-repos": ". Repos:",
      "fetch-followers": ". Followers:",
      "win-repos": "~/repositories",
      "repo-mediavault": "Private Cloud (NAS) with Nextcloud and smart IoT photo capture. Uses Cloudflare Tunnels (Zero Trust).",
      "repo-pir": "Intelligent IoT monitoring system (ESP32). Detects movement, captures images, sends alerts to Discord.",
      "repo-takeda": "Intuitive system analysis, cleaning, and optimization tool built with Electron. Keep your computer running smoothly.",
      "repo-wallet": "A personal finance Discord bot tracking expenses with natural language and monthly limits.",
      "repo-graph": "A custom graph mapping commits by time of day visualizing your circadian coding rhythm.",
      "repo-statscard": "Dynamic GitHub statistics card displaying most-used languages and recent activity.",
      "win-contact": "/var/mail/contact"
    },
    "pt": {
      "status-online": "online",
      "nav-title": "navegação",
      "nav-about": "/sobre",
      "nav-projects": "/projetos",
      "nav-contact": "/contato",
      "sys-title": "sistema",
      "uptime-label": "tempo ativo:",
      "subtitle": "um portfólio estilo tui.",
      "fetch-host": "Engenheiro Back-end & Automação",
      "fetch-lang-comp-lbl": ". Linguagens.Computador:",
      "fetch-lang-real-lbl": ". Linguagens.Reais:",
      "fetch-lang-real": "Português, Inglês",
      "fetch-contact-hdr": "- Contato -------------------------",
      "fetch-stats-hdr": "- Estatísticas GitHub -------------",
      "fetch-repos": ". Repositórios:",
      "fetch-followers": ". Seguidores:",
      "win-repos": "~/repositorios",
      "repo-mediavault": "Nuvem privada (NAS) com Nextcloud e captura inteligente IoT. Usa túneis Cloudflare.",
      "repo-pir": "Sistema inteligente de monitoramento IoT (ESP32). Detecta movimento, captura imagens, envia alertas.",
      "repo-takeda": "Ferramenta intuitiva de análise, limpeza e otimização em Electron. Mantenha seu PC rodando liso.",
      "repo-wallet": "Um bot de Discord para finanças pessoais rastreando despesas com linguagem natural e limites.",
      "repo-graph": "Um gráfico customizado mapeando commits por hora do dia, visualizando seu ritmo circadiano.",
      "repo-statscard": "Cartão dinâmico de estatísticas mostrando linguagens mais usadas e atividade recente.",
      "win-contact": "/var/mail/contato"
    }
  };

  let currentLang = "en";
  const langToggleBtns = document.querySelectorAll(".lang-toggle");

  function translatePage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  if (langToggleBtns.length > 0) {
    langToggleBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "pt" : "en";
        langToggleBtns.forEach(b => {
          b.textContent = currentLang === "en" ? "[PT-BR]" : "[EN-US]";
        });
        translatePage(currentLang);
      });
    });
  }

});
