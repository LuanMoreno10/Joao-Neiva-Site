export const site = {
  name: 'João Neiva',
  role: 'Personal & Strategic Advisor',
  tagline: 'Clareza para compreender. Direção para decidir.',
  // Assinatura do cartão de visita
  motto: 'Relações · Decisões · Recomeço',
  email: 'joaoneiva.advisor@gmail.com',
  // Número anterior retirado a pedido do cliente — vai mudar de operadora/número.
  // Enquanto ficar vazio, os botões "Agendar uma conversa" aparecem desativados (ver CtaLink).
  phone: '' as string,
  whatsappMessage: 'Olá João, gostaria de agendar uma conversa.',
} as const

export const mailLink = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`

// O wa.me só aceita dígitos: retira o "+" e os espaços do número.
// Sem número configurado, devolve undefined — os botões passam a aparecer desativados.
export const waLink = (message: string = site.whatsappMessage): string | undefined =>
  site.phone ? `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}` : undefined

export const contactUrl = waLink()

// Cada fotografia existe em várias larguras (public/images/<nome>-<largura>.webp);
// o browser escolhe a mais pequena que chega para o ecrã.
const photo = (name: string, widths: number[]) => ({
  src: `/images/${name}-${widths[widths.length - 1]}.webp`,
  srcSet: widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', '),
})

export const nav = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/sessoes-online/', label: 'Sessões Online' },
  { href: '/testemunhos/', label: 'Testemunhos' },
  { href: '/#contacto', label: 'Contacto' },
] as const

export const hero = {
  headline: 'Há alguma coisa na sua vida que sabe que precisa de resolver?',
  lead: 'Uma relação. Uma decisão. Uma mudança. Um conflito. Um bloqueio. Uma escolha profissional.',
  body: 'Talvez não precise de mais uma opinião. Talvez precise de uma perspetiva diferente.',
  image: {
    ...photo('JoaoPedro-11', [640, 960, 1365]),
    alt: 'Retrato de João Neiva',
  },
} as const

export const about = {
  eyebrow: 'A Trajetória',
  title: 'Quem é o João Neiva?',
  facts: [
    '18+ anos ligados ao desporto, liderança e desenvolvimento de pessoas.',
    '7+ anos ligados ao Sport Lisboa e Benfica — scouting e formação.',
    'Desde 2017 dedicado ao aconselhamento pessoal e estratégico.',
  ],
  closing:
    'Uma carreira construída a ouvir, a compreender e a ajudar pessoas a tomar decisões com mais clareza.',
  portrait: {
    ...photo('JoaoPedro-06', [480, 720, 960]),
    alt: 'João Neiva, conselheiro pessoal e estratégico',
  },
} as const

export const approach = {
  eyebrow: 'Filosofia de Trabalho',
  title: 'Sem respostas feitas.',
  subtitle: 'Uma abordagem baseada na escuta, no confronto construtivo e na honestidade.',
  steps: [
    {
      step: '01',
      title: 'Escutar',
      body: 'Uma atenção profunda que decifra o que fica por dizer nas entrelinhas.',
    },
    {
      step: '02',
      title: 'Compreender',
      body: 'Mapear o contexto real e as dinâmicas silenciosas do seu dilema.',
    },
    {
      step: '03',
      title: 'Confrontar',
      body: 'Colocar as perguntas desconfortáveis que outros evitam fazer-lhe.',
    },
    {
      step: '04',
      title: 'Decidir',
      body: 'Traçar um caminho prático com direção clara e total discernimento.',
    },
  ],
  quote: {
    label: 'O Coach da Dor',
    text: 'Não sou o coach que te diz o que queres ouvir. Sou o que te pergunta o que precisas de enfrentar.',
  },
} as const

export const services = {
  eyebrow: 'Aconselhamento Estratégico',
  title: 'O que posso fazer por si',
  note: 'Formatos disponíveis: presencial e online',
  items: [
    {
      numeral: 'I',
      title: 'Sessão Clareza',
      body: 'Uma sessão profunda para quem precisa de parar, pensar e ver com mais nitidez.',
    },
    {
      numeral: 'II',
      title: 'Acompanhamento Individual',
      body: 'Sessões regulares ao longo de semanas ou meses, com plano personalizado.',
    },
    {
      numeral: 'III',
      title: 'Sessão Estratégica',
      body: 'Focada num dilema concreto — profissional, pessoal ou de relações e vida amorosa.',
    },
    {
      numeral: 'IV',
      title: 'Acompanhamento Personalizado',
      body: 'Para quem quer um processo contínuo de evolução pessoal e estratégica.',
    },
    {
      numeral: 'V',
      title: 'Deslocações Especiais',
      body: 'Disponível para sessões presenciais em qualquer ponto do país.',
    },
  ],
} as const

export const online = {
  eyebrow: 'Flexibilidade Sem Fronteiras',
  title: 'Sessões Online',
  quote: 'A distância não precisa de ser um obstáculo à clareza.',
  details: [
    { label: 'Plataformas', value: 'Zoom ou Google Meet' },
    { label: 'Duração', value: '60 a 90 minutos por sessão' },
  ],
  cta: 'Agendar sessão online',
  features: [
    {
      title: 'Privacidade total',
      body: 'Espaço digital sob rigorosos padrões de confidencialidade e ambiente seguro.',
    },
    {
      title: 'Flexibilidade total',
      body: 'Ajuste de agendas personalizado para conciliar perfeitamente com o seu fuso horário.',
    },
    {
      title: 'Acessibilidade',
      body: 'Consultoria estratégica disponível a partir de qualquer ponto do globo.',
    },
  ],
} as const

export const testimonials = {
  eyebrow: 'Perspetivas Reais',
  title: 'O que dizem sobre mim',
  invite: 'Quer dar o primeiro passo?',
  cta: 'Agendar uma conversa',
  items: [
    {
      quote: 'Pela primeira vez senti que alguém me ouvia sem me julgar. E isso mudou tudo.',
      author: 'M.S., Lisboa',
    },
    {
      quote: 'Não me disse o que fazer. Ajudou-me a perceber o que eu já sabia.',
      author: 'R.C., Porto',
    },
    {
      quote:
        'Comecei online porque não me imaginava a falar destas coisas cara a cara. Sessão após sessão, o João foi desmontando essa barreira — hoje faço questão de ir presencialmente.',
      author: 'T.F., Guimarães',
    },
    {
      quote: 'As sessões com o João foram o ponto de viragem na minha vida profissional.',
      author: 'A.L., Braga',
    },
  ],
} as const

export const locations = {
  eyebrow: 'Presença & Atendimento',
  title: 'Onde estou',
  places: ['Presencial', 'Online'],
  note: 'Sessões presenciais em espaços que garantem privacidade, conforto e discrição.',
} as const

export const closing = {
  title: 'Nem todas as decisões precisam de mais tempo. Algumas precisam de mais clareza.',
  cta: 'Agendar uma conversa',
} as const

export const footer = {
  legal: `© ${new Date().getFullYear()} João Neiva. Todos os direitos reservados.`,
  descriptor: 'Consultoria Estratégica e Desenvolvimento Pessoal',
} as const
