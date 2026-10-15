<script setup lang="ts">
// ============ PERSONALIZAÇÃO ============
const site = {
  marca: 'Sua Marca',
  sufixo: 'Advogados',
  oab: 'OAB/UF 00.000',
  whatsapp: '5500000000000',
  email: 'contato@suamarca.com.br',
  telefone: '(00) 0000-0000',
  endereco: 'Av. Exemplo, 0000 — 00º andar, Cidade/UF',
  cnpj: '00.000.000/0000-00',
  instagram: '#',
}
const wa = (msg = 'Olá! Gostaria de falar com um advogado.') => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`

const numeros = [
  { v: '00', u: 'anos', d: 'de atuação contínua' },
  { v: 'R$ 0', u: 'bi', d: 'em patrimônio sob orientação' },
  { v: '000', u: '+', d: 'empresas atendidas' },
]
const areas = [
  { t: 'Empresarial', d: 'Contratos, societário, fusões e reorganizações.' },
  { t: 'Tributário', d: 'Planejamento fiscal, defesas e recuperação de créditos.' },
  { t: 'Patrimonial', d: 'Holdings, sucessão e proteção de bens da família.' },
  { t: 'Trabalhista empresarial', d: 'Prevenção de passivos e defesa em processos.' },
  { t: 'Contencioso estratégico', d: 'Litígios de alto impacto em todas as instâncias.' },
  { t: 'Compliance', d: 'Programas de integridade, LGPD e governança.' },
]
const etapas = [
  { t: 'Conversa inicial', d: 'Reunião confidencial para entender o cenário e o que está em jogo.' },
  { t: 'Diagnóstico', d: 'Análise de documentos, riscos e alternativas, com parecer por escrito.' },
  { t: 'Estratégia', d: 'Plano de ação com prazos, custos e responsáveis definidos.' },
  { t: 'Execução e acompanhamento', d: 'Um sócio responsável e relatórios periódicos até o desfecho.' },
]
const socios = [
  { n: 'Nome Sobrenome', c: 'Sócio fundador', a: 'Tributário e patrimonial' },
  { n: 'Nome Sobrenome', c: 'Sócia', a: 'Empresarial e societário' },
  { n: 'Nome Sobrenome', c: 'Sócio', a: 'Contencioso estratégico' },
]

const form = reactive({ nome: '', email: '', mensagem: '' })
const enviado = ref(false)
const erro = ref('')
function enviar() {
  if (!form.nome.trim() || !/^\S+@\S+\.\S+$/.test(form.email) || form.mensagem.trim().length < 10) {
    erro.value = 'Preencha nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres.'
    return
  }
  erro.value = ''
  // Envio por e-mail do cliente. Para receber no sistema, troque por uma chamada de API (Formspree, RD Station etc.).
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Contato confidencial — ' + form.nome)}&body=${encodeURIComponent(form.mensagem + '\n\n' + form.nome + ' — ' + form.email)}`
  enviado.value = true
}
</script>

