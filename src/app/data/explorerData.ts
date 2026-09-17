// Categorias temáticas usadas pelos filtros da galeria do piloto.
// Snapshot das subcategorias ativas do catálogo da Comunidade da Arte
// (CDA-GERAL, src/app/data/explorerData.ts) em 2026-09-11.
export interface ThematicCategory {
  id: string;
  label: string;
  image: string;
  gradient: string;
}

export const THEMATIC_CATEGORIES: ThematicCategory[] = [
  { id: 'ilustracao-digital', label: 'Ilustração Digital', image: '/images/categorys/ilustracao-digital.jpg', gradient: 'from-pink-900/80' },
  { id: 'concept-art', label: 'Concept Art', image: '/images/categorys/concept-art.jpeg', gradient: 'from-purple-900/80' },
  { id: 'character-design', label: 'Character Design', image: '/images/categorys/character-design.jpg', gradient: 'from-rose-900/80' },
  { id: '3d-modeling', label: '3D Modeling', image: '/images/categorys/3d-modeling.jpg', gradient: 'from-emerald-900/80' },
  { id: 'lapis-e-grafite', label: 'Lápis & Grafite', image: '/images/categorys/lapis-e-grafite.jpeg', gradient: 'from-orange-900/80' },
  { id: 'oleo-e-acrilica', label: 'Óleo & Acrílica', image: '/images/categorys/oleo-e-acrilica.jpg', gradient: 'from-amber-900/80' },
];
