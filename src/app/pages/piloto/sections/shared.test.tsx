import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Reveal, SectionHead } from './shared';

describe('shared (piloto)', () => {
  it('Reveal começa oculto (sem is-in) e propaga o delay como variável CSS', () => {
    const html = renderToStaticMarkup(<Reveal delay={240}>x</Reveal>);
    expect(html).toContain('class="piloto-reveal"');
    expect(html).not.toContain('is-in');
    expect(html).toContain('--delay:240ms');
  });

  it('Reveal aceita variantes de entrada (wipe, scale, lado)', () => {
    expect(renderToStaticMarkup(<Reveal variant="wipe">t</Reveal>)).toContain(
      'piloto-reveal piloto-reveal--wipe',
    );
    expect(renderToStaticMarkup(<Reveal variant="scale">t</Reveal>)).toContain('piloto-reveal--scale');
    expect(renderToStaticMarkup(<Reveal variant="left">t</Reveal>)).toContain('piloto-reveal--left');
  });

  it('Reveal com stagger escalona os filhos por variável CSS', () => {
    const html = renderToStaticMarkup(
      <Reveal stagger={90}>
        <span>a</span>
        <span>b</span>
      </Reveal>,
    );
    expect(html).toContain('piloto-stagger');
    expect(html).toContain('--stagger:90ms');
  });

  it('SectionHead renderiza eyebrow, h2 em Daft e lead', () => {
    const html = renderToStaticMarkup(
      <SectionHead eyebrow="Cursos" title="Aprenda" lead="Do zero ao pro" />,
    );
    expect(html).toContain('piloto-eyebrow');
    expect(html).toMatch(/<h2[^>]*class="[^"]*piloto-display/);
    expect(html).toContain('Do zero ao pro');
  });
});