<template>
  <div>
    <header class="top">
      <div class="wrap top-in">
        <a href="#" class="logo">{{ site.marca }}<span>{{ site.sufixo }}</span></a>
        <nav class="nav"><a href="#areas">Áreas</a><a href="#metodo">Como trabalhamos</a><a href="#escritorio">Escritório</a></nav>
        <a class="btn btn-gold btn-sm" href="#contato">Falar com advogado</a>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="wrap">
          <p class="eyebrow">Advocacia empresarial e patrimonial</p>
          <h1>O que você construiu merece <em>a mesma seriedade</em> na hora de proteger.</h1>
          <div class="hero-row">
            <p class="lead">Estruturamos, defendemos e preservamos o patrimônio de empresas e famílias, com um sócio à frente de cada caso.</p>
            <div class="cta">
              <a class="btn btn-gold btn-lg" href="#contato">Falar com advogado</a>
              <a class="link" :href="wa()" target="_blank" rel="noopener">ou pelo WhatsApp</a>
            </div>
          </div>
          <dl class="nums">
            <div v-for="n in numeros" :key="n.d"><dt>{{ n.v }}<small>{{ n.u }}</small></dt><dd>{{ n.d }}</dd></div>
          </dl>
        </div>
      </section>

      <section id="areas" class="sec">
        <div class="wrap">
          <div class="head"><h2>Áreas de atuação</h2><p>Equipes dedicadas por especialidade, com atuação integrada quando o caso exige.</p></div>
          <div class="grid">
            <article v-for="(a, i) in areas" :key="a.t" class="area">
              <span class="area-n">{{ ['I','II','III','IV','V','VI'][i] }}</span>
              <h3>{{ a.t }}</h3>
              <p>{{ a.d }}</p>
              <span class="area-go">Saiba mais</span>
            </article>
          </div>
        </div>
      </section>

      <section id="metodo" class="sec dark">
        <div class="wrap metodo">
          <div class="head head-dark"><h2>Como trabalhamos</h2><p>Um processo claro, do primeiro contato ao desfecho.</p></div>
          <ol class="timeline">
            <li v-for="(e, i) in etapas" :key="e.t"><span class="dot">{{ i + 1 }}</span><div><h3>{{ e.t }}</h3><p>{{ e.d }}</p></div></li>
          </ol>
        </div>
      </section>

      <section id="escritorio" class="sec">
        <div class="wrap">
          <div class="head"><h2>O escritório</h2><p>Sócios com atuação direta nos casos e reconhecimento das principais publicações do setor.</p></div>
          <div class="socios">
            <figure v-for="s in socios" :key="s.c + s.a" class="socio">
              <div class="ph"><span>Foto do sócio</span></div>
              <figcaption><b>{{ s.n }}</b><span>{{ s.c }} · {{ s.a }}</span></figcaption>
            </figure>
          </div>
          <ul class="selos">
            <li>[Ranking jurídico 0000]</li><li>[Publicação especializada]</li><li>[Prêmio ou certificação]</li><li>[Associação de classe]</li>
          </ul>
        </div>
      </section>

      <section id="contato" class="sec contato">
        <div class="wrap contato-grid">
          <div>
            <h2>Conversa confidencial</h2>
            <p class="lead lead-dark">Conte brevemente o seu caso. Um sócio retorna em até um dia útil. As informações enviadas são tratadas com sigilo profissional.</p>
            <ul class="info"><li>{{ site.telefone }}</li><li>{{ site.email }}</li><li>{{ site.endereco }}</li></ul>
          </div>
          <form class="form" novalidate @submit.prevent="enviar">
            <label>Nome<input v-model="form.nome" name="nome" autocomplete="name" placeholder="Seu nome completo…"></label>
            <label>E-mail<input v-model="form.email" name="email" type="email" autocomplete="email" spellcheck="false" placeholder="nome@empresa.com.br…"></label>
            <label>Mensagem<textarea v-model="form.mensagem" name="mensagem" rows="5" placeholder="Em poucas linhas, do que se trata…" /></label>
            <p v-if="erro" class="err" role="alert">{{ erro }}</p>
            <p v-if="enviado" class="ok" role="status">Abrimos o seu e-mail com a mensagem pronta. É só enviar.</p>
            <button class="btn btn-gold btn-lg" type="submit">Enviar com sigilo</button>
            <p class="lock">🔒 Seus dados não são compartilhados com terceiros.</p>
          </form>
        </div>
      </section>
    </main>

    <footer class="foot rod">
      <div class="wrap rod-top">
        <div class="rod-brand">
          <b class="rod-logo logo">{{ site.marca }}<span>{{ site.sufixo }}</span></b>
          <p>{{ site.marca }} Sociedade de Advogados · {{ site.oab }} · CNPJ {{ site.cnpj }}</p><p>{{ site.endereco }}</p><p class="legal">Este site tem caráter informativo e não constitui consultoria jurídica. Conteúdo em conformidade com o Provimento 205/2021 da OAB.</p>
        </div>
        <div class="rod-soc">
          <a :href="`https://wa.me/${site.whatsapp}`" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 20.5 4.8 16.3A8.5 8.5 0 1 1 8 19.3Z"/><path d="M9.2 8.6c-.1 3.3 2.9 6.3 6.2 6.2l.9-1.5-1.9-.9-.9.8a5 5 0 0 1-2.6-2.6l.8-.9-.9-1.9Z"/></svg></a>
          <a :href="site.instagram" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/></svg></a>
        </div>
      </div>
      <div class="wrap"><div class="rod-bot">
        <span>© {{ new Date().getFullYear() }} {{ site.marca }}. Todos os direitos reservados.</span>
        <a class="rod-credit" href="https://www.ontrackagenciadigital.com.br/" target="_blank" rel="noopener">Desenvolvido por <b>OnTrack Agência Digital</b></a>
      </div></div>
    </footer>
  </div>
</template>
