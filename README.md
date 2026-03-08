# 🗂️ Portfolio — Hugo Takeda

> Portfólio profissional desenvolvido com React, TypeScript, Vite e Tailwind CSS. Design minimalista Dark Mode, animações com Framer Motion e hospedagem na Vercel.

---

## 🚀 Stack

| Tecnologia | Função |
|---|---|
| **React + TypeScript** | Base da aplicação |
| **Vite** | Build tool e dev server |
| **Tailwind CSS v4** | Estilização utilitária |
| **Framer Motion** | Animações e transições |
| **Lucide React** | Ícones minimalistas |

---

## ✨ Funcionalidades

- 🎬 **Tela de Loading animada** — contador de progresso com fade de entrada
- 🌑 **Dark Mode full** — fundo #0A0A0A com grid sutil e radial glow
- 📌 **Navbar fixa** com rolagem suave para cada seção
- 🃏 **Cards de Projetos** com imagem, tags de tecnologia e links para GitHub/Live
- 💡 **Animações on-scroll** (Framer Motion) em todas as seções

---

## 📂 Estrutura

```
src/
├── components/
│   ├── Hero.tsx      # Seção inicial com headline
│   ├── About.tsx     # Narrativa técnica e linguagens
│   ├── Projects.tsx  # Grid de projetos com imagem
│   ├── Skills.tsx    # Arsenal técnico categorizado
│   └── Loader.tsx    # Tela de loading animada
├── App.tsx           # Composição geral e navegação
└── index.css         # Design tokens e utilitários
```

---

## 🖼️ Projetos em Destaque

- **SafeAccess** — Controle de acesso IoT com reconhecimento facial (Python + ESP32)
- **MedalBypass** — Downloader web de clipes sem marca d'água (TypeScript)
- **Smart Monitor PIR** — Alarme IoT com notificações Discord (Node.js)

---

## ▶️ Como rodar

```bash
npm install
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deploy

Hospedado na **Vercel**. Para fazer o seu próprio deploy:

1. Faça o push do projeto para o GitHub
2. Importe o repositório no painel da [Vercel](https://vercel.com)
3. Clique em **Deploy** — o build é detectado automaticamente

---

Desenvolvido por **Hugo Takeda** · [@hugotakeda](https://github.com/hugotakeda)
