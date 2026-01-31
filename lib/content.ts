// ============================================================
// SiteSolutions - Conteúdo do Site (PT-PT)
// ============================================================
// Este ficheiro centraliza todo o conteúdo do site para fácil edição.
// Para adicionar novos idiomas (EN/ES), crie ficheiros content.en.ts e content.es.ts
// com a mesma estrutura e implemente um sistema de routing baseado em locale.
// ============================================================

export const siteConfig = {
  name: "SiteSolutions",
  description: "Criamos e mantemos websites profissionais para empresas em Portugal",
  url: "https://sitesolutions.pt",
  locale: "pt-PT",
  // Contactos - Edite aqui os seus dados reais
  contact: {
    email: "geral@sitesolutions.pt",
    phone: "+351 210 000 000",
    whatsapp: "+351 910 000 000",
    address: "Av. da Liberdade, 110, 1250-146 Lisboa",
    hours: "Seg-Sex: 9h00-18h00",
  },
  social: {
    linkedin: "https://linkedin.com/company/sitesolutions",
    instagram: "https://instagram.com/sitesolutions.pt",
    facebook: "https://facebook.com/sitesolutions.pt",
  },
};

export const navigation = {
  main: [
    { name: "Serviços", href: "/servicos" },
    { name: "Planos", href: "/planos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Sobre", href: "/sobre" },
    { name: "Blog", href: "/blog" },
  ],
  // Mega menu structure for services dropdown
  servicesMenu: [
    {
      category: "Serviços",
      items: [
        { name: "Manutenção de Sites", href: "/servicos/manutencao-sites", description: "Manutenção contínua e suporte" },
        { name: "SEO Técnico", href: "/servicos/seo-tecnico", description: "Otimização para motores de busca" },
        { name: "Performance & Core Web Vitals", href: "/servicos/performance-core-web-vitals", description: "Velocidade e performance" },
        { name: "Segurança & Backups", href: "/servicos/seguranca-backups", description: "Proteção e recuperação" },
        { name: "Landing Pages & CRO", href: "/servicos/landing-pages-cro", description: "Páginas otimizadas para conversão" },
        { name: "SEO para IA (GEO)", href: "/servicos/seo-para-ia-geo", description: "Visibilidade em AI assistants" },
      ],
    },
    {
      category: "Setores",
      items: [
        { name: "Sites para Clínicas", href: "/setores/sites-para-clinicas", description: "Saúde e bem-estar" },
        { name: "Sites para Imobiliárias", href: "/setores/sites-para-imobiliarias", description: "Setor imobiliário" },
        { name: "Sites para Restaurantes", href: "/setores/sites-para-restaurantes", description: "Restauração e hotelaria" },
        { name: "Sites para E-commerce", href: "/setores/sites-para-ecommerce", description: "Lojas online" },
      ],
    },
  ],
  footer: {
    services: [
      { name: "Manutenção de Sites", href: "/servicos/manutencao-sites" },
      { name: "SEO Técnico", href: "/servicos/seo-tecnico" },
      { name: "Performance & Core Web Vitals", href: "/servicos/performance-core-web-vitals" },
      { name: "Segurança & Backups", href: "/servicos/seguranca-backups" },
      { name: "Landing Pages & CRO", href: "/servicos/landing-pages-cro" },
      { name: "SEO para IA (GEO)", href: "/servicos/seo-para-ia-geo" },
    ],
    sectors: [
      { name: "Sites para Clínicas", href: "/setores/sites-para-clinicas" },
      { name: "Sites para Imobiliárias", href: "/setores/sites-para-imobiliarias" },
      { name: "Sites para Restaurantes", href: "/setores/sites-para-restaurantes" },
      { name: "Sites para E-commerce", href: "/setores/sites-para-ecommerce" },
    ],
    company: [
      { name: "Sobre Nós", href: "/sobre" },
      { name: "Portfólio", href: "/portfolio" },
      { name: "Auditoria Gratuita 48h", href: "/auditoria-48h" },
      { name: "Contacto", href: "/auditoria-48h#contacto" },
    ],
    legal: [
      { name: "Política de Privacidade", href: "/privacidade" },
      { name: "Termos e Condições", href: "/termos" },
    ],
  },
};

