import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PILOTO_STATS, getPilotoGallery } from '../pilotoData';
import { useInView } from '../../../hooks/useInView';
import { ArrowRight, Ring } from '../Doodles';
import { Reveal, SectionHead } from './shared';

/**
 * Mural vivo: duas colunas de obras reais rolando em sentidos opostos.
 *
 * A seção se chama "galeria viva" e antes mostrava quatro imagens paradas,
 * duas delas genéricas. Agora ela é literalmente uma parede em movimento —
 * pausa quando a pessoa aponta, para dar tempo de olhar e clicar.
 */
function Mural() {
  const obras = getPilotoGallery();
  const colunaA = obras.slice(6, 13);
  const colunaB = obras.slice(20, 27);

  return (
    <div className="piloto-mural">
      {[colunaA, colunaB].map((coluna, ci) => (
        <div className={`piloto-mural__coluna piloto-mural__coluna--${ci === 0 ? 'sobe' : 'desce'}`} key={ci}>
          <div className="piloto-mural__fita">
            {coluna.map((o) => (
              <Link key={o.id} to={o.href} className="piloto-mural__obra" aria-label={`${o.title}, por ${o.artist}`}>
                <img src={o.src} alt="" width={o.width} height={o.height} loading="lazy" />
                <span>{o.artist}</span>
              </Link>
            ))}
            {/* cópia só para o rolamento não ter emenda — invisível para leitores de tela */}
            <span className="piloto-mural__copia" aria-hidden="true">
              {coluna.map((o) => (
                <span key={`${o.id}-copia`} className="piloto-mural__obra">
                  <img src={o.src} alt="" width={o.width} height={o.height} loading="lazy" />
                  <span>{o.artist}</span>
                </span>
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Número que conta de 0 até o valor quando entra na tela. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView(0.4);
  const [n, setN] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setN(value);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, value]);

  return (
    <strong ref={ref as never}>
      {n.toLocaleString('pt-BR')}
      {suffix}
    </strong>
  );
}

/** Comunidade — números animados + grade de imagens da galeria/desafios. */
export function PilotoComunidade() {
  return (
    <section id="comunidade" className="piloto-section">
      <div className="piloto-wrap">
        <div className="piloto-comunidade__grid">
          <div>
            <SectionHead
              eyebrow="Comunidade"
              title={
                <>
                  Ninguém cria{' '}
                  <span className="piloto-underline">
                    sozinho
                    <Ring color="#FFF200" style={{ height: '1.2em', bottom: '-0.15em', left: '-6%', width: '112%' }} />
                  </span>
                </>
              }
              lead="Galeria viva, desafios com curadoria, feed e encontros. A Comu é onde sua arte encontra gente."
            />

            <div className="piloto-stats">
              {PILOTO_STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="piloto-stat">
                    <Counter value={s.value} suffix={s.suffix} />
                    <span>{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={400} style={{ marginTop: 32 }}>
              <Link to="/desafios" className="piloto-btn piloto-btn--ghost">
                Ver os desafios
                <ArrowRight />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={150} variant="right">
            <Mural />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
