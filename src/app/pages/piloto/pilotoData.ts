// ─────────────────────────────────────────────────────────────────
// Dados do piloto de novo estilo visual da home.
//
// Este projeto é independente do app CDA-GERAL. Os cursos, benefícios
// e obras da galeria abaixo são um SNAPSHOT (2026-09-11) do que a
// versão original derivava dos mocks do app: nenhum conteúdo novo,
// só a seleção curada já congelada. Ao portar de volta para o app,
// troque as constantes por `getPublishedCourses()`, `getActiveBenefits()`
// e `allGalleryImages`, como na versão original.
// ─────────────────────────────────────────────────────────────────

export interface PilotoSection {
  id: 'hero' | 'galeria' | 'video' | 'cursos' | 'softwares' | 'professores' | 'bonus' | 'comunidade' | 'cta';
  label: string;
}

/** Ordem canônica das seções: a página e o header de navegação consomem daqui. */
export const PILOTO_SECTIONS: PilotoSection[] = [
  { id: 'hero', label: 'Início' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'video', label: 'Apresentação' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'softwares', label: 'Softwares' },
  { id: 'professores', label: 'Professores' },
  { id: 'bonus', label: 'Bônus' },
  { id: 'comunidade', label: 'Comunidade' },
  { id: 'cta', label: 'Entrar' },
];

export type PilotoAccent = 'amarelo' | 'ciano' | 'laranja' | 'roxo';

export interface PilotoCourse {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  cover: string;
  instructor: string;
  hours: number;
  rating: number;
  href: string;
  /** cor de destaque do sticker/etiqueta: cicla pela paleta oficial */
  accent: PilotoAccent;
  /** nível real da trilha no catálogo */
  level: string;
}

/** Vitrine: mistura de tradicional, digital, concept e 3D (8 cursos publicados). */
const PILOTO_COURSES: PilotoCourse[] = [
  {
    "id": "personagem-rpg",
    "level": "Avançado",
    "title": "Concept Art: Personagem RPG",
    "subtitle": "Crie personagens épicos do zero ao concept final",
    "category": "Concept Art",
    "cover": "/covers/personagem-rpg.png",
    "instructor": "Giovanni Fim",
    "hours": 7,
    "rating": 4.9,
    "href": "/student/courses/personagem-rpg",
    "accent": "amarelo"
  },
  {
    "id": "magia-cartoon",
    "level": "Avançado",
    "title": "Magia do Cartoon",
    "subtitle": "Crie personagens usando o estilo cartoon!",
    "category": "Arte Digital",
    "cover": "/covers/magia-cartoon.png",
    "instructor": "Ricardo Rios",
    "hours": 4,
    "rating": 4.8,
    "href": "/student/courses/magia-cartoon",
    "accent": "ciano"
  },
  {
    "id": "realismo-lapis-cor",
    "level": "Avançado",
    "title": "Realismo com Lápis de Cor",
    "subtitle": "A vida em cada camada.",
    "category": "Arte Tradicional",
    "cover": "/covers/realismo-lapis-cor.png",
    "instructor": "Atevaldo Novais",
    "hours": 9,
    "rating": 4.8,
    "href": "/student/courses/realismo-lapis-cor",
    "accent": "laranja"
  },
  {
    "id": "modelagem-3d",
    "level": "Avançado",
    "title": "Modelagem em 3D",
    "subtitle": "Domine a escultura digital em 3D com ZBrush.",
    "category": "Arte Digital",
    "cover": "/covers/modelagem-3d.png",
    "instructor": "Caio César",
    "hours": 7,
    "rating": 4.9,
    "href": "/student/courses/modelagem-3d",
    "accent": "roxo"
  },
  {
    "id": "cenario-fantasia",
    "level": "Avançado",
    "title": "Cenário Fantasia",
    "subtitle": "Mundos que ganham vida.",
    "category": "Concept Art",
    "cover": "/covers/cenario-fantasia.png",
    "instructor": "Vinicius F. Silva",
    "hours": 9,
    "rating": 4.8,
    "href": "/student/courses/cenario-fantasia",
    "accent": "amarelo"
  },
  {
    "id": "personagens-anime-manga",
    "level": "Intermediário",
    "title": "Desenho de Personagens: Mangá e Anime",
    "subtitle": "Crie seus personagens favoritos com precisão e estilo.",
    "category": "Arte Tradicional",
    "cover": "/covers/personagens-anime-manga.png",
    "instructor": "Henry Saints",
    "hours": 8,
    "rating": 4.9,
    "href": "/student/courses/personagens-anime-manga",
    "accent": "ciano"
  },
  {
    "id": "formacao-tattoo",
    "level": "Avançado",
    "title": "Formação Tattoo",
    "subtitle": "Do risco ao traço profissional.",
    "category": "Arte Tradicional",
    "cover": "/covers/formacao-tattoo.png",
    "instructor": "Marcelo Coelho",
    "hours": 7,
    "rating": 4.7,
    "href": "/student/courses/formacao-tattoo",
    "accent": "laranja"
  },
  {
    "id": "aquarela-iniciantes",
    "level": "Iniciante",
    "title": "Aquarela Para Iniciantes",
    "subtitle": "Aprenda aquarela do zero com leveza e segurança.",
    "category": "Arte Tradicional",
    "cover": "/covers/aquarela-iniciantes.png",
    "instructor": "Marcelo Coelho",
    "hours": 2,
    "rating": 4.8,
    "href": "/student/courses/aquarela-iniciantes",
    "accent": "roxo"
  }
];

export function getPilotoCourses(): PilotoCourse[] {
  return PILOTO_COURSES;
}