export const hero = {
  title: "Websites profissionais com manutenção incluída.",
  subtitle:
    "Criamos e mantemos websites rápidos, seguros e focados em gerar pedidos, para que a sua empresa não tenha preocupações técnicas.",
  cta: {
    primary: "Pedir proposta",
    secondary: "Falar com um especialista",
  },
  badges: [
    { label: "Suporte rápido", icon: "headphones" },
    { label: "Performance & SEO", icon: "zap" },
    { label: "Segurança & backups", icon: "shield" },
    { label: "Manutenção contínua", icon: "wrench" },
  ],
};


export const whySiteSolutions = {
  title: "Porque a SiteSolutions",
  subtitle:
    "Não entregamos um site e desaparecemos. Acompanhamos, melhoramos e mantemos tudo a funcionar.",
  pillars: [
    {
      title: "Manutenção como prioridade",
      description:
        "Atualizações, correções e melhorias contínuas — o seu site não fica parado no tempo.",
      icon: "refresh",
    },
    {
      title: "Suporte rápido e humano",
      description:
        "Comunicação direta, sem jargão, e resposta em prazos definidos.",
      icon: "message",
    },
    {
      title: "Performance e SEO técnico",
      description:
        "Velocidade, estrutura e boas práticas para melhor experiência e visibilidade.",
      icon: "chart",
    },
    {
      title: "Segurança e backups",
      description:
        "Monitorização, backups automáticos e prevenção de falhas e ataques.",
      icon: "shield",
    },
    {
      title: "Transparência total",
      description:
        "Sem fidelizações escondidas. Relatórios claros e trabalho documentado.",
      icon: "clock",
    },
  ],
};


export const trustGuarantees = {
  title: "Trabalhe connosco com confiança",
  items: [
    { label: "Sem fidelização", description: "Cancele quando quiser, sem penalizações", icon: "unlock" },
    { label: "Cancelamento simples", description: "30 dias de aviso prévio, sem burocracia", icon: "x-circle" },
    { label: "Backups regulares", description: "Os seus dados sempre protegidos e recuperáveis", icon: "database" },
    { label: "Suporte humano", description: "Pessoas reais, respostas reais, soluções reais", icon: "users" },
    { label: "Transparência total", description: "Sem custos escondidos, sem surpresas na fatura", icon: "eye" },
  ],
};

export const clientLogos = [
  "Clínicas",
  "Consultorias",
  "Imobiliárias",
  "Restauração",
  "E-commerce",
  "Serviços Profissionais",
];

export const stats = [
  { label: "Suporte em 24h úteis", value: "SLA" },
  { label: "Monitorização contínua", value: "24/7" },
  { label: "Backups automáticos", value: "Diários" },
  { label: "Entrega com checklist", value: "QA" },
];

export const services = [
  {
    id: "criacao",
    title: "Criação de Websites",
    description: "Websites institucionais, landing pages e lojas online que convertem visitantes em clientes.",
    features: [
      "Design personalizado e responsivo",
      "Otimizado para conversão",
    ],
    icon: "globe",
    image: "/services/criacao-websites.png",
  },
  {
    id: "manutencao",
    title: "Manutenção Mensal",
    description: "Mantemos o seu site sempre atualizado, seguro e a funcionar sem interrupções.",
    features: [
      "Atualizações de segurança",
      "Correções e pequenas alterações",
    ],
    icon: "wrench",
    image: "/services/manutencao.png",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Sites rápidos vendem mais. Otimizamos Core Web Vitals e velocidade de carregamento.",
    features: [
      "Otimização de imagens e código",
      "CDN e cache avançado",
    ],
    icon: "zap",
    image: "/services/performance.png",
  },
  {
    id: "seo",
    title: "SEO Técnico",
    description: "Estrutura técnica otimizada para os motores de busca encontrarem o seu site.",
    features: [
      "Estrutura e indexação corretas",
      "Schema markup e metadados",
    ],
    icon: "search",
    image: "/services/seo.png",
  },
  {
    id: "seguranca",
    title: "Segurança & Backups",
    description: "Proteção contínua contra ameaças e backups automáticos para recuperação rápida.",
    features: [
      "Monitorização 24/7",
      "Restauração em minutos",
    ],
    icon: "shield",
    image: "/services/seguranca.png",
  },
  {
    id: "hosting",
    title: "Hosting Gerido",
    description: "Alojamento profissional com suporte dedicado e performance garantida.",
    features: [
      "Servidores otimizados",
      "SSL incluído",
    ],
    icon: "server",
    image: "/services/hosting.png",
  },
];

