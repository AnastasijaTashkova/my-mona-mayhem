<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematização orientada pelo design

---

Nesta parte, você usará os ciclos de planejamento e implementação do Copilot para projetar uma transformação completa do tema. Essa é uma abordagem de desenvolvimento orientada pelo design: comece com a visão, itere nos elementos visuais e deixe o Copilot cuidar do trabalho pesado de CSS.

## Tarefa 1: Planeje o tema retrô

<!-- track:vscode:start -->
Mude para o modo **Plan** no GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use `/plan` no GitHub Copilot CLI ou pressione **Shift+Tab** até ativar o modo de planejamento.
<!-- track:cli:end -->

Insira este prompt:

> Quero transformar esta página em uma experiência completa de arcade retrô. Planeje uma reformulação visual abrangente que inclua: efeitos de linhas de varredura CRT no fundo, brilho neon no título pulsando como um letreiro, emblema VS animado com mudanças nas cores do gradiente, camada de brilho sobre os cartões de resultados dos usuários, animações de entrada flutuante nos campos, texto de carregamento alternando entre verde e roxo e efeitos de brilho ao passar o cursor sobre os quadrados de contribuição. Mantenha o fundo escuro (`#0a0a1a`) com detalhes em verde (`#5fed83`) e roxo (`#8a2be2`). Use um tema escuro com a fonte de jogos retrô Press Start 2P do Google Fonts.

O Copilot vai gerar um plano detalhado de implementação que cobre todos os efeitos visuais. **Não aceite imediatamente** — revise o plano e itere:

- Sugira ajustes no ritmo das animações (por exemplo, *"Deixe o pulso neon mais lento, com cerca de 3 segundos"*).
- Pergunte sobre efeitos específicos (por exemplo, *"Como a camada de brilho vai funcionar nos cartões?"*).
- Peça mudanças na abordagem se algo não parecer adequado.

<!-- track:vscode:start -->
Quando estiver satisfeito com o plano, peça ao Copilot para implementá-lo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Quando estiver satisfeito com o plano, peça ao Copilot CLI para implementá-lo.
<!-- track:cli:end -->

## Tarefa 2: Implemente o tema

<!-- track:vscode:start -->
Peça ao Copilot para implementar o plano que vocês acabaram de definir:
<!-- track:vscode:end -->

<!-- track:cli:start -->
Peça ao Copilot CLI para implementar o plano que vocês acabaram de definir:
<!-- track:cli:end -->

> Implemente o plano do tema retrô de arcade que acabamos de criar.

O Copilot vai adicionar várias animações CSS, pseudoelementos e transições à folha de estilos. Isso pode incluir:

- `@keyframes` para scanlines, pulso neon, shimmer e efeitos de entrada flutuante
- Pseudoelementos (`::before`, `::after`) para efeitos de sobreposição
- CSS custom properties para as cores do tema
- Transições e estados de hover para elementos interativos

<!-- track:cli:start -->
Depois que as alterações forem aplicadas, use `/diff` para revisar os estilos antes de aprová-los.
<!-- track:cli:end -->

## Tarefa 3: Ajuste o visual

> **⚠️ Não está vendo as alterações?** Se o novo tema ou as animações não aparecerem, pare o servidor de desenvolvimento (`Ctrl+C`), reinicie com `npm run dev` e atualize o navegador à força (`Ctrl+Shift+R`).

Mantenha a prévia do navegador aberta e itere no design. Experimente prompts como:

> O efeito das linhas de varredura está forte demais; reduza a opacidade para 0.03.

> Adicione uma cintilação elétrica sutil ao título.

> O emblema VS deve pulsar com mais intensidade.

Essa é uma abordagem de **desenvolvimento orientada pelo design**: você itera no resultado visual em tempo real. Cada prompt refina a experiência até ela ficar do jeito que você quer. Não se contente com algo apenas «bom o suficiente» — leve o visual ao máximo para que a página pareça pertencer a um fliperama.

## Tarefa 4: Atualize as instruções

Suas instruções devem refletir as decisões importantes de design para manter os prompts seguintes alinhados.

<!-- track:vscode:start -->
Peça ao Copilot Chat:
<!-- track:vscode:end -->

<!-- track:cli:start -->
Peça ao Copilot CLI:
<!-- track:cli:end -->

> Adicione uma seção de guia de design a copilot-instructions.md descrevendo nosso tema retrô de arcade: cores, fontes e estilo das animações.

Faça commit das instruções e das alterações de design quando a página estiver como você quer.

## ✅ Parte 4 concluída

**O que você aprendeu:**

- Usar fluxos de planejamento para esboçar um **sistema de design antes da implementação**
- **Iterar no resultado visual** com prompts de acompanhamento
- **Atualizar as instruções após decisões importantes** para manter a identidade visual consistente
