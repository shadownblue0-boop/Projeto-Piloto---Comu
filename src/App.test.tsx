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

  it('qualquer outro caminho também cai no piloto (links internos não quebram)', () => {
    expect(renderAt('/student/courses/personagem-rpg')).toContain('id="piloto"');
  });
});
