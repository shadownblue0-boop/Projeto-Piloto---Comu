import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoPage } from './PilotoPage';
import { PILOTO_SECTIONS } from './pilotoData';

const html = renderToStaticMarkup(
  <MemoryRouter initialEntries={['/piloto']}>
    <PilotoPage />
  </MemoryRouter>,
);

describe('PilotoPage', () => {
  it('renderiza as seções na ordem definida em PILOTO_SECTIONS', () => {
    const positions = PILOTO_SECTIONS.map((s) => html.indexOf(`<section id="${s.id}"`));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it('usa a fonte Daft nos títulos via classe utilitária do piloto', () => {
    expect(html).toMatch(/<h1[^>]*class="[^"]*piloto-display/);
    expect((html.match(/<h2[^>]*class="[^"]*piloto-display/g) ?? []).length).toBeGreaterThanOrEqual(5);
  });

  it('tem header e footer próprios e um único main', () => {
    expect(html).toContain('class="piloto-header"');
    expect(html).toContain('class="piloto-footer"');
    expect((html.match(/<main/g) ?? []).length).toBe(1);
  });

  it('não vaza estilos: a raiz é .piloto', () => {
    expect(html.startsWith('<div id="piloto" class="piloto">')).toBe(true);
  });

  it('sem brilho roxo de fundo: o fundo é feito de superfícies, não de luz colorida', () => {
    expect(html).not.toContain('piloto-ambient');
    // nenhuma mancha de tinta roxa gigante espalhada pelas seções
    expect(html).not.toContain('#360470');
    expect(html).not.toContain('#6D11CE');
  });

  it('as seções alternam superfícies em vez de repetir o mesmo fundo', () => {
    const painel = (html.match(/piloto-sup--painel/g) ?? []).length;
    const marcado = (html.match(/piloto-sup--marcado/g) ?? []).length;
    expect(painel).toBeGreaterThanOrEqual(2);
    expect(marcado).toBeGreaterThanOrEqual(1);
  });
});
