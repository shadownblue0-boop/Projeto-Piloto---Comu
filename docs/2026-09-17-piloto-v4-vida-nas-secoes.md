# Piloto v4 — "Vida nas seções"

Plano leve (quick-plan) a partir do feedback de 2026-09-17: *"o site está meio morto, as seções não têm vida; softwares pobre; vídeo não funciona; galeria em toda a largura; hero bagunçada; animação no fundo da hero; se aprofundar em detalhes de cada seção".*

Direção mantida: identidade v2/v3 aprovada (fundo preto neutro, cards planos, um acento amarelo, Daft nos títulos, rabiscos de linha fina, mascote pequeno). O que muda é **movimento com intenção** e **conteúdo onde a seção é rasa**.

## Diagnóstico (evidência em `qa/v4-diag/*.png`)

### Global — por que parece morto
- Só existem 2 movimentos na página inteira: o mesmo *fade + sobe 22px* em tudo (`.piloto-reveal`) e o *hover sobe 4px* nos cards. Depois que a seção entra, nada mais se move.
- Fundos chapados: manchas roxas estáticas a 30–50% de opacidade. Nenhuma camada ambiente.
- Todas as seções usam o mesmo molde (eyebrow → título → lead → botão ghost à direita → grade de cards). Ritmo monótono; só a faixa de Softwares muda de fundo.
- Header sem estado (nenhum link marca a seção atual). O sublinhado de pincel é um `path` preenchido: nunca "se desenha" (o CSS `piloto-draw` existe, mas só vale para traços).

### Hero — por que está bagunçada
- A coluna de arte tem **8 elementos competindo**: 3 obras + mancha roxa + mascote + 2 cards flutuantes + 2 sparkles. Os cards cobrem cantos das obras (`+4.800` sobre o Blue Warrior; `Galeria viva` sobre a Arcane), o mascote cobre a arara, a mancha é um blob amorfo, a obra da direita encosta na borda e é cortada em 1440.
- A coluna de texto tem 4 elementos secundários (Ei artista, linha de áreas, botão ghost, "Rola pra ver") diluindo a headline.
- Entrada genérica (tudo pop-up com delays); sem movimento ambiente.
- Mobile: card `+4.800` cortado no topo direito, mascote sobre a arara.

### Galeria
- Presa ao `wrap` de 1200px: 4 colunas × recorte uniforme 4:5 → vira grade regular (não é masonry) com 16 obras em **2.061px de altura**. Mostra pouco e ocupa muito.
- Filtro sem transição (as obras somem/aparecem); legenda sempre visível escurece a base de todas as imagens; "Ver galeria completa" aponta para a própria página.

### Vídeo
- `youtubeId` vazio: o play abre o canal em outra aba (= "não funciona"). O poster é o thumb de uma live com "LIVE 06 VINICIUS SILVA" escrito — lê-se como vídeo aleatório. O título "A Comu em 2 min" promete um vídeo que não existe.
- Verificado: o canal (@comunidadedaarte, `UCKGl_wlpd6FYS3gUE8RGMVw`) **não tem vídeo institucional**; a home em produção não embeda vídeo nenhum. Conteúdo real disponível: lives de aula com professores e tutoriais (lista abaixo).

### Cursos
- Sólida, mas estática: capa + tag + horas; hover = zoom + seta. Sem nível, sem professor visível, sem "o que você faz". Chips de categoria no rodapé são decorativos (não clicam).

### Softwares — por que está pobre
- 6 azulejos com siglas em Daft ("PS/AI/PR/CS/KR/CC" — "PR" lê Premiere, não Procreate), tagline minúscula e **668px de faixa para ~150px de conteúdo**. Nenhuma prévia das trilhas (as capas Boas Vindas existem no projeto original, com a arte e o ícone real de cada software), nenhum dado (nível/tempo/alunos), nada interativo.

### Professores
- Boa estrutura; numeração "01" apagada; fotos 5:4 estáticas; **nenhuma ligação entre o professor e a arte dele** (a tese da seção é "quem ensina vive disso").

### Bônus
- Boa. Detalhes: "ACESSO VIP" quebra em 2 linhas na coluna do valor; código do cupom não copia; parceiro só em texto; os 4 cards de extras são o trecho mais genérico da página (ícone + texto).

