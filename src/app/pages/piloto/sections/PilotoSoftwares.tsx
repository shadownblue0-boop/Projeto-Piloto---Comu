import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PILOTO_SOFTWARES } from '../pilotoData';
import { ArrowRight, Check } from '../Doodles';
import { Reveal, SectionHead } from './shared';

const INTERVALO = 5200;

/**
 * Softwares — vitrine das trilhas "Boas Vindas".
 *
 * A versão anterior era só uma fileira de siglas: seiscentos pixels de faixa
 * para nenhuma informação. Agora as ferramentas são abas e a prévia à direita
 * mostra a trilha de verdade (capa, nível, carga, alunos, o que se aprende).
 *
 * A seção também se apresenta sozinha: enquanto ninguém interage, ela avança
 * de aba em aba com uma barra de progresso — e para no primeiro hover, foco ou
 * clique, porque a partir daí quem manda é a pessoa.
 */
export function PilotoSoftwares() {
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [assumido, setAssumido] = useState(false);
  const abasRef = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (pausado || assumido) return;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduz) return;
    const t = window.setInterval(() => setAtivo((i) => (i + 1) % PILOTO_SOFTWARES.length), INTERVALO);
    return () => window.clearInterval(t);
  }, [pausado, assumido]);

  const escolher = (i: number) => {
    setAtivo(i);
    setAssumido(true);
  };

  // setas do teclado navegam entre as abas, como manda o padrão de tablist
  const teclado = (e: React.KeyboardEvent, i: number) => {
    const ultimo = PILOTO_SOFTWARES.length - 1;
    const destino =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? (i === ultimo ? 0 : i + 1)
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? (i === 0 ? ultimo : i - 1)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? ultimo
      : -1;
    if (destino < 0) return;
    e.preventDefault();
    escolher(destino);
    abasRef.current[destino]?.focus();
  };

  const s = PILOTO_SOFTWARES[ativo];

  return (
    <section id="softwares" className="piloto-section piloto-softwares piloto-sup--painel">
      <div className="piloto-softwares__pattern" aria-hidden="true" />

      <div className="piloto-wrap" style={{ position: 'relative', zIndex: 1 }}>
        <SectionHead
          eyebrow="Softwares"
          title={
            <>
              Domine a ferramenta
              <br />
              antes da técnica
            </>
          }
          lead="Trilhas Boas Vindas: do zero à interface dominada, para você não travar no software e focar na arte."
          action={
            <Link to="/cursos" className="piloto-btn piloto-btn--ghost">
              Todas as trilhas
              <ArrowRight />
            </Link>
          }
        />

        <Reveal className="piloto-softwares__grid" variant="scale">
          <div
            className="piloto-softwares__abas"
            role="tablist"
            aria-label="Ferramentas com trilha Boas Vindas"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
            onFocus={() => setPausado(true)}
            onBlur={() => setPausado(false)}
          >
            {PILOTO_SOFTWARES.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => {
                  abasRef.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`piloto-aba-${item.id}`}
                aria-selected={ativo === i}
                aria-controls="piloto-trilha"
                tabIndex={ativo === i ? 0 : -1}
                className="piloto-soft-aba"
                style={{ ['--soft' as string]: item.color }}
                onClick={() => escolher(i)}
                onKeyDown={(e) => teclado(e, i)}
              >
                <img
                  className="piloto-soft-aba__icon"
                  src={item.icon}
                  alt=""
                  width={52}
                  height={52}
                  loading="lazy"
                />
                <span className="piloto-soft-aba__texto">
                  <strong>{item.name}</strong>
                  <em>{item.tagline}</em>
                </span>
                {ativo === i && !assumido && !pausado ? (
                  <span className="piloto-soft-aba__progresso" aria-hidden="true" key={ativo} />
                ) : null}
              </button>
            ))}
          </div>

          <div
            className="piloto-card piloto-trilha"
            id="piloto-trilha"
            role="tabpanel"
            aria-labelledby={`piloto-aba-${s.id}`}
            style={{ ['--soft' as string]: s.color }}
            key={s.id}
          >
            <div className="piloto-trilha__capa">
              <img src={s.cover} alt={`Capa da trilha ${s.courseTitle}`} width={600} height={900} loading="lazy" />
            </div>

            <div className="piloto-trilha__corpo">
              <span className="piloto-tag piloto-trilha__marca">Trilha Boas Vindas</span>
              <h3 className="piloto-trilha__titulo">{s.courseTitle}</h3>
              <p className="piloto-trilha__sub">{s.courseSubtitle}</p>

              <dl className="piloto-trilha__fatos">
                <div>
                  <dt>Nível</dt>
                  <dd>{s.level}</dd>
                </div>
                <div>
                  <dt>Duração</dt>
                  <dd>{s.hours}h</dd>
                </div>
                <div>
                  <dt>Alunos</dt>
                  <dd>{s.students.toLocaleString('pt-BR')}</dd>
                </div>
              </dl>

              <ul className="piloto-trilha__topicos">
                {s.topics.map((t) => (
                  <li key={t}>
                    <Check color="#FFF200" />
                    {t}
                  </li>
                ))}
              </ul>

              <Link to={`/student/courses/${s.courseId}`} className="piloto-btn">
                Começar trilha
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
