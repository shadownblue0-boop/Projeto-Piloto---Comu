import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoComunidade } from './PilotoComunidade';
import { PILOTO_STATS } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoComunidade (v4)', () => {
  it('a "galeria viva" é literal: duas colunas de obras reais em movimento', () => {
    const html = render(<PilotoComunidade />);
    expect(html).toContain('piloto-mural');
    const colunas = html.match(/piloto-mural__coluna/g) ?? [];
    expect(colunas.length).toBeGreaterThanOrEqual(2);
    // as obras vêm da galeria, com link de projeto
    expect(html).toMatch(/href="\/projeto\//);
    expect(html).not.toContain('/images/GRID/');
  });

  it('a lista é duplicada para o rolamento não ter emenda, mas sem duplicar para leitores de tela', () => {
    const html = render(<PilotoComunidade />);
    const marcas = html.match(/aria-hidden="true"/g) ?? [];
    expect(marcas.length).toBeGreaterThanOrEqual(1);
  });
});

describe('PilotoComunidade', () => {
  it('renderiza os números da comunidade e o link para desafios', () => {
    const html = render(<PilotoComunidade />);
    expect(html).toContain('href="/desafios"');
    for (const s of PILOTO_STATS) {
      expect(html).toContain(s.label);
    }
  });
});
