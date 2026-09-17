import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import './piloto.css';
import { PilotoHeader } from './sections/PilotoHeader';
import { PilotoFooter } from './sections/PilotoFooter';

/**
 * Casca das páginas internas (artefatos, professor): mesmo header, rodapé e
 * raiz `.piloto` da home, para o CSS escopado e as superfícies valerem aqui
 * também. Cuida do título do documento e de rolar ao topo na troca de rota —
 * sem isso a página nova abre no meio, onde a anterior tinha parado.
 */
export function PilotoShell({
  titulo,
  ativo,
  children,
}: {
  titulo: string;
  /** item do header a marcar como atual (ex.: 'artefatos') */
  ativo?: string;
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const previous = document.title;
    document.title = `${titulo} — Comunidade da Arte`;
    return () => {
      document.title = previous;
    };
  }, [titulo]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div id="piloto" className="piloto">
      <PilotoHeader foraDaHome activeSection={ativo ?? null} />
      <main>{children}</main>
      <PilotoFooter foraDaHome />
    </div>
  );
}
