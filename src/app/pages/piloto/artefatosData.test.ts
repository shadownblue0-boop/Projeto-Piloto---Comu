import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ARTEFATO_TIPOS, filtrarArtefatos, getArtefato, getArtefatos } from './artefatosData';

const PUBLIC = join(process.cwd(), 'public');

describe('artefatosData', () => {
  it('tem ebooks, playbooks, packs e brushes, cada um com capa real no projeto', () => {
    const itens = getArtefatos();
    expect(itens.length).toBeGreaterThanOrEqual(20);
    for (const tipo of ARTEFATO_TIPOS) {
      expect(itens.some((a) => a.type === tipo.id), tipo.id).toBe(true);
    }
    for (const a of itens) {
      expect(a.cover.startsWith('/'), a.slug).toBe(true);
      expect(existsSync(join(PUBLIC, a.cover)), `capa ausente: ${a.cover}`).toBe(true);
    }
  });

  it('slugs são únicos e resolvem pelo getter', () => {
    const itens = getArtefatos();
    expect(new Set(itens.map((a) => a.slug)).size).toBe(itens.length);
    expect(getArtefato(itens[0].slug)?.id).toBe(itens[0].id);
    expect(getArtefato('nao-existe')).toBeUndefined();
  });

  it('filtrar por tipo devolve só aquele tipo; null devolve tudo', () => {
    const itens = getArtefatos();
    expect(filtrarArtefatos(itens, null)).toEqual(itens);
    const ebooks = filtrarArtefatos(itens, 'ebook');
    expect(ebooks.length).toBeGreaterThan(0);
    expect(ebooks.every((a) => a.type === 'ebook')).toBe(true);
  });

  it('todo artefato diz o que ensina e para quem é', () => {
    for (const a of getArtefatos()) {
      expect(a.topics.length, a.slug).toBeGreaterThanOrEqual(3);
      expect(a.forWhom.length, a.slug).toBeGreaterThan(10);
      expect(a.description.length, a.slug).toBeGreaterThan(40);
    }
  });
});
