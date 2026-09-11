export const site = {
  name: 'João Neiva',
  role: 'Conselheiro Pessoal & Estratégico',
  tagline: 'Clareza para compreender. Direção para decidir.',
  email: 'joao@joaoneiva.pt',
  // TODO: substituir pelo número real (formato internacional, sem + nem espaços)
  whatsapp: '351900000000',
  whatsappMessage: 'Olá João, gostaria de agendar uma conversa.',
} as const

export const waLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const whatsappUrl = waLink()

export const nav = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'sessoes-online', label: 'Sessões Online' },
  { id: 'testemunhos', label: 'Testemunhos' },
  { id: 'contacto', label: 'Contacto' },
] as const

export const hero = {
  headline: 'Há alguma coisa na sua vida que sabe que precisa de resolver?',
  lead: 'Uma relação. Uma decisão. Uma mudança. Um conflito. Um bloqueio. Uma escolha profissional.',
  body: 'Talvez não precise de mais uma opinião. Talvez precise de uma perspetiva diferente.',
  image: {
    src: '/images/hero.jpg',
    alt: 'Retrato de João Neiva',
  },
} as const

export const about = {
  eyebrow: 'A Trajetória',
  title: 'Quem é o João Neiva?',
  facts: [
    '18+ anos ligados ao desporto, liderança e desenvolvimento de pessoas.',
    '7+ anos ligados ao Sport Lisboa e Benfica — scouting, formação e alto rendimento.',
    'Desde 2017 dedicado ao coaching e motivação pessoal e estratégica.',
  ],
  closing:
    'Uma carreira construída a ouvir, a compreender e a ajudar pessoas a tomar decisões com mais clareza.',
  portrait: {
    src: '/images/retrato.jpg',
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
  note: 'Formatos disponíveis: online ou presencial',
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
  places: ['Famalicão', 'Porto', 'Braga', 'Online'],
  note: 'Sessões presenciais em espaços que garantem privacidade, conforto e discrição.',
} as const

export const footer = {
  title: 'Nem todas as decisões precisam de mais tempo. Algumas precisam de mais clareza.',
  cta: 'Agendar uma conversa',
  legal: `© ${new Date().getFullYear()} João Neiva. Todos os direitos reservados.`,
  descriptor: 'Consultoria Estratégica e Desenvolvimento Pessoal',
} as const
