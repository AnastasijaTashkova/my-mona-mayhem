<p align="right">🌐 English | <a href="README.es.md">Español</a> | Português (Brasil) | <a href="README.ko.md">한국어</a></p>

<div align="center">

# 🎮 Mona Mayhem

### Transforme gráficos de contribuições do GitHub em uma disputa de arcade.

Com o GitHub Copilot, construa passo a passo uma arena retrô que compara dois usuários do GitHub. Escolha como trabalhar: use o VS Code ou encare o desafio no terminal com o Copilot CLI.

<p>
   <a href="workshop/pt_BR/00-overview.md"><strong>Comece o workshop →</strong></a>
   &nbsp;·&nbsp;
   <a href="https://copilot-dev-days.github.io/mona-mayhem/">Abra o site do workshop</a>
</p>

**~60 minutos** &nbsp;·&nbsp; **7 partes** &nbsp;·&nbsp; **Duas formas de construir**

</div>

<p align="center">
   <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Arena retrô de batalha de contribuições do GitHub" width="900" />
</p>

<p align="center"><em>A arena de batalha de contribuições que você vai construir durante o workshop.</em></p>

## Escolha seu jogador

As duas trilhas seguem o mesmo projeto e as mesmas partes do workshop. Escolha o ambiente em que prefere trabalhar:

| VS Code | Copilot CLI |
|---------|-------------|
| Explore com Chat, planeje com Plan Mode, construa com Agent Mode e aprimore com agentes em segundo plano e revisões integradas ao editor. | Trabalhe no terminal com `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` e `/review`. |

## Seu percurso de construção

Comece com um plano e transforme o projeto inicial em uma arena de batalha de gráficos de contribuições. Ao longo do caminho, pratique como fornecer contexto útil do projeto ao Copilot, definir uma implementação antes de programar, iterar no design e revisar o resultado.

| Parte | Missão | O que você vai fazer |
|------|--------|----------------------|
| [00 · Visão geral](workshop/pt_BR/00-overview.md) | Escolher sua trilha | Objetivos de aprendizagem e preparação do workshop |
| [01 · Configuração](workshop/pt_BR/01-setup.md) | Definir o contexto | Instruções, permissões e ambiente |
| [02 · Planejamento e estrutura](workshop/pt_BR/02-plan-and-scaffold.md) | Mapear a construção | Arquitetura da API e da página |
| [03 · Construir o jogo](workshop/pt_BR/03-agent-mode.md) | Tornar o jogo funcional | Implementação com agentes e iteração |
| [04 · Tematização orientada pelo design](workshop/pt_BR/04-design-vibes.md) | Encontrar o visual arcade | Planejamento e implementação visual |
| [05 · Aprimoramento](workshop/pt_BR/05-polish.md) | Refinar a experiência | Trabalho paralelo, revisões e etapas de qualidade |
| [06 · Bônus](workshop/pt_BR/06-bonus.md) | Ir além do escopo | Recursos extras e experimentos com o Copilot |

## Comece

1. Crie seu próprio repositório com **Use this template** ou faça um fork deste.
2. Clone o repositório e abra-o no VS Code, ou trabalhe no terminal com o Copilot CLI.
3. Siga a [visão geral do workshop](workshop/pt_BR/00-overview.md) e escolha sua trilha.

### O que você vai precisar

- GitHub Copilot (Pro, Business ou Enterprise), Git e Node.js
- **Trilha VS Code:** VS Code 1.107 ou posterior e a extensão do GitHub Copilot com a sessão iniciada
- **Trilha CLI:** GitHub Copilot CLI (`copilot`); Node.js 22+ para instalar com npm ou Homebrew / WinGet

## Por dentro

- [Astro](https://astro.build/) 6 com o [adaptador Node](https://docs.astro.build/en/guides/integrations-guide/node/)
- Dados do gráfico de contribuições do GitHub
- Press Start 2P, para dar o clima de arcade

## Nota sobre implantação

O fluxo de trabalho atual do GitHub Pages publica o workshop estático e a documentação em `docs/` e `workshop/`. Ele **não** compila nem implanta o app Astro em `src/`.

Para implantar o app Astro no GitHub Pages, mude o Astro para saída estática, remova o adaptador Node e atualize o fluxo de trabalho para compilar e publicar `dist/`. Se precisar das rotas de API em produção, implante em uma plataforma de servidor, como Vercel, Netlify ou um host Node.

## Licença

[MIT](LICENSE)
