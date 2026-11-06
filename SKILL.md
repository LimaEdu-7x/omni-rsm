---
name: rsm
description: >
  Deep research, multi-source ingestion, tool hunting, and distillation engine (/rsm).
  Ingests YouTube, TikTok, Instagram, X, Twitch, repos, and links to extract high-signal
  summaries, detect mentioned tools/stacks, analyze creator voice/speaking style and prosody,
  search official free links/install commands, scout related skills, and scaffold new custom skills.
argument-hint: "[link or research topic] [--deep|--quick|--tools|--voice|--arch|--wisdom|--stream|--short]"
user-invocable: true
---

# OmniRSM 🧠⚡ — Universal Deep Research, Tool Hunter, Voice Profiler & Multimedia Distillation
> 🇧🇷 **Projeto Brasileiro Open-Source** desenvolvido para ecossistemas de agentes de IA (Antigravity, Claude Code, Cursor, Windsurf).

OmniRSM é um motor universal de inteligência, pesquisa profunda e destilação de conhecimento para agentes de IA e desenvolvedores.
Ele processa links multimídia, extrai sabedoria, caça ferramentas/skills e analisa profundamente o DNA de voz, estilo de fala e retórica de criadores de conteúdo.

---

## 🎯 Modos de Invocação

```text
/rsm [link ou tópico] [flags]
```

### Flags Disponíveis:
- `--voice`: **Estudo de Voz, Estilo & DNA Sonoro** (Analisa prosódia acústica, cadência, pausas, tom, vocabulário característico, bordões, arquitetura retórica e gera o artefato `creator-voice.md` compatível com o ecossistema `super-creator`).
- `--tools`: **Caçador de Ferramentas & Ecossistema de Skills** (Mapeia ferramentas citadas, links oficiais, comandos de instalação gratuitos, sugere novas skills e conexões).
- `--deep`: Análise técnica e prática exaustiva sem cortes ou superficialidades.
- `--quick`: Resumo executivo ultradenso (TL;DR em 2 frases + 5 tópicos de ação rápida).
- `--wisdom`: Formato Fabric (grandes ideias, citações literais, hábitos e perguntas em aberto).
- `--arch`: Focado em repositórios de código (arquitetura, árvore de pastas, fluxo Mermaid e onboarding de devs).
- `--stream`: Focado em transmissões ao vivo (Twitch, Kick, YouTube Live): marcos na linha do tempo e debates de pico.
- `--short`: Focado em Shorts/Reels/TikTok (gancho, ideia central e ação imediata).

---

## 🎙️ Pipeline 1: Estudo de Voz, Estilo & DNA Sonoro (`--voice` ou `--style`)

Quando invocado com `--voice` (ou ao analisar criadores para clonagem de tom, roteirização ou engenharia de voz):

### 1. Ingestão Acústica Multimodal (Audio-First):
- Extrair o áudio original com `yt-dlp -x --audio-format mp3`.
- A IA ouve e analisa a camada acústica/sonora bruta diretamente para decodificar nuances paralinguísticas que a transcrição de texto pura ignora:
  - **Prosódia e Pitch:** Inflexões tonais (grave, agudo), calor vocal e modulação de ênfase emotiva.
  - **Cadência e Velocidade:** Ritmo médio em WPM (palavras por minuto), acelerações em momentos de pico e pausas intencionais de silêncio e reflexão.
  - **Vocalizações & Paisagem Sonora:** Risadas, suspiros, hesitações estratégicas, respirações de impacto e relação com trilha de fundo ou efeitos (SFX).

### 2. Decomposição Linguística & Léxico:
- **Vocabulário Característico:** Palavras de alta frequência, gírias do nicho e nível de formalidade (coloquial, técnico, provocativo).
- **Bordões & Expressões de Transição:** Conectivos próprios do criador (ex: *"sacou?"*, *"presta muita atenção nisso"*, *"o ponto chave é"*).
- **Termos Banidos / Off-Limits:** Palavras que o criador evita ativamente (jargões corporativos vazios, clichês de IA, formalismos robóticos).

