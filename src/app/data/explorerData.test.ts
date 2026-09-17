import { describe, expect, it } from 'vitest';
import { THEMATIC_CATEGORIES } from './explorerData';

describe('THEMATIC_CATEGORIES (snapshot do catálogo)', () => {
  it('expõe as 6 categorias temáticas que a galeria do piloto filtra', () => {
    expect(THEMATIC_CATEGORIES.map((c) => c.id)).toEqual([
      'ilustracao-digital',
      'concept-art',
      'character-design',
      '3d-modeling',
      'lapis-e-grafite',
      'oleo-e-acrilica',
    ]);
  });

  it('cada categoria tem rótulo legível e não repete id', () => {
    const ids = THEMATIC_CATEGORIES.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const c of THEMATIC_CATEGORIES) expect(c.label.length).toBeGreaterThan(0);
  });
});
