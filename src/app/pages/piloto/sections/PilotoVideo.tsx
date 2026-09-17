import { useState } from 'react';
import { PILOTO_CANAL, PILOTO_VIDEOS } from '../pilotoData';
import { Check, Sparkle } from '../Doodles';
import { Reveal } from './shared';

/**
 * Aula aberta — o player toca aqui mesmo.
 *
 * Antes esta seção prometia um vídeo institucional que não existe e o play
 * levava a pessoa para o YouTube. Agora ela mostra o que a Comu tem de mais
 * convincente: uma aula de verdade, com a faixa das outras logo abaixo.
 *
 * O iframe só entra no DOM depois do clique (facade): a primeira dobra não
 * paga o peso do player.
 */
export function PilotoVideo() {
  const [ativo, setAtivo] = useState(0);
  const [tocando, setTocando] = useState(false);
  const video = PILOTO_VIDEOS[ativo];
  const outros = PILOTO_VIDEOS.filter((_, i) => i !== ativo);

  const trocar = (indice: number) => {
    setAtivo(indice);
    setTocando(false);
  };

  return (
    <section id="video" className="piloto-section piloto-video piloto-sup--painel piloto-sup--grade">
      <div className="piloto-wrap">
        <div className="piloto-video__grid">
          <Reveal className="piloto-video__copy" variant="left">
            <span className="piloto-eyebrow">Aula aberta</span>
            <h2 className="piloto-display piloto-h2">
              Veja como a gente{' '}
              <span className="piloto-underline">
                ensina
                <Sparkle color="#FFF200" style={{ height: '0.5em', width: '0.5em', left: 'auto', right: '-0.7em', bottom: '0.7em' }} />
              </span>
            </h2>
            <p className="piloto-lead">
              Aulas do canal, abertas para qualquer um assistir. É o mesmo professor, o mesmo jeito de
              explicar e a mesma mão na massa que você encontra <strong>dentro dos cursos</strong>.
            </p>
            <ul className="piloto-video__list">
              <li>
                <Check color="#FFF200" />
                Acesso vitalício aos cursos comprados
              </li>
              <li>
                <Check color="#FFF200" />
                Certificado ao concluir 100% das aulas
              </li>
              <li>
                <Check color="#FFF200" />
                Garantia de 7 dias, sem perguntas
              </li>
            </ul>
            <a className="piloto-video__canal" href={PILOTO_CANAL} target="_blank" rel="noopener noreferrer">
              Ver o canal no YouTube
            </a>
          </Reveal>

          <Reveal delay={120} variant="scale">
            <div className="piloto-card piloto-video__frame">
              {tocando ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  <img src={video.poster} alt="" width={800} height={450} loading="lazy" />
                  <button
                    type="button"
                    className="piloto-video__play"
                    aria-label={`Assistir vídeo: ${video.title}`}
                    onClick={() => setTocando(true)}
                  >
                    <span>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 3 L21 12 L6 21 Z" fill="currentColor" />
                      </svg>
                    </span>
                  </button>
                  {/* só a etiqueta: a miniatura do YouTube já traz o título
                      impresso na arte, e repetir vira ruído */}
                  <span className="piloto-video__caption">
                    <span className="piloto-tag">{video.badge}</span>
                  </span>
                </>
              )}
            </div>

            <ul className="piloto-video__lista">
              {outros.map((v) => {
                const indice = PILOTO_VIDEOS.indexOf(v);
                return (
                  <li key={v.youtubeId}>
                    <button type="button" onClick={() => trocar(indice)}>
                      <span className="piloto-video__thumb">
                        <img src={v.poster} alt="" width={800} height={450} loading="lazy" />
                      </span>
                      <span className="piloto-video__meta">
                        <em>{v.badge}</em>
                        <strong>{v.title}</strong>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
