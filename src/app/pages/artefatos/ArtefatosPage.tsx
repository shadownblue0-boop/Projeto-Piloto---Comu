import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PilotoShell } from '../piloto/PilotoShell';
import { ARTEFATO_TIPOS, filtrarArtefatos, getArtefatos, type Artefato, type ArtefatoTipo } from '../piloto/artefatosData';
import { ArrowRight, BrushUnderline } from '../piloto/Doodles';
import { Reveal } from '../piloto/sections/shared';

const LABEL: Record<ArtefatoTipo, string> = Object.fromEntries(ARTEFATO_TIPOS.map((t) => [t.id, t.label])) as Record<
  ArtefatoTipo,
  string
>;

/** Um artefato na estante: capa real, tipo, dado curto e link para o detalhe. */
export function ArtefatoCard({ a, largo = false, indice = 0 }: { a: Artefato; largo?: boolean; indice?: number }) {
  const dado = a.pages ? `${a.pages} págs` : a.type === 'brush' ? 'Pack de pincéis' : 'Pack 3D';
  return (
    <Link
      to={`/artefatos/${a.slug}`}
      className={`piloto-card piloto-artefato${largo ? ' piloto-artefato--largo' : ''}`}
      style={{ ['--i' as string]: Math.min(indice, 12) }}
      aria-label={`${a.title} — ${LABEL[a.type]}`}
    >
      <span className="piloto-artefato__capa">
        <img src={a.cover} alt="" width={largo ? 900 : 640} height={largo ? 500 : 640} loading={indice < 6 ? undefined : 'lazy'} />
        <span className="piloto-artefato__tipo piloto-tag piloto-tag--solid">
          {a.moduleNumber ? `Módulo ${a.moduleNumber}` : LABEL[a.type]}
        </span>
        <span className="piloto-artefato__dado">{dado}</span>
      </span>
      <span className="piloto-artefato__corpo">
        <strong>{a.title}</strong>
        <em>{a.subtitle}</em>
        <span className="piloto-artefato__meta">
          <span className="piloto-artefato__nivel">{a.level}</span>
          <span>{a.category}</span>
        </span>
      </span>
    </Link>
  );
}

/**
 * Artefatos — a estante de material da Comu: ebooks, playbooks, packs 3D e
 * brushes. Sem filtro, a página agrupa por tipo (cada grupo com seu título);
 * com filtro, vira uma grade única do tipo escolhido.
 */
export function ArtefatosPage() {
  const itens = getArtefatos();
  const [tipo, setTipo] = useState<ArtefatoTipo | null>(null);
  const visiveis = useMemo(() => filtrarArtefatos(itens, tipo), [itens, tipo]);

  const porTipo = (t: ArtefatoTipo) => itens.filter((a) => a.type === t);
  const contagem = (t: ArtefatoTipo) => porTipo(t).length;

  return (
    <PilotoShell titulo="Artefatos" ativo="artefatos">
      <section id="artefatos" className="piloto-section piloto-artefatos piloto-sup--marcado piloto-sup--t1">
        <div className="piloto-wrap">
          <header className="piloto-artefatos__topo">
            <div>
              <span className="piloto-eyebrow">Artefatos</span>
              <h1 className="piloto-display piloto-h1 piloto-artefatos__titulo">
                <span className="line piloto-wipe-line" style={{ ['--delay' as string]: '80ms' }}>
                  Material pra
                </span>
                <span className="line piloto-wipe-line" style={{ ['--delay' as string]: '220ms' }}>
                  <span className="piloto-underline">
                    baixar e usar
                    <BrushUnderline color="#FFF200" />
                  </span>
                </span>
              </h1>
              <p className="piloto-lead piloto-pop" style={{ ['--delay' as string]: '420ms' }}>
                Ebooks, playbooks, packs 3D e brushes feitos pelos professores da Comu. Tudo incluso para
                membros: <strong>{itens.length} artefatos</strong> hoje, e a estante cresce.
              </p>
            </div>

            <dl className="piloto-artefatos__contagem piloto-pop" style={{ ['--delay' as string]: '520ms' }}>
              {ARTEFATO_TIPOS.map((t) => (
                <div key={t.id}>
                  <dd>{contagem(t.id)}</dd>
                  <dt>{t.plural}</dt>
                </div>
              ))}
            </dl>
          </header>

          <div className="piloto-galeria__chips piloto-pop" style={{ ['--delay' as string]: '600ms' }}>
            <button type="button" className="piloto-chip" aria-pressed={tipo === null} onClick={() => setTipo(null)}>
              Tudo
            </button>
            {ARTEFATO_TIPOS.map((t) => (
              <button
                key={t.id}
                type="button"
                className="piloto-chip"
                aria-pressed={tipo === t.id}
                onClick={() => setTipo(t.id)}
              >
                {t.plural}
              </button>
            ))}
          </div>

          {tipo === null ? (
            ARTEFATO_TIPOS.map((t, gi) => {
              const grupo = porTipo(t.id);
              if (grupo.length === 0) return null;
              const largo = t.id === 'pack' || t.id === 'brush';
              return (
                <Reveal key={t.id} as="section" className="piloto-artefatos__grupo" delay={gi * 60}>
                  <div className="piloto-artefatos__grupo-topo" id={`artefatos-${t.id}`}>
                    <h2 className="piloto-display piloto-h3">{t.plural}</h2>
                    <span className="piloto-galeria__count">
                      {grupo.length} {grupo.length === 1 ? 'item' : 'itens'}
                      {t.id === 'playbook' && grupo[0]?.seriesName ? ` · ${grupo[0].seriesName}` : ''}
                    </span>
                  </div>
                  <div className={`piloto-artefatos__grade${largo ? ' piloto-artefatos__grade--larga' : ''}`}>
                    {grupo.map((a, i) => (
                      <ArtefatoCard key={a.id} a={a} largo={largo} indice={i} />
                    ))}
                  </div>
                </Reveal>
              );
            })
          ) : (
            <div
              key={tipo}
              className={`piloto-artefatos__grade${tipo === 'pack' || tipo === 'brush' ? ' piloto-artefatos__grade--larga' : ''}`}
            >
              {visiveis.map((a, i) => (
                <ArtefatoCard key={a.id} a={a} largo={tipo === 'pack' || tipo === 'brush'} indice={i} />
              ))}
            </div>
          )}

          <Reveal className="piloto-artefatos__rodape" delay={120}>
            <p className="piloto-lead">
              Ebooks, playbooks, packs 3D e brushes: tudo isso vem junto com a assinatura da Comu.
            </p>
            <Link to="/cursos" className="piloto-btn">
              Entrar na Comu
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </PilotoShell>
  );
}
