# OmniRSM 🧠⚡

> **Universal Deep Research, Tool Hunter, Voice & Style Profiler & Multi-Source Distillation Engine for AI Coding Agents and LLMs.**  
> 🇧🇷 **Projeto Brasileiro Open-Source** feito com foco em alta densidade de sinal, pesquisa profunda, caça ativa de ferramentas gratuitas e engenharia de voz de criadores.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Origin: Brazil](https://img.shields.io/badge/Made%20in-Brazil%20%F0%9F%87%A7%F0%9F%87%B7-green.svg)](#-projeto-brasileiro-open-source)
[![Skill: Antigravity](https://img.shields.io/badge/Skill-Antigravity-orange.svg)](#antigravity--gemini-cli)
[![Compatible: Claude Code](https://img.shields.io/badge/Compatible-Claude%20Code-purple.svg)](#claude-code)
[![Compatible: Cursor](https://img.shields.io/badge/Compatible-Cursor%20%2F%20Windsurf-teal.svg)](#cursor-ide)
[![NPM Version](https://img.shields.io/badge/NPM-v1.2.0-red.svg)](https://www.npmjs.com/package/omni-rsm)

Transforme vídeos do YouTube, TikToks, Instagram Reels, streams da Twitch/Kick, repositórios do GitHub, artigos científicos e sites técnicos em relatórios visuais de altíssimo sinal, descubra ferramentas gratuitas e extraia o DNA sonoro e estilo de fala de criadores com um único comando.

---

## 🇧🇷 Projeto Brasileiro Open-Source

O **OmniRSM** nasceu no Brasil com a missão de empoderar desenvolvedores, criadores de conteúdo e entusiastas de IA a extrair conhecimento de verdade da web, eliminando o "blá-blá-blá" e o lixo gerado por inteligências artificiais.

Criado e mantido por [Eduardo Lima (LimaEdu-7x)](https://github.com/LimaEdu-7x), o projeto prioriza:
- **Democratização e Acesso Gratuito:** Mapeamento ativo de ferramentas open-source, comandos de terminal prontos e tiers 100% gratuitos.
- **Engenharia de Voz & DNA Sonoro:** Estudo profundo de prosódia, cadência e estilo de fala de criadores usando percepção de áudio multimodal nativa.
- **Linguagem Clara e Visual:** Conteúdo estruturado de forma didática e empolgante, legível tanto para um profissional sênior quanto para um jovem começando na área de tecnologia.
- **Ecossistema Aberto:** Integração nativa com Antigravity, Claude Code, Maestri Canvas, Cursor, Windsurf e ChatGPT.

---

## 🎯 O que é o OmniRSM?

A maioria dos resumos automáticos de IA é rasa, genérica e cheia de enrolação (*"Neste vídeo fascinante, o palestrante aborda..."*).

O **OmniRSM** une os melhores padrões mundiais de destilação cognitiva em uma única skill unificada:
1. **Zero Enrolação (No AI Slop):** Vai direto ao cerne técnico e prático.
2. **🎙️ Estudo de Voz, Estilo & DNA Sonoro (`--voice`):** Extrai a faixa de áudio bruto (`.mp3`), analisa a prosódia, ritmo (WPM), pausas dramáticas, bordões, jargões, ganchos e gera um artefato `creator-voice.md` com prompt de sistema pronto para replicar o estilo de qualquer criador.
3. **🛠️ Caçador de Ferramentas & Free Stack Scout (`--tools`):** Detecta ferramentas, bibliotecas e frameworks citados por criadores, localiza seus links oficiais e comandos exatos de instalação (npm, pip, winget, brew, docker), priorizando alternativas gratuitas.
4. **Sintetizador de Skills:** Avalia se um workflow deve se tornar uma nova Skill de IA e conecta com o ecossistema existente.
5. **Exportação sob Medida:** Gera relatórios ultra-visuais em `.md` ou `.txt` organizados em pastas dedicadas (`rsm-intel/` ou raiz do projeto).
6. **Suporte Multimídia Completo:** Processa desde vídeos longos do YouTube e VODs de streamers até Reels curtos, papers do arXiv e repositórios inteiros de código.

---

## 🚀 Plataformas Suportadas & Estratégia de Ingestão

| Categoria | Plataformas | Motor / Estratégia de Extração | Saída Principal |
| :--- | :--- | :--- | :--- |
| **Engenharia de Voz & Estilo** | YouTube, Reels, TikTok, Podcasts | Áudio bruto `yt-dlp -x` + Escuta Multimodal da IA | DNA sonoro, prosódia, léxico, bordões e `creator-voice.md` |
| **Caça de Ferramentas** | YouTube, Artigos, Tutoriais | Varredura de links oficiais + comandos CLI gratuitos | Tabela de ferramentas, links, comandos e proposta de nova skill |
| **Vídeos Curtos** | TikTok, Instagram Reels, YouTube Shorts | Extração de áudio `yt-dlp` + Whisper STT + Legendas | Análise de Gancho, Ideia Central Única, Ação Imediata |
| **Vídeos Longos** | YouTube, Vimeo, Rumble, Bilibili | Scraper de legendas nativas (`--write-auto-sub`) | Roteiro de cenas, Tese central, Citações literais, Perguntas |
| **Lives & Streams** | Twitch, Kick, YouTube Live | `streamlink` / `yt-dlp --download-sections` + Whisper | Linha do tempo, momentos de debate e opinião da comunidade |
| **Repositórios** | GitHub, GitLab | `repomix --remote` / AST parsing & detecção de manifests | Padrão arquitetural, árvore de pastas, Mermaid flow, onboarding |
| **Web & Papers** | Blogs de tecnologia, arXiv, Docs | Leitor Jina AI (`r.jina.ai`) | Resumo executivo, evidências/métricas e takeaways |
| **Pesquisa Profunda**| Consultas e tópicos livres | Decomposição multi-query e triangulação de fontes | Dossiê técnico completo e comparação de benchmarks |

---

## ⚡ Comandos & Modos de Uso

Execute a skill no seu terminal ou assistente de IA usando o comando `/rsm` ou uma pergunta direta:

```text
/rsm [link ou tópico de pesquisa] [flags]
```

### Exemplos Práticos:
```bash
# 🎙️ Estudo aprofundado do estilo de fala, voz, bordões e tom do criador
/rsm https://www.youtube.com/watch?v=xyz --voice

# 🛠️ Caçar ferramentas citadas em um tutorial com comandos de instalação gratuitos
/rsm https://www.youtube.com/watch?v=suBGHMAjzHs --tools

# 🧠 Análise técnica aprofundada de um vídeo longo
/rsm https://www.youtube.com/watch?v=xyz --deep

# 📱 Extrair insight de um Reel ou TikTok curto
/rsm https://www.instagram.com/reel/xyz123 --short

# 💻 Raio-X completo da arquitetura de um repositório no GitHub
/rsm https://github.com/facebook/react --arch

# 🎮 Mapear tópicos e melhores momentos de uma live na Twitch ou Kick
/rsm https://www.twitch.tv/videos/12345678 --stream

# 🔬 Dossiê comparativo profundo sobre uma tecnologia
/rsm "DuckDB vs SQLite para memória persistente de agentes" --deep
```

### Flags Disponíveis:
- `--voice`: **Estudo de Voz, Estilo & DNA Sonoro** (Prosódia acústica, cadência, pausas, tom, vocabulário, bordões e gerador de prompt `creator-voice.md`).
- `--tools`: Caçador de Ferramentas, comandos de instalação gratuitos e gerador de skills.
- `--deep`: Análise técnica exaustiva sem cortes ou superficialidades.
- `--quick`: Resumo ultradenso em 2 frases + 5 ações práticas.
- `--short`: Focado em formatos curtos (Gancho + Ideia Central + Ação).
- `--stream`: Focado em livestreams e podcasts (Milestones cronológicos e debates).
- `--arch`: Focado em código (Diagramas Mermaid, árvore de arquivos e fluxo de dados).
- `--wisdom`: Formato Fabric (Ideias centrais, citações literais, hábitos e perguntas).

---

## 📦 Como Instalar nas Suas IAs

### 1. Instalador Interativo via Terminal (Recomendado)
Execute `npx omni-rsm install` para abrir o menu interativo com caixas de seleção. Use as **Setas** para navegar, **Espaço** para marcar as IAs desejadas e **Enter** para concluir:

```bash
npx omni-rsm install
```

```text
🧠 OmniRSM Installer
? Em quais IAs você deseja instalar a OmniRSM? (Setas: mover | Espaço: marcar/desmarcar | Enter: confirmar)
 ❯ [✓] 🪐 Antigravity / Gemini CLI (~/.gemini/config/skills/rsm/SKILL.md)
   [✓] 🟣 Claude Code (~/.claude/skills/rsm/SKILL.md)
   [✓] ⚡ Cursor IDE (.cursor/rules/rsm.mdc)
   [ ] 🌊 Windsurf (.windsurfrules)
   [ ] 📁 Projeto Local (./SKILL.md)
(Pressione Enter para confirmar a seleção)
```

#### Instalação Direta sem Menu (Headless):
```bash
# Instalar em todas as IAs suportadas de uma vez:
npx omni-rsm install all

# Instalar em IAs específicas:
npx omni-rsm install antigravity claude cursor

# Ou diretamente do repositório no GitHub:
npx github:LimaEdu-7x/omni-rsm install
```

---

### 2. Instalação Manual

#### 🪐 Antigravity & Gemini CLI (AGY)
```bash
# Windows (PowerShell)
mkdir -p "$HOME\.gemini\config\skills\rsm"
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o "$HOME\.gemini\config\skills\rsm\SKILL.md"

# Linux / macOS
mkdir -p ~/.gemini/config/skills/rsm
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o ~/.gemini/config/skills/rsm/SKILL.md
```

#### 🟣 Claude Code
```bash
mkdir -p ~/.claude/skills/rsm
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o ~/.claude/skills/rsm/SKILL.md
```

#### ⚡ Cursor IDE
```bash
mkdir -p .cursor/rules
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o .cursor/rules/rsm.mdc
```

#### 🌊 Windsurf
```bash
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md >> .windsurfrules
```

---

## 🏆 Créditos & Referências

O **OmniRSM** homenageia e referencia ferramentas, projetos e mentes brilhantes que inspiraram esta arquitetura:

- **[Daniel Miessler's Fabric](https://github.com/danielmiessler/fabric)** — O projeto pioneiro que estabeleceu padrões abertos de destilação de sabedoria (`extract_wisdom`, `analyze_claims`).
- **[Yamadashy's Repomix](https://github.com/yamadashy/repomix)** — O padrão-ouro de empacotamento de código e controle de tokens para LLMs.
- **[Jina AI Reader](https://jina.ai/)** — Extração limpa de páginas web em Markdown (`r.jina.ai`).
- **[yt-dlp](https://github.com/yt-dlp/yt-dlp)** — O canivete suíço definitivo para ingestão de mídia e legendas.
- **[OpenAI Whisper](https://github.com/openai/whisper) & [SYSTRAN faster-whisper](https://github.com/SYSTRAN/faster-whisper)** — Transcrição de áudio ultra-rápida e precisa.
- **[Remotion](https://www.remotion.dev/)** — Referência máxima de criação de vídeo e Motion Design programável via código e React.
- **[Claude Code](https://docs.claude.com/en/docs/claude-code)** — Referência em agentes autônomos de linha de comando.
- **[Max Carrau / Comunidade Core](https://instagram.com/maxcarrau.ia)** — Referência brasileira em automação de Motion Design com IA e ecossistema de skills.
- **[Maestri](https://maestri.app)** — A plataforma visual em canvas para orquestração de múltiplos agentes de IA.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.  
Feito com 💚 e 💛 no Brasil por [LimaEdu-7x](https://github.com/LimaEdu-7x).