### Comunidade
- Contadores animam (bom). Os 4 "polaroids" são estáticos, 2 são imagens genéricas de `/images/GRID`. Uma seção chamada "galeria viva" sem nada vivo.

### CTA
- Composição ok; falta um momento memorável — o mascote segura uma lanterna e nada acende.

### Rodapé / header
- Etiqueta ainda diz "v2". Header sem scrollspy.

## Plano v4 (execução sequencial, uma seção por vez, TDD por arquivo, QA visual ao final de cada passo)

Princípio por seção: **1 camada ambiente** (algo que se move sem interação) + **1 interação assinatura** (algo que responde) + **entrada com caráter** (não o mesmo fade-up) + **conteúdo** onde está raso.

### 0. Base compartilhada
- Camada de "tinta" ambiente fixa atrás de tudo: 2–3 blobs roxos grandes, desfocados, à deriva em keyframes de 24–40s (só `transform`), opacidade ~0,35 + o grão atual. Desliga em `prefers-reduced-motion`.
- `Reveal` ganha variantes: `up` (atual), `wipe` (clip-path esquerda→direita, para títulos), `scale` (cards) e `stagger` automático nos filhos.
- Sublinhado de pincel **se pinta** ao revelar (clip-path inset 100%→0 em 0,7s); Ring/Squiggle/CurvyArrow desenham o traço.
- Header: scrollspy (`aria-current` no link da seção visível) + estado `is-scrolled` (mais compacto e opaco após 40px). Botões: seta desliza no hover, `:active` comprime 2%.
- Parallax leve nas manchas de fundo (1 listener passivo → `--scroll-y`).

### 1. Hero (reconstrução da coluna de arte + entrada + fundo)
- Fundo animado: blobs roxos à deriva + uma **pincelada diagonal** (SVG, roxo profundo) que se desenha atrás da colagem no carregamento (1,4s).
- De 8 para **5 elementos**: 3 obras + 1 card flutuante (`+4.800`, avatares) + mascote como adesivo no canto da obra da frente. Sai o card "Galeria viva" (o botão "Ver a galeria" já existe), saem os sparkles, a mancha amorfa vira o fundo animado.
- Geometria com margem: trás-esquerda `left 2% / top 14% / 40% / -5°`, trás-direita `right 2% / top 22% / 40% / +4°`, frente `48%` centrada; nada encosta na borda; o card flutuante só sobrepõe o canto inferior da obra da esquerda (como no original).
- Entrada "distribuindo as cartas": as 3 obras nascem empilhadas no centro e abrem em leque até a posição final (0,9s, 150ms entre elas; o transform estático fica num wrapper, a animação no filho — sem o conflito que exigiu o `piloto-fade`). Headline entra em **wipe de pincel** linha a linha; o sublinhado se pinta depois da 2ª linha; lead e CTAs sobem.
- Ambiente: depois da entrada, cada obra flutua 6–8s em fases diferentes; no hover a obra vem à frente (escala 1,03) e as irmãs escurecem levemente.
- Texto: sai a linha de áreas (o letreiro já lista), fica "Ei, artista", h1, lead, 2 CTAs e o "rola pra ver".
- Mobile: leque compacto (`aspect-ratio 1/0.8`), card flutuante escondido < 640px, mascote escondido, entrada simplificada.

### 2. Galeria (full-bleed + masonry real + mais obras)
- O masonry sai do `wrap`: `width: 100vw` (6 colunas ≥1440, 5 até 1100, 4 até 760, 3 até 480, 2 abaixo), gap 10px, **proporções naturais** (800×960…1280 como o original) → masonry de verdade. Cabeçalho e chips continuam no wrap.
- Snapshot cresce de 16 para **~42 obras** (rodízio por professor como `buildAllGalleryImages` do original, dados reais de `mockPublicProfileData.ts`, imagens copiadas de `CDA-GERAL/public/teachers/gallery` — ~6 MB). "176 obras" segue verdadeiro.
- Legenda escondida por padrão, sobe no hover/foco; troca de filtro anima (saída/entrada com stagger); botão **"Ver mais 12"** local em vez do link para a própria página; "Ver galeria completa" → `/galeria`.

