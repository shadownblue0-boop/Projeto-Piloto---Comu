import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { PilotoShell } from '../piloto/PilotoShell';
import { PROFESSORES, categoriasDoPortfolio, getProfessor, type ProfessorObra } from '../piloto/professoresData';
import { getPilotoTeachers } from '../piloto/pilotoData';
import { ArrowRight, BrushUnderline } from '../piloto/Doodles';
import { Reveal } from '../piloto/sections/shared';

const REDE: Record<string, string> = {
  instagram: 'Instagram',
  artstation: 'ArtStation',
  behance: 'Behance',
  youtube: 'YouTube',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  website: 'Site',
};

function anoDe(iso: string) {
  return new Date(iso).getFullYear();
}

/**
 * Lightbox do portfólio: a obra em tela cheia, com título, descrição e
 * navegação por teclado (Esc fecha, setas trocam). Só existe enquanto uma
 * obra está aberta — nada fica no DOM à toa.
 *
 * Vai para o <body> por portal: dentro de `.piloto` cada filho direto abre um
 * contexto de empilhamento, e o header sticky (z 50) ficava por cima do botão
 * de fechar por mais alto que fosse o z-index do lightbox.
 */
function Lightbox({
  obras,
  indice,
  onFechar,
  onIr,
}: {
  obras: ProfessorObra[];
  indice: number;
  onFechar: () => void;
  onIr: (i: number) => void;
}) {
  const obra = obras[indice];
  const total = obras.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar();
      if (e.key === 'ArrowRight') onIr((indice + 1) % total);
      if (e.key === 'ArrowLeft') onIr((indice - 1 + total) % total);
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [indice, total, onFechar, onIr]);

  return createPortal(
    <div className="piloto piloto-lightbox" role="dialog" aria-modal="true" aria-label={obra.title} onClick={onFechar}>
      <button type="button" className="piloto-lightbox__fechar" aria-label="Fechar" onClick={onFechar}>
        ×
      </button>
      <button
        type="button"
        className="piloto-lightbox__seta piloto-lightbox__seta--esq"
        aria-label="Obra anterior"
        onClick={(e) => {
          e.stopPropagation();
          onIr((indice - 1 + total) % total);
        }}
      >
        ‹
      </button>
      <figure className="piloto-lightbox__figura" onClick={(e) => e.stopPropagation()}>
        <img src={obra.cover} alt={obra.title} />
        <figcaption>
          <strong className="piloto-display">{obra.title}</strong>
          <span>{obra.description}</span>
          <em>
            {obra.category} · {indice + 1} de {total}
          </em>
        </figcaption>
      </figure>
      <button
        type="button"
        className="piloto-lightbox__seta piloto-lightbox__seta--dir"
        aria-label="Próxima obra"
        onClick={(e) => {
          e.stopPropagation();
          onIr((indice + 1) % total);
        }}
      >
        ›
      </button>
    </div>,
    document.body,
  );
}

/**
 * Perfil do professor: quem é, o que já fez e o portfólio inteiro, com as
 * obras reais. A home prometia "ver o portfólio" e o link não levava a lugar
 * nenhum; agora leva para cá.
 */
