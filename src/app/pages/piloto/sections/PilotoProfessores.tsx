import { Link } from 'react-router-dom';
import { getPilotoTeachers } from '../pilotoData';
import { ArrowRight, BrushUnderline, Doodle, Sparkle } from '../Doodles';
import { Reveal, SectionHead } from './shared';

/**
 * Professores — "quem ensina, vive disso".
 *
 * A seção afirmava isso e mostrava só o retrato. Agora, ao apontar o card, o
 * rosto dá lugar a um mosaico com quatro obras reais do professor: a tese da
 * seção vira evidência. O mosaico é decorativo (aria-hidden) porque quem usa
 * leitor de tela já recebe nome, área e números — 24 imagens só atrapalhariam.
 */
export function PilotoProfessores() {
  const teachers = getPilotoTeachers();

  return (
    <section id="professores" className="piloto-section">
      <div className="piloto-wrap">
        <SectionHead
          eyebrow="Professores"
          title={
            <>
              Quem ensina,{' '}
              <span className="piloto-underline">
                vive disso
                <BrushUnderline color="#FFF200" />
              </span>
            </>
          }
          lead={
            <>
              Cada professor é um artista ativo — <strong>43 no total</strong>. Você aprende com quem está
              no mercado, do traço à carreira.
            </>
          }
          action={
            <Link to="/professores" className="piloto-btn piloto-btn--ghost">
              Conhecer todos
              <ArrowRight />
            </Link>
          }
        />

        <div className="piloto-profs__grid">
          {teachers.map((t, i) => (
            <Reveal key={t.id} delay={i * 90} as="article" variant={i % 2 === 0 ? 'left' : 'right'}>
              <Link to={t.href} className="piloto-card piloto-prof">
                <div className="piloto-prof__photo">
                  <img src={t.photo} alt={`Retrato de ${t.name}`} width={640} height={512} loading="lazy" />
                  <span className="piloto-prof__obras" aria-hidden="true">
                    {t.works.slice(0, 4).map((w) => (
                      <img key={w.src} src={w.src} alt="" width={300} height={300} loading="lazy" />
                    ))}
                    <em className="piloto-prof__dica">ver o portfólio</em>
                  </span>
                </div>
                {/* fora da foto (overflow hidden) para o badge poder "vazar" da borda */}
                <span className="piloto-prof__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="piloto-prof__body">
                  <h3 className="piloto-prof__name">{t.name}</h3>
                  <p className="piloto-prof__role">{t.role}</p>
                  <div className="piloto-prof__tags">
                    {t.tags.map((tag) => (
                      <span key={tag} className="piloto-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="piloto-prof__stats">
                    <span>
                      <strong>{t.courses}</strong>
                      {t.courses === 1 ? 'curso' : 'cursos'}
                    </span>
                    <span>
                      <strong>{t.students}</strong>alunos
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Doodle style={{ bottom: '30%', right: '2%', width: 18, color: '#ffffff' }}>
        <Sparkle />
      </Doodle>
    </section>
  );
}
