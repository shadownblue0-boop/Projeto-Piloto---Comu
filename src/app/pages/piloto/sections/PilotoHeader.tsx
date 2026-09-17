import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PILOTO_SECTIONS } from '../pilotoData';
import { ArrowRight } from '../Doodles';

const NAV = PILOTO_SECTIONS.filter((s) => !['hero', 'cta', 'video'].includes(s.id));

/**
 * Header do piloto. Recebe de fora a seção visível (scrollspy) para marcar o
 * link correspondente, e encolhe assim que a página sai do topo — o cabeçalho
 * deixa de ser um bloco inerte e passa a dizer onde a pessoa está.
 */
export function PilotoHeader({ activeSection }: { activeSection?: string | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = ['piloto-header', open ? 'is-open' : '', scrolled ? 'is-scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <div className="piloto-wrap">
        <div className="piloto-header__inner">
          <Link to="/piloto" className="piloto-header__logo" aria-label="Comunidade da Arte — início do piloto">
            <img src="/brand/WriteBranca.png" alt="Comunidade da Arte" width={180} height={34} />
          </Link>

          <nav className="piloto-header__nav" aria-label="Seções da página">
            {NAV.map((s) => (
              <a key={s.id} href={`#${s.id}`} aria-current={activeSection === s.id ? true : undefined}>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="piloto-header__actions">
            <Link to="/cursos" className="piloto-btn piloto-btn--ghost">
              Ver cursos
            </Link>
            <Link to="/cursos" className="piloto-btn">
              Entrar na Comu
              <ArrowRight />
            </Link>
            <button
              type="button"
              className="piloto-header__burger"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="piloto-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" aria-hidden="true">
                {open ? (
                  <path d="M5 5 L19 19 M19 5 L5 19" />
                ) : (
                  <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L20 17" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div id="piloto-drawer" className="piloto-header__drawer">
          {NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={activeSection === s.id ? true : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
