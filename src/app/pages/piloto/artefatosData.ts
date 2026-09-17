// ─────────────────────────────────────────────────────────────────
// Artefatos: o que a Comu dá para baixar. Ebooks e playbooks vêm do
// catálogo do app (`MATERIALS` em mockEbooksData.ts, snapshot de
// 2026-09-17, capas reais em /materiais). Os packs 3D e de brushes usam
// as capas feitas pelo próprio usuário (D:\ARTEFATOS CAPA).
// ─────────────────────────────────────────────────────────────────

export type ArtefatoTipo = 'ebook' | 'playbook' | 'pack' | 'brush';

export interface Artefato {
  id: string;
  slug: string;
  type: ArtefatoTipo;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  author: string;
  category: string;
  tags: string[];
  pages: number | null;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  topics: string[];
  forWhom: string;
  collection: string | null;
  moduleNumber: number | null;
  seriesName: string | null;
}

export const ARTEFATO_TIPOS: Array<{ id: ArtefatoTipo; label: string; plural: string }> = [
  { id: 'ebook', label: 'Ebook', plural: 'Ebooks' },
  { id: 'playbook', label: 'Playbook', plural: 'Playbooks' },
  { id: 'pack', label: 'Pack 3D', plural: 'Packs 3D' },
  { id: 'brush', label: 'Brushes', plural: 'Brushes' },
];