### 3. Vídeo → player que funciona + conteúdo real
- Embed real (youtube-nocookie, autoplay no clique) de um vídeo do canal; poster = thumb real do mesmo vídeo (`i.ytimg.com`). Copy vira **"Aula aberta: veja como a gente ensina"** (não existe vídeo institucional — quando existir, é só trocar o ID em `PILOTO_VIDEOS`).
- Faixa com 3 outros vídeos reais (thumb + título + "Aula #NN"); clicar troca o vídeo principal. Play com anel pulsante (ambiente); fundo do frame com tinta roxa.
- Candidatos reais (todos do canal): `2orgnDMwRus` Esboço no realismo com lápis de cor · Aula #42 · `-slsR01WxtA` Dicas de perspectiva no Procreate · Aula #33 · `1ZMxmti4YG0` Adicionando massa na anatomia humana · Aula #39 · `FCfK-g9Mwow` Composição e alterações na tela (óleo) · Aula #41 · `DszgCtuN1XQ` Estudo de nariz · Aula #32 · `wb778XDCRjQ` Como pintar uma aquarela do zero.

### 4. Cursos (detalhes)
- Primeiro card em destaque (2 colunas, capa maior, subtítulo, avatar do professor, nível); os 7 restantes na grade. Hover revela subtítulo + professor (altura animada) e a capa "pana" levemente; tilt 3D só no destaque.
- Chips do rodapé viram **filtro real** dos 8 cards ("Tudo" reseta). `level` entra no snapshot.

### 5. Softwares (reconstrução: "switcher" interativo)
- Esquerda: 6 ferramentas como abas (`role=tablist`), ícone estilo app real (quadrado arredondado, gradiente da cor da marca, sigla em sans bold — "Pc" para Procreate), nome + tagline. Direita: card grande de prévia que troca com a aba — **capa Boas Vindas real** (copiada do original, reduzida para ~600px/webp), título, subtítulo, 3 fatos (nível · tempo · alunos), "o que você aprende" (da descrição) e CTA "Começar trilha".
- Interação: clique/teclado (roving tabs) e **auto-avanço a cada 5s** quando sem hover/foco, com barra de progresso na aba ativa (o mesmo "slideshow" que dá vida ao hero original); prévia faz crossfade + capa desliza. Mobile: abas em faixa horizontal com scroll-snap acima da prévia.
- Textura: pattern da marca (`PATTERN BRANCO PNG.png`) a ~4% sobre a faixa.

### 6. Professores (a arte atrás do rosto)
- Hover/foco: a foto faz crossfade para um **mosaico 2×2 das obras reais** do professor com dica "ver galeria"; numeração vira amarela. `works[]` entra no snapshot (2–4 obras por professor, do mesmo pool copiado).
- Entrada alternada (ímpares da esquerda, pares da direita).

### 7. Bônus (detalhes)
- Código do cupom vira botão **copiar** (clipboard, "Copiado ✓" por 1,5s, flash amarelo). Coluna do valor com **picote de cupom** (dois recortes via mask) e "ACESSO VIP" sem quebra. Os 4 extras viram uma faixa compacta "Tudo incluso" com checks (menos genérico).

### 8. Comunidade (galeria viva, literalmente)
- Coluna direita vira **duas colunas de obras reais rolando** continuamente em sentidos opostos (keyframes 40s/50s, listas duplicadas), pausa no hover, máscara de fade em cima/embaixo; cada obra linka para o projeto. Sem dados inventados de "publicado há X min".

### 9. CTA (holofote)
- A lanterna do mascote **acende**: gradiente radial (amarelo-branco 10% + roxo) segue o ponteiro sobre a caixa (`--mx/--my` via pointermove com rAF), posição padrão na lanterna. Reduced-motion → brilho fixo. Mascote entra com balanço; a seta curva se desenha ao revelar.

### 10. Header / letreiro / rodapé
- Scrollspy + compactação; letreiro com fade nas bordas e pausa no hover; etiqueta "Piloto de estilo v4".

