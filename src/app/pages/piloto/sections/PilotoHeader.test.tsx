import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoHeader } from './PilotoHeader';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoHeader', () => {
  it('navega para as seções e para a rota real de cursos', () => {
    const html = render(<PilotoHeader />);
    expect(html).toContain('href="#cursos"');
    expect(html).toContain('href="#professores"');
    expect(html).toContain('href="/cursos"');
  });

  it('marca a seção visível com aria-current (scrollspy)', () => {
    const html = render(<PilotoHeader activeSection="cursos" />);
    expect(html).toMatch(/<a[^>]*href="#cursos"[^>]*aria-current="true"/);
    expect(html).not.toMatch(/<a[^>]*href="#galeria"[^>]*aria-current/);
  });

  it('sem seção ativa, nenhum link fica marcado', () => {
    expect(render(<PilotoHeader />)).not.toContain('aria-current');
  });

  it('tem botão de menu acessível para mobile', () => {
    const html = render(<PilotoHeader />);
    expect(html).toMatch(/<button[^>]*aria-expanded="false"/);
    expect(html).toMatch(/<button[^>]*aria-label="/);
  });
});
