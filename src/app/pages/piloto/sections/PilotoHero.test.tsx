import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoHero } from './PilotoHero';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoHero', () => {
  it('compõe a colagem com 3 obras reais linkadas ao projeto, além do mascote', () => {
    const html = render(<PilotoHero />);
    const arts = html.match(/<img[^>]*src="\/teachers\/gallery\/[^"]+"/g) ?? [];
    expect(arts.length).toBeGreaterThanOrEqual(3);
    expect((html.match(/href="\/projeto\//g) ?? []).length).toBeGreaterThanOrEqual(3);
    expect(html).toContain('/piloto/mascote-');
  });

  it('tem prova social flutuante com avatares dos professores', () => {
    const html = render(<PilotoHero />);
    expect(html).toContain('piloto-fcard');
    expect((html.match(/src="\/teachers\/[a-z-]+\.webp"/g) ?? []).length).toBeGreaterThanOrEqual(3);
  });

  it('cada obra vive num slot próprio: o slot flutua, o cartão gira e entra', () => {
    const html = render(<PilotoHero />);
    const slots = html.match(/piloto-hero__slot piloto-hero__slot--(front|back-l|back-r)/g) ?? [];
    expect(slots).toHaveLength(3);
    // a animação de entrada precisa do delay como variável, não hard-coded
    expect((html.match(/--delay:/g) ?? []).length).toBeGreaterThanOrEqual(3);
  });

  it('não acumula elementos: um único card flutuante e nenhum enfeite solto', () => {
    const html = render(<PilotoHero />);
    // conta cartões (a raiz tem o modificador), não os sub-elementos BEM
    expect((html.match(/piloto-fcard--/g) ?? []).length).toBe(1);
    expect(html).not.toContain('Galeria viva');
    expect(html).not.toContain('piloto-doodle');
  });

  it('a headline é pintada linha a linha (wipe), não em bloco', () => {
    const html = render(<PilotoHero />);
    expect((html.match(/class="line[^"]*piloto-wipe-line/g) ?? []).length).toBeGreaterThanOrEqual(3);
  });

  it('tem h1 em Daft, mascote com alt e dois CTAs', () => {
    const html = render(<PilotoHero />);
    expect(html).toMatch(/<h1[^>]*class="[^"]*piloto-display/);
    expect(html).toMatch(/<img[^>]*src="\/piloto\/mascote-[^"]+"[^>]*alt="[^"]+"/);
    expect((html.match(/piloto-btn/g) ?? []).length).toBeGreaterThanOrEqual(2);
    expect(html).toContain('href="/cursos"');
  });
});
