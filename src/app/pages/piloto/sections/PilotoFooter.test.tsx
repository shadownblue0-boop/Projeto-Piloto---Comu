import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoFooter } from './PilotoFooter';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoFooter', () => {
  it('mantém os links legais e sociais reais', () => {
    const html = render(<PilotoFooter />);
    expect(html).toContain('href="/terms"');
    expect(html).toContain('href="/privacy"');
    expect(html).toContain('https://www.instagram.com/comunidadedaarte');
    expect(html).toContain('https://www.youtube.com/@comunidadedaarte');
  });
});
