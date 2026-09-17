import { Link, useParams } from 'react-router-dom';
import { PilotoShell } from '../piloto/PilotoShell';
import { ARTEFATO_TIPOS, getArtefato, getArtefatos } from '../piloto/artefatosData';
import { ArrowRight, Check } from '../piloto/Doodles';
import { Reveal } from '../piloto/sections/shared';
import { ArtefatoCard } from './ArtefatosPage';

/** Detalhe de um artefato: capa grande, o que tem dentro, para quem é, e o caminho para ter. */
export function ArtefatoPage() {
  const { slug = '' } = useParams();
  const a = getArtefato(slug);

  if (!a) {
    return (
      <PilotoShell titulo="Artefato não encontrado" ativo="artefatos">
        <section id="artefato" className="piloto-section">
          <div className="piloto-wrap piloto-vazio">
            <span className="piloto-eyebrow">Artefatos</span>
            <h1 className="piloto-display piloto-h2">Esse artefato não está na estante</h1>
            <p className="piloto-lead">O endereço pode ter mudado. A estante inteira continua aqui.</p>
            <Link to="/artefatos" className="piloto-btn">
              Ver todos os artefatos
              <ArrowRight />
            </Link>
          </div>
        </section>
      </PilotoShell>
    );
  }

  const tipo = ARTEFATO_TIPOS.find((t) => t.id === a.type)!;
  const relacionados = getArtefatos()
    .filter((o) => o.type === a.type && o.slug !== a.slug)
    .slice(0, 4);
  const largo = a.type === 'pack' || a.type === 'brush';

  return (
    <PilotoShell titulo={a.title} ativo="artefatos">
      <section id="artefato" className="piloto-section piloto-artefato-pg piloto-sup--marcado piloto-sup--t2">
        <div className="piloto-wrap">
          <nav className="piloto-migalhas" aria-label="Caminho">
            <Link to="/artefatos">Artefatos</Link>
            <span aria-hidden="true">/</span>
            <span>{tipo.plural}</span>
          </nav>

          <div className={`piloto-artefato-pg__grid${largo ? ' piloto-artefato-pg__grid--largo' : ''}`}>
            <Reveal variant="scale" className="piloto-artefato-pg__capa">
              <img src={a.cover} alt={`Capa de ${a.title}`} width={largo ? 900 : 640} height={largo ? 500 : 640} />
            </Reveal>

            <Reveal variant="left" delay={80} className="piloto-artefato-pg__corpo">
              <span className="piloto-eyebrow">
                {a.moduleNumber ? `${a.seriesName} · Módulo ${a.moduleNumber}` : tipo.label}
              </span>
              <h1 className="piloto-display piloto-h2">{a.title}</h1>
              <p className="piloto-artefato-pg__sub">{a.subtitle}</p>

              <dl className="piloto-trilha__fatos piloto-artefato-pg__fatos">
                {a.pages ? (
                  <div>
                    <dt>Tamanho</dt>
                    <dd>{a.pages} páginas</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Nível</dt>
                  <dd>{a.level}</dd>
                </div>
                <div>
                  <dt>Tema</dt>
                  <dd>{a.category}</dd>
                </div>
              </dl>

              <p className="piloto-lead">{a.description}</p>

              <h2 className="piloto-artefato-pg__h">O que tem dentro</h2>
              <ul className="piloto-trilha__topicos">
                {a.topics.map((t) => (
                  <li key={t}>
                    <Check color="#FFF200" />
                    {t}
                  </li>
                ))}
              </ul>

              <h2 className="piloto-artefato-pg__h">Para quem é</h2>
              <p className="piloto-artefato-pg__quem">{a.forWhom}</p>

              <div className="piloto-artefato-pg__tags">
                {a.tags.map((t) => (
                  <span key={t} className="piloto-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="piloto-hero__ctas">
                <Link to="/cursos" className="piloto-btn">
                  Quero baixar este artefato
                  <ArrowRight />
                </Link>
                <Link to="/artefatos" className="piloto-btn piloto-btn--ghost">
                  Voltar para a estante
                </Link>
              </div>
              <p className="piloto-cta__note">
                Por {a.author}. Incluso na assinatura da Comu, junto com todos os outros artefatos.
              </p>
            </Reveal>
          </div>

          {relacionados.length > 0 ? (
            <Reveal className="artefato-relacionados piloto-artefatos__grupo" delay={120}>
              <div className="piloto-artefatos__grupo-topo">
                <h2 className="piloto-display piloto-h3">Mais {tipo.plural.toLowerCase()}</h2>
                <Link to="/artefatos" className="piloto-video__canal">
                  Ver a estante inteira
                </Link>
              </div>
              <div className={`piloto-artefatos__grade${largo ? ' piloto-artefatos__grade--larga' : ''}`}>
                {relacionados.map((o, i) => (
                  <ArtefatoCard key={o.id} a={o} largo={largo} indice={i} />
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>
    </PilotoShell>
  );
}
