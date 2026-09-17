import { useEffect, useState } from 'react';

/**
 * Devolve o id da seção que está ocupando a faixa de leitura da tela.
 * A faixa (rootMargin) ignora o topo colado no header e o rodapé, então
 * a seção "ativa" é a que a pessoa está realmente lendo, não a que
 * acabou de encostar na borda.
 */
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join('|');

  useEffect(() => {
    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio >= bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(best);
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.75] },
    );

    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [key]);

  return active;
}