export const plans = [
  {
    id: "essencial",
    name: "Essencial",
    description: "Para sites institucionais simples",
    popular: false,
    highlights: {
      hours: "1h/mês",
      sla: "72h úteis",
      backups: "Semanal",
    },
    features: [
      { text: "Atualizações técnicas mensais", included: true },
      { text: "Monitorização básica", included: true },
      { text: "Backups regulares", included: true },
      { text: "Correções críticas", included: true },
      { text: "Suporte por email", included: true },
      { text: "Tempo de resposta: até 72h úteis", included: true },
      { text: "Pequenas alterações incluídas", included: false },
      { text: "Relatório mensal", included: false },
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    description: "Mais escolhido por PMEs",
    popular: true,
    highlights: {
      hours: "3h/mês",
      sla: "24h úteis",
      backups: "Diário",
    },
    features: [
      { text: "Tudo do Essencial", included: true },
      { text: "Backups diários", included: true },
      { text: "Monitorização avançada", included: true },
      { text: "Até 3h/mês de pequenas alterações", included: true },
      { text: "Otimização de performance", included: true },
      { text: "Relatório mensal", included: true },
      { text: "Tempo de resposta: até 24h úteis", included: true },
      { text: "Suporte prioritário", included: true },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Acompanhamento completo",
    popular: false,
    highlights: {
      hours: "6h/mês",
      sla: "12h úteis",
      backups: "Diário",
    },
    features: [
      { text: "Tudo do Profissional", included: true },
      { text: "Até 6h/mês de alterações", included: true },
      { text: "SEO técnico contínuo", included: true },
      { text: "Monitorização de segurança", included: true },
      { text: "Consultoria mensal", included: true },
      { text: "Tempo de resposta: até 12h úteis", included: true },
      { text: "Suporte prioritário + WhatsApp", included: true },
    ],
  },
];

export const process = [
  {
    step: 1,
    title: "Diagnóstico",
    description: "Reunião de 15 minutos para entender o seu negócio e objetivos.",
  },
  {
    step: 2,
    title: "Proposta",
    description: "Enviamos uma proposta detalhada com cronograma e investimento.",
  },
  {
    step: 3,
    title: "Design & Desenvolvimento",
    description: "Criamos o seu site com aprovações em cada etapa do processo.",
  },
  {
    step: 4,
    title: "Lançamento",
    description: "Publicamos o site após testes rigorosos e formação da equipa.",
  },
  {
    step: 5,
    title: "Manutenção",
    description: "Acompanhamento contínuo para garantir performance e segurança.",
  },
];

export const caseStudies = [
  {
    id: "clinica-exemplo",
    client: "Clínica Médica Premium",
    sector: "Saúde",
    image: "/portfolio/clinica.jpg",
    objective: "Aumentar marcações online",
    result: "+45% marcações",
    description: "Redesign completo do website com foco em conversão e integração com sistema de agendamento.",
    testimonial: "O novo site triplicou as nossas marcações online no primeiro trimestre.",
    testimonialAuthor: "Dr. João Silva",
    testimonialRole: "Diretor Clínico",
  },
  {
    id: "consultoria-exemplo",
    client: "Consultoria Financeira ABC",
    sector: "Serviços Financeiros",
    image: "/portfolio/consultoria.jpg",
    objective: "Gerar leads qualificados",
    result: "+32% pedidos de proposta",
    description: "Website institucional premium com landing pages otimizadas para captação de leads.",
    testimonial: "A qualidade dos leads melhorou significativamente desde o lançamento.",
    testimonialAuthor: "Maria Santos",
    testimonialRole: "CEO",
  },
  {
    id: "ecommerce-exemplo",
    client: "Loja Gourmet Online",
    sector: "E-commerce",
    image: "/portfolio/ecommerce.jpg",
    objective: "Melhorar velocidade e conversão",
    result: "-45% tempo de carregamento",
    description: "Otimização de performance e checkout para aumentar taxa de conversão.",
    testimonial: "As vendas aumentaram 28% após a otimização de performance.",
    testimonialAuthor: "Pedro Costa",
    testimonialRole: "Fundador",
  },
  {
    id: "imobiliaria-exemplo",
    client: "Imobiliária Central",
    sector: "Imobiliário",
    image: "/portfolio/imobiliaria.jpg",
    objective: "Modernizar presença digital",
    result: "+60% tráfego orgânico",
    description: "Novo website com pesquisa avançada de imóveis e SEO técnico otimizado.",
    testimonial: "O site tornou-se a nossa principal fonte de contactos.",
    testimonialAuthor: "Ana Ferreira",
    testimonialRole: "Diretora Comercial",
  },
];

export const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO, Tech Startup",
    content: "A SiteSolutions entregou um site que superou todas as expectativas. O suporte é excecional.",
    rating: 5,
  },
  {
    name: "Sofia Rodrigues",
    role: "Diretora de Marketing, Retail",
    content: "Finalmente tenho paz de espírito. Sei que o site está sempre atualizado e seguro.",
    rating: 5,
  },
  {
    name: "Miguel Almeida",
    role: "Fundador, E-commerce",
    content: "A performance do site melhorou drasticamente. As vendas refletem isso.",
    rating: 5,
  },
  {
    name: "Catarina Sousa",
    role: "Gestora, Clínica Dentária",
    content: "Profissionais, rápidos e sempre disponíveis. Recomendo a 100%.",
    rating: 5,
  },
  {
    name: "António Pereira",
    role: "Diretor, Consultoria",
    content: "O relatório mensal é fantástico. Sei sempre como está a performance do meu site.",
    rating: 5,
  },
  {
    name: "Beatriz Lopes",
    role: "Proprietária, Restaurante",
    content: "Nunca mais tive problemas com o site. A manutenção mensal vale cada cêntimo.",
    rating: 5,
  },
];

