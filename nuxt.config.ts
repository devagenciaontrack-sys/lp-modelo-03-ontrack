// Modelo 03 · Jurídico e financeiro — On Track LP
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    // GitHub Pages: LP_BASE=/<repo>/ · Vercel/domínio próprio: deixe vazio
    baseURL: process.env.LP_BASE || '/',
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Sua Marca Advogados — Proteção patrimonial e empresarial',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'description', content: 'Advocacia empresarial, tributária e patrimonial. Atendimento confidencial com sócios.' },
        { name: 'theme-color', content: '#0B111D' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Inter+Tight:wght@400;500;600&display=swap' },
        { rel: 'icon', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230B111D'/%3E%3Ctext x='32' y='44' text-anchor='middle' font-family='Georgia,serif' font-size='34' fill='%23C2A06A'%3ES%3C/text%3E%3C/svg%3E" },
      ],
    },
  },
})
