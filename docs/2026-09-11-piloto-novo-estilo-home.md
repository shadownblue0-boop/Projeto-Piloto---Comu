# Piloto novo estilo home

## Goal

Criar a rota `/piloto` — uma versão piloto da home de comunidadedaarte.com com uma direção visual nova (ilustrada, expressiva, autoral), inspirada na referência Pinterest fornecida, usando a fonte Daft Brush nos títulos, a paleta oficial da Comu e o mascote astronauta. O piloto serve para comparação direta com o estilo atual (Chromia) e decisão de aprovação; não substitui a home.

## Scope

- In scope:
  - Rota `/piloto` lazy em `src/app/routes.tsx`; exceção de header/footer em `src/app/App.tsx`.
  - Página isolada em `src/app/pages/piloto/` (página, CSS escopado `.piloto`, doodles SVG, dados derivados dos mocks existentes).
  - Assets: `public/fonts/DaftBrush.otf`, mascote reduzido em `public/piloto/`.
  - Seções: header próprio, hero (headline), vídeo, cursos, softwares, professores, bônus e descontos, comunidade/números, CTA, footer próprio.
  - Testes: rota registrada, módulo de dados, ordem das seções.
- Out of scope:
  - Alterar `HomePage`, tokens Chromia (`theme.css`), `AppHeader`/`AppFooter` ou componentes compartilhados.
  - Backend, dados reais de vídeo (usa embed placeholder configurável).

## Assumptions

- Daft Brush pode ser servida localmente como asset do site (licença de uso da marca).
- Conteúdo (cursos, professores, benefícios) vem dos mocks já existentes; nomes/capas são reais.
- Se o piloto for aprovado, a portabilidade para a home será um plano separado.

## Risks

- Fonte brush em tamanhos pequenos pode perder legibilidade → usar Daft só em títulos ≥ 28px; corpo em Inter/Neue Haas.
- Imagens do mascote são 5380px → reduzir com sharp antes de publicar (peso e LCP).
- Header/footer próprios podem divergir de navegação real → links apontam para rotas reais existentes.

## Execution Steps

1. Abrir plano + preparar assets (fonte, mascote reduzido).
2. RED: testes de rota, dados e ordem de seções.
3. GREEN: dados, rota, exceção em App.tsx, shell da página.
4. Sistema visual escopado (`piloto.css`) + `Doodles.tsx`.
5. Seções com conteúdo real.
6. QA visual (Playwright) em 1440 e 390px; correções.
7. `bun run test`, `bun run build`, mover plano, `bun run harness:validate`.

## Review Checklist

- UI: legibilidade da Daft, contraste WCAG AA nos CTAs, sem overflow horizontal em 390px, `prefers-reduced-motion` respeitado.
- Reliability: rota lazy com Suspense; nenhuma dependência nova.
- Security: sem inputs de usuário; embed de vídeo com `referrerpolicy` e `allow` mínimos.
- Data: nenhum dado novo; derivação dos mocks existentes.

## Validation Log

- 2026-09-11 — `bun run test`: 24 arquivos / 59 testes, 0 falhas (inclui rota /piloto, exceção de layout, dados, ordem de seções, doodles aria-hidden, 10 seções).
- 2026-09-11 — `bun run build`: exit 0; piloto emitido como chunk lazy separado (`PilotoPage-*.js` / `PilotoPage-*.css`).
- 2026-09-11 — `bun run harness:validate`: passed (25 required files, 61 markdown files).
- 2026-09-11 — QA visual (Playwright, Chromium) em 1440×900 e 390×844: 0 erros de console (1 warning pré-existente de meta PWA no index.html); scrollWidth ≤ viewport nos dois; 45/45 reveals disparados por scroll; contadores chegam a 4.800+/43/26/340+; menu mobile abre/fecha e navega por âncora.
- Evidência: pasta `qa/` do projeto do piloto (`Novo estilo piloto comunidadedaarte.com/qa/`): piloto-1440.png, piloto-390.png, piloto-390-hero.png, daft-brush-specimen.png.
- Bugs encontrados e corrigidos no QA: (1) `html-sections.css` estiliza `#professores` por ID → blindagem `#piloto #professores`; (2) `.piloto a { color: inherit }` vencia a cor dos componentes → `:where(.piloto) a`; (3) doodles de fundo (z 0) pintavam sobre texto estático → `.piloto-wrap { z-index: 1 }`; (4) `fetchPriority` → `fetchpriority` (React 18); (5) poster do vídeo era thumbnail de terceiros (Marvel Rivals, em `public/images/maxresdefault.webp`) → thumb de live da Comu.
- Pendência de conteúdo (não bloqueia): `PILOTO_VIDEO.youtubeId` vazio — o play abre o canal até existir o vídeo oficial.

## Compound Opportunity

- Decisão: sem captura nova em `docs/compound/` — o padrão "página-piloto isolada" (CSS escopado + exceção em App.tsx + blindagem de IDs) é único no repo até agora. Se um segundo piloto surgir, extrair como nota.

## Lessons Captured

- Página isolada dentro do app compartilha o CSS global: ids de seção reutilizados (`#professores`) colidem com regras por ID de outras páginas. Ou usar ids únicos, ou blindar com um id de raiz. Registrado inline no piloto.css; não abri nota em docs/compound porque o padrão de "página-piloto isolada" ainda é único no repo — se repetir, virar nota.
- Daft Brush é caixa-alta pura e perde legibilidade abaixo de ~24px: usar só em títulos/etiquetas; corpo em Neue Haas.

## Exit Criteria

- `/piloto` renderiza todas as seções com conteúdo real, sem erros de console.
- `bun run test`, `bun run build` e `bun run harness:validate` com exit 0.
- Screenshots 1440/390 anexados ao Validation Log.
