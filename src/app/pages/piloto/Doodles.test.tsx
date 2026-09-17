import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Doodles from './Doodles';

const { Doodle, ...svgDoodles } = Doodles;

describe('Doodles', () => {
  it('todo doodle SVG é decorativo (aria-hidden="true")', () => {
    for (const [name, Component] of Object.entries(svgDoodles)) {
      const html = renderToStaticMarkup(<Component />);
      expect(html, name).toContain('<svg');
      expect(html, name).toContain('aria-hidden="true"');
    }
  });

  it('aplica a cor recebida no traço ou preenchimento', () => {
    for (const [name, Component] of Object.entries(svgDoodles)) {
      const html = renderToStaticMarkup(<Component color="#FFF200" />);
      expect(html, name).toMatch(/(fill|stroke)="#FFF200"/);
    }
  });

  it('Doodle posiciona o filho de forma absoluta com a classe do piloto', () => {
    const html = renderToStaticMarkup(
      <Doodle style={{ top: '10%', left: 20, width: 80 }}>
        <Doodles.Star />
      </Doodle>,
    );
    expect(html).toContain('class="piloto-doodle');
    expect(html).toContain('top:10%');
    expect(html).toContain('left:20px');
    expect(html).toContain('aria-hidden="true"');
  });
});
