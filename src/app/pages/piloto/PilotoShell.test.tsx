import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoShell } from './PilotoShell';

const render = (node: React.ReactElement, path = '/artefatos') =>
  renderToStaticMarkup(<MemoryRouter initialEntries={[path]}>{node}</MemoryRouter>);

describe('PilotoShell (casca das páginas internas)', () => {
  it('envolve o conteúdo com header e rodapé do piloto, na mesma raiz .piloto', () => {
    const html = render(
      <PilotoShell titulo="Artefatos">
        <section id="x">conteúdo</section>
      </PilotoShell>,
    );
    expect(html.startsWith('<div id="piloto" class="piloto">')).toBe(true);
    expect(html).toContain('class="piloto-header');
    expect(html).toContain('class="piloto-footer"');
    expect(html).toContain('<section id="x">conteúdo</section>');
    expect((html.match(/<main/g) ?? []).length).toBe(1);
  });

  it('fora da home, os links de seção do header apontam para a home com âncora', () => {
    const html = render(<PilotoShell titulo="Artefatos">x</PilotoShell>);
    expect(html).toContain('href="/#galeria"');
    expect(html).not.toMatch(/href="#galeria"/);
  });
});