export const ARTEFATOS: Artefato[] = [
  {
    "id": "eb-01",
    "slug": "anatomia-artistica",
    "type": "ebook",
    "title": "Anatomia Artística",
    "subtitle": "O guia completo da figura humana para artistas",
    "description": "Um guia detalhado de anatomia aplicada ao desenho artístico. Aborda proporções do corpo humano, estrutura muscular e esquelética, expressões faciais e poses dinâmicas. Desenvolvido para ajudar artistas a representar a figura humana com precisão, fluidez e expressividade — sem precisar de formação médica.",
    "cover": "/materiais/ebooks/anatomia-artistica.png",
    "author": "Giovanni Fim",
    "category": "Anatomia",
    "tags": [
      "Anatomia",
      "Figura Humana",
      "Proporções",
      "Músculos"
    ],
    "pages": 17,
    "level": "Intermediário",
    "topics": [
      "Proporções do corpo humano",
      "Estrutura óssea aplicada ao desenho",
      "Principais grupos musculares",
      "Cabeça e expressões faciais",
      "Mãos e pés em detalhe",
      "Poses dinâmicas e movimento",
      "Simplificação anatômica para estilos"
    ],
    "forWhom": "Artistas que querem dominar a representação da figura humana com confiança e precisão anatômica.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-02",
    "slug": "comissions-na-gringa",
    "type": "ebook",
    "title": "Comissions na Gringa",
    "subtitle": "Como conseguir e trabalhar com clientes internacionais",
    "description": "O guia prático de Giovanni Fim para artistas brasileiros que querem vender comissões para o mercado internacional. Aborda como se comunicar em inglês, precificar em dólar, montar um portfólio atraente para o público estrangeiro e navegar nas principais plataformas globais de arte.",
    "cover": "/materiais/ebooks/comissions-na-gringa.webp",
    "author": "Giovanni Fim",
    "category": "Mercado",
    "tags": [
      "Mercado Internacional",
      "Comissões",
      "Freelancer",
      "Negócios"
    ],
    "pages": 7,
    "level": "Intermediário",
    "topics": [
      "Comunicação em inglês para artistas",
      "Precificação em dólar e conversão",
      "Montando um portfólio internacional",
      "Plataformas: ArtStation, DeviantArt, Instagram",
      "Contratos e proteção do seu trabalho",
      "Como lidar com revisões e entregas",
      "Construindo uma base de clientes fiéis"
    ],
    "forWhom": "Artistas que já têm um portfólio sólido e querem expandir para o mercado internacional de comissões.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-03",
    "slug": "como-criar-personagens",
    "type": "ebook",
    "title": "Como Criar Personagens",
    "subtitle": "Maestria do Artista — Metodologia completa de character design",
    "description": "Uma metodologia estruturada para criar personagens memoráveis do zero. Do conceito inicial à arte final, o ebook explora silhueta, paleta de cores, personalidade visual e storytelling através do design — ensinando como criar personagens que comunicam quem são sem precisar de texto.",
    "cover": "/materiais/ebooks/como-criar-personagens.png",
    "author": "Giovanni Fim",
    "category": "Personagens",
    "tags": [
      "Character Design",
      "Personagens",
      "Narrativa Visual",
      "Design"
    ],
    "pages": 73,
    "level": "Intermediário",
    "topics": [
      "O que faz um personagem memorável",
      "Silhueta como identidade visual",
      "Paleta de cores e personalidade",
      "Storytelling através do design",
      "Processo do esboço à arte final",
      "Criando um elenco coeso",
      "Referências e como usá-las sem copiar"
    ],
    "forWhom": "Artistas interessados em character design, ilustração narrativa ou desenvolvimento de personagens para jogos, HQs e animação.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-04",
    "slug": "como-superar-o-bloqueio-criativo",
    "type": "ebook",
    "title": "Como Superar o Bloqueio Criativo",
    "subtitle": "Técnicas práticas para artistas que travam",
    "description": "Um guia prático e honesto sobre o bloqueio criativo — o que é, por que acontece e, principalmente, como superá-lo. Inclui exercícios diários, mudanças de perspectiva, fontes de inspiração sustentável e estratégias para transformar a pressão e o perfeccionismo em combustível criativo.",
    "cover": "/materiais/ebooks/bloqueio-criativo.png",
    "author": "Giovanni Fim",
    "category": "Criatividade",
    "tags": [
      "Criatividade",
      "Produtividade",
      "Mindset",
      "Motivação"
    ],
    "pages": 5,
    "level": "Iniciante",
    "topics": [
      "O que é (de verdade) o bloqueio criativo",
      "Perfeccionismo como inimigo do progresso",
      "Exercícios diários para soltar o traço",
      "Como usar referências sem depender delas",
      "Construindo uma rotina criativa sustentável",
      "Fontes de inspiração que não esgotam",
      "Transformando a pressão em produção"
    ],
    "forWhom": "Artistas de qualquer nível que enfrentam dificuldade em começar, manter consistência ou se sentir satisfeitos com o próprio trabalho.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-05",
    "slug": "cor-e-expressividade",
    "type": "ebook",
    "title": "Cor e Expressividade",
    "subtitle": "Como usar a cor para contar histórias",
    "description": "Um mergulho profundo na teoria e prática da cor no contexto artístico. Explora harmonia cromática, temperatura de cor, como as cores afetam emoção e narrativa visual, e as paletas usadas por grandes mestres da ilustração — com aplicações práticas para arte digital e tradicional.",
    "cover": "/materiais/ebooks/cor-e-expressividade.png",
    "author": "Giovanni Fim",
    "category": "Cor",
    "tags": [
      "Cores",
      "Teoria das Cores",
      "Paleta",
      "Expressividade"
    ],
    "pages": 13,
    "level": "Intermediário",
    "topics": [
      "Fundamentos do círculo cromático",
      "Harmonia: complementar, análoga, tríade",
      "Temperatura de cor e atmosfera",
      "Saturação e valor na prática",
      "Como as cores afetam as emoções",
      "Paletas de mestres da ilustração",
      "Workflows de colorização digital"
    ],
    "forWhom": "Artistas que já sabem desenhar mas querem dominar a cor como ferramenta narrativa e expressiva.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-06",
    "slug": "fundamentos-do-desenho",
    "type": "ebook",
    "title": "Fundamentos do Desenho",
    "subtitle": "A base sólida que todo artista precisa",
    "description": "Os pilares essenciais do desenho, apresentados de forma clara e aplicada. Cobre formas básicas, perspectiva, proporção, valor tonal, linha e textura — os fundamentos que sustentam qualquer estilo artístico, do realismo ao cartoon.",
    "cover": "/materiais/ebooks/fundamentos-do-desenho.png",
    "author": "Giovanni Fim",
    "category": "Fundamentos",
    "tags": [
      "Fundamentos",
      "Iniciante",
      "Linha",
      "Valor Tonal"
    ],
    "pages": 9,
    "level": "Iniciante",
    "topics": [
      "Formas geométricas como base de tudo",
      "Linhas: controle e variação",
      "Valor tonal: luz, sombra e contraste",
      "Proporções e escala",
      "Perspectiva básica aplicada",
      "Textura e detalhe",
      "Exercícios práticos progressivos"
    ],
    "forWhom": "Iniciantes que querem construir uma base sólida, e artistas intermediários que querem revisar e consolidar os fundamentos.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-07",
    "slug": "guia-da-tatuagem",
    "type": "ebook",
    "title": "Guia da Tatuagem",
    "subtitle": "Arte para pele: do design à execução",
    "description": "Um guia especializado para quem quer criar arte para tatuagem ou migrar para o mercado tattoo. Cobre os principais estilos (realismo, blackwork, new school, fineline), composição para pele, limitações técnicas, adaptação de designs e como construir um portfólio focado nesse segmento.",
    "cover": "/materiais/ebooks/guia-da-tatuagem.webp",
    "author": "Giovanni Fim",
    "category": "Técnicas",
    "tags": [
      "Tatuagem",
      "Tattoo",
      "Design",
      "Estilos"
    ],
    "pages": 15,
    "level": "Intermediário",
    "topics": [
      "Principais estilos de tatuagem",
      "Como a pele afeta o design",
      "Composição e enquadramento para tattoo",
      "Limitações técnicas e como contorná-las",
      "Adaptando ilustrações para tatuagem",
      "Construindo um portfólio tattoo",
      "Entrando no mercado de tatuagem"
    ],
    "forWhom": "Artistas que querem explorar o universo da tatuagem como forma de expressão artística ou como carreira profissional.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-08",
    "slug": "o-poder-da-lineart",
    "type": "ebook",
    "title": "O Poder da Lineart",
    "subtitle": "Domine a arte da linha no desenho",
    "description": "Um estudo aprofundado sobre a linha como elemento expressivo no desenho. Cobre variação de espessura, peso da linha, como a lineart define volume e textura mesmo sem cor, estilos de linhas (orgânico vs geométrico) e o workflow para lineart digital profissional.",
    "cover": "/materiais/ebooks/o-poder-da-lineart.png",
    "author": "Giovanni Fim",
    "category": "Técnicas",
    "tags": [
      "Lineart",
      "Linha",
      "Técnica",
      "Arte Digital"
    ],
    "pages": 11,
    "level": "Intermediário",
    "topics": [
      "Por que a lineart importa",
      "Variação de espessura e peso",
      "Linha como definidora de volume",
      "Estilos: orgânico, geométrico, calígrafo",
      "Workflow de lineart digital",
      "Brushes e configurações recomendadas",
      "Lineart para diferentes estilos artísticos"
    ],
    "forWhom": "Artistas digitais que querem elevar a qualidade das suas linhas e desenvolver um traço mais expressivo e profissional.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-09",
    "slug": "perspectiva-e-composicao",
    "type": "ebook",
    "title": "Perspectiva e Composição",
    "subtitle": "Construa espaço e guie o olhar do espectador",
    "description": "Domínio dos fundamentos de perspectiva e composição visual aplicados à ilustração e ao desenho. Aborda perspectiva de 1, 2 e 3 pontos, regra dos terços, linhas de força, enquadramento, equilíbrio visual e como guiar intencionalmente o olhar do espectador dentro da imagem.",
    "cover": "/materiais/ebooks/perspectiva-e-composicao.png",
    "author": "Giovanni Fim",
    "category": "Perspectiva",
    "tags": [
      "Perspectiva",
      "Composição",
      "Cenário",
      "Design Visual"
    ],
    "pages": 8,
    "level": "Intermediário",
    "topics": [
      "Perspectiva de 1, 2 e 3 pontos",
      "Perspectiva atmosférica",
      "Regra dos terços e enquadramento",
      "Linhas de força e direção do olhar",
      "Equilíbrio e tensão visual",
      "Ritmo e repetição na composição",
      "Análise de composições clássicas"
    ],
    "forWhom": "Artistas que querem criar ilustrações e cenários com mais intenção compositiva e impacto visual.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-10",
    "slug": "repertorio-da-vinci",
    "type": "ebook",
    "title": "Repertório Da Vinci",
    "subtitle": "Como construir um repertório visual rico",
    "description": "Inspirado nos métodos de observação e estudo de Leonardo da Vinci, este ebook ensina como construir um repertório visual sólido e diversificado. Aborda sketchbooks, estudos do mundo real, cópia de mestres, observação científica e como transformar referências em linguagem artística própria.",
    "cover": "/materiais/ebooks/repertorio-da-vinci.webp",
    "author": "Giovanni Fim",
    "category": "Criatividade",
    "tags": [
      "Repertório Visual",
      "Sketchbook",
      "Referência",
      "Observação"
    ],
    "pages": 18,
    "level": "Intermediário",
    "topics": [
      "O método de Da Vinci: observar para criar",
      "Sketchbook como ferramenta de crescimento",
      "Cópia de mestres: o que aprender e como",
      "Estudos do mundo real vs fantasia",
      "Como usar referências sem plagiar",
      "Construindo uma biblioteca visual pessoal",
      "Transformando repertório em estilo próprio"
    ],
    "forWhom": "Artistas que querem ampliar seu vocabulário visual e desenvolver um estilo autoral mais rico e consistente.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-11",
    "slug": "retratos-e-rostos-humanos",
    "type": "ebook",
    "title": "Retratos e Rostos Humanos",
    "subtitle": "Técnica e sensibilidade para retratos expressivos",
    "description": "Um guia especializado em retratos realistas e expressivos. Cobre proporções do rosto, anatomia de olhos, nariz, boca e ouvidos, expressões faciais, iluminação para retratos e como capturar a \"likeness\" — a semelhança com uma pessoa real — em diferentes estilos.",
    "cover": "/materiais/ebooks/retratos-e-rostos.webp",
    "author": "Giovanni Fim",
    "category": "Anatomia",
    "tags": [
      "Retratos",
      "Rosto",
      "Anatomia Facial",
      "Expressões"
    ],
    "pages": 12,
    "level": "Intermediário",
    "topics": [
      "Proporções clássicas do rosto",
      "Estrutura óssea do crânio",
      "Olhos: anatomia e expressão",
      "Nariz e boca em detalhe",
      "Expressões e emoções",
      "Iluminação para retratos",
      "Como capturar a likeness"
    ],
    "forWhom": "Artistas que querem se especializar em retratos e dominar a representação do rosto humano com precisão e expressividade.",
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "eb-12",
    "slug": "volumetria-formas-geometricas",
    "type": "ebook",
    "title": "Volumetria e Formas Geométricas",
    "subtitle": "Enxergue o mundo em formas e construa volume",
    "description": "Aprenda a enxergar e representar volume a partir de formas geométricas simples. Este ebook ensina como qualquer objeto, corpo ou cenário pode ser decomposto em esferas, cubos, cilindros e cones — e como combinar essas formas para construir desenhos tridimensionais convincentes.",
    "cover": "/materiais/ebooks/volumetria-formas-geometricas.png",
    "author": "Giovanni Fim",
    "category": "Fundamentos",
    "tags": [
      "Volume",
      "Formas Geométricas",
      "3D",
      "Fundamentos"
    ],
    "pages": 5,
    "level": "Iniciante",
    "topics": [
      "Os sólidos básicos: esfera, cubo, cilindro, cone",
      "Enxergar formas em objetos reais",
      "Planos e superfícies em perspectiva",
      "Luz e sombra sobre formas geométricas",
      "Aplicando formas ao corpo humano",
      "Formas em objetos e cenários",
      "Exercícios progressivos de volumetria"
    ],
    "forWhom": "Iniciantes que querem desenvolver o senso de volume e tridimensionalidade, e artistas intermediários que lutam com a representação de espaço.",
    "collection": "Guia do Desenho - Artepack",
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "pb-01",
    "slug": "playbook-linhas-e-formas",
    "type": "playbook",
    "title": "Linhas e Formas",
    "subtitle": "Módulo 1 — Série Playbook CDA",
    "description": "O primeiro módulo da série Playbook CDA foca nos elementos mais básicos e poderosos do desenho: a linha e a forma. Com exercícios práticos estruturados, você vai desenvolver confiança no traçado, precisão no controle e fluidez na transição entre linhas e formas geométricas.",
    "cover": "/materiais/playbooks/linhas-e-formas.png",
    "author": "Giovanni Fim",
    "category": "Fundamentos",
    "tags": [
      "Linha",
      "Formas",
      "Exercícios",
      "Iniciante"
    ],
    "pages": 7,
    "level": "Iniciante",
    "topics": [
      "Controle e fluidez do traçado",
      "Linhas retas, curvas e orgânicas",
      "Formas geométricas básicas",
      "Construção de formas complexas",
      "Exercícios diários de aquecimento"
    ],
    "forWhom": "Artistas iniciantes ou quem quer desenvolver consistência e confiança no traço.",
    "collection": null,
    "moduleNumber": 1,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-02",
    "slug": "playbook-luz-e-sombra",
    "type": "playbook",
    "title": "Luz e Sombra",
    "subtitle": "Módulo 2 — Série Playbook CDA",
    "description": "O segundo módulo da série Playbook CDA mergulha na lógica da iluminação e no uso do valor tonal para criar volume. Aprenda a identificar e representar diferentes tipos de luz, sombras projetadas, oclusão e como o contraste transforma um desenho plano em algo tridimensional.",
    "cover": "/materiais/playbooks/luz-e-sombra.png",
    "author": "Giovanni Fim",
    "category": "Fundamentos",
    "tags": [
      "Luz",
      "Sombra",
      "Valor Tonal",
      "Volume"
    ],
    "pages": 5,
    "level": "Iniciante",
    "topics": [
      "A lógica da luz e seus tipos",
      "Valor tonal: do claro ao escuro",
      "Core shadow, cast shadow e oclusão",
      "Criando volume com sombras",
      "Exercícios práticos de iluminação"
    ],
    "forWhom": "Artistas que já entendem formas básicas e querem adicionar volume e profundidade aos desenhos.",
    "collection": null,
    "moduleNumber": 2,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-03",
    "slug": "playbook-perspectiva",
    "type": "playbook",
    "title": "Perspectiva",
    "subtitle": "Módulo 3 — Série Playbook CDA",
    "description": "O terceiro módulo da série Playbook CDA ensina perspectiva como ferramenta prática de construção de espaço. Cobre perspectiva de 1, 2 e 3 pontos, elipses em perspectiva, aplicação à figura humana e ao cenário — com exercícios que saem do papel quadriculado e vão para situações reais de desenho.",
    "cover": "/materiais/playbooks/perspectiva.png",
    "author": "Giovanni Fim",
    "category": "Perspectiva",
    "tags": [
      "Perspectiva",
      "Espaço",
      "Cenário",
      "Construção"
    ],
    "pages": 6,
    "level": "Iniciante",
    "topics": [
      "Perspectiva de 1 ponto",
      "Perspectiva de 2 pontos",
      "Perspectiva de 3 pontos",
      "Elipses e cilindros em perspectiva",
      "Figura humana em perspectiva"
    ],
    "forWhom": "Artistas que querem desenhar cenários e ambientes convincentes com noção de profundidade e espaço.",
    "collection": null,
    "moduleNumber": 3,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-04",
    "slug": "playbook-composicao",
    "type": "playbook",
    "title": "Composição",
    "subtitle": "Módulo 4 — Série Playbook CDA",
    "description": "O quarto módulo da série Playbook CDA explora os princípios de composição visual aplicados ao desenho. Regra dos terços, enquadramento, direção do olhar, balanceamento de pesos visuais e análise de composições clássicas — para criar imagens que comunicam com intenção.",
    "cover": "/materiais/playbooks/composicao.png",
    "author": "Giovanni Fim",
    "category": "Perspectiva",
    "tags": [
      "Composição",
      "Enquadramento",
      "Design Visual",
      "Narrativa"
    ],
    "pages": 6,
    "level": "Intermediário",
    "topics": [
      "Regra dos terços e grade compositiva",
      "Linhas de força e direção do olhar",
      "Pesos visuais e balanceamento",
      "Tipos de enquadramento",
      "Análise de composições clássicas"
    ],
    "forWhom": "Artistas que já dominam os fundamentos e querem criar ilustrações com mais impacto visual.",
    "collection": null,
    "moduleNumber": 4,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-05",
    "slug": "playbook-cores",
    "type": "playbook",
    "title": "Cores",
    "subtitle": "Módulo 5 — Série Playbook CDA",
    "description": "O quinto módulo da série Playbook CDA apresenta a teoria e prática das cores de forma direta e aplicada. Círculo cromático, harmonias, temperatura, saturação, como misturar cores e montar paletas coesas — com exercícios práticos para arte digital e tradicional.",
    "cover": "/materiais/playbooks/cores.png",
    "author": "Giovanni Fim",
    "category": "Cor",
    "tags": [
      "Cores",
      "Paleta",
      "Harmonia",
      "Teoria das Cores"
    ],
    "pages": 5,
    "level": "Intermediário",
    "topics": [
      "Círculo cromático aplicado",
      "Harmonias: complementar, análoga, tríade",
      "Temperatura e saturação na prática",
      "Montando paletas coesas",
      "Cores em arte digital e tradicional"
    ],
    "forWhom": "Artistas que querem passar da fase do desenho em preto e branco para dominar a cor com confiança.",
    "collection": null,
    "moduleNumber": 5,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-06",
    "slug": "playbook-anatomia-facial",
    "type": "playbook",
    "title": "Anatomia Facial",
    "subtitle": "Módulo 6 — Série Playbook CDA",
    "description": "O sexto módulo da série Playbook CDA foca na anatomia detalhada do rosto humano. Proporções, estrutura óssea, musculatura facial, olhos, nariz, boca, ouvidos e a construção de rostos expressivos — com exercícios progressivos de representação.",
    "cover": "/materiais/playbooks/anatomia-facial.png",
    "author": "Giovanni Fim",
    "category": "Anatomia",
    "tags": [
      "Anatomia",
      "Rosto",
      "Expressões",
      "Proporções"
    ],
    "pages": 7,
    "level": "Intermediário",
    "topics": [
      "Proporções clássicas do rosto",
      "Estrutura óssea do crânio",
      "Olhos, nariz, boca e ouvidos",
      "Musculatura facial e expressões",
      "Rostos em diferentes ângulos"
    ],
    "forWhom": "Artistas que querem melhorar a representação de rostos e expressões humanas.",
    "collection": null,
    "moduleNumber": 6,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-07",
    "slug": "playbook-anatomia-maos",
    "type": "playbook",
    "title": "Anatomia das Mãos",
    "subtitle": "Módulo 7 — Série Playbook CDA",
    "description": "O sétimo módulo da série Playbook CDA aborda um dos maiores desafios para artistas: as mãos. Estrutura óssea, proporções, poses, encurtamento e diferentes tipos de mãos — com um método construtivo que desmistifica esse tema temido.",
    "cover": "/materiais/playbooks/anatomia-maos.png",
    "author": "Giovanni Fim",
    "category": "Anatomia",
    "tags": [
      "Mãos",
      "Anatomia",
      "Poses",
      "Figura Humana"
    ],
    "pages": 5,
    "level": "Intermediário",
    "topics": [
      "Estrutura óssea e proporções das mãos",
      "Método construtivo simplificado",
      "Poses e gestos comuns",
      "Encurtamento e perspectiva",
      "Diferentes tipos e idades de mãos"
    ],
    "forWhom": "Artistas que travam quando chegam nas mãos e querem finalmente dominá-las.",
    "collection": null,
    "moduleNumber": 7,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pb-08",
    "slug": "playbook-anatomia",
    "type": "playbook",
    "title": "Anatomia",
    "subtitle": "Módulo 8 — Série Playbook CDA",
    "description": "O oitavo módulo da série Playbook CDA completa a série com uma visão abrangente da anatomia do corpo humano. Proporções gerais, grupos musculares principais, poses dinâmicas, movimento e como simplificar a anatomia para diferentes estilos artísticos.",
    "cover": "/materiais/playbooks/anatomia.png",
    "author": "Giovanni Fim",
    "category": "Anatomia",
    "tags": [
      "Anatomia",
      "Corpo Humano",
      "Poses",
      "Musculatura"
    ],
    "pages": 7,
    "level": "Intermediário",
    "topics": [
      "Proporções do corpo completo",
      "Grupos musculares essenciais",
      "Poses dinâmicas e movimento",
      "Figura feminina e masculina",
      "Simplificação para diferentes estilos"
    ],
    "forWhom": "Artistas que querem completar a série Playbook com domínio da anatomia corporal completa.",
    "collection": null,
    "moduleNumber": 8,
    "seriesName": "Playbook CDA"
  },
  {
    "id": "pack-personagens-3d",
    "slug": "personagens-3d-para-treinamento",
    "type": "pack",
    "title": "Personagens 3D para treinamento",
    "subtitle": "Modelos prontos para estudar forma, gesto e volume.",
    "description": "Um conjunto de personagens 3D para você girar, iluminar e desenhar a partir de qualquer ângulo. Serve como referência de anatomia estilizada, de proporção e de pose, sem depender de foto.",
    "cover": "/artefatos/packs/personagens-3d.jpg",
    "author": "Comunidade da Arte",
    "category": "Personagens",
    "tags": [
      "3D",
      "Referência",
      "Personagens"
    ],
    "topics": [
      "Personagens estilizados em 3D",
      "Referência de pose e gesto",
      "Estudo de volume e proporção"
    ],
    "forWhom": "Quem desenha personagens e quer referência de volume sem depender de foto.",
    "level": "Iniciante",
    "pages": null,
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "pack-cenarios-3d",
    "slug": "cenarios-para-treinamento",
    "type": "pack",
    "title": "Cenários para treinamento",
    "subtitle": "Ambientes 3D para treinar perspectiva e composição.",
    "description": "Cenários modelados em 3D — vila medieval, templo, rua urbana — para estudar perspectiva, profundidade e composição de ambiente com a câmera onde você quiser.",
    "cover": "/artefatos/packs/cenarios.jpg",
    "author": "Comunidade da Arte",
    "category": "Perspectiva",
    "tags": [
      "3D",
      "Cenário",
      "Perspectiva"
    ],
    "topics": [
      "Ambientes 3D prontos",
      "Perspectiva e profundidade",
      "Composição de cenário"
    ],
    "forWhom": "Quem quer treinar cenário e perspectiva com referência tridimensional.",
    "level": "Intermediário",
    "pages": null,
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "pack-treinamento-3d",
    "slug": "treinamento-3d-luz-sombra-poses",
    "type": "pack",
    "title": "Treinamento 3D: luz, sombra e poses",
    "subtitle": "Manequins 3D para estudar iluminação e anatomia.",
    "description": "Modelos humanos 3D em poses variadas, com iluminação ajustável. O jeito mais direto de entender como a luz descreve o volume do corpo antes de levar isso para o papel ou para a tela.",
    "cover": "/artefatos/packs/treinamento-3d.jpg",
    "author": "Comunidade da Arte",
    "category": "Anatomia",
    "tags": [
      "3D",
      "Anatomia",
      "Luz e sombra"
    ],
    "topics": [
      "Manequins em poses variadas",
      "Luz e sombra sobre o corpo",
      "Referência de anatomia"
    ],
    "forWhom": "Quem estuda anatomia e iluminação e quer uma referência que gira.",
    "level": "Iniciante",
    "pages": null,
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "pack-brushes-textura",
    "slug": "brushes-textura-e-perspectiva",
    "type": "brush",
    "title": "Brushes: textura e perspectiva",
    "subtitle": "Pincéis para textura, grão e linhas de construção.",
    "description": "Pack de pincéis digitais voltado a textura e construção: grão, carvão, lápis e traços para linhas de perspectiva. Feito para o fluxo de pintura digital dos cursos da Comu.",
    "cover": "/artefatos/packs/brushes-textura.jpg",
    "author": "Comunidade da Arte",
    "category": "Técnicas",
    "tags": [
      "Brushes",
      "Textura",
      "Photoshop"
    ],
    "topics": [
      "Pincéis de textura e grão",
      "Traços de construção",
      "Compatível com Photoshop"
    ],
    "forWhom": "Quem pinta no digital e quer textura sem depender de pincel padrão.",
    "level": "Iniciante",
    "pages": null,
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  },
  {
    "id": "pack-brushes-como-criar",
    "slug": "brushes-como-criar-pinceis",
    "type": "brush",
    "title": "Brushes: como criar pincéis + pack",
    "subtitle": "Aprenda a fazer seus próprios pincéis e leve um pack junto.",
    "description": "Um guia curto de como criar pincéis no Photoshop, do zero, mais um pack pronto para começar. Textura, pressão, dispersão e o que cada ajuste faz no traço.",
    "cover": "/artefatos/packs/brushes-como-criar.jpg",
    "author": "Comunidade da Arte",
    "category": "Técnicas",
    "tags": [
      "Brushes",
      "Photoshop",
      "Tutorial"
    ],
    "topics": [
      "Como criar um pincel do zero",
      "Textura, pressão e dispersão",
      "Pack de pincéis incluso"
    ],
    "forWhom": "Quem usa Photoshop e quer pincéis com a própria cara.",
    "level": "Intermediário",
    "pages": null,
    "collection": null,
    "moduleNumber": null,
    "seriesName": null
  }
];

export function getArtefatos(): Artefato[] {
  return ARTEFATOS;
}

export function getArtefato(slug: string): Artefato | undefined {
  return ARTEFATOS.find((a) => a.slug === slug);
}

/** `null` = todos; senão só os do tipo. */
export function filtrarArtefatos(items: Artefato[], tipo: ArtefatoTipo | null): Artefato[] {
  if (tipo === null) return items;
  return items.filter((a) => a.type === tipo);
}