export interface PilotoSoftware {
  id: string;
  name: string;
  /** trilha "Boas Vindas" correspondente no catalogo */
  courseId: string;
  /** cor de marca do software, usada no icone e no brilho do painel */
  color: string;
  /** ícone real do aplicativo, normalizado em tile de 128px */
  icon: string;
  tagline: string;
  /** titulo e subtitulo reais da trilha */
  courseTitle: string;
  courseSubtitle: string;
  /** capa real da trilha, copiada do catalogo */
  cover: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  hours: number;
  students: number;
  /** o que a pessoa sai sabendo (resumo da descricao da trilha) */
  topics: [string, string, string];
}

/**
 * Trilhas "Boas Vindas": uma por ferramenta. Titulo, subtitulo, nivel, carga e
 * numero de alunos vem do catalogo do app; a capa e a mesma arte usada la.
 */
export const PILOTO_SOFTWARES: PilotoSoftware[] = [
  {
    id: 'photoshop',
    name: 'Photoshop',
    courseId: 'boas-vindas-photoshop',
    color: '#31A8FF',
    icon: '/brand/apps/photoshop.png',
    tagline: 'Pintura e edição',
    courseTitle: 'Photoshop: Boas Vindas',
    courseSubtitle: 'Crie, edite, impressione.',
    cover: '/covers/boas-vindas-photoshop.jpg',
    level: 'Iniciante',
    hours: 3,
    students: 421,
    topics: ['Interface e fluxo de trabalho', 'Manipulação fotográfica', 'Composição digital'],
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    courseId: 'boas-vindas-illustrator',
    color: '#FF9A00',
    icon: '/brand/apps/illustrator.png',
    tagline: 'Vetor com estilo',
    courseTitle: 'Illustrator: Boas Vindas',
    courseSubtitle: 'Vetores com precisão e estilo.',
    cover: '/covers/boas-vindas-illustrator.jpg',
    level: 'Iniciante',
    hours: 2,
    students: 318,
    topics: ['Fundamentos do vetor', 'Ícones e logotipos', 'Peças gráficas profissionais'],
  },
  {
    id: 'procreate',
    name: 'Procreate',
    courseId: 'boas-vindas-procreate',
    color: '#54EFF7',
    icon: '/brand/apps/procreate.png',
    tagline: 'Desenho no iPad',
    courseTitle: 'Procreate: Boas Vindas',
    courseSubtitle: 'Crie sem fronteiras: do básico ao avançado.',
    cover: '/covers/boas-vindas-procreate.jpg',
    level: 'Avançado',
    hours: 6,
    students: 284,
    topics: ['Interface e pincéis', 'Técnicas de pintura', 'Acabamento e exportação'],
  },
  {
    id: 'clip-studio',
    name: 'Clip Studio',
    courseId: 'boas-vindas-clip-studio',
    color: '#FE4F1A',
    icon: '/brand/apps/clip-studio.png',
    tagline: 'Mangá e quadrinhos',
    courseTitle: 'Clip Studio Paint: Boas Vindas',
    courseSubtitle: 'Ilustre sem limites: do zero ao avançado.',
    cover: '/covers/boas-vindas-clip-studio.jpg',
    level: 'Intermediário',
    hours: 4,
    students: 241,
    topics: ['Line art', 'Camadas organizadas', 'Efeitos e pintura digital'],
  },
  {
    id: 'krita',
    name: 'Krita',
    courseId: 'boas-vindas-krita',
    color: '#924EEA',
    icon: '/brand/apps/krita.png',
    tagline: 'Digital e gratuito',
    courseTitle: 'Krita: Boas Vindas',
    courseSubtitle: 'Arte digital acessível e poderosa.',
    cover: '/covers/boas-vindas-krita.jpg',
    level: 'Iniciante',
    hours: 5,
    students: 298,
    topics: ['Interface e pincéis', 'Camadas e recursos', 'Ilustração e concept art'],
  },
  {
    id: 'capcut',
    name: 'CapCut',
    courseId: 'boas-vindas-capcut',
    color: '#FFF200',
    icon: '/brand/apps/capcut.png',
    tagline: 'Vídeo pra redes',
    courseTitle: 'CapCut: Boas Vindas',
    courseSubtitle: 'Vídeos ágeis, edição afiada.',
    cover: '/covers/boas-vindas-capcut.jpg',
    level: 'Iniciante',
    hours: 2,
    students: 389,
    topics: ['Navegação na interface', 'Técnicas de edição', 'Identidade visual consistente'],
  },
];

export interface PilotoTeacherWork {
  src: string;
  title: string;
  href: string;
}

export interface PilotoTeacher {
  id: string;
  name: string;
  role: string;
  photo: string;
  courses: number;
  students: string;
  tags: string[];
  /** 4 obras reais do professor: a prova de que ele vive do que ensina */
  works: PilotoTeacherWork[];
  href: string;
}

