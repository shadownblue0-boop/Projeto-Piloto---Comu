import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CurvyArrow, Doodle, Sparkle } from '../Doodles';
import { Reveal } from './shared';

/**
 * CTA final — o mascote segura uma lanterna, então a lanterna acende.
 *
 * O facho segue o ponteiro sobre a caixa (via variáveis CSS, atualizadas dentro
 * de um requestAnimationFrame para não pesar no scroll). Sem ponteiro — celular,
 * teclado, reduced-motion — ele fica parado onde a lanterna aponta.
 */
export function PilotoCta() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);

  const mover = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = box.getBoundingClientRect();
      box.style.setProperty('--mx', `${((clientX - r.left) / r.width) * 100}%`);
      box.style.setProperty('--my', `${((clientY - r.top) / r.height) * 100}%`);
    });
  }, []);

  const soltar = useCallback(() => {
    cancelAnimationFrame(frame.current);
    boxRef.current?.style.removeProperty('--mx');
    boxRef.current?.style.removeProperty('--my');
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <section id="cta" className="piloto-cta">
      <div className="piloto-wrap">
        <Reveal variant="scale">
          <div
            className="piloto-card piloto-cta__box"
            ref={boxRef}
            onPointerMove={mover}
            onPointerLeave={soltar}
          >
            <Doodle style={{ top: 22, right: '36%', width: 16, color: '#ffffff' }}>
              <Sparkle />
            </Doodle>

            <div className="piloto-cta__copy">
              <span className="piloto-eyebrow">Bora?</span>
              <h2 className="piloto-display piloto-h2 piloto-cta__title">
                <span className="line">Sua arte</span>
                <span className="line line--accent">
                  merece <span className="piloto-mark">companhia.</span>
                </span>
              </h2>
              <p className="piloto-lead">
                Entre na Comunidade da Arte: cursos, professores, desafios e uma galeria de gente que
                também está criando. <strong>Garantia de 7 dias.</strong>
              </p>
              <div className="piloto-hero__ctas">
                <Link to="/cursos" className="piloto-btn">
                  Quero entrar na Comu
                  <ArrowRight />
                </Link>
                <Link to="/professores" className="piloto-btn piloto-btn--ghost">
                  Falar com um professor
                </Link>
              </div>
              <p className="piloto-cta__note">Sem cartão para explorar. Cancele quando quiser.</p>
            </div>

            <div style={{ position: 'relative' }}>
              <Doodle style={{ top: '-6%', left: '-24%', width: 70, color: 'rgba(255,255,255,0.7)', transform: 'rotate(-40deg)' }}>
                <CurvyArrow />
              </Doodle>
              <img
                className="piloto-cta__mascote piloto-float"
                src="/piloto/mascote-gema.png"
                alt="Mascote astronauta segurando uma gema"
                width={1100}
                height={1018}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
