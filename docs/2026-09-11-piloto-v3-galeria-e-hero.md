# Piloto v3 — galeria e hero

## Goal

Iterar a rota `/piloto` após feedback: (1) trazer de volta a galeria da comunidade que abre a home original (obras reais dos professores, filtro por categoria, link para `/projeto/:id`); (2) fortalecer o hero inspirando-se na composição do original (colagem de 3 obras reais + cards flutuantes de prova social) sem perder a linguagem v2 (Daft, mancha, mascote pequeno, um acento) e sem exagerar.

## Scope

- In scope: nova seção `galeria` após o hero (masonry CSS, chips de categoria, 12–16 obras curadas de `allGalleryImages`); hero com colagem de obras reais + mascote menor + 1–2 cards flutuantes; `PILOTO_SECTIONS` ganha `galeria`; testes; QA 1440/390.
- Out of scope: reutilizar `GalleryMasonry`/`react-responsive-masonry` (estilo Chromia); dados novos; arquivos fora de `src/app/pages/piloto/`.

## Assumptions

- `allGalleryImages` (176 obras locais em `/teachers/gallery/*`) e `THEMATIC_CATEGORIES`/`matchesThematicCategory` são a fonte; a galeria do piloto mostra um recorte curado e linka para `/` (galeria completa) e `/projeto/:id`.
- Mascote continua presente no hero, mas menor e integrado à colagem (não mais o protagonista).

## Risks

- Hero mais denso pode voltar a parecer "cartoon" — mitigação: cards flutuantes escuros e sóbrios (como os do original), sem bordas grossas; poucas peças.
- Masonry CSS por `columns` quebra a ordem de leitura — aceitável para galeria visual; itens com `break-inside: avoid`.

## Execution Steps

1. RED: `PilotoGaleria.test.tsx` (≥12 obras locais, chips das 6 categorias, links `/projeto/:id`), ordem de seções com `galeria`, hero com ≥3 obras reais.
2. GREEN: `pilotoData.ts` (`getPilotoGallery`, `PILOTO_HERO_ART`), `PilotoGaleria.tsx`, hero v3, CSS.
3. `bun run test` verde.
4. QA visual 1440/390; corrigir pelo que se vê.
5. Mover plano; `bun run harness:validate`.

## Review Checklist

- UI: masonry sem buracos grandes em 390/1440; filtro com estado acessível (`aria-pressed`); imagens `loading="lazy"` fora da primeira dobra; contraste das legendas sobre imagem.
- Reliability: sem dependências novas; chunk lazy.

## Validation Log

- 2026-09-11 — RED: `PilotoGaleria.test.tsx` novo + `pilotoData.test.ts` (galeria curada, cobertura das 6 categorias, `filterGallery`, `PILOTO_HERO_ART`) + `PilotoHero.test.tsx` (3 obras reais linkadas, fcard com avatares) — 3 arquivos falhando pelos motivos esperados.
- 2026-09-11 — GREEN: `bun run test`: 25 arquivos / 68 testes, 0 falhas.
- 2026-09-11 — `bun run build`: exit 0; chunk lazy `PilotoPage-*.css` 29 KB (6,3 KB gzip) / `.js` 46 KB.
- 2026-09-11 — QA visual (Playwright) 1440×900 e 390×844: 0 erros de console; scrollWidth ≤ viewport; 64/64 reveals; 3 obras do hero e 16/16 da galeria carregadas; 7 chips de filtro. Evidência em `Novo estilo piloto comunidadedaarte.com/qa/piloto-v3-1440.png`, `piloto-v3-390.png`, `piloto-v3-hero.png` (v2 arquivada em `qa/v2/`).
- Bugs pegos no QA: (1) a animação de entrada `piloto-pop` termina em `transform: none` e anulava o `translateX(-50%)`/`rotate()` estáticos da colagem → criada `piloto-fade` (só opacidade) para elementos com transform próprio; (2) obra de trás à direita (galo, 400×400) ficava coberta e de baixa resolução → trocada por "Arcane" (800×1100), galo foi para a galeria; (3) masonry por `columns` deixava colunas desiguais com 16 alturas distintas → obras padronizadas em 4:5 (`object-fit: cover`), grade balanceada como os "Featured projects" da referência.

## Compound Opportunity

- Sem captura nova.

## Lessons Captured

- Animação de entrada com `fill-mode: both` que termina em `transform: none` sobrescreve qualquer `transform` estático do elemento — usar keyframes só de opacidade em elementos posicionados por transform.
- "Não exagerar" na prática: a arte real da comunidade como protagonista do hero e o mascote reduzido a adesivo deram peso sem voltar ao cartoon.

## Exit Criteria

- `/piloto` com galeria funcional (filtro + links) e hero com obras reais; testes/build/harness verdes; screenshots v3 em `qa/`.
