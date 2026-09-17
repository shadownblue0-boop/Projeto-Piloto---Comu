import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ArtefatoPage } from './ArtefatoPage';
import { getArtefato } from '../piloto/artefatosData';

const renderAt = (slug: string) =>
  renderToStaticMarkup(
    <MemoryRouter initialEntries={[`/artefatos/${slug}`]}>
      <Routes>
        <Route path="/artefatos/:slug" element={<ArtefatoPage />} />
      </Routes>
    </MemoryRouter>,
  );

describe('ArtefatoPage (detalhe)', () => {
  const a = getArtefato('personagens-3d-para-treinamento')!;
  const html = renderAt(a.slug);

  it('mostra capa, título, subtítulo e descrição do artefato', () => {
    expect(html).toContain('id="artefato"');
    expect(html).toContain(`src="${a.cover}"`);
    expect(html).toMatch(/<h1[^>]*class="[^"]*piloto-display/);
    expect(html).toContain(a.subtitle);
    expect(html).toContain(a.description.slice(0, 40));
  });

  it('diz o que tem dentro, para quem é, nível e categoria', () => {
    for (const t of a.topics) expect(html).toContain(t);
    expect(html).toContain(a.forWhom);
    expect(html).toContain(a.level);
    expect(html).toContain(a.category);
  });

  it('tem caminho de volta e ação principal', () => {
    expect(html).toContain('href="/artefatos"');
    expect(html).toMatch(/piloto-btn[^>]*>[^<]*(Baixar|Entrar|Quero)/);
  });

  it('sugere outros artefatos do mesmo tipo, sem repetir o atual', () => {
    const relacionados = html.split('artefato-relacionados')[1] ?? '';
    expect(relacionados).toMatch(/href="\/artefatos\//);
    expect(relacionados).not.toContain(`href="/artefatos/${a.slug}"`);
  });

  it('um ebook mostra as páginas; um pack não inventa esse dado', () => {
    const ebook = getArtefato('retratos-e-rostos') ?? getArtefato('repertorio-da-vinci');
    if (ebook) expect(renderAt(ebook.slug)).toContain(`${ebook.pages} páginas`);
    expect(html).not.toContain('null páginas');
  });

  it('slug desconhecido mostra aviso com caminho de volta', () => {
    const vazio = renderAt('nao-existe');
    expect(vazio).toContain('piloto-vazio');
    expect(vazio).toContain('href="/artefatos"');
  });
});
