import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoProfessores } from './PilotoProfessores';
import { getPilotoTeachers } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoProfessores', () => {
  it('cada card traz a arte real do professor, não só o retrato', () => {
    const html = render(<PilotoProfessores />);
    for (const t of getPilotoTeachers()) {
      expect(t.works.length).toBeGreaterThanOrEqual(4);
      for (const w of t.works) expect(html).toContain(`src="${w.src}"`);
    }
    expect(html).toContain('piloto-prof__obras');
  });

  it('o mosaico de obras é decorativo: quem lê tela ouve o professor, não 24 imagens', () => {
    const html = render(<PilotoProfessores />);
    const mosaico = html.split('piloto-prof__obras')[1] ?? '';
    expect(mosaico).toContain('aria-hidden="true"');
  });

  it('mostra foto, nome e link de cada professor', () => {
    const html = render(<PilotoProfessores />);
    for (const t of getPilotoTeachers()) {
      expect(html).toContain(`src="${t.photo}"`);
      expect(html).toContain(t.name);
      expect(html).toContain(`href="${t.href}"`);
    }
  });
});