### Verificação
- Por passo: `npm test` verde (testes co-localizados, RED→GREEN) e captura Playwright da seção em 1440 e 390; filmstrip (4 instantes) para a entrada do hero e o auto-avanço de Softwares.
- Final: `npm run build`, capturas 1440/1920/390 em `qa/v4/`, sem overflow horizontal, console limpo, `prefers-reduced-motion` verificado, menu mobile.

### Ordem
1 base → 2 hero → 3 galeria (+cópia de obras) → 4 vídeo → 5 softwares (+capas) → 6 professores → 7 cursos → 8 bônus → 9 comunidade → 10 CTA → 11 header/letreiro/rodapé → 12 QA final + docs.

---

## Executado (2026-09-17)

Todos os 12 passos do plano foram implementados e verificados no navegador. 72 testes verdes, build de produção ok (CSS 50 kB / JS 249 kB, gzip 10 kB / 77 kB).

| Seção | O que ganhou |
|---|---|
| Base | Camada ambiente de tinta roxa à deriva (24–52s), variantes de entrada (`wipe`, `scale`, `left`, `right`, `stagger`), sublinhado de pincel que se pinta, header com scrollspy e compactação, seta do botão que anda no hover |
| Hero | Colagem recomposta em slot + cartão: entrada "distribuindo as cartas", flutuação infinita e hover que traz a obra à frente e escurece as irmãs; headline pintada linha a linha; de 8 para 5 elementos; nada sobreposto |
| Galeria | Full-bleed (6 colunas em 1440), proporções reais das obras, 48 obras no snapshot com 24 no primeiro lote e "Ver mais 12", legenda só no hover, cascata na troca de filtro |
| Vídeo | Player real (youtube-nocookie) com 4 aulas do canal, faixa que troca o vídeo principal, anel pulsante no play, thumbs reais baixadas |
| Cursos | Primeiro card em destaque (capa recortada sem a faixa do poster), chips que filtram de verdade, subtítulo que abre no hover, nível à mostra |
| Softwares | Abas `role=tablist` com teclado e auto-avanço de 5,2s com barra de progresso; prévia com capa real da trilha, nível, carga, alunos e o que se aprende; textura da marca no fundo |
| Professores | Mosaico 2×2 com as obras reais do professor no hover, numeração que acende, entrada alternada |
| Bônus | Código do cupom copia com um clique (com `aria-live`), picote de cupom, "VIP" sem quebra, cards da mesma altura |
| Comunidade | Mural vivo: duas colunas de obras reais rolando em sentidos opostos, pausa no hover, fade nas pontas |
| CTA | Holofote do mascote que segue o ponteiro (`--mx/--my` em rAF), com posição de repouso na lanterna |

### Armadilhas encontradas (e como foram resolvidas)

1. **IntersectionObserver não dispara em elemento com `clip-path` zerado.** A primeira versão do `wipe` recortava o próprio nó observado: área visível 0 → `isIntersecting` falso para sempre → o reveal nunca acontecia. O recorte foi movido para o título (filho), e o nó observado ficou sem clip.
2. **`animation-fill-mode: both` mata o `:hover`.** A entrada em leque precisa terminar no `transform` estático da carta; com `both` o elemento congela e o hover não consegue sobrescrever. Usar `backwards`.
3. **`1fr` não encolhe abaixo do tamanho intrínseco da imagem.** O mosaico dos professores estourava a caixa; `minmax(0, 1fr)` resolve.
4. **Regra de `z-index` tirou o rabisco do CTA do posicionamento absoluto**, e ele virou uma coluna da grade, empurrando o layout. A regra passou a excluir `.piloto-doodle`.
5. **Movimento reduzido deixava os títulos invisíveis**, porque o recorte vive no filho e a lista do `@media` só citava o pai.

### Continua pendente

- Não existe vídeo institucional da Comu; a seção mostra aulas reais do canal. Quando houver, basta pôr o ID no topo de `PILOTO_VIDEOS`.
- Links internos (`/cursos`, `/galeria`, `/projeto/:id`, `/student/courses/...`) caem na própria página neste projeto independente.
- Ao portar de volta para o app, trocar as constantes de snapshot pelos getters dos mocks (comentário no topo de `pilotoData.ts`).

---

## Ajuste de fundo (v4.1) — superfícies no lugar da luz roxa