export const faq = [
  {
    question: "O que está incluído na manutenção?",
    answer:
      "Atualizações de segurança, backups, monitorização, correções e um número de horas mensais para pequenas alterações (consoante o plano).",
  },
  {
    question: "O que conta como pequena alteração?",
    answer:
      "Alterações simples como atualizar textos/imagens, ajustes de layout, correções pontuais e melhorias pequenas em formulários. Funcionalidades novas e redesigns completos são orçamentados à parte.",
  },
  {
    question: "Em quanto tempo entregam um site?",
    answer:
      "Depende da complexidade. Um site institucional pode ficar pronto em 2–3 semanas; projetos mais complexos podem demorar 4–8 semanas. Definimos prazos no kickoff.",
  },
  {
    question: "Trabalham com WordPress / Next.js / Shopify?",
    answer:
      "Sim. Recomendamos a stack mais adequada ao seu negócio e objetivos (WordPress, Next.js, Shopify/WooCommerce, entre outras).",
  },
  {
    question: "Preciso de hosting? Vocês tratam disso?",
    answer:
      "Podemos gerir o alojamento e domínio por si, ou trabalhar com o seu fornecedor atual. O importante é garantir performance e segurança.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Os planos são mensais e pode cancelar com aviso prévio de 30 dias. Sem fidelizações obrigatórias.",
  },
];

