import { useState } from 'react';
import { getPilotoBenefits, getPilotoTeachers } from '../pilotoData';
import { BrushUnderline, Check, Doodle, Sparkle } from '../Doodles';
import { Reveal, SectionHead } from './shared';

/**
 * Código do cupom que se copia com um clique.
 *
 * Um código que a pessoa precisa selecionar à mão é uma promessa pela metade.
 * A confirmação vive no próprio botão (e em `aria-live`) para quem usa leitor
 * de tela também saber que a cópia aconteceu.
 */
function CupomCodigo({ codigo }: { codigo: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1600);
    } catch {
      // navegador sem permissão de área de transferência: o código segue visível
    }
  };

  return (
    <button
      type="button"
      className={`piloto-cupom__code${copiado ? ' is-copiado' : ''}`}
      onClick={copiar}
      aria-label={`Copiar o cupom ${codigo}`}
    >
      <span aria-hidden="true">{copiado ? 'Copiado' : codigo}</span>
      {copiado ? <Check color="#101010" /> : null}
      <span className="piloto-sr" aria-live="polite">
        {copiado ? `Cupom ${codigo} copiado` : ''}
      </span>
    </button>
  );
}

/**
 * Ícone de linha dentro de um quadradinho é o carimbo de site genérico — e a
 * Comu tem material de verdade para mostrar no lugar: a arte de um desafio
 * real, o selo da marca e o rosto dos professores.
 */
const EXTRAS = [
  {
    title: 'Desafios',
    text: 'Temas mensais com curadoria real e votação da comunidade.',
    visual: (
      <span className="piloto-incluso__arte-mini">
        <img src="/piloto/incluso-desafio.jpg" alt="" width={56} height={56} loading="lazy" />
      </span>
    ),
  },
  {
    title: 'Certificado',
    text: 'Gerado automaticamente ao concluir 100% das aulas.',
    visual: (
      <span className="piloto-incluso__selo">
        <img src="/brand/selo-amarelo.png" alt="" width={56} height={56} loading="lazy" />
      </span>
    ),
  },
  {
    title: 'Comunidade',
    text: 'Feed, galeria viva e encontros com outros artistas.',
    visual: (
      <span className="piloto-incluso__rostos">
        {getPilotoTeachers()
          .slice(0, 3)
          .map((t) => (
            <img key={t.id} src={t.photo} alt="" width={30} height={30} loading="lazy" />
          ))}
      </span>
    ),
  },
];


/** Bônus & descontos — cards escuros com o valor em amarelo (único acento). */
export function PilotoBonus() {
  const benefits = getPilotoBenefits();

  return (
    <section id="bonus" className="piloto-section piloto-bonus piloto-sup--marcado piloto-sup--regua piloto-sup--t3">
      <Doodle style={{ top: 70, right: '4%', width: 18, color: '#ffffff' }}>
        <Sparkle />
      </Doodle>

      <div className="piloto-wrap">
        <SectionHead
          eyebrow="Bônus & descontos"
          title={
            <>
              Ser da Comu{' '}
              <span className="piloto-underline">
                paga a conta
                <BrushUnderline color="#FFF200" />
              </span>
            </>
          }
          lead="Parcerias com as marcas que você já usa. Descontos, cupons e acesso antecipado — só para membros."
        />

        <div className="piloto-bonus__grid">
          {benefits.map((b, i) => (
            <Reveal key={b.id} delay={i * 80} as="article" variant="scale">
              <div className="piloto-cupom">
                <div className="piloto-cupom__value">{b.highlight}</div>
                <div className="piloto-cupom__body">
                  <span className="piloto-cupom__partner">{b.partner}</span>
                  <h3 className="piloto-cupom__title">{b.title}</h3>
                  <p className="piloto-cupom__desc">{b.description}</p>
                  {b.couponCode ? <CupomCodigo codigo={b.couponCode} /> : null}
                  {b.artepassOnly ? (
                    <span className="piloto-tag" style={{ color: '#924EEA', borderColor: 'rgba(146,78,234,0.5)', width: 'fit-content' }}>
                      ArtePass
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* "Tudo incluso": a Biblioteca ganha vitrine com os artefatos reais —
            é o benefício mais concreto e antes era um cartãozinho de ícone. */}
        <Reveal className="piloto-incluso" delay={180} variant="scale">
          <div className="piloto-card piloto-incluso__destaque">
            <div className="piloto-incluso__arte">
              <img
                src="/piloto/biblioteca-artefatos.jpg"
                alt="Ebooks, packs de brushes e materiais da biblioteca da Comu"
                width={1040}
                height={320}
                loading="lazy"
              />
            </div>
            <div className="piloto-incluso__texto">
              <span className="piloto-eyebrow">Incluso</span>
              <h3 className="piloto-incluso__titulo">Biblioteca</h3>
              <p>
                Material que você <strong>baixa e usa</strong>: ebooks de anatomia e personagens,
                packs de brushes e cenários 3D para treinar.
              </p>
              <div className="piloto-incluso__chips">
                <span className="piloto-tag">Ebooks</span>
                <span className="piloto-tag">Brushes</span>
                <span className="piloto-tag">Packs 3D</span>
                <span className="piloto-tag">Referências</span>
              </div>
            </div>
          </div>

          <ul className="piloto-incluso__lista">
            {EXTRAS.map((e) => (
              <li key={e.title}>
                {e.visual}
                <span>
                  <strong>{e.title}</strong>
                  <em>{e.text}</em>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