Feedback do usuário depois da v4: *"o resto da página ficou com um fundo muito repetitivo... não com essa luz roxa, porque isso traz um pouco de cara de site de IA. Talvez uma seção ou outra tenha um fundo um pouco mais clean mas que ainda tem um efeito por trás, discreto. Mas mantenha o fundo da seção de softwares, ficou muito bom."*

**O que saiu.** A camada ambiente (`AmbientPaint`, três manchas roxas à deriva atrás da página inteira) foi removida junto com todas as outras fontes de brilho colorido: a mancha de spray em Professores, a mancha em Comunidade, o gradiente roxo do Bônus, o brilho por trás da foto do professor (invisível, só acendia no carregamento) e o roxo do facho do CTA, que virou luz quente de lanterna.

**O que entrou: três superfícies monocromáticas que se alternam.** O ritmo do fundo passou a vir de matéria, não de cor — o amarelo continua sendo o único acento da página.

| Superfície | O que é | Onde |
|---|---|---|
| **Papel** | Preto neutro + grão de papel (subiu de 10% para 14%) | Galeria, Professores, Comunidade, CTA |
| **Painel** | Plano elevado com borda de 1px; no vídeo, com grade fina de mesa de luz | Vídeo, **Softwares (mantido como estava)** |
| **Marcado** | Pincelada branca a 7,5%, presa à viewport — o traço passa por trás da seção conforme a pessoa rola, sem JavaScript — e régua de marcas na divisa de cima | Hero, Cursos, Bônus |

A pincelada é o mesmo traço do sublinhado da marca, em escala de parede. Cada seção marcada mostra um trecho diferente dele (`--sup-y` em 16%, 52% e 86%), senão a mesma forma se repetiria de seção em seção, que era exatamente o defeito em correção. A régua é opcional (`piloto-sup--regua`): o hero não a recebe porque já tem a borda do header logo acima.

Fundo preso à viewport é movimento, então ele vira estático em `prefers-reduced-motion` e em telas até 860px, onde `background-attachment: fixed` engasga e o iOS ignora.

**Verificação:** 71 testes verdes (o teste da página agora trava a decisão: sem `piloto-ambient`, sem roxo no DOM, e pelo menos dois painéis e uma superfície marcada), build ok, sem rolagem horizontal em 1440 e 390, console limpo, títulos visíveis com movimento reduzido.

---

## Ajuste v4.2 — ícones reais e destaque nos bônus

Feedback: usar os ícones reais dos aplicativos na seção de Softwares; deixar os descontos mais destacados (as cores brigavam com o fundo preto); dar mais peso aos quatro benefícios extras e usar melhor o espaço da seção. O usuário indicou duas pastas com arte própria (`D:\ARTEFATOS CAPA` e `D:\Banners TOPO - Comu\Corte`), sugerindo recortar do banner a parte com as capas dos artefatos.

**Softwares.** As siglas em Daft ("Ps/Ai/Pc/Cs/Kr/Cc") viraram os ícones reais dos seis aplicativos, normalizados em tiles de 128px em `public/brand/apps/`. Origem de cada um: Photoshop e Illustrator dos ícones oficiais no Wikimedia Commons; Procreate do ícone oficial da App Store (512px); CapCut e Clip Studio Paint do Commons; Krita do ícone Calligra Krita, composto sobre um tile escuro porque é um símbolo solto, sem tile próprio. Uso nominativo: os ícones identificam o software que a trilha ensina.

**Bônus — descontos.** O valor era texto amarelo sobre card preto, sobre página preta: sumia. Virou talão sólido amarelo com texto preto, ocupando a coluna inteira do cupom, com o picote recortado na divisa. O card subiu de `--p-bg-2` para `--p-bg-3` com borda mais visível, e ganhou um brilho amarelo discreto no hover.

**Bônus — tudo incluso.** Os quatro cartõezinhos de ícone viraram um bloco de duas colunas: a **Biblioteca** ocupa uma vitrine com a faixa de artefatos reais (recorte do banner que o usuário indicou, da região acima do letreiro "ARTE FATOS", em `public/piloto/biblioteca-artefatos.jpg`), título em Daft, o que a pessoa baixa e quatro chips (Ebooks, Brushes, Packs 3D, Referências). Desafios, Certificado e Comunidade ficam à direita como lista, com ícone maior e deslize no hover.

