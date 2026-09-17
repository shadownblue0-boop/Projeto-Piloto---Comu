import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { PROFESSORES, categoriasDoPortfolio, getProfessor } from './professoresData';
import { getPilotoTeachers } from './pilotoData';

const PUBLIC = join(process.cwd(), 'public');

describe('professoresData', () => {
  it('cobre exatamente os professores em destaque na home', () => {
    const ids = getPilotoTeachers().map((t) => t.id).sort();
    expect(PROFESSORES.map((p) => p.id).sort()).toEqual(ids);
  });

  it('cada perfil tem bio, áreas, experiência, rede social e portfólio com imagens locais', () => {
    for (const p of PROFESSORES) {
      expect(p.bio.length, p.id).toBeGreaterThan(80);
      expect(p.expertise.length, p.id).toBeGreaterThanOrEqual(3);
      expect(p.experience.length, p.id).toBeGreaterThanOrEqual(1);
      expect(p.social.length, p.id).toBeGreaterThanOrEqual(1);
      expect(p.projects.length, p.id).toBeGreaterThanOrEqual(9);
      for (const img of [p.avatar, p.cover, ...p.projects.map((o) => o.cover)]) {
        expect(existsSync(join(PUBLIC, img)), `imagem ausente: ${img}`).toBe(true);
      }
    }
  });

  it('getProfessor resolve por id e devolve undefined para desconhecido', () => {
    expect(getProfessor('giovanni-fim')?.name).toBe('Giovanni Fim');
    expect(getProfessor('ninguem')).toBeUndefined();
  });

  it('categoriasDoPortfolio vem ordenada da mais frequente para a menos', () => {
    const p = getProfessor('giovanni-fim')!;
    const cats = categoriasDoPortfolio(p);
    expect(cats.length).toBeGreaterThan(1);
    const contar = (c: string) => p.projects.filter((o) => o.category === c).length;
    for (let i = 1; i < cats.length; i++) expect(contar(cats[i - 1])).toBeGreaterThanOrEqual(contar(cats[i]));
  });
});
