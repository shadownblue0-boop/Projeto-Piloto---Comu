import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../../hooks/useInView';

/** Caráter da entrada. Cada seção escolhe o seu para a página não ter um ritmo só. */
export type RevealVariant = 'up' | 'wipe' | 'scale' | 'left' | 'right';

/**
 * Faz o bloco entrar quando aparece na viewport. `variant` muda o gesto
 * (sobe, pincelada, escala, entra pelo lado) e `stagger` escalona os filhos
 * diretos — evita ter que espalhar `delay` item a item nas grades.
 */
export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  stagger,
  className = '',
  as: Tag = 'div',
  style,
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
  stagger?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'header' | 'ul' | 'section';
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView(0.15);
  const classes = [
    'piloto-reveal',
    variant !== 'up' ? `piloto-reveal--${variant}` : '',
    stagger ? 'piloto-stagger' : '',
    inView ? 'is-in' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref as never}
      className={classes}
      style={{
        ...style,
        ['--delay' as string]: `${delay}ms`,
        ...(stagger ? { ['--stagger' as string]: `${stagger}ms` } : null),
      }}
    >
      {children}
    </Tag>
  );
}

/** Cabeçalho padrão de seção: eyebrow + título Daft + texto de apoio + ação opcional. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Reveal className="piloto-section-head" as="header" variant="wipe">
      <div>
        <span className="piloto-eyebrow">{eyebrow}</span>
        <h2 className="piloto-display piloto-h2">{title}</h2>
        {lead ? <p className="piloto-lead">{lead}</p> : null}
      </div>
      {action}
    </Reveal>
  );
}
