---
name: rsm
description: >
  Deep research, multi-source ingestion, tool hunting, and distillation engine (/rsm).
  Ingests YouTube, TikTok, Instagram, X, Twitch, repos, and links to extract high-signal
  summaries, detect mentioned tools/stacks, search official free links/install commands,
  scout related skills, and scaffold new custom skills.
argument-hint: "[link or research topic] [--deep|--quick|--tools|--arch|--wisdom|--stream|--short]"
user-invocable: true
---

# OmniRSM 🧠⚡ — Universal Deep Research, Tool Hunter & Multimedia Distillation
> 🇧🇷 **Projeto Brasileiro Open-Source** desenvolvido para ecossistemas de agentes de IA (Antigravity, Claude Code, Cursor, Windsurf).

OmniRSM é um motor universal de inteligência, pesquisa profunda e destilação de conhecimento para agentes de IA e desenvolvedores.
Ele processa links multimídia, extrai sabedoria e caça ativamente todas as ferramentas e skills mencionadas por criadores.

---

## 🎯 Modos de Invocação

```text
/rsm [link ou tópico] [flags]
```

### Flags Disponíveis:
- `--tools`: **Caçador de Ferramentas & Ecossistema de Skills** (Mapeia ferramentas citadas, links oficiais, comandos de instalação gratuitos, sugere novas skills e conexões).
- `--deep`: Análise técnica e prática exaustiva sem cortes ou superficialidades.
- `--quick`: Resumo executivo ultradenso (TL;DR em 2 frases + 5 tópicos de ação rápida).
- `--wisdom`: Formato Fabric (grandes ideias, citações literais, hábitos e perguntas em aberto).
- `--arch`: Focado em repositórios de código (arquitetura, árvore de pastas, fluxo Mermaid e onboarding de devs).
- `--stream`: Focado em transmissões ao vivo (Twitch, Kick, YouTube Live): marcos na linha do tempo e debates de pico.
- `--short`: Focado em Shorts/Reels/TikTok (gancho, ideia central e ação imediata).

---

## 🛠️ Pipeline 1: Caçador de Ferramentas & Criador de Skills (Tool Scout)

Sempre que um vídeo, artigo ou post mencionar ferramentas, bibliotecas, apps ou fluxos de trabalho (ex: Remotion, Claude Code, FFmpeg, Docker, etc.):

1. **Mapeamento de Ferramentas Citadas:**
   - Nome da ferramenta e contexto de uso pelo criador.
   - O que ela resolve e por que foi escolhida.

2. **Busca Ativa de Links & Instalação 100% Gratuita:**
   - Link oficial direto (documentação / download).
   - Comandos exatos de terminal (`npm`, `pip`, `winget`, `brew`, `docker`).
   - Priorizar sempre fontes gratuitas, open-source e planos livres (sem paywall surpresa).

3. **Mapeamento & Criação de Skills:**
   - **Skills Conectadas:** Quais skills do ecossistema combinam com ela (ex: `gpt-taste`, `frontend-design`, `shadcn-ui-master`).
   - **Geração de Nova Skill:** Se a ferramenta for relevante, estruturar uma nova skill pronta para o assistente (com `SKILL.md`, prompts e regras).

4. **Entrega Visual & Oferta de Exportação:**
   - Conteúdo visual, dinâmico, limpo e direto, fácil de entender até por um adolescente.
   - **Pergunta Final Obrigatória:** Perguntar ao usuário se deseja salvar o resultado como `.md` (visual formatado) ou `.txt` dentro da pasta padrão da skill (`rsm-intel/` ou pasta do projeto).

---

## 📡 Pipeline 2: Ingestão Multimídia & Fallback

### 1. Áudio & Vídeo (YouTube, TikTok, Instagram, Twitch, Kick, X)
1. **Tier 1 (Legendas Nativas):** Extração instantânea de legendas via `yt-dlp` ou API de legendas:
   ```bash
   yt-dlp --skip-download --write-auto-sub --sub-lang "pt,en,es" <URL>
   ```
2. **Tier 2 (Speech-to-Text Fallback):** Para plataformas sem legendas públicas (TikTok, Reels, Kick, clips):
   ```bash
   yt-dlp -x --audio-format mp3 -o "temp_audio.mp3" <URL>
   # Transcrever via faster-whisper ou Whisper API
   ```
3. **Tier 3 (Streams Longas / VODs):** Fatiamento de trechos-chave:
   ```bash
   yt-dlp --download-sections "*00:00:00-00:30:00" -x --audio-format mp3 <URL>
   ```

### 2. Repositórios de Código (GitHub / GitLab)
- Executar `npx repomix --remote <owner/repo>` para empacotar o repositório com token budgeting, inspecionar árvore de diretórios, entrypoints e manifests (`package.json`, `Cargo.toml`, etc.).

### 3. Artigos Web & Documentação
- Coletar Markdown limpo via `https://r.jina.ai/<URL>` contornando popups, banners de cookies e excesso de scripts.

---

## ⚡ Princípios de Qualidade
1. **Zero Enrolação:** Sem introduções vazias de IA. Vá direto ao conteúdo de alto impacto.
2. **Citações Literais:** Preserve frases exatas para ideias contraintuitivas ou de alto sinal.
3. **Didático e Visual:** Uso constante de tabelas Markdown, diagramas Mermaid e cartões de comandos.