### 3. Arquitetura de Retórica & Engajamento:
- **Análise do Gancho (Hook):** Ângulo de abertura nos primeiros segundos (pergunta provocadora, dado chocante, confissão, ataque a conselho comum).
- **Estrutura Narrativa:** Fluxo de argumentação (Gancho -> Tese Contraintuitiva -> Quebra de Objeção -> Prova Prática -> Conclusão).
- **Mecanismos de Retenção:** Uso de loops abertos, storytelling em primeira pessoa e quebras de padrão rítmico.
- **Chamada para Ação (CTA):** Intensidade e estilo de conversão (CTA sutil, comunitária ou direta).

### 4. Entrega do Artefato `creator-voice.md`:
Gera e oferece salvar o perfil estruturado com:
- **Resumo Executivo da Persona:** Arquétipo, tom e energia vocal.
- **Regras Estritas para Redação (Do's & Don'ts):** Diretrizes acionáveis para qualquer modelo emular a voz sem soar robótico.
- **Exemplo de Transformação (Antes vs Depois):** Texto genérico de IA transformado no estilo autêntico do criador.
- **Prompt de Sistema Portátil:** Bloco pronto para colar no ChatGPT, Claude, Antigravity ou integrar diretamente no Pilar 01 (`/super-creator:voice`).

---

## 🛠️ Pipeline 2: Caçador de Ferramentas & Criador de Skills (Tool Scout)

Sempre que um vídeo, artigo ou post mencionar ferramentas, bibliotecas, apps ou fluxos de trabalho (ex: Remotion, Claude Code, FFmpeg, Docker, etc.):

1. **Mapeamento de Ferramentas Citadas:**
   - Nome da ferramenta e contexto de uso pelo criador.
   - O que ela resolve e por que foi escolhida.

2. **Busca Ativa de Links & Instalação 100% Gratuita:**
   - Link oficial direto (documentação / download).
   - Comandos exatos de terminal (`npm`, `pip`, `winget`, `brew`, `docker`).
   - Priorizar sempre fontes gratuitas, open-source e planos livres (sem paywall surpresa).

3. **Mapeamento & Criação de Skills:**
   - **Skills Conectadas:** Quais skills do ecossistema combinam com ela (ex: `gpt-taste`, `frontend-design`, `shadcn-ui-master`, `super-creator`).
   - **Geração de Nova Skill:** Se a ferramenta for relevante, estruturar uma nova skill pronta para o assistente (com `SKILL.md`, prompts e regras).

4. **Entrega Visual & Oferta de Exportação:**
   - Conteúdo visual, dinâmico, limpo e direto, fácil de entender até por um adolescente.
   - **Pergunta Final Obrigatória:** Perguntar ao usuário se deseja salvar o resultado como `.md` (visual formatado) ou `.txt` dentro da pasta padrão da skill (`rsm-intel/` ou pasta do projeto).

---

## 📡 Pipeline 3: Ingestão Multimídia & Fallback

### 1. Áudio & Vídeo (YouTube, TikTok, Instagram, Twitch, Kick, X)
1. **Tier 1 (Legendas Nativas):** Extração instantânea de legendas via `yt-dlp` ou API de legendas:
   ```bash
   yt-dlp --skip-download --write-auto-sub --sub-lang "pt,en,es" <URL>
   ```
2. **Tier 2 (Speech-to-Text Fallback & Áudio Multimodal):** Para plataformas sem legendas públicas (TikTok, Reels, Kick, clips) ou modo `--voice`:
   ```bash
   yt-dlp -x --audio-format mp3 -o "temp_audio.mp3" <URL>
   # Processar com áudio multimodal nativo ou transcrever via faster-whisper / Whisper API
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
