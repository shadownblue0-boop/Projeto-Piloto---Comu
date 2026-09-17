import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoSoftwares } from './PilotoSoftwares';
import { PILOTO_SOFTWARES } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoSoftwares', () => {
  it('lista as 6 ferramentas como abas acessíveis, com uma ativa', () => {
    const html = render(<PilotoSoftwares />);
    expect(html).toContain('role="tablist"');
    const abas = html.match(/role="tab"/g) ?? [];
    expect(abas).toHaveLength(PILOTO_SOFTWARES.length);
    expect((html.match(/aria-selected="true"/g) ?? []).length).toBe(1);
    for (const s of PILOTO_SOFTWARES) expect(html).toContain(s.name);
  });

  it('a prévia mostra a trilha real: capa, nível, carga e alunos', () => {
    const html = render(<PilotoSoftwares />);
    const primeira = PILOTO_SOFTWARES[0];
    expect(html).toContain(primeira.cover);
    expect(html).toContain(primeira.courseTitle);
    expect(html).toContain(primeira.level);
    expect(html).toContain(`${primeira.hours}h`);
    expect(html).toContain(primeira.students.toLocaleString('pt-BR'));
    for (const t of primeira.topics) expect(html).toContain(t);
  });

  it('a prévia leva para a trilha correspondente', () => {
    const html = render(<PilotoSoftwares />);
    expect(html).toContain(`href="/student/courses/${PILOTO_SOFTWARES[0].courseId}"`);
  });

  it('usa o ícone real de cada aplicativo, não uma sigla desenhada', () => {
    const html = render(<PilotoSoftwares />);
    for (const s of PILOTO_SOFTWARES) {
      expect(s.icon).toMatch(/^\/brand\/apps\/[a-z-]+\.png$/);
      expect(html).toContain(`src="${s.icon}"`);
    }
    // o ícone é decorativo: o nome do software está do lado
    expect(html).toMatch(/<img[^>]*src="\/brand\/apps\/[^"]+"[^>]*alt=""/);
  });
});
