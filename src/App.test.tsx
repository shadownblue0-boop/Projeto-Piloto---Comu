import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

function renderAt(path: string) {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App (site independente do piloto)', () => {
  it('renderiza o piloto na raiz', () => {
    expect(renderAt('/')).toContain('id="piloto"');
  });

  it('qualquer caminho desconhecido cai na home (links do app real não quebram)', () => {
    expect(renderAt('/student/courses/personagem-rpg')).toContain('id="hero"');
  });

  it('/artefatos abre a página de artefatos', () => {
    const html = renderAt('/artefatos');
    expect(html).toContain('id="artefatos"');
    expect(html).not.toContain('id="hero"');
  });

  it('/artefatos/:slug abre o detalhe de um artefato real', () => {
    const html = renderAt('/artefatos/personagens-3d-para-treinamento');
    expect(html).toContain('id="artefato"');
    expect(html).toContain('Personagens 3D para treinamento');
  });

  it('/professor/:id abre o perfil com portfólio; a rota antiga do app também', () => {
    expect(renderAt('/professor/giovanni-fim')).toContain('id="professor"');
    expect(renderAt('/mentoria/mentor/giovanni-fim')).toContain('id="professor"');
  });

  it('id desconhecido de professor ou artefato mostra um aviso, não uma tela vazia', () => {
    expect(renderAt('/professor/ninguem')).toContain('piloto-vazio');
    expect(renderAt('/artefatos/nada')).toContain('piloto-vazio');
  });
});
