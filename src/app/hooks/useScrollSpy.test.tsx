import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { useScrollSpy } from './useScrollSpy';

function Probe() {
  const active = useScrollSpy(['galeria', 'cursos']);
  return <nav data-active={active ?? 'nenhum'}>menu</nav>;
}

describe('useScrollSpy', () => {
  it('sem observer (SSR/primeiro render) não marca nenhuma seção', () => {
    expect(renderToStaticMarkup(<Probe />)).toBe('<nav data-active="nenhum">menu</nav>');
  });
});
