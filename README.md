# Piloto: novo estilo visual da home (Comunidade da Arte)

Projeto independente, só com a página piloto. Não depende do app CDA-GERAL.

## Rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm test         # vitest (renderização estática das seções)
npm run build    # gera dist/
```

## Fontes

A Daft Brush (títulos) está no repositório em `public/fonts/DaftBrush.otf` e vai
para o site publicado. A Neue Haas Display (texto corrido) é da Monotype e fica
fora do Git: sem ela o site usa a sans do sistema. Para ver o piloto completo,
coloque estes arquivos em `public/fonts/`:

```
public/fonts/NeueHaasDisplayLight.ttf
public/fonts/NeueHaasDisplayRoman.ttf
public/fonts/NeueHaasDisplayMediu.ttf
public/fonts/NeueHaasDisplayBold.ttf
public/fonts/NeueHaasDisplayBlack.ttf
```

Os nomes precisam ser exatamente esses (são os que `src/styles/fonts.css` declara).
O `.gitignore` deixa só a Daft Brush entrar nessa pasta.

## Publicação

O site está na Vercel (https://projeto-piloto-comu.vercel.app), publicado a cada
push na `main`. O `vercel.json` reescreve toda rota para `index.html`, senão
`/artefatos` e `/professor/:id` dão 404 quando abertos direto pelo endereço.

## Estrutura

- `src/app/pages/piloto/`: a página (`PilotoPage.tsx`), seções, doodles e `piloto.css` (tudo escopado em `.piloto`).
- `src/app/pages/piloto/pilotoData.ts`: conteúdo da home. Cursos, professores, softwares, vídeos e galeria são um snapshot do catálogo do app.
- `src/app/pages/piloto/artefatosData.ts` e `professoresData.ts`: estante de artefatos (25) e perfis com portfólio (6 professores, 104 obras), também snapshot.
- `src/app/pages/artefatos/` e `src/app/pages/professor/`: páginas internas (`/artefatos`, `/artefatos/:slug`, `/professor/:id`), montadas sobre `PilotoShell`.
- `src/app/data/explorerData.ts`: categorias temáticas dos filtros da galeria (snapshot).
- `src/app/hooks/`: `useInView` (reveals) e `useScrollSpy` (seção ativa no header).
- `src/styles/`: preflight do Tailwind v4 (mesmo reset do app) e declarações das fontes.
- `public/`: mascotes, capas, fotos e obras usadas na página; `public/brand/apps/` tem os ícones reais dos softwares.
- `docs/`: planos e registro de execução das versões v1 a v4 (o de v4 traz o diagnóstico e as armadilhas encontradas).

Ficam só na máquina local (ignorados): `qa/` (capturas), `Fonte/`, `Identidade Visual/` e `Referencia Pinterest/` (material bruto).

## Pendências

- Não existe vídeo institucional da Comu: a seção "Aula aberta" usa aulas reais do canal. Quando houver, basta pôr o ID no topo de `PILOTO_VIDEOS`.
- Os links para rotas do app real (`/cursos`, `/galeria`, `/projeto/:id`, `/student/courses/...`) caem na home. Artefatos e perfil de professor já existem aqui.
- Ao portar para o app, trocar as constantes de snapshot em `pilotoData.ts` pelos getters dos mocks (comentário no topo do arquivo).
