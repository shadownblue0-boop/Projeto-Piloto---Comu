import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoCursos } from './PilotoCursos';
import { getPilotoCourses } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoCursos', () => {
  it('mostra os cursos com capa, professor e link do catálogo', () => {
    const html = render(<PilotoCursos />);
    for (const c of getPilotoCourses()) {
      expect(html).toContain(`href="${c.href}"`);
      expect(html).toContain(`src="${c.cover}"`);
      expect(html).toContain(c.instructor);
    }
  });

  it('o primeiro curso vem em destaque, com subtítulo e nível à mostra', () => {
    const html = render(<PilotoCursos />);
    const primeiro = getPilotoCourses()[0];
    expect(html).toContain('piloto-curso--destaque');
    expect(html).toContain(primeiro.subtitle);
    expect(html).toContain(primeiro.level);
  });

  it('as categorias filtram de verdade: são botões com estado, não enfeite', () => {
    const html = render(<PilotoCursos />);
    const botoes = html.match(/piloto-chip/g) ?? [];
    expect(botoes.length).toBeGreaterThanOrEqual(4);
    expect(html).toMatch(/<button[^>]*aria-pressed="true"[^>]*>Tudo<\/button>/);
    expect(html).not.toMatch(/piloto-tag">\s*Concept Art\s*<\/span>\s*<span class="piloto-tag"/);
  });

  it('cada categoria oferecida existe no catálogo mostrado', () => {
    const html = render(<PilotoCursos />);
    const categorias = new Set(getPilotoCourses().map((c) => c.category));
    for (const cat of categorias) expect(html).toContain(cat);
  });
});
