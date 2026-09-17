// ─────────────────────────────────────────────────────────────────
// Perfis públicos dos professores em destaque na home, com portfólio
// completo. Snapshot (2026-09-17) de `mockPublicProfileData.ts` do app;
// imagens reais copiadas para /teachers.
// ─────────────────────────────────────────────────────────────────

export interface ProfessorExperiencia {
  title: string;
  company: string;
  period: string;
  current: boolean;
}

export interface ProfessorRede {
  platform: string;
  url: string;
  username: string;
}

export interface ProfessorObra {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
  category: string;
  tags: string[];
  likes: number;
  featured: boolean;
}

export interface Professor {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  area: string;
  tagline: string;
  bio: string;
  expertise: string[];
  experience: ProfessorExperiencia[];
  location: string;
  memberSince: string;
  social: ProfessorRede[];
  projects: ProfessorObra[];
}

export const PROFESSORES: Professor[] = [
  {
    "id": "marcelo-coelho",
    "name": "Marcelo Coelho",
    "avatar": "/teachers/marcelo-coelho.webp",
    "cover": "/teachers/gallery/marcelo-coelho/arte los pivetes copiar.png",
    "area": "Arte Tradicional & Digital",
    "tagline": "17 anos criando e ensinando arte — do traço ao verniz",
    "bio": "17 anos de experiência em artes plásticas, muralismo e tatuagem. Professor versátil que domina técnicas tradicionais e digitais, do traço inicial ao acabamento profissional. Já formou milhares de artistas em 9 cursos diferentes.",
    "expertise": [
      "Desenho",
      "Pintura em Tela",
      "Muralismo",
      "Tatuagem",
      "Arte Digital",
      "Caricatura",
      "Aquarela"
    ],
    "experience": [
      {
        "title": "Professor & Artista",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      },
      {
        "title": "Artista Plástico & Muralista",
        "period": "2007 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-01-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/marcelocoelhoart",
        "username": "@marcelocoelhoart"
      }
    ],
    "projects": [
      {
        "id": "mc-p1",
        "title": "Arte de Rua",
        "description": "Mural artístico",
        "cover": "/teachers/gallery/marcelo-coelho/arte los pivetes copiar.png",
        "images": [
          "/teachers/gallery/marcelo-coelho/arte los pivetes copiar.png"
        ],
        "category": "Muralismo",
        "tags": [
          "Mural",
          "Arte Urbana"
        ],
        "likes": 340,
        "featured": true
      },
      {
        "id": "mc-p2",
        "title": "Retrato Realista",
        "description": "Pintura realista",
        "cover": "/teachers/gallery/marcelo-coelho/arte dr savio copiar copy.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/arte dr savio copiar copy.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Realismo",
          "Retrato"
        ],
        "likes": 210,
        "featured": true
      },
      {
        "id": "mc-p3",
        "title": "Pintura em Tela",
        "description": "Obra em acrílica",
        "cover": "/teachers/gallery/marcelo-coelho/0001 - Copia.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/0001 - Copia.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Acrílica",
          "Tela"
        ],
        "likes": 178,
        "featured": false
      },
      {
        "id": "mc-p4",
        "title": "Estudo de Figura",
        "description": "Desenho de figura humana",
        "cover": "/teachers/gallery/marcelo-coelho/100_2846 - Copia.JPG",
        "images": [
          "/teachers/gallery/marcelo-coelho/100_2846 - Copia.JPG"
        ],
        "category": "Desenho",
        "tags": [
          "Figura Humana",
          "Estudo"
        ],
        "likes": 120,
        "featured": false
      },
      {
        "id": "mc-p5",
        "title": "Composição Artística",
        "description": "Pintura a óleo",
        "cover": "/teachers/gallery/marcelo-coelho/100_2849 - Cópia - Copia.JPG",
        "images": [
          "/teachers/gallery/marcelo-coelho/100_2849 - Cópia - Copia.JPG"
        ],
        "category": "Pintura",
        "tags": [
          "Óleo",
          "Composição"
        ],
        "likes": 89,
        "featured": false
      },
      {
        "id": "mc-p6",
        "title": "Arte em Grande Escala",
        "description": "Trabalho de muralismo",
        "cover": "/teachers/gallery/marcelo-coelho/100_7326 - Copia.JPG",
        "images": [
          "/teachers/gallery/marcelo-coelho/100_7326 - Copia.JPG"
        ],
        "category": "Muralismo",
        "tags": [
          "Grande Escala",
          "Mural"
        ],
        "likes": 76,
        "featured": false
      },
      {
        "id": "mc-p7",
        "title": "Galinhas",
        "description": "Pintura de galinhas em estilo regional figurativo",
        "cover": "/teachers/gallery/marcelo-coelho/galinhas copiar 8.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/galinhas copiar 8.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Regional",
          "Figurativo"
        ],
        "likes": 198,
        "featured": true
      },
      {
        "id": "mc-p8",
        "title": "Cortando Fumo",
        "description": "Pintura retratando cena do cotidiano rural brasileiro",
        "cover": "/teachers/gallery/marcelo-coelho/fumo 08 copiar.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/fumo 08 copiar.jpg"
        ],
        "category": "Muralismo",
        "tags": [
          "Rural",
          "Cotidiano"
        ],
        "likes": 167,
        "featured": false
      },
      {
        "id": "mc-p9",
        "title": "Menino com Suco",
        "description": "Retrato figurativo de criança",
        "cover": "/teachers/gallery/marcelo-coelho/kid suco 01.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/kid suco 01.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Retrato",
          "Figurativo"
        ],
        "likes": 140,
        "featured": false
      },
      {
        "id": "mc-p10",
        "title": "Pintura em Tela",
        "description": "Obra figurativa em tela com técnica realista",
        "cover": "/teachers/gallery/marcelo-coelho/DSC_0005.JPG",
        "images": [
          "/teachers/gallery/marcelo-coelho/DSC_0005.JPG"
        ],
        "category": "Pintura",
        "tags": [
          "Realismo",
          "Tela"
        ],
        "likes": 113,
        "featured": false
      },
      {
        "id": "mc-p11",
        "title": "Arte Digital",
        "description": "Pintura digital no estilo figurativo",
        "cover": "/teachers/gallery/marcelo-coelho/digital 03 copiar.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/digital 03 copiar.jpg"
        ],
        "category": "Pintura Digital",
        "tags": [
          "Digital",
          "Figurativo"
        ],
        "likes": 96,
        "featured": false
      },
      {
        "id": "mc-p12",
        "title": "Retrato a Lápis",
        "description": "Retrato detalhado em lápis sobre papel",
        "cover": "/teachers/gallery/marcelo-coelho/desenho samuel copiar.jpg",
        "images": [
          "/teachers/gallery/marcelo-coelho/desenho samuel copiar.jpg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Lápis",
          "Retrato"
        ],
        "likes": 84,
        "featured": false
      }
    ]
  },
  {
    "id": "giovanni-fim",
    "name": "Giovanni Fim",
    "avatar": "/teachers/giovanni-fim.webp",
    "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-blue2.jpg",
    "area": "Concept Art & Personagens RPG",
    "tagline": "Concept artist freelancer criando para clientes internacionais",
    "bio": "Concept artist freelancer com 8 anos de experiência internacional, criando arte para clientes nos EUA em games, ilustrações e RPG. Especialista em personagens épicos, concept art e fantasia.",
    "expertise": [
      "Concept Art",
      "Character Design",
      "RPG Art",
      "Pintura Digital",
      "Anatomia",
      "Fantasia"
    ],
    "experience": [
      {
        "title": "Concept Artist Freelancer",
        "company": "Clientes Internacionais (EUA)",
        "period": "2016 - Atual",
        "current": true
      },
      {
        "title": "Professor",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-06-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/giovannifim",
        "username": "@giovannifim"
      }
    ],
    "projects": [
      {
        "id": "gf-p1",
        "title": "Blue Warrior",
        "description": "Concept art de personagem fantasia",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-blue2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-blue2.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Fantasy",
          "Character",
          "RPG"
        ],
        "likes": 456,
        "featured": true
      },
      {
        "id": "gf-p2",
        "title": "Aang Redesign",
        "description": "Estudo de personagem",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-aang.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-aang.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Fan Art",
          "Character"
        ],
        "likes": 390,
        "featured": true
      },
      {
        "id": "gf-p3",
        "title": "Bear Man",
        "description": "Concept art de criatura",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-bearedman.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-bearedman.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Creature",
          "Concept"
        ],
        "likes": 312,
        "featured": true
      },
      {
        "id": "gf-p4",
        "title": "Portrait Study",
        "description": "Estudo de retrato digital",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-2f.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-2f.jpg"
        ],
        "category": "Illustration",
        "tags": [
          "Portrait",
          "Digital Painting"
        ],
        "likes": 234,
        "featured": false
      },
      {
        "id": "gf-p5",
        "title": "Altos",
        "description": "Ilustração original",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-altos2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-altos2.jpg"
        ],
        "category": "Illustration",
        "tags": [
          "Illustration",
          "Original"
        ],
        "likes": 198,
        "featured": false
      },
      {
        "id": "gf-p6",
        "title": "Rocky Landscape",
        "description": "Environment art",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-2-rochas.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-2-rochas.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Landscape",
          "Environment"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "gf-p7",
        "title": "Balrog — Criatura Épica",
        "description": "Concept art de criatura mitológica épica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-bolrog2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-bolrog2.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Criatura",
          "Fantasia"
        ],
        "likes": 412,
        "featured": true
      },
      {
        "id": "gf-p8",
        "title": "Brigand — Character Design",
        "description": "Design de personagem bandido medieval",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-brig.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-brig.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Personagem",
          "Medieval"
        ],
        "likes": 356,
        "featured": true
      },
      {
        "id": "gf-p9",
        "title": "Cerberus — Criatura Infernal",
        "description": "Concept art do Cerberus mitológico",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-cerberus3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-cerberus3.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Mitologia",
          "Criatura"
        ],
        "likes": 312,
        "featured": false
      },
      {
        "id": "gf-p10",
        "title": "Elfa — Personagem RPG",
        "description": "Design de personagem elfa para RPG",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-elfa3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-elfa3.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Elfa",
          "RPG"
        ],
        "likes": 267,
        "featured": false
      },
      {
        "id": "gf-p11",
        "title": "Necromancer",
        "description": "Personagem necromante em concept art sombrio",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-necromancer2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-necromancer2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Necromante",
          "Dark Fantasy"
        ],
        "likes": 234,
        "featured": false
      },
      {
        "id": "gf-p12",
        "title": "Grupo de Aventureiros D&D",
        "description": "Grupo de personagens de campanha D&D",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-dnd-party3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-dnd-party3.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "D&D",
          "Grupo"
        ],
        "likes": 198,
        "featured": false
      },
      {
        "id": "gf-p13",
        "title": "Doom Slayer",
        "description": "Fan art do Doom Slayer em concept art épico",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-doom6.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-doom6.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Fan Art",
          "Games"
        ],
        "likes": 167,
        "featured": false
      },
      {
        "id": "gf-p14",
        "title": "Viking — Concept Art",
        "description": "Design de guerreiro viking nórdico",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-viking3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-viking3.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Viking",
          "Histórico"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "gf-p15",
        "title": "Toph — Fan Art Avatar",
        "description": "Fan art de Toph de Avatar: A Lenda de Aang",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-toph2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-toph2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Fan Art",
          "Avatar",
          "Personagem"
        ],
        "likes": 421,
        "featured": true
      },
      {
        "id": "gf-p16",
        "title": "Zuko — Fan Art Avatar",
        "description": "Fan art de Zuko em concept art épico",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-zuko2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-zuko2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Fan Art",
          "Avatar",
          "Personagem"
        ],
        "likes": 389,
        "featured": true
      },
      {
        "id": "gf-p17",
        "title": "Anão — Character Design",
        "description": "Personagem anão detalhado em estilo RPG clássico",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-dwarf33.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-dwarf33.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Anão",
          "RPG",
          "Fantasy"
        ],
        "likes": 245,
        "featured": false
      },
      {
        "id": "gf-p18",
        "title": "Space Marine",
        "description": "Personagem Space Marine em concept art detalhado",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-spacemarine2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-spacemarine2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Sci-Fi",
          "Militar",
          "Personagem"
        ],
        "likes": 214,
        "featured": false
      },
      {
        "id": "gf-p19",
        "title": "Maiden — Personagem RPG",
        "description": "Design de personagem feminino para RPG de fantasia",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-maiden.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-maiden.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "RPG",
          "Feminino",
          "Fantasy"
        ],
        "likes": 192,
        "featured": false
      },
      {
        "id": "gf-p20",
        "title": "Bren — Personagem Original",
        "description": "Personagem original com design elaborado e identidade única",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-bren2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-bren2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Original",
          "Personagem"
        ],
        "likes": 173,
        "featured": false
      },
      {
        "id": "gf-p21",
        "title": "Cyber Rat — Sci-Fi",
        "description": "Personagem cyberpunk com design de rato guerreiro futurista",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-cyberrat2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-cyberrat2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Cyberpunk",
          "Sci-Fi",
          "Personagem"
        ],
        "likes": 365,
        "featured": true
      },
      {
        "id": "gf-p22",
        "title": "Elf Warrior — Lutadora",
        "description": "Personagem elfa guerreira em pose de combate dinâmica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-elfkilling5-instacopy.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-elfkilling5-instacopy.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Elfa",
          "Guerreira",
          "Fantasy"
        ],
        "likes": 243,
        "featured": false
      },
      {
        "id": "gf-p23",
        "title": "EZ — Concept Art",
        "description": "Concept art de personagem com estilo gráfico marcante",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-ez5a.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-ez5a.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Concept",
          "Personagem",
          "Gráfico"
        ],
        "likes": 193,
        "featured": false
      },
      {
        "id": "gf-p24",
        "title": "The Fella — Character Design",
        "description": "Design de personagem original com personalidade forte",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-fella-jpeg.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-fella-jpeg.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Original",
          "Personalidade",
          "Digital"
        ],
        "likes": 181,
        "featured": false
      },
      {
        "id": "gf-p25",
        "title": "Forest Ranger — Guardião da Floresta",
        "description": "Personagem guardião da floresta com design de RPG de alta qualidade",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-forest-ranger11.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-forest-ranger11.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Guardião",
          "Floresta",
          "RPG"
        ],
        "likes": 317,
        "featured": true
      },
      {
        "id": "gf-p26",
        "title": "Agan — Personagem RPG",
        "description": "Personagem original de campanha RPG com concept detalhado",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-agan2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-agan2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "RPG",
          "Original",
          "Concept"
        ],
        "likes": 212,
        "featured": false
      },
      {
        "id": "gf-p27",
        "title": "Arte Digital — Publicação",
        "description": "Ilustração digital com técnica avançada de pintura",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-publi22.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-publi22.jpg"
        ],
        "category": "Illustration",
        "tags": [
          "Pintura Digital",
          "Arte",
          "Técnica"
        ],
        "likes": 163,
        "featured": false
      },
      {
        "id": "gf-p28",
        "title": "Treinamento — Personagem em Ação",
        "description": "Personagem em cena de treinamento com composição dinâmica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-ttt.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-giovanni-fim-ttt.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Ação",
          "Dinâmico",
          "Personagem"
        ],
        "likes": 197,
        "featured": false
      },
      {
        "id": "gf-p29",
        "title": "Hyper — Cover Art",
        "description": "Arte de capa com personagem estilizado e composição épica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-hypercoverf-copy.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-hypercoverf-copy.jpg"
        ],
        "category": "Illustration",
        "tags": [
          "Capa",
          "Épico",
          "Arte"
        ],
        "likes": 233,
        "featured": false
      },
      {
        "id": "gf-p30",
        "title": "Ladon — Criatura Mitológica",
        "description": "Concept art da criatura Ladon, dragão da mitologia grega",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-ladon12.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-ladon12.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Mitologia",
          "Dragão",
          "Criatura"
        ],
        "likes": 266,
        "featured": false
      },
      {
        "id": "gf-p31",
        "title": "Noodle — Personagem Estilizado",
        "description": "Personagem com estética única e design memorável",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-noodle3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-noodle3.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Estilizado",
          "Único",
          "Personagem"
        ],
        "likes": 184,
        "featured": false
      },
      {
        "id": "gf-p32",
        "title": "Nyra — Personagem Feminina",
        "description": "Personagem feminina de fantasia com design elegante e detalhado",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-nyra3close2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-nyra3close2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Feminino",
          "Fantasia",
          "Elegante"
        ],
        "likes": 239,
        "featured": false
      },
      {
        "id": "gf-p33",
        "title": "O Guerreiro — Concept Art",
        "description": "Concept art de guerreiro poderoso com armadura detalhada",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-o33.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-o33.jpg"
        ],
        "category": "Concept Art",
        "tags": [
          "Guerreiro",
          "Armadura",
          "Épico"
        ],
        "likes": 254,
        "featured": false
      },
      {
        "id": "gf-p34",
        "title": "Priscilla — Personagem Original",
        "description": "Design de personagem feminina original com identidade visual única",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-priscilla-low.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-priscilla-low.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Original",
          "Feminino",
          "Digital"
        ],
        "likes": 204,
        "featured": false
      },
      {
        "id": "gf-p35",
        "title": "Rat Knight — Cavaleiro Rato",
        "description": "Personagem cavaleiro rato com design criativo e armadura elaborada",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-rat-knight5iaaaa.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-rat-knight5iaaaa.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Criativo",
          "Cavaleiro",
          "Fantasy"
        ],
        "likes": 398,
        "featured": true
      },
      {
        "id": "gf-p36",
        "title": "Scavenger Rob — Sobrevivente",
        "description": "Personagem catador pós-apocalíptico com design rico em detalhes",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-scavenger-rob32.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-scavenger-rob32.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Pós-Apocalíptico",
          "Sobrevivente",
          "Detalhado"
        ],
        "likes": 288,
        "featured": false
      },
      {
        "id": "gf-p37",
        "title": "Sol Invictus — Guerreiro da Luz",
        "description": "Personagem inspirado no Sol Invictus com armadura luminosa épica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-sol-invictusa.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-sol-invictusa.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Luz",
          "Épico",
          "Armadura"
        ],
        "likes": 314,
        "featured": false
      },
      {
        "id": "gf-p38",
        "title": "Solomon — Personagem Sábio",
        "description": "Design de personagem Solomon com estética de sábio poderoso",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-solomon2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-solomon2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Sábio",
          "Poderoso",
          "Fantasy"
        ],
        "likes": 244,
        "featured": false
      },
      {
        "id": "gf-p39",
        "title": "Guerreiro com Espada II",
        "description": "Personagem guerreiro com espada em pose de combate épica",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-sword-2.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-sword-2.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Guerreiro",
          "Espada",
          "Combate"
        ],
        "likes": 277,
        "featured": false
      },
      {
        "id": "gf-p40",
        "title": "Guerreiro com Espada III",
        "description": "Segunda variação de personagem guerreiro com espada em estilo RPG",
        "cover": "/teachers/gallery/giovanni-fim/giovanni-fim-sword-3.jpg",
        "images": [
          "/teachers/gallery/giovanni-fim/giovanni-fim-sword-3.jpg"
        ],
        "category": "Character Design",
        "tags": [
          "Guerreiro",
          "Espada",
          "RPG"
        ],
        "likes": 261,
        "featured": false
      }
    ]
  },
  {
    "id": "atevaldo-novais",
    "name": "Atevaldo Novais",
    "avatar": "/teachers/atevaldo-novais.webp",
    "cover": "/teachers/gallery/atevaldo-novais/461010591_1213778063211300_4590831847951938179_n.jpeg",
    "area": "Realismo com Lápis de Cor",
    "tagline": "134 mil inscritos no YouTube • 24 milhões de visualizações",
    "bio": "Referência em desenho realista com lápis de cor, com 134 mil inscritos e 24 milhões de visualizações no YouTube. Ensina técnicas detalhadas que transformam iniciantes em artistas confiantes.",
    "expertise": [
      "Lápis de Cor",
      "Realismo",
      "Retrato",
      "Animais",
      "Hiper-Realismo",
      "Técnicas Tradicionais"
    ],
    "experience": [
      {
        "title": "Youtuber & Professor",
        "period": "2016 - Atual",
        "current": true
      },
      {
        "title": "Professor",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-03-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/atevaldo_novais",
        "username": "@atevaldo_novais"
      }
    ],
    "projects": [
      {
        "id": "an-p1",
        "title": "Retrato Realista",
        "description": "Retrato hiper-realista em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/461010591_1213778063211300_4590831847951938179_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/461010591_1213778063211300_4590831847951938179_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Realismo",
          "Lápis de Cor"
        ],
        "likes": 780,
        "featured": true
      },
      {
        "id": "an-p2",
        "title": "Estudo de Animal",
        "description": "Animal em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/455754126_1026888962496925_6304811850889056710_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/455754126_1026888962496925_6304811850889056710_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Animal",
          "Naturalismo"
        ],
        "likes": 634,
        "featured": true
      },
      {
        "id": "an-p3",
        "title": "Arte Hiper-Realista",
        "description": "Trabalho em hiper-realismo",
        "cover": "/teachers/gallery/atevaldo-novais/449859530_921450189668408_3133633813315577667_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/449859530_921450189668408_3133633813315577667_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Hiper-Realismo",
          "Técnica"
        ],
        "likes": 543,
        "featured": true
      },
      {
        "id": "an-p4",
        "title": "Composição",
        "description": "Composição em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/434044641_1563067847826398_1333183651313021087_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/434044641_1563067847826398_1333183651313021087_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Composição",
          "Cor"
        ],
        "likes": 423,
        "featured": false
      },
      {
        "id": "an-p5",
        "title": "Trabalho de Textura",
        "description": "Exploração de texturas",
        "cover": "/teachers/gallery/atevaldo-novais/297995748_1457447024682731_8863732787159184462_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/297995748_1457447024682731_8863732787159184462_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Textura",
          "Técnica Avançada"
        ],
        "likes": 356,
        "featured": false
      },
      {
        "id": "an-p6",
        "title": "Arte Clássica",
        "description": "Trabalho inspirado em mestres clássicos",
        "cover": "/teachers/gallery/atevaldo-novais/140775067_162287382321737_471289885392651785_n.jpg",
        "images": [
          "/teachers/gallery/atevaldo-novais/140775067_162287382321737_471289885392651785_n.jpg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Clássico",
          "Estudo"
        ],
        "likes": 287,
        "featured": false
      },
      {
        "id": "an-p7",
        "title": "Retrato em Lápis de Cor",
        "description": "Retrato hiper-realista em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/469729921_9105685752815400_6392672319844046872_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/469729921_9105685752815400_6392672319844046872_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Hiper-Realismo",
          "Retrato"
        ],
        "likes": 645,
        "featured": true
      },
      {
        "id": "an-p8",
        "title": "Estudo de Textura",
        "description": "Exploração de texturas em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/479884308_609805748640752_5580650150994755239_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/479884308_609805748640752_5580650150994755239_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Textura",
          "Técnica"
        ],
        "likes": 398,
        "featured": false
      },
      {
        "id": "an-p9",
        "title": "Arte Tradicional",
        "description": "Obra em lápis de cor com detalhamento preciso",
        "cover": "/teachers/gallery/atevaldo-novais/481171923_564727893395182_3996374076960073163_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/481171923_564727893395182_3996374076960073163_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Tradicional",
          "Detalhe"
        ],
        "likes": 334,
        "featured": false
      },
      {
        "id": "an-p10",
        "title": "Composição Realista",
        "description": "Composição detalhada em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/491456621_958077806406075_6542902646079542990_n.jpeg",
        "images": [
          "/teachers/gallery/atevaldo-novais/491456621_958077806406075_6542902646079542990_n.jpeg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Composição",
          "Realismo"
        ],
        "likes": 289,
        "featured": false
      },
      {
        "id": "an-p11",
        "title": "Obra em Lápis de Cor",
        "description": "Trabalho hiper-realista em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/495472889_700327829181574_3053419845401112778_n.jpg",
        "images": [
          "/teachers/gallery/atevaldo-novais/495472889_700327829181574_3053419845401112778_n.jpg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Lápis de Cor",
          "Arte"
        ],
        "likes": 245,
        "featured": false
      },
      {
        "id": "an-p12",
        "title": "Naturalismo em Lápis",
        "description": "Arte naturalista em lápis de cor",
        "cover": "/teachers/gallery/atevaldo-novais/503891513_2110454569365909_1382054274339223101_n.jpg",
        "images": [
          "/teachers/gallery/atevaldo-novais/503891513_2110454569365909_1382054274339223101_n.jpg"
        ],
        "category": "Lápis e Grafite",
        "tags": [
          "Naturalismo",
          "Lápis"
        ],
        "likes": 218,
        "featured": false
      }
    ]
  },
  {
    "id": "vinicius-silva",
    "name": "Vinicius F. Silva",
    "avatar": "/teachers/vinicius-silva.webp",
    "cover": "/teachers/gallery/vinicius-silva/399314630_1053641402342313_3371025377650278616_n.jpg",
    "area": "Pintura em Tela & Concept Art Digital",
    "tagline": "Artista plástico unindo o traço tradicional ao digital",
    "bio": "Artista plástico especializado em pintura em tela, cenários e concept art digital. Desenvolve projetos de arte e ensina técnicas que unem o traço tradicional à expressão contemporânea.",
    "expertise": [
      "Pintura em Tela",
      "Acrílica",
      "Óleo",
      "Concept Art",
      "Cenário Digital",
      "Pintura Digital"
    ],
    "experience": [
      {
        "title": "Artista Plástico",
        "period": "2015 - Atual",
        "current": true
      },
      {
        "title": "Professor",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-04-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/viniciusfsilva2021",
        "username": "@viniciusfsilva2021"
      }
    ],
    "projects": [
      {
        "id": "vs-p1",
        "title": "Pintura em Tela",
        "description": "Obra em acrílica e óleo",
        "cover": "/teachers/gallery/vinicius-silva/399314630_1053641402342313_3371025377650278616_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/399314630_1053641402342313_3371025377650278616_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Tela",
          "Acrílica"
        ],
        "likes": 312,
        "featured": true
      },
      {
        "id": "vs-p2",
        "title": "Paisagem Fantástica",
        "description": "Cenário de fantasia em pintura digital",
        "cover": "/teachers/gallery/vinicius-silva/395085139_1010569136887342_1830673974766726123_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/395085139_1010569136887342_1830673974766726123_n.jpg"
        ],
        "category": "Digital",
        "tags": [
          "Cenário",
          "Fantasia"
        ],
        "likes": 267,
        "featured": true
      },
      {
        "id": "vs-p3",
        "title": "Composição Artística",
        "description": "Estudo de composição e cor",
        "cover": "/teachers/gallery/vinicius-silva/393518151_2135910566748312_5525127560979712196_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/393518151_2135910566748312_5525127560979712196_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Composição",
          "Cor"
        ],
        "likes": 198,
        "featured": false
      },
      {
        "id": "vs-p4",
        "title": "Obra Original",
        "description": "Pintura original em grande formato",
        "cover": "/teachers/gallery/vinicius-silva/387700528_345141931377674_7397153936344188054_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/387700528_345141931377674_7397153936344188054_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Original",
          "Grande Formato"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "vs-p5",
        "title": "Arte Expressiva",
        "description": "Expressão artística contemporânea",
        "cover": "/teachers/gallery/vinicius-silva/386899706_675923194278564_6758471794657158678_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/386899706_675923194278564_6758471794657158678_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Expressionismo",
          "Contemporâneo"
        ],
        "likes": 112,
        "featured": false
      },
      {
        "id": "vs-p6",
        "title": "Estudo de Luz",
        "description": "Exploração de luz e sombra",
        "cover": "/teachers/gallery/vinicius-silva/386347416_284440654435055_6961835701335932727_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/386347416_284440654435055_6961835701335932727_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Luz",
          "Sombra",
          "Estudo"
        ],
        "likes": 98,
        "featured": false
      },
      {
        "id": "vs-p7",
        "title": "Pintura Acrílica — Composição",
        "description": "Pintura em acrílica com composição cuidadosa",
        "cover": "/teachers/gallery/vinicius-silva/408174678_251563931010091_6898443091146698319_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/408174678_251563931010091_6898443091146698319_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Acrílica",
          "Composição"
        ],
        "likes": 196,
        "featured": true
      },
      {
        "id": "vs-p8",
        "title": "Pintura — Cena Figurativa",
        "description": "Obra figurativa com técnica de pintura",
        "cover": "/teachers/gallery/vinicius-silva/419262141_710547524541703_446957694326565968_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/419262141_710547524541703_446957694326565968_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Figurativo",
          "Técnica"
        ],
        "likes": 172,
        "featured": true
      },
      {
        "id": "vs-p9",
        "title": "Pintura — Retrato Expressivo",
        "description": "Retrato com pintura expressiva e cores intensas",
        "cover": "/teachers/gallery/vinicius-silva/450789838_861237139207564_7954787048375153254_n.jpg",
        "images": [
          "/teachers/gallery/vinicius-silva/450789838_861237139207564_7954787048375153254_n.jpg"
        ],
        "category": "Pintura",
        "tags": [
          "Retrato",
          "Expressivo"
        ],
        "likes": 158,
        "featured": false
      }
    ]
  },
  {
    "id": "caio-cesar",
    "name": "Caio César",
    "avatar": "/teachers/caio-cesar.webp",
    "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-1.jpg",
    "area": "Modelagem 3D & Escultura Digital",
    "tagline": "Artista 3D especializado em personagens e escultura digital",
    "bio": "Artista 3D especializado em modelagem e escultura digital. Com experiência em ZBrush e pipelines de games, ensina modelagem 3D com foco em resultados profissionais e portfólio sólido.",
    "expertise": [
      "ZBrush",
      "Modelagem 3D",
      "Escultura Digital",
      "Character Modeling",
      "Game Art",
      "3D Printing"
    ],
    "experience": [
      {
        "title": "Artista 3D",
        "period": "2018 - Atual",
        "current": true
      },
      {
        "title": "Professor",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-05-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/caiocesarsculpts",
        "username": "@caiocesarsculpts"
      }
    ],
    "projects": [
      {
        "id": "cc-p1",
        "title": "Personagem 3D",
        "description": "Escultura digital de personagem",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-1.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-1.jpg"
        ],
        "category": "3D",
        "tags": [
          "ZBrush",
          "Character"
        ],
        "likes": 412,
        "featured": true
      },
      {
        "id": "cc-p2",
        "title": "Portfolio 3D Vol. 2",
        "description": "Trabalho de modelagem avançada",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-2.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-2.jpg"
        ],
        "category": "3D",
        "tags": [
          "Modelagem",
          "Avançado"
        ],
        "likes": 356,
        "featured": true
      },
      {
        "id": "cc-p3",
        "title": "Portfolio 3D Vol. 3",
        "description": "Render profissional",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-3.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-artstation-capas-portfolio-3.jpg"
        ],
        "category": "3D",
        "tags": [
          "Render",
          "Profissional"
        ],
        "likes": 298,
        "featured": true
      },
      {
        "id": "cc-p4",
        "title": "Personagem Completo",
        "description": "Escultura e texturização completa",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-capa.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-capa.jpg"
        ],
        "category": "3D",
        "tags": [
          "Textura",
          "Completo"
        ],
        "likes": 234,
        "featured": false
      },
      {
        "id": "cc-p5",
        "title": "Coragem — Render Final",
        "description": "Projeto pessoal renderizado",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-coragem-renderizado.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-coragem-renderizado.jpg"
        ],
        "category": "3D",
        "tags": [
          "Render",
          "Pessoal"
        ],
        "likes": 198,
        "featured": false
      },
      {
        "id": "cc-p6",
        "title": "Allsides View",
        "description": "Turnaround completo de personagem",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-allsides.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-allsides.jpg"
        ],
        "category": "3D",
        "tags": [
          "Turnaround",
          "Character"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "cc-p7",
        "title": "Epic — Render 3D",
        "description": "Personagem épico renderizado em 3D com iluminação dramática",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-epicthumb.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-epicthumb.jpg"
        ],
        "category": "3D",
        "tags": [
          "Épico",
          "Render"
        ],
        "likes": 312,
        "featured": true
      },
      {
        "id": "cc-p8",
        "title": "Escultura de Rosto",
        "description": "Estudo anatômico de rosto em ZBrush",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-face.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-face.jpg"
        ],
        "category": "3D",
        "tags": [
          "Anatomia",
          "Rosto"
        ],
        "likes": 267,
        "featured": false
      },
      {
        "id": "cc-p9",
        "title": "Kharn — Personagem 3D",
        "description": "Escultura do personagem Kharn em ZBrush",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-post-kharn-05.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-post-kharn-05.jpg"
        ],
        "category": "3D",
        "tags": [
          "Personagem",
          "ZBrush"
        ],
        "likes": 234,
        "featured": false
      },
      {
        "id": "cc-p10",
        "title": "Taram — Escultura 3D",
        "description": "Escultura digital do personagem Taram",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-taram.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-taram.jpg"
        ],
        "category": "3D Sculpting",
        "tags": [
          "Escultura",
          "Fantasia"
        ],
        "likes": 198,
        "featured": false
      },
      {
        "id": "cc-p11",
        "title": "Render de Personagem",
        "description": "Personagem renderizado com alta qualidade",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb.jpg"
        ],
        "category": "3D",
        "tags": [
          "Render",
          "Personagem"
        ],
        "likes": 167,
        "featured": false
      },
      {
        "id": "cc-p12",
        "title": "Genius Brain",
        "description": "Projeto criativo de escultura conceitual em 3D",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-genius-brain.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-genius-brain.jpg"
        ],
        "category": "3D Art",
        "tags": [
          "Conceito",
          "Criativo"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "cc-p13",
        "title": "Render Thumb 1",
        "description": "Estudo de personagem renderizado em 3D",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb-1.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb-1.jpg"
        ],
        "category": "3D",
        "tags": [
          "Render",
          "Personagem"
        ],
        "likes": 118,
        "featured": false
      },
      {
        "id": "cc-p14",
        "title": "Render Thumb 2",
        "description": "Personagem 3D com texturização completa",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb2.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb2.jpg"
        ],
        "category": "3D",
        "tags": [
          "Textura",
          "Render"
        ],
        "likes": 107,
        "featured": false
      },
      {
        "id": "cc-p15",
        "title": "Render Thumb 3",
        "description": "Composição final de personagem em 3D",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb3.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-thumb3.jpg"
        ],
        "category": "3D",
        "tags": [
          "Composição",
          "Character"
        ],
        "likes": 98,
        "featured": false
      },
      {
        "id": "cc-p16",
        "title": "Zé Carioca — 3D",
        "description": "Releitura em 3D do icônico personagem Zé Carioca",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-zecarioca.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-caio-cesar-zecarioca.jpg"
        ],
        "category": "3D Art",
        "tags": [
          "Personagem",
          "Releitura",
          "Fan Art"
        ],
        "likes": 245,
        "featured": true
      },
      {
        "id": "cc-p17",
        "title": "Jerry Lightyear",
        "description": "Fusão criativa entre Jerry e Buzz Lightyear em 3D",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-jerrylightyear.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-jerrylightyear.jpg"
        ],
        "category": "3D Art",
        "tags": [
          "Fan Art",
          "Criativo",
          "Personagem"
        ],
        "likes": 302,
        "featured": true
      },
      {
        "id": "cc-p18",
        "title": "No Texture — Close 2",
        "description": "Estudo de escultura sem textura com foco em anatomia",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-notextureclose2.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-notextureclose2.jpg"
        ],
        "category": "3D Sculpting",
        "tags": [
          "Anatomia",
          "Escultura",
          "ZBrush"
        ],
        "likes": 172,
        "featured": false
      },
      {
        "id": "cc-p19",
        "title": "Pistoleros",
        "description": "Personagens estilo western esculpidos em 3D",
        "cover": "/teachers/gallery/caio-cesar/caio-cesar-pistoleros-1.jpg",
        "images": [
          "/teachers/gallery/caio-cesar/caio-cesar-pistoleros-1.jpg"
        ],
        "category": "3D Art",
        "tags": [
          "Western",
          "Personagens",
          "Conceito"
        ],
        "likes": 208,
        "featured": false
      }
    ]
  },
  {
    "id": "ricardo-rios",
    "name": "Ricardo Rios",
    "avatar": "/teachers/ricardo-rios.webp",
    "cover": "/teachers/gallery/ricardo-rios/584890279_17900827530322901_4864771719961194519_n.webp",
    "area": "Cartoon & Personagens Animados",
    "tagline": "Ilustrador cartoon criando personagens com alma e personalidade",
    "bio": "Ilustrador e cartunista especializado no estilo cartoon e personagens animados. Cria conteúdo visual com traço expressivo e dinâmico, e ensina com método direto e criativo.",
    "expertise": [
      "Cartoon",
      "Personagens",
      "Ilustração",
      "Animação 2D",
      "Design de Personagem",
      "Expressão"
    ],
    "experience": [
      {
        "title": "Ilustrador & Cartunista",
        "period": "2017 - Atual",
        "current": true
      },
      {
        "title": "Professor",
        "company": "Comunidade da Arte",
        "period": "2023 - Atual",
        "current": true
      }
    ],
    "location": "Brasil",
    "memberSince": "2023-06-01",
    "social": [
      {
        "platform": "instagram",
        "url": "https://www.instagram.com/ricardoaarios",
        "username": "@ricardoaarios"
      }
    ],
    "projects": [
      {
        "id": "rr-p1",
        "title": "Personagem Cartoon",
        "description": "Personagem original no estilo cartoon",
        "cover": "/teachers/gallery/ricardo-rios/584890279_17900827530322901_4864771719961194519_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/584890279_17900827530322901_4864771719961194519_n.webp"
        ],
        "category": "Cartoon",
        "tags": [
          "Cartoon",
          "Personagem"
        ],
        "likes": 412,
        "featured": true
      },
      {
        "id": "rr-p2",
        "title": "Animação de Personagem",
        "description": "Ciclo de animação em cartoon",
        "cover": "/teachers/gallery/ricardo-rios/571818034_837532488764949_2020791379613324314_n.jpg",
        "images": [
          "/teachers/gallery/ricardo-rios/571818034_837532488764949_2020791379613324314_n.jpg"
        ],
        "category": "Animação",
        "tags": [
          "Animação",
          "Ciclo"
        ],
        "likes": 356,
        "featured": true
      },
      {
        "id": "rr-p3",
        "title": "Expressões Exageradas",
        "description": "Folha de expressões de personagem cartoon",
        "cover": "/teachers/gallery/ricardo-rios/486449535_17871724503322901_6714380489764954629_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/486449535_17871724503322901_6714380489764954629_n.webp"
        ],
        "category": "Expressão",
        "tags": [
          "Expressões",
          "Exagerado"
        ],
        "likes": 298,
        "featured": true
      },
      {
        "id": "rr-p4",
        "title": "Silhueta Marcante",
        "description": "Design de silhueta para personagem",
        "cover": "/teachers/gallery/ricardo-rios/484284568_17870700084322901_2007809601655602074_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/484284568_17870700084322901_2007809601655602074_n.webp"
        ],
        "category": "Character Design",
        "tags": [
          "Silhueta",
          "Design"
        ],
        "likes": 223,
        "featured": false
      },
      {
        "id": "rr-p5",
        "title": "Cartoon Colorido",
        "description": "Colorização vibrante no estilo cartoon",
        "cover": "/teachers/gallery/ricardo-rios/483690362_17870062014322901_8622926187406405278_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/483690362_17870062014322901_8622926187406405278_n.webp"
        ],
        "category": "Character Design",
        "tags": [
          "Cor",
          "Vibrante"
        ],
        "likes": 178,
        "featured": false
      },
      {
        "id": "rr-p6",
        "title": "Série de Personagens",
        "description": "Elenco de personagens com identidade visual",
        "cover": "/teachers/gallery/ricardo-rios/482113364_17867990898322901_7339972512595414439_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/482113364_17867990898322901_7339972512595414439_n.webp"
        ],
        "category": "Character Design",
        "tags": [
          "Elenco",
          "Identidade Visual"
        ],
        "likes": 145,
        "featured": false
      },
      {
        "id": "rr-p7",
        "title": "Cartoon — Personagem Colorido",
        "description": "Ilustração cartoon com cores vibrantes",
        "cover": "/teachers/gallery/ricardo-rios/590408322_17901651423322901_919977569019190841_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/590408322_17901651423322901_919977569019190841_n.webp"
        ],
        "category": "Cartoon",
        "tags": [
          "Cartoon",
          "Colorido"
        ],
        "likes": 248,
        "featured": true
      },
      {
        "id": "rr-p8",
        "title": "Cartoon — Expressão",
        "description": "Estudo de expressões em estilo cartoon",
        "cover": "/teachers/gallery/ricardo-rios/621549536_17996079455912523_4672616243913964322_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/621549536_17996079455912523_4672616243913964322_n.webp"
        ],
        "category": "Cartoon",
        "tags": [
          "Cartoon",
          "Expressão"
        ],
        "likes": 215,
        "featured": true
      },
      {
        "id": "rr-p9",
        "title": "Character Design Original",
        "description": "Design de personagem original em estilo cartoon",
        "cover": "/teachers/gallery/ricardo-rios/642092356_17912910405322901_3604975517189611436_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/642092356_17912910405322901_3604975517189611436_n.webp"
        ],
        "category": "Character Design",
        "tags": [
          "Character Design",
          "Original"
        ],
        "likes": 193,
        "featured": false
      },
      {
        "id": "rr-p10",
        "title": "Cartoon — Cena Humorística",
        "description": "Ilustração cartoon com humor e personalidade",
        "cover": "/teachers/gallery/ricardo-rios/651877030_18042917738767149_194173255057569708_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/651877030_18042917738767149_194173255057569708_n.webp"
        ],
        "category": "Cartoon",
        "tags": [
          "Cartoon",
          "Humor"
        ],
        "likes": 167,
        "featured": false
      },
      {
        "id": "rr-p11",
        "title": "Personagem — Estudo de Pose",
        "description": "Character design com variações de pose",
        "cover": "/teachers/gallery/ricardo-rios/656221232_17917753959322901_7452605830871640825_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/656221232_17917753959322901_7452605830871640825_n.webp"
        ],
        "category": "Character Design",
        "tags": [
          "Character Design",
          "Pose"
        ],
        "likes": 182,
        "featured": false
      },
      {
        "id": "rr-p12",
        "title": "Cartoon — Personagem Dinâmico",
        "description": "Personagem cartoon com composição dinâmica",
        "cover": "/teachers/gallery/ricardo-rios/692534257_17925764262322901_7206643478771279145_n.webp",
        "images": [
          "/teachers/gallery/ricardo-rios/692534257_17925764262322901_7206643478771279145_n.webp"
        ],
        "category": "Cartoon",
        "tags": [
          "Cartoon",
          "Dinâmico"
        ],
        "likes": 153,
        "featured": false
      }
    ]
  }
];

export function getProfessor(id: string): Professor | undefined {
  return PROFESSORES.find((p) => p.id === id);
}

/** Categorias presentes no portfólio, na ordem de frequência. */
export function categoriasDoPortfolio(p: Professor): string[] {
  const contagem = new Map<string, number>();
  for (const obra of p.projects) contagem.set(obra.category, (contagem.get(obra.category) ?? 0) + 1);
  return [...contagem.entries()].sort((a, b) => b[1] - a[1]).map(([c]) => c);
}