export const plansFaq = [
  {
    question: "Fico preso a contrato?",
    answer:
      "Não. Os planos são mensais e pode cancelar com 30 dias de aviso prévio. Sem fidelização obrigatória.",
  },
  {
    question: "O que conta como 'pequena alteração'?",
    answer:
      "Pequenas alterações incluem: atualização de textos, troca de imagens, ajustes de layout, correções pontuais e melhorias pequenas em formulários. Não inclui novas funcionalidades complexas ou redesign completo.",
  },
  {
    question: "Qual o prazo médio de entrega para alterações?",
    answer:
      "Depende do plano e da prioridade definida. Tipicamente, as alterações simples são tratadas dentro do SLA do seu plano.",
  },
  {
    question: "O que acontece se precisar de mais horas?",
    answer:
      "Avisamos sempre antes de ultrapassar o limite mensal. Pode optar por faturação de horas extra, ou replanear para o mês seguinte.",
  },
  {
    question: "Vocês tratam do domínio e hosting?",
    answer:
      "Sim, podemos gerir por si. Se preferir manter o controlo, trabalhamos com o seu fornecedor atual sem problema.",
  },
  {
    question: "Como funciona a migração?",
    answer:
      "Planeamos a migração, testamos num ambiente seguro e fazemos o switch com o mínimo de impacto. Validamos tudo antes de publicar.",
  },
  {
    question: "Posso mudar de plano depois?",
    answer:
      "Sim, pode fazer upgrade/downgrade a qualquer momento. A alteração aplica-se no ciclo seguinte.",
  },
  {
    question: "Como é o processo de onboarding?",
    answer:
      "Começamos com um kickoff (30 min), recolhemos acessos, definimos prioridades e em 48h o seu site fica sob monitorização.",
  },
  {
    question: "O que acontece aos meus dados se cancelar?",
    answer:
      "Entregamos os acessos e conteúdos do projeto conforme acordado. Podemos ajudar na transição para outro fornecedor, se necessário.",
  },
  {
    question: "Fazem trabalhos urgentes fora do horário?",
    answer:
      "Casos críticos (ex.: downtime) têm prioridade. Para urgências fora do horário, podemos acordar um regime premium/extra conforme necessidade.",
  },
];

export const auditFaq = [
  {
    question: "A auditoria é mesmo gratuita?",
    answer:
      "Sim. A auditoria é gratuita e serve para identificar oportunidades de melhoria. Não há compromisso de contratação.",
  },
  {
    question: "Em quanto tempo recebo o relatório?",
    answer:
      "Em até 48 horas úteis após o envio do pedido (pode variar em períodos de maior procura).",
  },
  {
    question: "Sou obrigado a contratar algo depois?",
    answer:
      "Não. Pode usar o relatório com a sua equipa atual ou outro fornecedor. Se fizer sentido, podemos ajudar na implementação.",
  },
  {
    question: "Que tipo de sites analisam?",
    answer:
      "Sites institucionais, landing pages e e-commerce. Se o seu caso for muito específico, diga-nos no formulário.",
  },
  {
    question: "Os meus dados ficam seguros?",
    answer:
      "Sim. Usamos os dados apenas para responder ao pedido e não partilhamos informação com terceiros. Consulte a Política de Privacidade para detalhes.",
  },
  {
    question: "O que faço com o relatório depois?",
    answer:
      "Pode aplicar os quick wins por ordem de impacto, ou pedir-nos um plano de implementação e estimativa de esforço.",
  },
];