/** Espelha a seleção de `FeaturedTeachers` da home: mesmos nomes, fotos e números. */
export function getPilotoTeachers(): PilotoTeacher[] {
  return [
  {
    id: 'marcelo-coelho',
    name: "Marcelo Coelho",
    role: "Arte Tradicional, Muralismo & Tatuagem",
    photo: '/teachers/marcelo-coelho.webp',
    courses: 9,
    students: '8.400',
    tags: ["Pintura", "Tatuagem", "Muralismo"],
    works: [
      { src: '/teachers/gallery/marcelo-coelho/arte los pivetes copiar.png', title: "Arte de Rua", href: '/projeto/mc-p1' },
      { src: '/teachers/gallery/marcelo-coelho/arte dr savio copiar copy.jpg', title: "Retrato Realista", href: '/projeto/mc-p2' },
      { src: '/teachers/gallery/marcelo-coelho/galinhas copiar 8.jpg', title: "Galinhas", href: '/projeto/mc-p7' },
      { src: '/teachers/gallery/marcelo-coelho/0001 - Copia.jpg', title: "Pintura em Tela", href: '/projeto/mc-p3' },
    ],
  },
  {
    id: 'giovanni-fim',
    name: "Giovanni Fim",
    role: "Concept Art & Personagens RPG",
    photo: '/teachers/giovanni-fim.webp',
    courses: 2,
    students: '2.800',
    tags: ["Concept Art", "RPG"],
    works: [
      { src: '/teachers/gallery/giovanni-fim/giovanni-fim-toph2.jpg', title: "Toph — Fan Art Avatar", href: '/projeto/gf-p15' },
      { src: '/teachers/gallery/giovanni-fim/giovanni-fim-bolrog2.jpg', title: "Balrog — Criatura Épica", href: '/projeto/gf-p7' },
      { src: '/teachers/gallery/giovanni-fim/giovanni-fim-rat-knight5iaaaa.jpg', title: "Rat Knight — Cavaleiro Rato", href: '/projeto/gf-p35' },
      { src: '/teachers/gallery/giovanni-fim/giovanni-fim-aang.jpg', title: "Aang Redesign", href: '/projeto/gf-p2' },
    ],
  },
  {
    id: 'atevaldo-novais',
    name: "Atevaldo Novais",
    role: "Realismo com Lápis de Cor",
    photo: '/teachers/atevaldo-novais.webp',
    courses: 1,
    students: '1.200',
    tags: ["Lápis de Cor", "Retrato"],
    works: [
      { src: '/teachers/gallery/atevaldo-novais/461010591_1213778063211300_4590831847951938179_n.jpeg', title: "Retrato Realista", href: '/projeto/an-p1' },
      { src: '/teachers/gallery/atevaldo-novais/455754126_1026888962496925_6304811850889056710_n.jpeg', title: "Estudo de Animal", href: '/projeto/an-p2' },
      { src: '/teachers/gallery/atevaldo-novais/449859530_921450189668408_3133633813315577667_n.jpeg', title: "Arte Hiper-Realista", href: '/projeto/an-p3' },
      { src: '/teachers/gallery/atevaldo-novais/434044641_1563067847826398_1333183651313021087_n.jpeg', title: "Composição", href: '/projeto/an-p4' },
    ],
  },
  {
    id: 'vinicius-silva',
    name: "Vinicius F. Silva",
    role: "Pintura em Tela & Concept Art",
    photo: '/teachers/vinicius-silva.webp',
    courses: 2,
    students: '1.100',
    tags: ["Tela", "Acrílica"],
    works: [
      { src: '/teachers/gallery/vinicius-silva/399314630_1053641402342313_3371025377650278616_n.jpg', title: "Pintura em Tela", href: '/projeto/vs-p1' },
      { src: '/teachers/gallery/vinicius-silva/395085139_1010569136887342_1830673974766726123_n.jpg', title: "Paisagem Fantástica", href: '/projeto/vs-p2' },
      { src: '/teachers/gallery/vinicius-silva/393518151_2135910566748312_5525127560979712196_n.jpg', title: "Composição Artística", href: '/projeto/vs-p3' },
      { src: '/teachers/gallery/vinicius-silva/408174678_251563931010091_6898443091146698319_n.jpg', title: "Pintura Acrílica — Composição", href: '/projeto/vs-p7' },
    ],
  },
  {
    id: 'ricardo-rios',
    name: "Ricardo Rios",
    role: "Ilustração Cartoon & Personagens",
    photo: '/teachers/ricardo-rios.webp',
    courses: 1,
    students: '1.500',
    tags: ["Cartoon", "Animação"],
    works: [
      { src: '/teachers/gallery/ricardo-rios/584890279_17900827530322901_4864771719961194519_n.webp', title: "Personagem Cartoon", href: '/projeto/rr-p1' },
      { src: '/teachers/gallery/ricardo-rios/486449535_17871724503322901_6714380489764954629_n.webp', title: "Expressões Exageradas", href: '/projeto/rr-p3' },
      { src: '/teachers/gallery/ricardo-rios/590408322_17901651423322901_919977569019190841_n.webp', title: "Cartoon — Personagem Colorido", href: '/projeto/rr-p7' },
      { src: '/teachers/gallery/ricardo-rios/621549536_17996079455912523_4672616243913964322_n.webp', title: "Cartoon — Expressão", href: '/projeto/rr-p8' },
    ],
  },
  {
    id: 'caio-cesar',
    name: "Caio César",
    role: "Modelagem 3D & Escultura Digital",
    photo: '/teachers/caio-cesar.webp',
    courses: 1,
    students: '900',
    tags: ["3D", "ZBrush"],
    works: [
      { src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-1.jpg', title: "Personagem 3D", href: '/projeto/cc-p1' },
      { src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-2.jpg', title: "Portfolio 3D Vol. 2", href: '/projeto/cc-p2' },
      { src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-epicthumb.jpg', title: "Epic — Render 3D", href: '/projeto/cc-p7' },
      { src: '/teachers/gallery/caio-cesar/caio-cesar-jerrylightyear.jpg', title: "Jerry Lightyear", href: '/projeto/cc-p17' },
    ],
  },
  ].map((t) => ({ ...t, href: `/mentoria/mentor/${t.id}` }));
}

export interface PilotoBenefit {
  id: string;
  title: string;
  description: string;
  partner: string;
  /** texto grande da etiqueta: "15% OFF", "R$50", "Grátis"... */
  highlight: string;
  couponCode?: string;
  artepassOnly: boolean;
  category: string;
}

/** Benefícios ativos em destaque (6, para fechar o grid 3x2), com o valor já formatado. */
const PILOTO_BENEFITS: PilotoBenefit[] = [
  {
    "id": "benefit-1",
    "title": "15% OFF em Tablets Wacom",
    "description": "Desconto exclusivo em toda a linha de tablets Wacom para membros CDA.",
    "partner": "Wacom Brasil",
    "highlight": "15% OFF",
    "artepassOnly": false,
    "category": "desconto"
  },
  {
    "id": "benefit-2",
    "title": "20% OFF Adobe Creative Cloud",
    "description": "Assine a Creative Cloud com desconto especial para a comunidade.",
    "partner": "Adobe Store",
    "highlight": "20% OFF",
    "artepassOnly": true,
    "category": "desconto"
  },
  {
    "id": "benefit-4",
    "title": "Cupom R$50 OFF na XP-Pen",
    "description": "Use o cupom exclusivo e ganhe R$50 de desconto em tablets XP-Pen.",
    "partner": "XP-Pen",
    "highlight": "R$50 OFF",
    "couponCode": "CDA50OFF",
    "artepassOnly": false,
    "category": "cupom"
  },
  {
    "id": "benefit-9",
    "title": "Early Access: Wacom Movink",
    "description": "Acesso antecipado ao novo Wacom Movink antes do lançamento oficial.",
    "partner": "Wacom Brasil",
    "highlight": "VIP",
    "artepassOnly": true,
    "category": "acesso_antecipado"
  },
  {
    "id": "benefit-11",
    "title": "Kit Exclusivo CDA x Staedtler",
    "description": "Kit de materiais profissionais co-criado pela CDA e Staedtler.",
    "partner": "Staedtler Brasil",
    "highlight": "30% OFF",
    "artepassOnly": true,
    "category": "exclusivo"
  },
  {
    "id": "benefit-3",
    "title": "10% OFF Materiais Staedtler",
    "description": "Desconto em lápis, marcadores e materiais profissionais Staedtler.",
    "partner": "Staedtler Brasil",
    "highlight": "10% OFF",
    "artepassOnly": false,
    "category": "desconto"
  }
];

export function getPilotoBenefits(): PilotoBenefit[] {
  return PILOTO_BENEFITS;
}

/** Números da comunidade: mesmos valores usados no hero e em CommunityStats. */
export const PILOTO_STATS = [
  { value: 4800, suffix: '+', label: 'artistas na comunidade' },
  { value: 43, suffix: '', label: 'professores que são artistas' },
  { value: 26, suffix: '', label: 'cursos completos' },
  { value: 340, suffix: '+', label: 'obras em desafios' },
];

export interface PilotoVideoItem {
  youtubeId: string;
  title: string;
  /** o que a pessoa vai ver nessa aula, em uma linha */
  subtitle: string;
  /** rótulo curto: "Aula #42", "Tutorial" */
  badge: string;
  /** thumb real do vídeo, já baixada para o projeto */
  poster: string;
}

/**
 * Aulas abertas do canal da Comu (@comunidadedaarte, UCKGl_wlpd6FYS3gUE8RGMVw).
 *
 * Não existe vídeo institucional do tipo "a Comu em 2 minutos" — então a seção
 * mostra o que existe de verdade: aula ao vivo com professor. O primeiro item é
 * o que abre no player; os outros formam a faixa. Se um dia houver um vídeo de
 * apresentação, basta colocá-lo no topo desta lista.
 */
export const PILOTO_VIDEOS: PilotoVideoItem[] = [
  {
    youtubeId: '2orgnDMwRus',
    title: 'Esboço no realismo com lápis de cor',
    subtitle: 'Como nasce um retrato realista, do primeiro traço às primeiras camadas de cor.',
    badge: 'Aula #42',
    poster: '/piloto/video/aula-42-lapis-de-cor.jpg',
  },
  {
    youtubeId: '-slsR01WxtA',
    title: 'Dicas de perspectiva no Procreate',
    subtitle: 'Guias, ponto de fuga e como não errar o espaço na ilustração digital.',
    badge: 'Aula #33',
    poster: '/piloto/video/aula-33-perspectiva-procreate.jpg',
  },
  {
    youtubeId: '1ZMxmti4YG0',
    title: 'Adicionando massa na anatomia humana',
    subtitle: 'Do boneco de palito ao corpo com volume, peso e gesto.',
    badge: 'Aula #39',
    poster: '/piloto/video/aula-39-anatomia.jpg',
  },
  {
    youtubeId: 'FCfK-g9Mwow',
    title: 'Composição e alterações na tela',
    subtitle: 'Pintura a óleo: como corrigir o rumo de um quadro sem começar de novo.',
    badge: 'Aula #41',
    poster: '/piloto/video/aula-41-oleo.jpg',
  },
];

/** Canal oficial, para quem quiser ver o resto. */
export const PILOTO_CANAL = 'https://www.youtube.com/@comunidadedaarte';

// ─────────────────────────────────────────────────────────────────
// Galeria da comunidade (v3): recorte curado de obras reais dos
// professores, com link para /projeto/:id.
// ─────────────────────────────────────────────────────────────────
export interface PilotoGalleryItem {
  id: string;
  projectId: string;
  src: string;
  width: number;
  height: number;
  title: string;
  artist: string;
  avatar?: string;
  /** ids de THEMATIC_CATEGORIES em que a obra se encaixa (pode ser vazio) */
  categories: string[];
  /** rótulo curto para a legenda */
  categoryLabel: string;
  likes: number;
  href: string;
}

/**
 * Parede da galeria: rodízio por professor (uma obra de cada por vez, destaques
 * primeiro), como `buildAllGalleryImages` faz no app. Cobre as 6 categorias dos
 * chips e não repete as 3 obras que já aparecem no hero.
 */
const PILOTO_GALLERY: PilotoGalleryItem[] = [
  {
    id: 'teacher-marcelo-coelho-mc-p1',
    projectId: 'mc-p1',
    src: '/teachers/gallery/marcelo-coelho/arte los pivetes copiar.png',
    width: 800,
    height: 1050,
    title: "Arte de Rua",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 340,
    href: '/projeto/mc-p1',
  },
  {
    id: 'teacher-atevaldo-novais-an-p1',
    projectId: 'an-p1',
    src: '/teachers/gallery/atevaldo-novais/461010591_1213778063211300_4590831847951938179_n.jpeg',
    width: 800,
    height: 1200,
    title: "Retrato Realista",
    artist: "Atevaldo Novais",
    avatar: '/teachers/atevaldo-novais.webp',
    categories: ['lapis-e-grafite'],
    categoryLabel: "Lápis & Grafite",
    likes: 780,
    href: '/projeto/an-p1',
  },
  {
    id: 'teacher-vinicius-silva-vs-p1',
    projectId: 'vs-p1',
    src: '/teachers/gallery/vinicius-silva/399314630_1053641402342313_3371025377650278616_n.jpg',
    width: 800,
    height: 1100,
    title: "Pintura em Tela",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 312,
    href: '/projeto/vs-p1',
  },
  {
    id: 'teacher-caio-cesar-cc-p1',
    projectId: 'cc-p1',
    src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-1.jpg',
    width: 800,
    height: 1000,
    title: "Personagem 3D",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['character-design', '3d-modeling'],
    categoryLabel: "Character Design",
    likes: 412,
    href: '/projeto/cc-p1',
  },
  {
    id: 'teacher-henry-saints-hs-p1',
    projectId: 'hs-p1',
    src: '/teachers/gallery/henry-saints/491447353_18165992881338450_6069181598482138851_n.webp',
    width: 800,
    height: 1280,
    title: "Personagem Mangá",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital', 'character-design'],
    categoryLabel: "Ilustração Digital",
    likes: 534,
    href: '/projeto/hs-p1',
  },
  {
    id: 'teacher-lucas-froes-lf-p1',
    projectId: 'lf-p1',
    src: '/teachers/gallery/lucas-froes/619910068_18091946644963612_7836792145815133066_n.jpg',
    width: 800,
    height: 960,
    title: "Ilustração Digital",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 356,
    href: '/projeto/lf-p1',
  },
  {
    id: 'teacher-ricardo-rios-rr-p1',
    projectId: 'rr-p1',
    src: '/teachers/gallery/ricardo-rios/584890279_17900827530322901_4864771719961194519_n.webp',
    width: 800,
    height: 1150,
    title: "Personagem Cartoon",
    artist: "Ricardo Rios",
    avatar: '/teachers/ricardo-rios.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 412,
    href: '/projeto/rr-p1',
  },
  {
    id: 'teacher-marcelo-coelho-mc-p2',
    projectId: 'mc-p2',
    src: '/teachers/gallery/marcelo-coelho/arte dr savio copiar copy.jpg',
    width: 800,
    height: 1080,
    title: "Retrato Realista",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 210,
    href: '/projeto/mc-p2',
  },
  {
    id: 'teacher-giovanni-fim-gf-p15',
    projectId: 'gf-p15',
    src: '/teachers/gallery/giovanni-fim/giovanni-fim-toph2.jpg',
    width: 800,
    height: 1230,
    title: "Toph — Fan Art Avatar",
    artist: "Giovanni Fim",
    avatar: '/teachers/giovanni-fim.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 421,
    href: '/projeto/gf-p15',
  },
  {
    id: 'teacher-vinicius-silva-vs-p2',
    projectId: 'vs-p2',
    src: '/teachers/gallery/vinicius-silva/395085139_1010569136887342_1830673974766726123_n.jpg',
    width: 800,
    height: 1020,
    title: "Paisagem Fantástica",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['ilustracao-digital', 'concept-art'],
    categoryLabel: "Ilustração Digital",
    likes: 267,
    href: '/projeto/vs-p2',
  },
  {
    id: 'teacher-caio-cesar-cc-p2',
    projectId: 'cc-p2',
    src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-2.jpg',
    width: 800,
    height: 1050,
    title: "Portfolio 3D Vol. 2",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['3d-modeling'],
    categoryLabel: "3D Modeling",
    likes: 356,
    href: '/projeto/cc-p2',
  },
  {
    id: 'teacher-henry-saints-hs-p2',
    projectId: 'hs-p2',
    src: '/teachers/gallery/henry-saints/489458076_18165900559338450_2483511254799886037_n.webp',
    width: 800,
    height: 1200,
    title: "Arte de Anime",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 467,
    href: '/projeto/hs-p2',
  },
  {
    id: 'teacher-lucas-froes-lf-p7',
    projectId: 'lf-p7',
    src: '/teachers/gallery/lucas-froes/620495281_18188746921360005_7098904975271019773_n.jpg',
    width: 800,
    height: 1100,
    title: "Personagem Dinâmico",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 334,
    href: '/projeto/lf-p7',
  },
  {
    id: 'teacher-maria-rezende-mr-p9',
    projectId: 'mr-p9',
    src: '/teachers/gallery/delfi-rezende/maria-rezende-seraphine.jpg',
    width: 800,
    height: 1000,
    title: "Seraphine — League of Legends",
    artist: "Maria Rezende",
    avatar: '/teachers/delfi-rezende.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 295,
    href: '/projeto/mr-p9',
  },
  {
    id: 'teacher-marcelo-coelho-mc-p7',
    projectId: 'mc-p7',
    src: '/teachers/gallery/marcelo-coelho/galinhas copiar 8.jpg',
    width: 800,
    height: 1280,
    title: "Galinhas",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 198,
    href: '/projeto/mc-p7',
  },
  {
    id: 'teacher-giovanni-fim-gf-p7',
    projectId: 'gf-p7',
    src: '/teachers/gallery/giovanni-fim/giovanni-fim-bolrog2.jpg',
    width: 800,
    height: 960,
    title: "Balrog — Criatura Épica",
    artist: "Giovanni Fim",
    avatar: '/teachers/giovanni-fim.webp',
    categories: ['concept-art'],
    categoryLabel: "Concept Art",
    likes: 412,
    href: '/projeto/gf-p7',
  },
  {
    id: 'teacher-atevaldo-novais-an-p2',
    projectId: 'an-p2',
    src: '/teachers/gallery/atevaldo-novais/455754126_1026888962496925_6304811850889056710_n.jpeg',
    width: 800,
    height: 1150,
    title: "Estudo de Animal",
    artist: "Atevaldo Novais",
    avatar: '/teachers/atevaldo-novais.webp',
    categories: ['lapis-e-grafite'],
    categoryLabel: "Lápis & Grafite",
    likes: 634,
    href: '/projeto/an-p2',
  },
  {
    id: 'teacher-vinicius-silva-vs-p7',
    projectId: 'vs-p7',
    src: '/teachers/gallery/vinicius-silva/408174678_251563931010091_6898443091146698319_n.jpg',
    width: 800,
    height: 1080,
    title: "Pintura Acrílica — Composição",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 196,
    href: '/projeto/vs-p7',
  },
  {
    id: 'teacher-caio-cesar-cc-p7',
    projectId: 'cc-p7',
    src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-epicthumb.jpg',
    width: 800,
    height: 1230,
    title: "Epic — Render 3D",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['3d-modeling'],
    categoryLabel: "3D Modeling",
    likes: 312,
    href: '/projeto/cc-p7',
  },
  {
    id: 'teacher-henry-saints-hs-p7',
    projectId: 'hs-p7',
    src: '/teachers/gallery/henry-saints/545282275_18180377125338450_487683573851787999_n.webp',
    width: 800,
    height: 1020,
    title: "Personagem Digital Mangá",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 445,
    href: '/projeto/hs-p7',
  },
  {
    id: 'teacher-lucas-froes-lf-p41',
    projectId: 'lf-p41',
    src: '/teachers/gallery/lucas-froes/652033093_18110352028684511_8600685725976768151_n.jpg',
    width: 800,
    height: 1050,
    title: "Personagem — Herói Digital",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 332,
    href: '/projeto/lf-p41',
  },
  {
    id: 'teacher-maria-rezende-mr-p8',
    projectId: 'mr-p8',
    src: '/teachers/gallery/delfi-rezende/maria-rezende-chihiro.jpg',
    width: 800,
    height: 1200,
    title: "Chihiro — Ghibli",
    artist: "Maria Rezende",
    avatar: '/teachers/delfi-rezende.webp',
    categories: ['ilustracao-digital', 'character-design'],
    categoryLabel: "Ilustração Digital",
    likes: 278,
    href: '/projeto/mr-p8',
  },
  {
    id: 'teacher-ricardo-rios-rr-p3',
    projectId: 'rr-p3',
    src: '/teachers/gallery/ricardo-rios/486449535_17871724503322901_6714380489764954629_n.webp',
    width: 800,
    height: 1100,
    title: "Expressões Exageradas",
    artist: "Ricardo Rios",
    avatar: '/teachers/ricardo-rios.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 298,
    href: '/projeto/rr-p3',
  },
  {
    id: 'teacher-marcelo-coelho-mc-p3',
    projectId: 'mc-p3',
    src: '/teachers/gallery/marcelo-coelho/0001 - Copia.jpg',
    width: 800,
    height: 1000,
    title: "Pintura em Tela",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 178,
    href: '/projeto/mc-p3',
  },
  {
    id: 'teacher-giovanni-fim-gf-p35',
    projectId: 'gf-p35',
    src: '/teachers/gallery/giovanni-fim/giovanni-fim-rat-knight5iaaaa.jpg',
    width: 800,
    height: 1280,
    title: "Rat Knight — Cavaleiro Rato",
    artist: "Giovanni Fim",
    avatar: '/teachers/giovanni-fim.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 398,
    href: '/projeto/gf-p35',
  },
  {
    id: 'teacher-atevaldo-novais-an-p3',
    projectId: 'an-p3',
    src: '/teachers/gallery/atevaldo-novais/449859530_921450189668408_3133633813315577667_n.jpeg',
    width: 800,
    height: 960,
    title: "Arte Hiper-Realista",
    artist: "Atevaldo Novais",
    avatar: '/teachers/atevaldo-novais.webp',
    categories: ['lapis-e-grafite'],
    categoryLabel: "Lápis & Grafite",
    likes: 543,
    href: '/projeto/an-p3',
  },
  {
    id: 'teacher-vinicius-silva-vs-p8',
    projectId: 'vs-p8',
    src: '/teachers/gallery/vinicius-silva/419262141_710547524541703_446957694326565968_n.jpg',
    width: 800,
    height: 1150,
    title: "Pintura — Cena Figurativa",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 172,
    href: '/projeto/vs-p8',
  },
  {
    id: 'teacher-caio-cesar-cc-p17',
    projectId: 'cc-p17',
    src: '/teachers/gallery/caio-cesar/caio-cesar-jerrylightyear.jpg',
    width: 800,
    height: 1080,
    title: "Jerry Lightyear",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['character-design', '3d-modeling'],
    categoryLabel: "Character Design",
    likes: 302,
    href: '/projeto/cc-p17',
  },
  {
    id: 'teacher-henry-saints-hs-p3',
    projectId: 'hs-p3',
    src: '/teachers/gallery/henry-saints/488405226_18165125419338450_2019640889006408585_n.webp',
    width: 800,
    height: 1230,
    title: "Line Art Detalhada",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 398,
    href: '/projeto/hs-p3',
  },
  {
    id: 'teacher-lucas-froes-lf-p18',
    projectId: 'lf-p18',
    src: '/teachers/gallery/lucas-froes/620496707_18107948734668810_2045383530846517817_n.jpg',
    width: 800,
    height: 1020,
    title: "Personagem em Perspectiva Dinâmica",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 314,
    href: '/projeto/lf-p18',
  },
  {
    id: 'teacher-maria-rezende-mr-p1',
    projectId: 'mr-p1',
    src: '/teachers/gallery/delfi-rezende/625901337_18110225938656634_1353129247439861618_n.jpg',
    width: 800,
    height: 1050,
    title: "Ilustração em Clip Studio",
    artist: "Maria Rezende",
    avatar: '/teachers/delfi-rezende.webp',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 245,
    href: '/projeto/mr-p1',
  },
  {
    id: 'teacher-ricardo-rios-rr-p7',
    projectId: 'rr-p7',
    src: '/teachers/gallery/ricardo-rios/590408322_17901651423322901_919977569019190841_n.webp',
    width: 800,
    height: 1200,
    title: "Cartoon — Personagem Colorido",
    artist: "Ricardo Rios",
    avatar: '/teachers/ricardo-rios.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 248,
    href: '/projeto/rr-p7',
  },
  {
    id: 'teacher-marcelo-coelho-mc-p8',
    projectId: 'mc-p8',
    src: '/teachers/gallery/marcelo-coelho/fumo 08 copiar.jpg',
    width: 800,
    height: 1100,
    title: "Cortando Fumo",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 167,
    href: '/projeto/mc-p8',
  },
  {
    id: 'teacher-giovanni-fim-gf-p2',
    projectId: 'gf-p2',
    src: '/teachers/gallery/giovanni-fim/giovanni-fim-aang.jpg',
    width: 800,
    height: 1000,
    title: "Aang Redesign",
    artist: "Giovanni Fim",
    avatar: '/teachers/giovanni-fim.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 390,
    href: '/projeto/gf-p2',
  },
  {
    id: 'teacher-atevaldo-novais-an-p4',
    projectId: 'an-p4',
    src: '/teachers/gallery/atevaldo-novais/434044641_1563067847826398_1333183651313021087_n.jpeg',
    width: 800,
    height: 1280,
    title: "Composição",
    artist: "Atevaldo Novais",
    avatar: '/teachers/atevaldo-novais.webp',
    categories: ['lapis-e-grafite'],
    categoryLabel: "Lápis & Grafite",
    likes: 423,
    href: '/projeto/an-p4',
  },
  {
    id: 'teacher-vinicius-silva-vs-p3',
    projectId: 'vs-p3',
    src: '/teachers/gallery/vinicius-silva/393518151_2135910566748312_5525127560979712196_n.jpg',
    width: 800,
    height: 960,
    title: "Composição Artística",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 198,
    href: '/projeto/vs-p3',
  },
  {
    id: 'teacher-caio-cesar-cc-p3',
    projectId: 'cc-p3',
    src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-3.jpg',
    width: 800,
    height: 1150,
    title: "Portfolio 3D Vol. 3",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['3d-modeling'],
    categoryLabel: "3D Modeling",
    likes: 298,
    href: '/projeto/cc-p3',
  },
  {
    id: 'teacher-henry-saints-hs-p8',
    projectId: 'hs-p8',
    src: '/teachers/gallery/henry-saints/619070129_17939470659136137_77928654344011708_n.webp',
    width: 800,
    height: 1080,
    title: "Arte Mangá Clássica",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 378,
    href: '/projeto/hs-p8',
  },
  {
    id: 'teacher-lucas-froes-lf-p2',
    projectId: 'lf-p2',
    src: '/teachers/gallery/lucas-froes/619396115_18102902302765809_6019709172768124233_n.jpg',
    width: 800,
    height: 1230,
    title: "Personagem com Perspectiva",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['ilustracao-digital', 'character-design'],
    categoryLabel: "Ilustração Digital",
    likes: 312,
    href: '/projeto/lf-p2',
  },
  {
    id: 'teacher-maria-rezende-mr-p2',
    projectId: 'mr-p2',
    src: '/teachers/gallery/delfi-rezende/625509537_18083208602464746_3412697558409309312_n.jpg',
    width: 800,
    height: 1020,
    title: "Arte em Krita",
    artist: "Maria Rezende",
    avatar: '/teachers/delfi-rezende.webp',
    categories: ['ilustracao-digital', 'oleo-e-acrilica'],
    categoryLabel: "Ilustração Digital",
    likes: 198,
    href: '/projeto/mr-p2',
  },
  {
    id: 'teacher-ricardo-rios-rr-p8',
    projectId: 'rr-p8',
    src: '/teachers/gallery/ricardo-rios/621549536_17996079455912523_4672616243913964322_n.webp',
    width: 800,
    height: 1050,
    title: "Cartoon — Expressão",
    artist: "Ricardo Rios",
    avatar: '/teachers/ricardo-rios.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 215,
    href: '/projeto/rr-p8',
  },
  {
    id: 'teacher-marcelo-coelho-mc-p9',
    projectId: 'mc-p9',
    src: '/teachers/gallery/marcelo-coelho/kid suco 01.jpg',
    width: 800,
    height: 1200,
    title: "Menino com Suco",
    artist: "Marcelo Coelho",
    avatar: '/teachers/marcelo-coelho.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 140,
    href: '/projeto/mc-p9',
  },
  {
    id: 'teacher-giovanni-fim-gf-p16',
    projectId: 'gf-p16',
    src: '/teachers/gallery/giovanni-fim/giovanni-fim-zuko2.jpg',
    width: 800,
    height: 1100,
    title: "Zuko — Fan Art Avatar",
    artist: "Giovanni Fim",
    avatar: '/teachers/giovanni-fim.webp',
    categories: ['character-design'],
    categoryLabel: "Character Design",
    likes: 389,
    href: '/projeto/gf-p16',
  },
  {
    id: 'teacher-atevaldo-novais-an-p8',
    projectId: 'an-p8',
    src: '/teachers/gallery/atevaldo-novais/479884308_609805748640752_5580650150994755239_n.jpeg',
    width: 800,
    height: 1000,
    title: "Estudo de Textura",
    artist: "Atevaldo Novais",
    avatar: '/teachers/atevaldo-novais.webp',
    categories: ['lapis-e-grafite'],
    categoryLabel: "Lápis & Grafite",
    likes: 398,
    href: '/projeto/an-p8',
  },
  {
    id: 'teacher-vinicius-silva-vs-p9',
    projectId: 'vs-p9',
    src: '/teachers/gallery/vinicius-silva/450789838_861237139207564_7954787048375153254_n.jpg',
    width: 800,
    height: 1280,
    title: "Pintura — Retrato Expressivo",
    artist: "Vinicius F. Silva",
    avatar: '/teachers/vinicius-silva.webp',
    categories: ['oleo-e-acrilica'],
    categoryLabel: "Óleo & Acrílica",
    likes: 158,
    href: '/projeto/vs-p9',
  },
  {
    id: 'teacher-caio-cesar-cc-p16',
    projectId: 'cc-p16',
    src: '/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-zecarioca.jpg',
    width: 800,
    height: 960,
    title: "Zé Carioca — 3D",
    artist: "Caio César",
    avatar: '/teachers/caio-cesar.webp',
    categories: ['character-design', '3d-modeling'],
    categoryLabel: "Character Design",
    likes: 245,
    href: '/projeto/cc-p16',
  },
  {
    id: 'teacher-henry-saints-hs-p9',
    projectId: 'hs-p9',
    src: '/teachers/gallery/henry-saints/623543590_18071240249530207_2329140638924748300_n.webp',
    width: 800,
    height: 1150,
    title: "Ilustração Anime",
    artist: "Henry Saints",
    avatar: '/teachers/gallery/henry-saints/468316232_18152206237338450_7079295301963749235_n.jpg',
    categories: ['ilustracao-digital'],
    categoryLabel: "Ilustração Digital",
    likes: 334,
    href: '/projeto/hs-p9',
  },
  {
    id: 'teacher-lucas-froes-lf-p24',
    projectId: 'lf-p24',
    src: '/teachers/gallery/lucas-froes/629671170_18448061806099253_4809496158249025957_n.jpg',
    width: 800,
    height: 1080,
    title: "Personagem com Cenário Épico",
    artist: "Lucas Froes",
    avatar: '/teachers/gallery/lucas-froes/612445270_18080109032247001_6783085987263493563_n.jpg',
    categories: ['concept-art', 'character-design'],
    categoryLabel: "Concept Art",
    likes: 299,
    href: '/projeto/lf-p24',
  },
];

export function getPilotoGallery(): PilotoGalleryItem[] {
  return PILOTO_GALLERY;
}

/** `null` = todas; senão só as obras que pertencem à categoria. */
export function filterGallery(items: PilotoGalleryItem[], categoryId: string | null): PilotoGalleryItem[] {
  if (categoryId === null) return items;
  return items.filter((i) => i.categories.includes(categoryId));
}

/** Total real da galeria da home no momento do snapshot, mostrado como prova social. */
export const PILOTO_GALLERY_TOTAL = 176;

export interface PilotoHeroArt extends PilotoGalleryItem {
  role: 'front' | 'back-l' | 'back-r';
}

/**
 * Colagem do hero (v3): 3 obras reais em 3 linguagens,
 * concept art digital na frente, lápis de cor e ilustração digital atrás.
 */
export const PILOTO_HERO_ART: PilotoHeroArt[] = [
  {
    "id": "teacher-giovanni-fim-gf-p1",
    "projectId": "gf-p1",
    "src": "/teachers/gallery/giovanni-fim/giovanni-fim-blue2.jpg",
    "width": 800,
    "height": 1100,
    "title": "Blue Warrior",
    "artist": "Giovanni Fim",
    "avatar": "/teachers/giovanni-fim.webp",
    "categories": [
      "concept-art"
    ],
    "categoryLabel": "Concept Art",
    "likes": 456,
    "href": "/projeto/gf-p1",
    "role": "front"
  },
  {
    "id": "teacher-atevaldo-novais-an-p7",
    "projectId": "an-p7",
    "src": "/teachers/gallery/atevaldo-novais/469729921_9105685752815400_6392672319844046872_n.jpeg",
    "width": 800,
    "height": 1000,
    "title": "Retrato em Lápis de Cor",
    "artist": "Atevaldo Novais",
    "avatar": "/teachers/atevaldo-novais.webp",
    "categories": [
      "lapis-e-grafite"
    ],
    "categoryLabel": "Lápis & Grafite",
    "likes": 645,
    "href": "/projeto/an-p7",
    "role": "back-l"
  },
  {
    "id": "teacher-maria-rezende-mr-p7",
    "projectId": "mr-p7",
    "src": "/teachers/gallery/delfi-rezende/maria-rezende-arcane.jpg",
    "width": 800,
    "height": 1100,
    "title": "Arcane — Fan Art",
    "artist": "Maria Rezende",
    "avatar": "/teachers/delfi-rezende.webp",
    "categories": [
      "ilustracao-digital"
    ],
    "categoryLabel": "Ilustração Digital",
    "likes": 312,
    "href": "/projeto/mr-p7",
    "role": "back-r"
  }
];
