# João Neiva — Personal & Strategic Advisor

Site pessoal de uma página (com duas subpáginas dedicadas) para João Neiva,
Personal & Strategic Advisor. Publicado em **[jneiva.com](https://jneiva.com)**.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion (animações de entrada)
- Lucide React (ícones)

Sem servidor: o site é gerado como ficheiros estáticos e publicado na
Cloudflare (Workers, com ficheiros estáticos — ver `wrangler.jsonc`).

## Estrutura

Todo o código do projeto vive dentro de **`joao-neiva-website/`**. É essa a
pasta a abrir num editor e onde correr os comandos abaixo.

O site tem três páginas, cada uma com o seu próprio `index.html` (modo
multi-página do Vite, configurado em `vite.config.ts`):

| Página | Ficheiro de entrada |
|---|---|
| Principal | `index.html` |
| Sessões Online | `sessoes-online/index.html` |
| Testemunhos | `testemunhos/index.html` |

O conteúdo de texto do site (textos, dados de contacto, etc.) está
centralizado em `src/data/site.ts`.

## Desenvolvimento

```bash
cd joao-neiva-website
npm install
npm run dev
```

Outros comandos úteis, correndo sempre dentro de `joao-neiva-website/`:

```bash
npm run build   # gera o site estático em dist/
npm run lint    # oxlint
```

## Deploy

O deploy é automático: cada `push` para `main` publica uma nova versão no
Cloudflare Workers, através de CI ligada a este repositório GitHub.

Configuração relevante:

- **`wrangler.jsonc`** — publica a pasta `dist/` como ficheiros estáticos.
- **`.nvmrc`** — fixa Node 22 (exigido pelo Vite 7).
- No projeto Cloudflare, o **Path** de build está definido como
  `joao-neiva-website`, já que o repositório tem mais do que este projeto
  na raiz.
- Domínio ligado via **Custom Domains** no projeto Cloudflare (não via
  registos DNS manuais).

## Nota sobre este repositório

Este repositório (`~/code` na máquina de desenvolvimento) partilha pasta
com outros projetos locais não relacionados. O `.gitignore` na raiz
restringe o que é rastreado apenas a `joao-neiva-website/`, a este
`README.md` e a si próprio.
