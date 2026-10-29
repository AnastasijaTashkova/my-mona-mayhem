<!-- l10n-sync: source-file="workshop/06-bonus.md" -->
# 🎉 Bônus e extensões

---

Você construiu um app GitHub Battle totalmente funcional! Agora é hora de ir além com estes **desafios abertos**.

<!-- track:vscode:start -->
Use o **Agent Mode** em todos eles: descreva o que deseja e deixe o Copilot ajudar a construir.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use o Copilot CLI em todos eles — combine o contexto `@file`, `/plan`, o modo normal e `/review` conforme necessário.
<!-- track:cli:end -->

---

## 🏆 Desafio 1: Banner do vencedor

Depois que os dois gráficos de contribuições carregarem, compare os totais e exiba um anúncio dinâmico do vencedor.

**O que construir:**
- Compare o total de contribuições dos dois usuários.
- Se houver um vencedor claro, exiba **"🏆 {username} WINS! 🏆"** com um estilo comemorativo.
- Se as contribuições forem iguais, exiba **"🤝 IT'S A TIE! 🤝"**.
- Adicione uma animação ou confete para dar mais destaque.

**Sugestão de prompt:**
> Quando os dados de contribuições dos dois usuários forem carregados, compare os totais e exiba um banner com o vencedor. Mostre "🏆 {username} WINS! 🏆" se um usuário tiver mais contribuições ou "🤝 IT'S A TIE! 🤝" se houver empate. Deixe o visual empolgante com animações CSS.

---

## 🏆 Desafio 2: Contador de sequência

Calcule e exiba a maior sequência de dias consecutivos com contribuições de cada usuário.

**O que construir:**
- Analise os dados de contribuições dia a dia.
- Encontre a sequência mais longa de dias consecutivos com pelo menos uma contribuição.
- Exiba com destaque a duração da sequência de cada usuário.
- Destaque quem tem a sequência mais longa.

**Sugestão de prompt:**
> Adicione um contador de sequências que analise os dados de contribuições de cada usuário para encontrar sua maior sequência de contribuições consecutivas. Exiba "🔥 Longest Streak: X days" abaixo do gráfico de contribuições de cada usuário.

---

## 🏆 Desafio 3: Histórico de batalhas

Armazene os resultados das batalhas para que os usuários possam ver confrontos anteriores.

**O que construir:**
- Salve cada resultado de batalha em `localStorage` (nomes de usuário, totais, vencedor e data/hora).
- Adicione uma seção **"Recent Battles"** abaixo da área principal da batalha.
- Exiba as últimas 5–10 batalhas com os resultados.
- Adicione um botão "Clear History".

**Sugestão de prompt:**
> Salve os resultados de cada comparação no localStorage. Adicione uma seção "Recent Battles" que exiba as últimas 10 batalhas, os nomes de usuário, os totais de contribuições, o vencedor e quando a batalha aconteceu. Inclua um botão "Clear History".

---

## 🏆 Desafio 4: Efeitos sonoros

Adicione efeitos sonoros retrô de arcade usando a Web Audio API — sem arquivos externos.

**O que construir:**
- Som de **moeda inserida** quando o botão "Battle!" for clicado.
- Som de **power-up** quando os resultados forem carregados com sucesso.
- Som de **explosão** quando ocorrer um erro (usuário não encontrado, falha na API).
- Um botão para ativar e desativar o som.

**Sugestão de prompt:**
> Adicione efeitos sonoros retrô de arcade usando a Web Audio API (sem arquivos de áudio). Toque um som de moeda ao iniciar a batalha, um som de power-up quando os resultados forem carregados e um som de explosão em caso de erro. Gere os sons programaticamente com osciladores e nós de ganho. Inclua um controle para silenciar.

---

## 🏆 Desafio 5: Sequência de batalha animada

Crie suspense com uma contagem regressiva dramática antes de revelar os resultados.

**O que construir:**
- Quando alguém clicar em "Battle!", exiba uma sobreposição em tela cheia.
- Anime: **"3..."** → **"2..."** → **"1..."** → **"⚡ FIGHT! ⚡"**.
- Depois, revele os gráficos de contribuições com uma entrada dramática.
- Use animações CSS ou temporização em JavaScript.

