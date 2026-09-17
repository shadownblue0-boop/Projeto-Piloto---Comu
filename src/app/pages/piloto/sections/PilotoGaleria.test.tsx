import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoGaleria } from './PilotoGaleria';
import { THEMATIC_CATEGORIES } from '../../../data/explorerData';
import { getPilotoGallery } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoGaleria (v4)', () => {
  it('a parede sai da caixa de 1200px: o masonry é full-bleed', () => {
    const html = render(<PilotoGaleria />);
    expect(html).toContain('piloto-galeria__wall');
    // o cabeçalho continua alinhado ao wrap da página
    expect(html).toContain('piloto-wrap');
  });

  it('mostra um primeiro lote e oferece carregar mais, sem link para a própria página', () => {
    const html = render(<PilotoGaleria />);
    const itens = (html.match(/piloto-galeria__item/g) ?? []).length;
    expect(itens).toBeGreaterThanOrEqual(24);
    expect(itens).toBeLessThan(48);
    expect(html).toContain('Ver mais');
    expect(html).not.toContain('href="/#galeria"');
  });

  it('as imagens usam a proporção real da obra (masonry de verdade)', () => {
    const html = render(<PilotoGaleria />);
    // as obras são servidas com 800 de largura; a altura varia por obra
    const alturas = [...html.matchAll(/width="800" height="(\d+)"/g)].map((m) => m[1]);
    expect(alturas.length).toBeGreaterThanOrEqual(24);
    expect(new Set(alturas).size).toBeGreaterThan(1);
  });
});

describe('PilotoGaleria', () => {
  const html = render(<PilotoGaleria />);

  it('o primeiro lote traz imagem local, link de projeto e crédito do artista', () => {
    const items = getPilotoGallery();
    expect(items.length).toBeGreaterThanOrEqual(12);
    // a parede carrega por lotes; o primeiro tem que estar íntegro
    for (const item of items.slice(0, 24)) {
      expect(html).toContain(`src="${item.src}"`);
      expect(html).toContain(`href="${item.href}"`);
      expect(html).toContain(item.artist);
    }
    expect(html).not.toContain('src="http');
  });

  it('tem um chip "Tudo" ativo e um chip por categoria temática, com estado acessível', () => {
    expect(html).toMatch(/<button[^>]*aria-pressed="true"[^>]*>Tudo<\/button>/);
    for (const cat of THEMATIC_CATEGORIES) {
      // React escapa "&" como "&amp;" no HTML estático
      const label = cat.label.replace(/&/g, '&amp;');
      expect(html).toMatch(new RegExp(`<button[^>]*aria-pressed="false"[^>]*>${label}</button>`));
    }
  });

  it('o rodapé conta quantas obras estão à mostra e não aponta para a própria página', () => {
    expect(html).toMatch(/Mostrando \d+ de \d+ obras/);
    expect(html).not.toContain('href="/#galeria"');
  });
});
