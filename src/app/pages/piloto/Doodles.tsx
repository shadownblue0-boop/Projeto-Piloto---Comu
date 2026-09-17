import type { CSSProperties, ReactNode, SVGProps } from 'react';

/**
 * Doodles do piloto — rabiscos, manchas e formas "à mão livre".
 * Os paths têm irregularidades de propósito: a referência visual vive
 * de traço de marcador, não de geometria perfeita.
 * Todos são decorativos (aria-hidden) e aceitam `color` + props de SVG.
 */

type DoodleProps = SVGProps<SVGSVGElement> & { color?: string };

const stroke = (color?: string) => ({
  fill: 'none',
  stroke: color ?? 'currentColor',
  strokeWidth: 5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** Estrela de 4 pontas — o "brilho" do logo, rabiscado */
export function Sparkle({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" {...rest}>
      <path
        d="M30 3 C32 18 36 24 57 30 C36 35 32 41 30 57 C28 41 24 35 3 30 C24 24 28 18 30 3 Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
}

/** Estrela de 5 pontas com contorno de marcador */
export function Star({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...rest}>
      <path
        d="M32 5 L40 23 L59 25 L45 38 L49 57 L32 47 L15 57 L19 38 L5 25 L24 23 Z"
        fill={color ?? 'currentColor'}
        stroke={color ?? 'currentColor'}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rabisco em espiral solta */
export function Squiggle({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 160 80" aria-hidden="true" className="piloto-draw" {...rest}>
      <path
        d="M6 62 C 22 8, 44 8, 52 40 C 58 66, 30 74, 34 48 C 38 24, 70 14, 84 34 C 98 56, 78 76, 96 62 C 116 44, 126 18, 154 22"
        {...stroke(color)}
      />
    </svg>
  );
}

/** Seta curva com cabeça aberta — aponta para o CTA/mascote */
export function CurvyArrow({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true" className="piloto-draw" {...rest}>
      <path d="M8 10 C 24 60, 62 78, 108 66" {...stroke(color)} />
      <path d="M92 50 L 110 66 L 90 78" {...stroke(color)} />
    </svg>
  );
}

/** Coroa rabiscada */
export function Crown({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 60" aria-hidden="true" className="piloto-draw" {...rest}>
      <path d="M8 50 L 6 16 L 26 32 L 40 6 L 54 32 L 74 16 L 72 50 Z" {...stroke(color)} strokeWidth={4.5} />
      <path d="M12 54 L 68 54" {...stroke(color)} strokeWidth={4.5} />
    </svg>
  );
}

/** Raio */
export function Zap({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 80" aria-hidden="true" {...rest}>
      <path
        d="M30 2 L 6 44 L 24 44 L 16 78 L 46 30 L 28 30 Z"
        fill={color ?? 'currentColor'}
        stroke={color ?? 'currentColor'}
        strokeWidth={3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Carinha feliz rabiscada */
export function Smiley({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="piloto-draw" {...rest}>
      <path
        d="M32 6 C 50 4, 60 18, 58 34 C 56 50, 44 60, 30 58 C 14 56, 4 44, 6 30 C 8 16, 18 8, 32 6 Z"
        {...stroke(color)}
      />
      <path d="M22 26 L 22 30" {...stroke(color)} strokeWidth={6} />
      <path d="M42 25 L 42 29" {...stroke(color)} strokeWidth={6} />
      <path d="M20 40 C 26 50, 40 50, 46 39" {...stroke(color)} />
    </svg>
  );
}

/** Três risquinhos de ênfase/movimento */
export function Dashes({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" className="piloto-draw" {...rest}>
      <path d="M8 30 L 22 30" {...stroke(color)} />
      <path d="M14 12 L 26 22" {...stroke(color)} />
      <path d="M14 48 L 26 38" {...stroke(color)} />
    </svg>
  );
}

/** Círculo rabiscado (para "circular" uma palavra) */
export function Ring({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 90" aria-hidden="true" className="piloto-draw" {...rest}>
      <path
        d="M30 20 C 80 2, 190 6, 192 40 C 194 72, 110 88, 50 82 C 4 76, -2 42, 36 26 C 60 16, 120 12, 166 20"
        {...stroke(color)}
        strokeWidth={4}
      />
    </svg>
  );
}

/** Sublinhado de pincel — usado dentro de `.piloto-underline` */
export function BrushUnderline({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" {...rest}>
      <path
        d="M4 24 C 60 12, 120 30, 180 18 C 240 6, 300 28, 396 14 L 394 26 C 300 40, 240 20, 180 30 C 120 40, 60 22, 6 34 Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
}

/** Mancha de tinta orgânica — fundo de seções */
export function Splat({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" {...rest}>
      <path
        d="M198 28 C 250 20, 300 50, 330 96 C 356 136, 392 168, 372 222 C 356 266, 318 286, 300 330 C 284 368, 240 388, 196 372 C 156 358, 118 372, 84 342 C 46 308, 10 272, 20 218 C 30 168, 60 138, 74 96 C 90 48, 146 34, 198 28 Z"
        fill={color ?? 'currentColor'}
      />
      <circle cx="356" cy="72" r="14" fill={color ?? 'currentColor'} />
      <circle cx="40" cy="330" r="10" fill={color ?? 'currentColor'} />
      <circle cx="330" cy="360" r="7" fill={color ?? 'currentColor'} />
    </svg>
  );
}

/** Blob de spray — versão "aerosol", com pontos ao redor */
export function Spray({ color, ...rest }: DoodleProps) {
  const dots: Array<[number, number, number]> = [
    [20, 60, 4],
    [280, 40, 5],
    [290, 200, 3],
    [30, 250, 6],
    [120, 288, 4],
    [250, 280, 3],
    [10, 150, 3],
  ];
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" {...rest}>
      <path
        d="M150 30 C 200 24, 250 60, 262 110 C 274 160, 250 220, 200 250 C 150 280, 80 262, 50 210 C 22 160, 40 100, 80 62 C 100 44, 120 34, 150 30 Z"
        fill={color ?? 'currentColor'}
      />
      {dots.map(([cx, cy, r]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={color ?? 'currentColor'} />
      ))}
    </svg>
  );
}

/** Balão de fala com rabicho — o texto entra por cima em `.bubble-text` */
export function SpeechBubble({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true" {...rest}>
      <path
        d="M40 14 C 100 4, 200 8, 226 30 C 244 46, 238 100, 218 122 C 200 142, 140 150, 90 146 C 74 160, 56 172, 36 176 C 46 160, 50 150, 48 140 C 20 130, 4 100, 8 62 C 12 36, 22 18, 40 14 Z"
        fill={color ?? '#FFF200'}
        stroke="#0E0416"
        strokeWidth={5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Ícone de "scroll" (mouse) com a rodinha piscando */
export function MouseScroll({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 36" aria-hidden="true" {...rest}>
      <rect x="3" y="2" width="18" height="32" rx="9" {...stroke(color)} strokeWidth={2.5} />
      <path d="M12 9 L 12 15" {...stroke(color)} strokeWidth={3}>
        <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

/** Setinha "→" com traço grosso, para CTAs e cards */
export function ArrowRight({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <path d="M4 12 L 19 12" {...stroke(color)} strokeWidth={3} />
      <path d="M13 6 L 19 12 L 13 18" {...stroke(color)} strokeWidth={3} />
    </svg>
  );
}

/** Check em bolinha para listas */
export function Check({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...rest}>
      <circle cx="16" cy="16" r="13" fill={color ?? '#54EFF7'} stroke="#0E0416" strokeWidth={3} />
      <path
        d="M9 17 L 14 22 L 24 11"
        fill="none"
        stroke="#0E0416"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Estrela pequena preenchida — avaliações */
export function StarSmall({ color, ...rest }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <path
        d="M12 2 L 15 9 L 22 9.5 L 17 14.5 L 18.5 22 L 12 18 L 5.5 22 L 7 14.5 L 2 9.5 L 9 9 Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  );
}

/** Wrapper posicional: `<Doodle style={{ top, left, width }}><Star /></Doodle>` */
export function Doodle({
  children,
  style,
  className = '',
}: {
  children: ReactNode;
  style: CSSProperties;
  className?: string;
}) {
  return (
    <div className={`piloto-doodle ${className}`.trim()} style={style} aria-hidden="true">
      {children}
    </div>
  );
}