**Verificação:** 73 testes verdes (o teste dos softwares agora exige `/brand/apps/*.png` em vez de sigla; o do bônus exige a vitrine com a imagem dos artefatos), build ok, sem rolagem horizontal em 1440 e 390, nenhuma imagem quebrada.

**Correção (mesma rodada):** os três ícones de linha em quadradinho amarelo — troféu, medalha e pessoas — foram apontados pelo usuário como "cara de site feito por IA", e estavam certos: é o carimbo genérico. Foram substituídos por material real da Comu: **Desafios** mostra a arte de uma capa de desafio de verdade (recorte de `capa-desafio-1.png`, acima do título impresso); **Certificado** usa o selo da marca, recolorido em amarelo a partir do `SELO TRANSPARENTE BRANCO.png` (o `tint` do sharp não recolore arte transparente; o jeito certo é usar o canal alfa como máscara sobre uma camada amarela chapada) e que gira de leve no hover; **Comunidade** mostra três rostos reais de professores, sobrepostos, que se abrem no hover. O teste agora falha se voltar a existir qualquer `<svg>` nessa lista.

Armadilha encontrada: a lista estilizava `span` por elemento (`.piloto-incluso__lista span`, 0-1-1), o que vencia as classes dos visuais (0-1-0) e empilhava os avatares na vertical. As regras dos visuais passaram a ser prefixadas pela lista.

---

## v4.3 — Artefatos e perfil do professor (páginas internas)

Pedido: o card da Biblioteca precisa de um botão que leve aos itens (ebooks, playbooks, brushes, packs); os cards de professor precisam abrir uma página com as informações e o portfólio completo, como no site original; "Biblioteca" passa a se chamar **Artefatos**. O original (CDA-GERAL) já tem os dados, para recriar no nosso estilo, não copiar.

**Dados (snapshot de 2026-09-17, extraídos do app com esbuild):**
- `artefatosData.ts`: 25 artefatos — 12 ebooks e 8 playbooks de `mockEbooksData.ts` (capas reais em `/materiais`), mais 3 packs 3D e 2 packs de brushes com as capas feitas pelo usuário (`D:\ARTEFATOS CAPA`). Os textos dos packs foram escritos a partir do que cada capa mostra.
- `professoresData.ts`: os 6 professores em destaque na home, com bio, áreas, trajetória, rede social e o portfólio inteiro (104 obras) de `mockPublicProfileData.ts`. 69 imagens novas copiadas e redimensionadas.

**Rotas** (`src/App.tsx`): `/artefatos`, `/artefatos/:slug`, `/professor/:id`; `/mentoria/mentor/:id` (rota do app real) aponta para o mesmo perfil. O resto continua caindo na home.

**Casca** (`PilotoShell`): header e rodapé da home na mesma raiz `.piloto`; fora da home, as âncoras viram `/#secao`; título do documento e rolagem ao topo a cada troca de rota. Header e rodapé ganharam o link **Artefatos**.

**Artefatos**: estante agrupada por tipo (contagem no topo, chips que filtram), cards com capa real, tipo, nível e tema; detalhe com capa fixa na rolagem, "o que tem dentro", "para quem é", tags, CTA e "mais do mesmo tipo".

**Professor**: capa com a arte dele fundindo com o papel, retrato, nome em Daft pintado, área, frase, números (obras, cursos, alunos, desde); painel "Sobre" com bio, redes reais, domínios e trajetória em linha do tempo; portfólio completo em masonry full-bleed com filtro por categoria e **lightbox** (Esc, setas, clique fora); outros professores no fim.

**Armadilha nova:** dentro de `.piloto` cada filho direto abre contexto de empilhamento (`position: relative; z-index: 1`), então o header sticky cobria o botão de fechar do lightbox por mais alto que fosse o z-index. Solução: `createPortal` para o `body`.

**Verificação:** 110 testes (rotas, dados com existência das imagens no disco, páginas, shell, lightbox como botão e não link), build ok, sem rolagem horizontal em 1440 e 390, caminhos home → card → página confirmados no navegador.