export function ProfessorPage() {
  const { id = '' } = useParams();
  const p = getProfessor(id);
  const numeros = getPilotoTeachers().find((t) => t.id === id);

  const categorias = useMemo(() => (p ? categoriasDoPortfolio(p) : []), [p]);
  const [filtro, setFiltro] = useState<string | null>(null);
  const [aberta, setAberta] = useState<number | null>(null);

  const obras = useMemo(
    () => (p ? (filtro ? p.projects.filter((o) => o.category === filtro) : p.projects) : []),
    [p, filtro],
  );

  const fechar = useCallback(() => setAberta(null), []);
  const ir = useCallback((i: number) => setAberta(i), []);

  if (!p) {
    return (
      <PilotoShell titulo="Professor não encontrado" ativo="professores">
        <section id="professor" className="piloto-section">
          <div className="piloto-wrap piloto-vazio">
            <span className="piloto-eyebrow">Professores</span>
            <h1 className="piloto-display piloto-h2">Não achamos esse professor</h1>
            <p className="piloto-lead">O endereço pode ter mudado. Os professores em destaque estão na home.</p>
            <a href="/#professores" className="piloto-btn">
              Ver os professores
              <ArrowRight />
            </a>
          </div>
        </section>
      </PilotoShell>
    );
  }

  const outros = PROFESSORES.filter((o) => o.id !== p.id);

  return (
    <PilotoShell titulo={p.name} ativo="professores">
      {/* ── Apresentação: capa com a arte dele, retrato e nome ── */}
      <section id="professor" className="piloto-professor">
        <div className="piloto-professor__capa">
          <img src={p.cover} alt="" width={1200} height={600} />
        </div>
        <div className="piloto-wrap">
          <div className="piloto-professor__cabeca">
            <img className="piloto-professor__retrato piloto-pop" src={p.avatar} alt={`Retrato de ${p.name}`} width={160} height={160} />
            <div className="piloto-professor__ident">
              <span className="piloto-eyebrow piloto-pop" style={{ ['--delay' as string]: '80ms' }}>
                Professor · {p.location}
              </span>
              <h1 className="piloto-display piloto-h1 piloto-professor__nome">
                {p.name.split(' ').map((parte, i) => (
                  <span key={i} className="line piloto-wipe-line" style={{ ['--delay' as string]: `${140 + i * 120}ms` }}>
                    {i === p.name.split(' ').length - 1 ? (
                      <span className="piloto-underline">
                        {parte}
                        <BrushUnderline color="#FFF200" />
                      </span>
                    ) : (
                      parte
                    )}
                  </span>
                ))}
              </h1>
              <p className="piloto-professor__area piloto-pop" style={{ ['--delay' as string]: '460ms' }}>
                {p.area}
              </p>
              <p className="piloto-lead piloto-pop" style={{ ['--delay' as string]: '540ms' }}>
                {p.tagline}
              </p>
            </div>

            <dl className="piloto-professor__numeros piloto-pop" style={{ ['--delay' as string]: '620ms' }}>
              <div>
                <dd>{p.projects.length}</dd>
                <dt>obras</dt>
              </div>
              {numeros ? (
                <>
                  <div>
                    <dd>{numeros.courses}</dd>
                    <dt>{numeros.courses === 1 ? 'curso' : 'cursos'}</dt>
                  </div>
                  <div>
                    <dd>{numeros.students}</dd>
                    <dt>alunos</dt>
                  </div>
                </>
              ) : null}
              <div>
                <dd>{anoDe(p.memberSince)}</dd>
                <dt>na Comu desde</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── Sobre: bio, domínios, trajetória, redes ── */}
      <section className="piloto-section piloto-professor__sobre piloto-sup--painel piloto-sup--grade">
        <div className="piloto-wrap">
          <div className="piloto-professor__sobre-grid">
            <Reveal variant="left">
              <span className="piloto-eyebrow">Sobre</span>
              <h2 className="piloto-display piloto-h2">Quem é {p.name.split(' ')[0]}</h2>
              <p className="piloto-lead">{p.bio}</p>
              <div className="piloto-professor__redes">
                {p.social.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="piloto-btn piloto-btn--ghost">
                    {REDE[s.platform] ?? s.platform} · {s.username}
                  </a>
                ))}
                {numeros ? (
                  <Link to="/cursos" className="piloto-btn">
                    Ver os cursos
                    <ArrowRight />
                  </Link>
                ) : null}
              </div>
            </Reveal>

            <Reveal variant="right" delay={100} className="piloto-professor__lado">
              <h3 className="piloto-artefato-pg__h">Domina</h3>
              <div className="piloto-professor__dominios">
                {p.expertise.map((e) => (
                  <span key={e} className="piloto-tag">
                    {e}
                  </span>
                ))}
              </div>

              <h3 className="piloto-artefato-pg__h">Trajetória</h3>
              <ol className="piloto-professor__trajetoria">
                {p.experience.map((x) => (
                  <li key={`${x.title}-${x.period}`} className={x.current ? 'is-atual' : ''}>
                    <strong>{x.title}</strong>
                    <span>{x.company}</span>
                    <em>{x.period}</em>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Portfólio completo ── */}
      <section className="piloto-section piloto-portfolio piloto-sup--marcado piloto-sup--regua piloto-sup--t2">
        <div className="piloto-wrap">
          <Reveal as="header" className="piloto-section-head" variant="wipe">
            <div>
              <span className="piloto-eyebrow">Portfólio</span>
              <h2 className="piloto-display piloto-h2">
                {p.projects.length} obras,{' '}
                <span className="piloto-underline">
                  todas dele
                  <BrushUnderline color="#FFF200" />
                </span>
              </h2>
              <p className="piloto-lead">Clique em qualquer obra para ver em tela cheia.</p>
            </div>
          </Reveal>

          <div className="piloto-galeria__chips">
            <button type="button" className="piloto-chip" aria-pressed={filtro === null} onClick={() => setFiltro(null)}>
              Tudo
            </button>
            {categorias.map((c) => (
              <button key={c} type="button" className="piloto-chip" aria-pressed={filtro === c} onClick={() => setFiltro(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="piloto-galeria__wall">
          <div className="piloto-galeria__masonry piloto-portfolio__masonry" key={filtro ?? 'tudo'}>
            {obras.map((o, i) => (
              <button
                key={o.id}
                type="button"
                className="piloto-galeria__item piloto-portfolio__obra"
                style={{ ['--i' as string]: Math.min(i, 23) }}
                aria-label={`Ver ${o.title}`}
                onClick={() => setAberta(i)}
              >
                <img src={o.cover} alt="" width={800} height={1000} loading={i < 8 ? undefined : 'lazy'} />
                <span className="piloto-galeria__cap">
                  <span>
                    <strong>{o.title}</strong>
                    <em>{o.category}</em>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {aberta !== null && obras[aberta] ? <Lightbox obras={obras} indice={aberta} onFechar={fechar} onIr={ir} /> : null}
      </section>

      {/* ── Outros professores ── */}
      <section className="piloto-section piloto-professor__outros">
        <div className="piloto-wrap">
          <Reveal as="header" className="piloto-section-head">
            <div>
              <span className="piloto-eyebrow">Outros professores</span>
              <h2 className="piloto-display piloto-h3">Quem mais ensina na Comu</h2>
            </div>
            <a href="/#professores" className="piloto-btn piloto-btn--ghost">
              Todos na home
              <ArrowRight />
            </a>
          </Reveal>
          <Reveal className="piloto-professor__outros-grade" stagger={70}>
            {outros.map((o) => (
              <Link key={o.id} to={`/professor/${o.id}`} className="piloto-card piloto-outro">
                <img src={o.avatar} alt="" width={72} height={72} loading="lazy" />
                <span>
                  <strong>{o.name}</strong>
                  <em>{o.area}</em>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </PilotoShell>
  );
}