**Sugestão de prompt:**
> Adicione uma sequência de batalha animada quando alguém clicar em "Battle!". Exiba uma sobreposição de contagem regressiva: "3...", depois "2...", "1..." e então "⚡ FIGHT! ⚡"; cada etapa deve durar cerca de 1 segundo. Depois da contagem, revele os resultados com uma animação deslizante.

---

## 🏆 Desafio 6: Legenda de contribuições

Adicione uma legenda de escala de cores que corresponda à paleta do gráfico de contribuições.

**O que construir:**
- Uma legenda horizontal com os níveis de intensidade das contribuições.
- Rótulos de **"Less"** a **"More"**.
- Use a paleta real da resposta da API de contribuições do GitHub.
- Posicione-a perto dos gráficos de contribuições.

**Sugestão de prompt:**
> Adicione uma legenda de contribuições abaixo dos gráficos mostrando a escala de cores da paleta da API. Exiba uma fileira de quadrados coloridos de "Less" (mais claro) a "More" (mais escuro), usando as cores reais dos níveis de contribuição retornadas pela API.

---

## 🏆 Desafio 7: Compartilhe os resultados

Permita que os usuários compartilhem os resultados da batalha com um só clique.

**O que construir:**
- Um botão **"📋 Share Results"** que aparece depois de uma batalha.
- Copie um resumo formatado em texto para a área de transferência.
- Inclua os nomes de usuário, os totais de contribuições e o vencedor.
- Exiba brevemente a confirmação "Copied!".

**Sugestão de prompt:**
> Adicione um botão "📋 Share Results" que copie para a área de transferência um resumo formatado da batalha. O resumo deve incluir os nomes de usuário, os totais de contribuições e quem venceu. Use a Clipboard API e exiba brevemente a confirmação "Copied to clipboard!".

---

<!-- track:cli:start -->
## 💻 Extras do CLI

Se quiser explorar mais recursos do Copilot CLI depois do workshop principal:

- Use `copilot -p "Write a conventional commit message for the current git diff"` para gerar uma resposta rápida que você pode colar no Git.
- Execute `/share file` para salvar sua sessão em Markdown e consultar depois.
- Use `/session` e `/session plan` para inspecionar como o CLI acompanha seu trabalho atual.
<!-- track:cli:end -->

## 🎊 Parabéns!

Você concluiu o workshop **Mona Mayhem: GitHub Battle**! Veja o que você realizou:

### O que você construiu

- ✅ Um **aplicativo web completo com várias páginas** a partir de uma especificação de design
- ✅ Uma **página inicial** com tema retrô de arcade e layout responsivo
- ✅ Uma **arena de batalha** que busca e compara dados reais de contribuições do GitHub
- ✅ **Gráficos de contribuições interativos** com níveis de atividade diferenciados por cores
- ✅ **Tratamento de erros, estados de carregamento e melhorias de acessibilidade**
- ✅ **Design responsivo** que funciona em diferentes dispositivos

### O que você praticou

| Habilidade | O que você praticou |
|---|---|
| **Engenharia de contexto** | Fornecer ao Copilot os arquivos, as instruções e as restrições adequadas |
| **Planejamento** | Gerar e refinar planos de implementação antes de programar |
| **Programação agêntica** | Delegar ao Copilot tarefas com várias etapas e arquivos |
| **Iteração de design** | Partir de uma direção visual e aprimorar o resultado |
| **Disciplina de revisão** | Inspecionar alterações geradas por IA antes de fazer commit |

### 🚀 Continue aprendendo

- 📺 [Canal do YouTube do VS Code](https://www.youtube.com/@code) — Dicas, tutoriais e novidades
- 📖 [Documentação do GitHub Copilot](https://docs.github.com/en/copilot) — Documentação e guias oficiais
- 💻 [Documentação do GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — Instalação, comandos slash e boas práticas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — Recursos e exemplos da comunidade
- 🛠️ [Workshops do Copilot Dev Days](https://github.com/github/copilot-dev-days) — Mais workshops práticos

---

## 🙏 Obrigado!

Obrigado por participar deste workshop! Você viu como o GitHub Copilot pode acelerar todas as etapas do desenvolvimento — do planejamento e design à implementação e ao aprimoramento. As técnicas praticadas aqui se aplicam a qualquer projeto, framework ou escala. Agora, construa algo incrível! 🚀
