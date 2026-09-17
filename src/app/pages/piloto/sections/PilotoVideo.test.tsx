import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoVideo } from './PilotoVideo';
import { PILOTO_VIDEOS } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoVideo', () => {
  it('renderiza o facade com poster e botão de play acessível (sem iframe antes do clique)', () => {
    const html = render(<PilotoVideo />);
    expect(html).not.toContain('<iframe');
    expect(html).toMatch(/<button[^>]*aria-label="[^"]*v[ií]deo/i);
    expect(html).toMatch(/<img[^>]*src="\/piloto\/video\//);
  });

  it('o play é um botão de verdade: toca aqui, não manda a pessoa embora', () => {
    const html = render(<PilotoVideo />);
    expect(html).toContain('piloto-video__play');
    // nada de link externo fazendo as vezes de play
    expect(html).not.toMatch(/piloto-video__play"[^>]*href=/);
  });

  it('a faixa oferece as outras aulas reais do canal, com thumb própria', () => {
    const html = render(<PilotoVideo />);
    for (const v of PILOTO_VIDEOS.slice(1)) {
      expect(html).toContain(v.poster);
      expect(html).toContain(v.title);
      expect(html).toContain(v.badge);
    }
    expect(html).toContain('piloto-video__lista');
  });

  it('todo vídeo listado tem id real do YouTube (11 caracteres)', () => {
    for (const v of PILOTO_VIDEOS) {
      expect(v.youtubeId).toMatch(/^[\w-]{11}$/);
    }
  });
});
