import { Link } from 'react-router-dom';
import { PILOTO_HERO_ART, getPilotoTeachers } from '../pilotoData';
import { ArrowRight, BrushUnderline, CurvyArrow, MouseScroll } from '../Doodles';

/**
 * Hero v4 — a colagem é "distribuída como cartas": as três obras nascem
 * empilhadas no centro e abrem em leque, depois ficam boiando devagar.
 *
 * Duas decisões estruturais que vale explicar, porque não são óbvias:
 *
 * 1. Cada obra tem um SLOT e um CARTÃO. O slot posiciona e faz o flutuar
 *    infinito; o cartão gira, entra e reage ao hover. Separar os dois evita
 *    a briga clássica de `transform` entre animação infinita e estado de hover.
 *
 * 2. Nada de enfeites soltos: o fundo é uma superfície da página (papel com
 *    pincelada, sem luz colorida) e sobrou um único cartão de prova social —
 *    a arte é a protagonista, e a versão anterior tinha oito elementos
 *    disputando a mesma coluna.
 */
export function PilotoHero() {
  const front = PILOTO_HERO_ART.find((a) => a.role === 'front');
  const backL = PILOTO_HERO_ART.find((a) => a.role === 'back-l');
  const backR = PILOTO_HERO_ART.find((a) => a.role === 'back-r');
  const avatars = getPilotoTeachers().slice(0, 4);

  const arts = [
    { art: backL, role: 'back-l', delay: 420 },
    { art: backR, role: 'back-r', delay: 540 },
    { art: front, role: 'front', delay: 260 },
  ] as const;

  return (
    <section id="hero" className="piloto-hero piloto-sup--marcado piloto-sup--t1">
      <div className="piloto-wrap">
        <div className="piloto-hero__grid">
          <div className="piloto-hero__copy">
            <span className="piloto-hero__hey piloto-pop" style={{ ['--delay' as string]: '80ms' }}>
              <CurvyArrow color="rgba(255,255,255,0.7)" style={{ transform: 'scaleX(-1) rotate(20deg)' }} />
              Ei, artista
            </span>

            <h1 className="piloto-display piloto-h1 piloto-hero__title">
              <span className="line piloto-wipe-line" style={{ ['--delay' as string]: '160ms' }}>
                A arte
              </span>
              <span className="line piloto-wipe-line" style={{ ['--delay' as string]: '300ms' }}>
                <span className="piloto-underline">
                  brasileira
                  <BrushUnderline color="#FFF200" />
                </span>
              </span>
              <span className="line line--accent piloto-wipe-line" style={{ ['--delay' as string]: '440ms' }}>
                mora aqui.
              </span>
            </h1>

            <p className="piloto-lead piloto-pop" style={{ ['--delay' as string]: '700ms' }}>
              Cursos, professores que <strong>vivem do que ensinam</strong>, desafios e uma galeria de
              artistas que respiram criatividade — tudo em um só lugar.
            </p>

            <div className="piloto-hero__ctas piloto-pop" style={{ ['--delay' as string]: '820ms' }}>
              <Link to="/cursos" className="piloto-btn">
                Quero começar
                <ArrowRight />
              </Link>
              <a href="#galeria" className="piloto-btn piloto-btn--ghost">
                Ver a galeria
              </a>
            </div>

            <a href="#galeria" className="piloto-hero__scroll piloto-pop" style={{ ['--delay' as string]: '1000ms' }}>
              <MouseScroll color="currentColor" />
              Rola pra ver
            </a>
          </div>

          <div className="piloto-hero__art">
            <div className="piloto-hero__collage">
              {arts.map(({ art, role, delay }) =>
                art ? (
                  <div key={role} className={`piloto-hero__slot piloto-hero__slot--${role}`}>
                    <Link
                      to={art.href}
                      className={`piloto-hero__img piloto-hero__img--${role}`}
                      style={{ ['--delay' as string]: `${delay}ms` }}
                      aria-label={`${art.title}, por ${art.artist}`}
                    >
                      <img
                        src={art.src}
                        alt=""
                        width={art.width}
                        height={art.height}
                        {...(role === 'front'
                          ? // @ts-expect-error React 18 ainda não tipa fetchpriority; o DOM aceita em minúsculas
                            { fetchpriority: 'high' }
                          : { loading: 'lazy' as const })}
                      />
                      {role === 'front' ? (
                        <span className="piloto-hero__img-cap">
                          <strong>{art.title}</strong>
                          <em>{art.artist}</em>
                        </span>
                      ) : null}
                    </Link>
                  </div>
                ) : null,
              )}
            </div>

            <div className="piloto-fcard piloto-fcard--a" style={{ ['--delay' as string]: '900ms' }}>
              <strong className="piloto-fcard__num">+4.800</strong>
              <span className="piloto-fcard__label">artistas na Comu</span>
              <span className="piloto-fcard__avatars">
                {avatars.map((t) => (
                  <img key={t.id} src={t.photo} alt="" width={26} height={26} loading="lazy" />
                ))}
                <span>e mais 4.796</span>
              </span>
            </div>

            <img
              className="piloto-hero__mascote"
              style={{ ['--delay' as string]: '1050ms' }}
              src="/piloto/mascote-voando.png"
              alt="Mascote astronauta da Comunidade da Arte"
              width={1100}
              height={949}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
