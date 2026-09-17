import { Link } from 'react-router-dom';
import { PILOTO_SECTIONS } from '../pilotoData';

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/comunidadedaarte',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@comunidadedaarte',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8 C 3 6, 4 5, 6 5 L 18 5 C 20 5, 21 6, 21 8 L 21 16 C 21 18, 20 19, 18 19 L 6 19 C 4 19, 3 18, 3 16 Z" />
        <path d="M10 9 L 15 12 L 10 15 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/31953471480',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20 L 5.5 15.5 C 3.5 12, 4.5 7.5, 8.5 5.5 C 12.5 3.5, 17.5 5, 19.5 9 C 21.5 13, 19.5 18, 15.5 19.5 C 13 20.5, 10.5 20, 8.5 19 Z" />
        <path d="M9 9.5 C 9 12, 12 15, 14.5 15 L 15.5 13.5 L 13.5 12.5 L 12.5 13.5 C 11.5 13, 11 12.5, 10.5 11.5 L 11.5 10.5 L 10.5 8.5 Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const NAV = PILOTO_SECTIONS.filter((s) => s.id !== 'hero' && s.id !== 'cta');

/** Footer próprio do piloto — links reais do site, sem chrome Chromia. */
export function PilotoFooter() {
  return (
    <footer className="piloto-footer">
      <div className="piloto-wrap">
        <div className="piloto-footer__grid">
          <div className="piloto-footer__brand">
            <img src="/brand/WriteBranca.png" alt="Comunidade da Arte" width={210} height={40} loading="lazy" />
            <p>O espaço da arte brasileira. Cursos, professores, desafios e uma galeria de artistas.</p>
            <div className="piloto-footer__social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Nesta página</h4>
            <ul>
              {NAV.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Explorar</h4>
            <ul>
              <li><Link to="/cursos">Cursos</Link></li>
              <li><Link to="/professores">Professores</Link></li>
              <li><Link to="/desafios">Desafios</Link></li>
              <li><Link to="/biblioteca">Biblioteca</Link></li>
            </ul>
          </div>

          <div>
            <h4>Suporte</h4>
            <ul>
              <li><Link to="/help">Central de ajuda</Link></li>
              <li><Link to="/contact">Contato</Link></li>
              <li><Link to="/terms">Termos de uso</Link></li>
              <li><Link to="/privacy">Privacidade</Link></li>
              <li><Link to="/cancelamento">Cancelamento</Link></li>
            </ul>
          </div>
        </div>

        <div className="piloto-footer__bottom">
          <span>© {new Date().getFullYear()} Comunidade da Arte. Todos os direitos reservados.</span>
          <span className="piloto-tag">Piloto de estilo v4 · não é a versão final</span>
        </div>
      </div>
    </footer>
  );
}
