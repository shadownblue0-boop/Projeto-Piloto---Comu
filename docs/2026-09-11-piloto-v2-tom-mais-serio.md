# Piloto v2 — tom mais sério

## Goal

Iterar a rota `/piloto` após feedback ("puxou muito pro cartoon"): manter a direção ilustrada/expressiva da referência (Daft nos títulos, mancha de tinta + mascote, rabiscos de linha, sublinhado de pincel) e trazer seriedade para a interface — fundo preto neutro, cards escuros sem contorno/sombra dura/inclinação, um único acento (amarelo) e doodles finos e escassos.

## Scope

- In scope: reescrever `piloto.css` (tokens, botões, cards, seções); podar doodles e elementos lúdicos nas seções; ajustar copy do hero; QA 1440/390.
- Out of scope: estrutura de seções, dados, rota, testes de conteúdo (permanecem); qualquer arquivo fora de `src/app/pages/piloto/`.

## Assumptions

- Amarelo `#FFF200` assume o papel do lime da referência (único acento de UI); roxo vira cor de ilustração/glow, ciano e laranja só em rabiscos finos.
- Mascote só no hero em tamanho grande; no CTA fica pequeno (como o personagem do rodapé da referência).

## Risks

- Ir longe demais e perder a diferença em relação ao Chromia (que já é dark e sóbrio). Mitigação: manter Daft grande, mancha, mascote, sublinhados e rabiscos — a expressividade fica na tipografia e na ilustração.

## Execution Steps

1. Reescrever `piloto.css` com o novo sistema (tokens neutros, `.piloto-card` plano, botões sem contorno).
2. Podar seções: remover marquee amarelo/rotação, estrelas preenchidas, coroa, carinha, raio, cupom picotado, polaroids, ícones tortos; trocar título amarelo por branco + sublinhado.
3. `bun run test` verde.
4. QA visual 1440/390; corrigir pelo que se vê.
5. Mover plano para completed; `bun run harness:validate`.

## Review Checklist

- UI: contraste AA nos CTAs (amarelo sobre preto ok; ghost com borda visível); sem overflow em 390px; `prefers-reduced-motion`.
- Reliability: sem dependências novas; chunk continua lazy.

## Validation Log

- 2026-09-11 — `bun run test`: 24 arquivos / 59 testes, 0 falhas (testes de conteúdo/estrutura não dependem do estilo; continuam válidos).
- 2026-09-11 — `bun run build`: exit 0; chunk lazy `PilotoPage-*.css` 24 KB (5,5 KB gzip) / `.js` 42 KB.
- 2026-09-11 — QA visual (Playwright, Chromium) 1440×900 e 390×844: 0 erros de console; scrollWidth ≤ viewport; 45/45 reveals. Evidência em `Novo estilo piloto comunidadedaarte.com/qa/piloto-v2-1440.png` e `piloto-v2-390.png` (v1 arquivada em `qa/v1/`).
- O que mudou de v1 → v2: fundo `#0b0b10` neutro (era roxo-tingido); `.piloto-sticker` (borda 3px + sombra dura + rotação) → `.piloto-card` (borda 1px, plano); um acento (amarelo) em vez de quatro; título do hero branco + sublinhado (era amarelo com sombra roxa); marquee sem fundo/rotação; doodles preenchidos (estrela, coroa, carinha, raio) removidos — só linha fina; cupons picotados → cards escuros; polaroids → grade; ícones de software em linha (sem tiles tortos); mascote pequeno no CTA; pattern tipográfico removido.

## Compound Opportunity

- Sem captura nova (mesma justificativa do plano v1).

## Lessons Captured

- Ao adaptar uma referência "expressiva", separar o que é expressivo na *ilustração* (personagem, mancha, brush) do que é sóbrio na *interface* (cards, botões, cor de fundo). Copiar a energia da ilustração para a UI foi o que virou cartoon.

## Exit Criteria

- `/piloto` visivelmente mais sóbrio, mantendo Daft, mascote, mancha e rabiscos; testes/build/harness verdes; screenshots v2 em `qa/`.
