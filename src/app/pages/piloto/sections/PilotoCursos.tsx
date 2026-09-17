import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPilotoCourses } from '../pilotoData';
import { ArrowRight, Ring, StarSmall } from '../Doodles';
import { Reveal, SectionHead } from './shared';

/**
 * Vitrine de cursos.
 *
 * O primeiro card ocupa duas colunas e mostra o que os outros escondem
 * (subtítulo, nível, professor) — dá um ponto de entrada para o olho, em vez
 * de oito retângulos iguais. Os chips embaixo eram decoração: agora filtram.
 */
export function PilotoCursos() {
  const courses = getPilotoCourses();
  const categorias = useMemo(() => [...new Set(courses.map((c) => c.category))], [courses]);
  const [filtro, setFiltro] = useState<string | null>(null);

  const visiveis = filtro ? courses.filter((c) => c.category === filtro) : courses;

  return (
    <section id="cursos" className="piloto-section piloto-sup--marcado piloto-sup--regua piloto-sup--t2">
      <div className="piloto-wrap">
        <SectionHead
          eyebrow="Cursos"
          title={
            <>
              Aprende{' '}
              <span className="piloto-underline">
                fazendo
                <Ring color="#FFF200" style={{ height: '1.2em', bottom: '-0.15em', left: '-6%', width: '112%' }} />
              </span>
            </>
          }
          lead="Do primeiro traço ao portfólio profissional. Cursos completos, com projeto prático e certificado."
          action={
            <Link to="/cursos" className="piloto-btn piloto-btn--ghost">
              Ver todos os cursos
              <ArrowRight />
            </Link>
          }
        />

        <Reveal className="piloto-cursos__filtros" delay={60}>
          <button
            type="button"
            className="piloto-chip"
            aria-pressed={filtro === null}
            onClick={() => setFiltro(null)}
          >
            Tudo
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              className="piloto-chip"
              aria-pressed={filtro === cat}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="piloto-cursos__grid" key={filtro ?? 'tudo'}>
          {visiveis.map((c, i) => {
            const destaque = i === 0 && filtro === null;
            return (
              <article key={c.id} className="piloto-cursos__cel" style={{ ['--i' as string]: i }}>
                <Link
                  to={c.href}
                  className={`piloto-card piloto-curso${destaque ? ' piloto-curso--destaque' : ''}`}
                  aria-label={`${c.title} — com ${c.instructor}`}
                >
                  <div className="piloto-curso__cover">
                    <img src={c.cover} alt="" width={800} height={600} loading={i < 4 ? undefined : 'lazy'} />
                    <span className="piloto-curso__cat piloto-tag">{c.category}</span>
                    <span className="piloto-curso__hours">{c.hours}h</span>
                  </div>
                  <div className="piloto-curso__body">
                    <h3 className="piloto-curso__title">{c.title}</h3>
                    <p className="piloto-curso__sub">{c.subtitle}</p>
                    <div className="piloto-curso__meta">
                      <span>com {c.instructor}</span>
                      <span className="piloto-curso__rating">
                        <StarSmall color="#FFF200" />
                        {c.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="piloto-curso__nivel">{c.level}</span>
                  </div>
                  <span className="piloto-curso__arrow" aria-hidden="true">
                    <ArrowRight color="#101010" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <Reveal className="piloto-cursos__rodape" delay={120}>
          <span className="piloto-galeria__count">
            {filtro ? `${visiveis.length} curso${visiveis.length > 1 ? 's' : ''} em ${filtro}` : `${courses.length} de 26 cursos publicados`}
          </span>
          <Link to="/cursos" className="piloto-tag piloto-tag--solid">
            + 18 cursos no catálogo
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
