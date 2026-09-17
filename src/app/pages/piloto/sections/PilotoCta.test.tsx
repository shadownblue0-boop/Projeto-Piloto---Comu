import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoCta } from './PilotoCta';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoCta', () => {
  it('leva para os cursos e mostra o mascote', () => {
    const html = render(<PilotoCta />);
    expect(html).toContain('href="/cursos"');
    expect(html).toContain('/piloto/mascote-');
  });
});
