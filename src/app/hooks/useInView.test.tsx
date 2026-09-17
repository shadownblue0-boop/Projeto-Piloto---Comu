import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { useInView } from './useInView';

function Probe() {
  const { ref, inView } = useInView(0.5);
  return <section ref={ref}>{inView ? 'visível' : 'oculto'}</section>;
}

describe('useInView', () => {
  it('começa fora da viewport (inView=false) até o observer disparar', () => {
    expect(renderToStaticMarkup(<Probe />)).toBe('<section>oculto</section>');
  });
});
