import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ArtefatosPage } from './ArtefatosPage';
import { ARTEFATO_TIPOS, getArtefatos } from '../piloto/artefatosData';

const html = renderToStaticMarkup(
  <MemoryRouter initialEntries={['/artefatos']}>
    <ArtefatosPage />
  </MemoryRouter>,
);

describe('ArtefatosPage', () => {
  it('abre com título em Daft e o total real de artefatos', () => {
    expect(html).toContain('id="artefatos"');
    expect(html).toMatch(/<h1[^>]*class="[^"]*piloto-display/);
    expect(html).toContain(`${getArtefatos().length} artefatos`);
  });

  it('lista todo artefato com capa real, tipo e link para o detalhe', () => {
    for (const a of getArtefatos()) {
      expect(html).toContain(`src="${a.cover}"`);
      expect(html).toContain(`href="/artefatos/${a.slug}"`);
    }
  });

  it('tem um filtro por tipo (Tudo + um chip por tipo) com estado acessível', () => {
    expect(html).toMatch(/<button[^>]*aria-pressed="true"[^>]*>Tudo<\/button>/);
    for (const t of ARTEFATO_TIPOS) {
      expect(html).toMatch(new RegExp(`<button[^>]*aria-pressed="false"[^>]*>${t.plural}</button>`));
    }
  });

  it('sem filtro, agrupa por tipo com um título por grupo', () => {
    for (const t of ARTEFATO_TIPOS) expect(html).toContain(`id="artefatos-${t.id}"`);
  });

  it('a página é interna: header com âncoras para a home e rodapé', () => {
    expect(html).toContain('href="/#galeria"');
    expect(html).toContain('class="piloto-footer"');
  });
});
