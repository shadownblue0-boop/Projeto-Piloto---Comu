import { useEffect } from 'react';
import './piloto.css';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { PILOTO_SECTIONS } from './pilotoData';
import { PilotoHeader } from './sections/PilotoHeader';
import { PilotoHero } from './sections/PilotoHero';
import { PilotoGaleria } from './sections/PilotoGaleria';
import { PilotoVideo } from './sections/PilotoVideo';
import { PilotoCursos } from './sections/PilotoCursos';
import { PilotoSoftwares } from './sections/PilotoSoftwares';
import { PilotoProfessores } from './sections/PilotoProfessores';
import { PilotoBonus } from './sections/PilotoBonus';
import { PilotoComunidade } from './sections/PilotoComunidade';
import { PilotoCta } from './sections/PilotoCta';
import { PilotoFooter } from './sections/PilotoFooter';
import { Sparkle } from './Doodles';

const MARQUEE = ['Ilustração', 'Concept Art', 'Arte tradicional', 'Cartoon', '3D', 'Aquarela', 'Tattoo', 'Anime & Mangá'];

/** Letreiro rolante entre o hero e o vídeo — tipografia Daft em movimento. */
function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="piloto-marquee" aria-hidden="true">
      <div className="piloto-marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="piloto-marquee__item">
            {item}
            <Sparkle />
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * /piloto — versão piloto da home com nova direção visual.
 * Página isolada: CSS escopado em `.piloto`, header/footer próprios,
 * sem dependência do design system Chromia. Ordem das seções em
 * `PILOTO_SECTIONS` (pilotoData.ts) — os ids abaixo seguem essa ordem.
 */
const SPY_IDS = PILOTO_SECTIONS.map((s) => s.id);

export function PilotoPage() {
  const activeSection = useScrollSpy(SPY_IDS);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Piloto — Comunidade da Arte';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div id="piloto" className="piloto">
      <PilotoHeader activeSection={activeSection} />
      <main>
        {/* id="hero" */}
        <PilotoHero />
        <Marquee />
        {/* id="galeria" */}
        <PilotoGaleria />
        {/* id="video" */}
        <PilotoVideo />
        {/* id="cursos" */}
        <PilotoCursos />
        {/* id="softwares" */}
        <PilotoSoftwares />
        {/* id="professores" */}
        <PilotoProfessores />
        {/* id="bonus" */}
        <PilotoBonus />
        {/* id="comunidade" */}
        <PilotoComunidade />
        {/* id="cta" */}
        <PilotoCta />
      </main>
      <PilotoFooter />
    </div>
  );
}
