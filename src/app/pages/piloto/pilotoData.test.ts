import { describe, expect, it } from 'vitest';
import {
  PILOTO_GALLERY_TOTAL,
  PILOTO_HERO_ART,
  PILOTO_SECTIONS,
  PILOTO_SOFTWARES,
  filterGallery,
  getPilotoBenefits,
  getPilotoCourses,
  getPilotoGallery,
  getPilotoTeachers,
} from './pilotoData';

describe('pilotoData', () => {
  it('seleciona 8 cursos publicados com capa local e instrutor', () => {
    const courses = getPilotoCourses();
    expect(courses).toHaveLength(8);
    for (const course of courses) {
      expect(course.cover).toMatch(/^\/covers\//);
      expect(course.instructor.length).toBeGreaterThan(0);
      expect(course.href).toBe(`/student/courses/${course.id}`);
    }
  });

  it('não repete cursos', () => {
    const ids = getPilotoCourses().map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('lista 6 softwares distintos apontando para trilhas "Boas Vindas"', () => {
    expect(PILOTO_SOFTWARES).toHaveLength(6);
    expect(new Set(PILOTO_SOFTWARES.map((s) => s.courseId)).size).toBe(6);
    for (const software of PILOTO_SOFTWARES) {
      expect(software.courseId).toMatch(/^boas-vindas-/);
    }
  });

  it('total da galeria (prova social) é maior que o recorte curado', () => {
    expect(PILOTO_GALLERY_TOTAL).toBeGreaterThan(getPilotoGallery().length);
  });

  it('retorna professores em destaque com foto local', () => {
    const teachers = getPilotoTeachers();
    expect(teachers.length).toBeGreaterThanOrEqual(6);
    for (const teacher of teachers) {
      expect(teacher.photo).toMatch(/^\/teachers\//);
      expect(teacher.role.length).toBeGreaterThan(0);
    }
  });

  it('retorna pelo menos 4 benefícios ativos com parceiro', () => {
    const benefits = getPilotoBenefits();
    expect(benefits.length).toBeGreaterThanOrEqual(4);
    for (const benefit of benefits) {
      expect(benefit.partner.length).toBeGreaterThan(0);
      expect(benefit.highlight.length).toBeGreaterThan(0);
    }
  });

  it('galeria curada: >=12 obras únicas, locais, com artista e link real de projeto', () => {
    const items = getPilotoGallery();
    expect(items.length).toBeGreaterThanOrEqual(12);
    expect(new Set(items.map((i) => i.id)).size).toBe(items.length);
    for (const item of items) {
      expect(item.src).toMatch(/^\/teachers\/gallery\//);
      expect(item.href).toBe(`/projeto/${item.projectId}`);
      expect(item.artist.length).toBeGreaterThan(0);
      expect(item.width).toBeGreaterThan(0);
      expect(item.height).toBeGreaterThan(0);
    }
  });

  it('galeria tem obras suficientes para uma parede cheia (>= 40) sem repetir imagem', () => {
    const items = getPilotoGallery();
    expect(items.length).toBeGreaterThanOrEqual(40);
    expect(new Set(items.map((i) => i.src)).size).toBe(items.length);
  });

  it('galeria mistura artistas: nenhum domina mais de um terço do recorte', () => {
    const items = getPilotoGallery();
    const porArtista = new Map<string, number>();
    for (const i of items) porArtista.set(i.artist, (porArtista.get(i.artist) ?? 0) + 1);
    expect(porArtista.size).toBeGreaterThanOrEqual(6);
    expect(Math.max(...porArtista.values())).toBeLessThanOrEqual(Math.ceil(items.length / 3));
  });

  it('galeria cobre todas as categorias temáticas', () => {
    const items = getPilotoGallery();
    const covered = new Set(items.flatMap((i) => i.categories));
    for (const id of ['ilustracao-digital', 'concept-art', 'character-design', '3d-modeling', 'lapis-e-grafite', 'oleo-e-acrilica']) {
      expect(covered.has(id), id).toBe(true);
    }
  });

  it('filterGallery: null devolve tudo; categoria devolve só as obras dela', () => {
    const items = getPilotoGallery();
    expect(filterGallery(items, null)).toEqual(items);
    const only3d = filterGallery(items, '3d-modeling');
    expect(only3d.length).toBeGreaterThan(0);
    expect(only3d.every((i) => i.categories.includes('3d-modeling'))).toBe(true);
    expect(filterGallery(items, 'categoria-inexistente')).toEqual([]);
  });

  it('hero usa 3 obras reais distintas da galeria, que não se repetem na vitrine', () => {
    expect(PILOTO_HERO_ART).toHaveLength(3);
    const ids = PILOTO_HERO_ART.map((a) => a.projectId);
    expect(new Set(ids).size).toBe(3);
    for (const art of PILOTO_HERO_ART) {
      expect(art.src).toMatch(/^\/teachers\/gallery\//);
      expect(art.href).toBe(`/projeto/${art.projectId}`);
    }
    const galleryIds = new Set(getPilotoGallery().map((i) => i.projectId));
    expect(ids.some((id) => galleryIds.has(id))).toBe(false);
  });

  it('define a ordem das seções do piloto', () => {
    expect(PILOTO_SECTIONS.map((s) => s.id)).toEqual([
      'hero',
      'galeria',
      'video',
      'cursos',
      'softwares',
      'professores',
      'bonus',
      'comunidade',
      'cta',
    ]);
  });
});