export const contactForm = {
  title: "Peça uma proposta em 24h úteis",
  subtitle: "Sem compromisso. Conte-nos sobre o seu projeto e enviamos uma proposta personalizada.",
  fields: {
    name: "Nome",
    company: "Empresa",
    email: "Email",
    phone: "Telefone",
    website: "Website atual (opcional)",
    message: "Mensagem",
    maintenance: "Quero informações sobre manutenção mensal",
  },
  submit: "Enviar pedido",
  trust: [
    "Sem compromisso",
    "Dados protegidos",
    "Resposta em 24h úteis",
  ],
};

export const about = {
  title: "Sobre a SiteSolutions",
  subtitle: "Ajudamos empresas portuguesas a ter uma presença digital profissional e eficaz.",
  story: `A SiteSolutions nasceu da convicção de que todas as empresas merecem um website profissional e bem mantido. Fundada em Lisboa, a nossa equipa combina experiência técnica com uma abordagem focada em resultados.

Acreditamos que um website não é apenas um cartão de visita digital — é uma ferramenta de negócio que deve trabalhar 24 horas por dia para atrair e converter clientes.

Por isso, não nos limitamos a criar sites bonitos. Criamos sites que vendem, e mantemos esses sites rápidos, seguros e sempre atualizados.`,
  values: [
    {
      title: "Qualidade",
      description: "Cada projeto recebe a nossa atenção total. Não fazemos trabalho apressado.",
    },
    {
      title: "Transparência",
      description: "Comunicação clara, preços honestos, sem surpresas.",
    },
    {
      title: "Resultados",
      description: "Medimos o sucesso pelos resultados dos nossos clientes.",
    },
    {
      title: "Suporte",
      description: "Estamos sempre disponíveis quando precisa de nós.",
    },
  ],
  team: [
    {
      name: "João Martins",
      role: "Fundador & Developer",
      image: "/team/joao.jpg",
    },
    {
      name: "Ana Costa",
      role: "Designer & UX",
      image: "/team/ana.jpg",
    },
    {
      name: "Pedro Santos",
      role: "Developer",
      image: "/team/pedro.jpg",
    },
  ],
};

export const legal = {
  privacy: {
    title: "Política de Privacidade",
    lastUpdated: "Janeiro 2024",
    content: `
## 1. Responsável pelo Tratamento

A SiteSolutions, com sede em Lisboa, Portugal, é a responsável pelo tratamento dos seus dados pessoais.

## 2. Dados que Recolhemos

Recolhemos os seguintes dados pessoais:
- Nome e apelido
- Email
- Telefone
- Empresa
- Informações sobre o seu projeto

## 3. Finalidade do Tratamento

Os seus dados são utilizados para:
- Responder aos seus pedidos de contacto
- Enviar propostas comerciais solicitadas
- Prestar os serviços contratados
- Enviar comunicações relacionadas com os nossos serviços (com o seu consentimento)

## 4. Base Legal

O tratamento dos seus dados baseia-se no seu consentimento e na execução de contrato ou diligências pré-contratuais.

## 5. Conservação dos Dados

Os seus dados são conservados durante o período necessário para as finalidades que motivaram a sua recolha, respeitando os prazos legais aplicáveis.

## 6. Direitos do Titular

Tem direito a aceder, retificar, apagar, limitar o tratamento, portabilidade e oposição ao tratamento dos seus dados. Para exercer estes direitos, contacte-nos através de geral@sitesolutions.pt.

## 7. Segurança

Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais.

## 8. Cookies

Utilizamos cookies para melhorar a sua experiência no nosso site. Pode consultar a nossa política de cookies para mais informações.

## 9. Alterações

Esta política pode ser atualizada periodicamente. A data da última atualização está indicada no topo deste documento.

## 10. Contacto

Para questões sobre privacidade: geral@sitesolutions.pt
    `,
  },
  terms: {
    title: "Termos e Condições",
    lastUpdated: "Janeiro 2024",
    content: `
## 1. Identificação

Estes termos regulam a utilização do website e serviços da SiteSolutions, com sede em Lisboa, Portugal.

## 2. Serviços

A SiteSolutions presta serviços de:
- Criação e desenvolvimento de websites
- Manutenção e gestão de websites
- Otimização de performance e SEO
- Alojamento web gerido

## 3. Propostas e Orçamentos

As propostas enviadas têm validade de 30 dias. Os preços indicados não incluem IVA, salvo indicação em contrário.

## 4. Pagamentos

Os pagamentos são efetuados conforme acordado em cada proposta. Geralmente:
- 50% no início do projeto
- 50% na entrega/publicação

Para planos de manutenção, o pagamento é mensal e antecipado.

## 5. Prazos

Os prazos indicados nas propostas são estimativas. Atrasos causados pelo cliente (falta de conteúdos, feedback tardio) podem alterar o prazo final.

## 6. Propriedade Intelectual

Após pagamento integral, o cliente detém os direitos sobre o website desenvolvido. A SiteSolutions reserva-se o direito de utilizar o projeto em portfólio.

## 7. Cancelamento

O cliente pode cancelar o projeto a qualquer momento. Os valores já pagos não são reembolsáveis, correspondendo ao trabalho já realizado.

Planos de manutenção podem ser cancelados com 30 dias de aviso prévio.

## 8. Responsabilidade

A SiteSolutions não se responsabiliza por:
- Conteúdos fornecidos pelo cliente
- Perdas indiretas ou consequenciais
- Problemas causados por terceiros

## 9. Confidencialidade

Ambas as partes comprometem-se a manter confidenciais todas as informações partilhadas durante a prestação de serviços.

## 10. Lei Aplicável

Estes termos são regidos pela lei portuguesa. Qualquer litígio será submetido aos tribunais de Lisboa.

## 11. Contacto

Para questões sobre estes termos: geral@sitesolutions.pt
    `,
  },
};

