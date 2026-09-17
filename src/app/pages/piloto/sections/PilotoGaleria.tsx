import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { THEMATIC_CATEGORIES } from '../../../data/explorerData';
import { PILOTO_GALLERY_TOTAL, filterGallery, getPilotoGallery } from '../pilotoData';
import { ArrowRight, BrushUnderline } from '../Doodles';
import { Reveal, SectionHead } from './shared';

const LOTE = 24;
const PASSO = 12;

/**
 * Galeria da comunidade — a parede de obras que abre a home original.
 *
 * Duas mudanças que valem explicar: a parede é full-bleed (sai do wrap de
 * 1200px e ocupa a largura da tela, porque obra de arte pede área, não
 * margem) e cada imagem mantém a proporção real — é o que transforma a
 * grade regular de antes num masonry de verdade.
 */
export function PilotoGaleria() {
  const [active, setActive] = useState<string | null>(null);
  const [visiveis, setVisiveis] = useState(LOTE);
  const items = getPilotoGallery();

  const filtradas = useMemo(() => filterGallery(items, active), [items, active]);
  const mostrando = filtradas.slice(0, visiveis);
  const faltam = filtradas.length - mostrando.length;

  const trocarFiltro = (id: string | null) => {
    setActive(id);
    setVisiveis(LOTE);
  };

  return (
    <section id="galeria" className="piloto-section piloto-galeria">
      <div className="piloto-wrap">
        <SectionHead
          eyebrow="Galeria da comunidade"
          title={
            <>
              Arte feita por quem{' '}
              <span className="piloto-underline">
                vive para criar
                <BrushUnderline color="#FFF200" />
              </span>
            </>
          }
          lead={
            <>
              Um recorte das <strong>{PILOTO_GALLERY_TOTAL} obras</strong> publicadas pelos professores da
              Comu — lápis, tela, digital e 3D.
            </>
          }
        />

        <Reveal className="piloto-galeria__chips" delay={80}>
          <button
            type="button"
            className="piloto-chip"
            aria-pressed={active === null}
            onClick={() => trocarFiltro(null)}
          >
            Tudo
          </button>
          {THEMATIC_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className="piloto-chip"
              aria-pressed={active === c.id}
              onClick={() => trocarFiltro(c.id)}
            >
              {c.label}
            </button>
          ))}
        </Reveal>
      </div>

      {mostrando.length > 0 ? (
        <div className="piloto-galeria__wall">
          {/* a key inclui o filtro: trocar de categoria remonta a parede e
              dispara a entrada escalonada de novo, em vez de piscar */}
          <div className="piloto-galeria__masonry" key={active ?? 'tudo'}>
            {mostrando.map((item, i) => (
              <Link
                key={item.id}
                to={item.href}
                className="piloto-galeria__item"
                style={{ ['--i' as string]: Math.min(i, 23) }}
                aria-label={`${item.title}, por ${item.artist}`}
              >
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.artist}`}
                  width={item.width}
                  height={item.height}
                  loading={i < 8 ? undefined : 'lazy'}
                />
                <span className="piloto-galeria__cap">
                  {item.avatar ? <img src={item.avatar} alt="" width={26} height={26} loading="lazy" /> : null}
                  <span>
                    <strong>{item.artist}</strong>
                    <em>{item.categoryLabel}</em>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="piloto-wrap">
          <p className="piloto-galeria__empty">Nenhuma obra nessa categoria neste recorte.</p>
        </div>
      )}

      <div className="piloto-wrap">
        <div className="piloto-galeria__foot">
          <span className="piloto-galeria__count">
            Mostrando {mostrando.length} de {PILOTO_GALLERY_TOTAL} obras
          </span>
          {faltam > 0 ? (
            <button
              type="button"
              className="piloto-btn piloto-btn--ghost"
              onClick={() => setVisiveis((v) => v + PASSO)}
            >
              Ver mais {Math.min(PASSO, faltam)} obras
              <ArrowRight />
            </button>
          ) : (
            <Link to="/galeria" className="piloto-btn piloto-btn--ghost">
              Ver galeria completa
              <ArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
