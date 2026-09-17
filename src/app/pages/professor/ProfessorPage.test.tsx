import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ProfessorPage } from './ProfessorPage';
import { PROFESSORES, getProfessor } from '../piloto/professoresData';
import { getPilotoTeachers } from '../piloto/pilotoData';

const renderAt = (id: string) =>
  renderToStaticMarkup(
    <MemoryRouter initialEntries={[`/professor/${id}`]}>
      <Routes>
        <Route path="/professor/:id" element={<ProfessorPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe('ProfessorPage', () => {
  const p = getProfessor('giovanni-fim')!;
  const html = renderAt(p.id);

  it('apresenta o professor: capa, retrato, nome em Daft, área e frase', () => {
    expect(html).toContain('id="professor"');
    expect(html).toContain(`src="${p.cover}"`);
    expect(html).toContain(`src="${p.avatar}"`);
    expect(html).toMatch(/<h1[^>]*class="[^"]*piloto-display/);
    // React escapa '&' como '&amp;' no HTML estático
    expect(html).toContain(p.area.replace(/&/g, '&amp;'));
    expect(html).toContain(p.tagline);
  });

  it('conta a história: bio, áreas de domínio, experiência e rede social real', () => {
    expect(html).toContain(p.bio.slice(0, 40));
    for (const e of p.expertise) expect(html).toContain(e);
    for (const x of p.experience) expect(html).toContain(x.title);
    expect(html).toContain(`href="${p.social[0].url}"`);
  });

  it('mostra o portfólio inteiro, com todas as obras reais e filtro por categoria', () => {
    for (const o of p.projects) expect(html).toContain(`src="${o.cover}"`);
    expect(html).toContain(`${p.projects.length} obras`);
    expect(html).toMatch(/<button[^>]*aria-pressed="true"[^>]*>Tudo<\/button>/);
  });

  it('cada obra é um botão que abre em tela cheia (lightbox), não um link morto', () => {
    // slice, não split: 'piloto-portfolio__masonry' repete o prefixo antes dos botões
    const portfolio = html.slice(html.indexOf('piloto-portfolio'));
    expect(portfolio).toMatch(/<button[^>]*aria-label="Ver [^"]+"/);
    expect(portfolio).not.toMatch(/href="\/projeto\//);
  });

  it('traz os números do professor da home (cursos e alunos)', () => {
    const t = getPilotoTeachers().find((x) => x.id === p.id)!;
    expect(html).toContain(t.students);
  });

  it('sugere os outros professores, sem o próprio', () => {
    const outros = html.slice(html.indexOf('piloto-professor__outros'));
    for (const o of PROFESSORES.filter((x) => x.id !== p.id)) expect(outros).toContain(`href="/professor/${o.id}"`);
    expect(outros).not.toContain(`href="/professor/${p.id}"`);
  });

  it('id desconhecido mostra aviso e caminho de volta', () => {
    const vazio = renderAt('ninguem');
    expect(vazio).toContain('piloto-vazio');
    expect(vazio).toContain('href="/#professores"');
  });
});