// Metadados SEO por página
export const seoMeta = {
  home: {
    title: "SiteSolutions | Criação e Manutenção de Websites em Portugal",
    description: "Criamos websites profissionais que vendem e oferecemos manutenção mensal para manter o seu site rápido, seguro e atualizado. Peça uma proposta.",
    keywords: "criação de websites, manutenção de sites, web design Portugal, desenvolvimento web, SEO",
  },
  services: {
    title: "Serviços | SiteSolutions",
    description: "Serviços completos de criação de websites, manutenção mensal, otimização de performance, SEO técnico e segurança para empresas em Portugal.",
    keywords: "serviços web, criação de sites, manutenção websites, SEO técnico, performance web",
  },
  plans: {
    title: "Planos de Manutenção | SiteSolutions",
    description: "Planos de manutenção mensal para websites. Escolha entre Essencial, Profissional ou Premium e mantenha o seu site sempre atualizado e seguro.",
    keywords: "planos manutenção web, suporte website, atualização sites, backups automáticos",
  },
  portfolio: {
    title: "Portfólio | SiteSolutions",
    description: "Conheça os projetos que desenvolvemos. Casos de sucesso em diversos setores: saúde, finanças, e-commerce, imobiliário e mais.",
    keywords: "portfólio web design, casos de sucesso, projetos websites, exemplos sites",
  },
  about: {
    title: "Sobre Nós | SiteSolutions",
    description: "Conheça a equipa SiteSolutions. Ajudamos empresas portuguesas a ter uma presença digital profissional e eficaz desde Lisboa.",
    keywords: "sobre sitesolutions, equipa web design, empresa criação sites Lisboa",
  },
  contact: {
    title: "Contactos | SiteSolutions",
    description: "Entre em contacto connosco. Peça uma proposta gratuita para o seu projeto de website ou plano de manutenção.",
    keywords: "contacto sitesolutions, pedir proposta website, orçamento site",
  },
  privacy: {
    title: "Política de Privacidade | SiteSolutions",
    description: "Política de privacidade e proteção de dados pessoais da SiteSolutions.",
  },
  terms: {
    title: "Termos e Condições | SiteSolutions",
    description: "Termos e condições de utilização dos serviços da SiteSolutions.",
  },
};
