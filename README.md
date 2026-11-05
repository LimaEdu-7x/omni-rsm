# OmniRSM 🧠⚡

> **Universal Deep Research & Multi-Source Distillation Engine for AI Coding Agents and LLMs.**
> Turn YouTube videos, TikToks, Instagram Reels, Twitch VODs, Kick streams, GitHub repositories, research papers, and technical websites into clean, high-signal intelligence with a single command.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skill: Antigravity](https://img.shields.io/badge/Skill-Antigravity-orange.svg)](#antigravity--gemini-cli)
[![Compatible: Claude Code](https://img.shields.io/badge/Compatible-Claude%20Code-purple.svg)](#claude-code)
[![Compatible: Cursor](https://img.shields.io/badge/Compatible-Cursor%20%2F%20Windsurf-teal.svg)](#cursor-ide)
[![NPM Version](https://img.shields.io/badge/NPM-omni--rsm-red.svg)](#quick-install-via-npx--npm)

---

## 🎯 What is OmniRSM?

Modern AI agents often produce generic, shallow summaries filled with AI fluff ("In this interesting video, the creator shares..."). 

**OmniRSM** solves this by fusing the best open-source cognitive distillation patterns and extraction utilities into one unified skill:
- **Zero Fluff (No AI Slop):** Direct, high-density distillation.
- **Universal Multi-Platform Support:** Extracts from long videos, short clips, livestreams, codebases, papers, and web articles.
- **Architectural Raio-X:** Generates Mermaid dataflow diagrams, folder trees, and developer onboarding guides for code repositories.
- **Triangulated Deep Research:** Breaks down complex inquiries, cross-checks multiple authoritative sources, and synthesizes technical dossiers.

---

## 🚀 Supported Platforms & Ingestion Pipelines

| Category | Platforms | Engine / Fallback Strategy | Primary Output |
| :--- | :--- | :--- | :--- |
| **Short-Form Video** | TikTok, Instagram Reels, YouTube Shorts | `yt-dlp` audio extraction + Whisper STT + Post captions | Hook analysis, Single Core Idea, Actionable Insight |
| **Long-Form Video** | YouTube, Vimeo, Rumble, Bilibili | `yt-dlp` native subtitle scraper (`--write-auto-sub`) | Timed sections, Core Thesis, Quotes, Open questions |
| **Livestreams & VODs** | Twitch, Kick, YouTube Live | `streamlink` / `yt-dlp --download-sections` + Whisper STT | Timeline milestones, peak debate moments, community sentiment |
| **Code Repositories** | GitHub, GitLab | `repomix --remote` / AST parsing & manifest discovery | Architecture pattern, folder breakdown, Mermaid flow, onboarding |
| **Web & Papers** | Tech blogs, arXiv, Docs | Jina AI Reader (`r.jina.ai`) | Executive TL;DR, thesis, metrics/evidence, implications |
| **Deep Research Topics**| Freeform queries | Multi-query decomposition & cross-source triangulation | Structured technical whitepaper & benchmark comparison |

---

## ⚡ Command Syntax & Output Flags

OmniRSM is designed to be triggered inside your AI assistant using the `/rsm` slash command or standard prompt:

```text
/rsm [link or topic] [flags]
```

### Examples:
```bash
# Analyze a TikTok or Instagram Reel
/rsm https://www.tiktok.com/@creator/video/1234567890

# Dissect an entire GitHub codebase
/rsm https://github.com/facebook/react --arch

# Ingest a Twitch or Kick VOD
/rsm https://www.twitch.tv/videos/12345678 --stream

# Deep-dive a scientific paper or article
/rsm https://arxiv.org/abs/2301.07041

# Generate an exhaustive comparative technical report
/rsm "SQLite vs DuckDB for embedded agent memory" --deep
```

### Available Flags:
- `--quick`: Ultra-dense 2-sentence TL;DR + 5 actionable bullet points.
- `--deep`: Exhaustive technical breakdown without omitting edge cases or trade-offs.
- `--short`: Tailored for short-form video (Hook, Core Idea, Action item).
- `--stream`: Tailored for long streams (Milestone timeline, debates, highlight moments).
- `--arch`: Tailored for software repositories (Architecture pattern, directory map, Mermaid diagram).
- `--wisdom`: Fabric standard (Central ideas, direct verbatim quotes, recommendations, habits).

---

## 📦 Installation Guide for All AIs

### 1. Quick Install via NPX (Instant & Zero Setup)
Run anywhere without installing dependencies:

```bash
# Instant install directly via GitHub:
npx github:LimaEdu-7x/omni-rsm install [target]

# Or via NPM registry (once published):
npx omni-rsm install [target]
```

#### Targets:
```bash
# Install to Google Antigravity / Gemini CLI
npx github:LimaEdu-7x/omni-rsm install antigravity

# Install to Claude Code
npx github:LimaEdu-7x/omni-rsm install claude

# Install to Cursor IDE (.cursor/rules/rsm.mdc)
npx github:LimaEdu-7x/omni-rsm install cursor

# Install to Windsurf (.windsurfrules)
npx github:LimaEdu-7x/omni-rsm install windsurf

# Copy SKILL.md into current directory
npx github:LimaEdu-7x/omni-rsm install local
```

---

### 2. Antigravity & Gemini CLI (AGY)
Copy [`SKILL.md`](SKILL.md) directly into your global skills directory:
```bash
# Windows (PowerShell)
mkdir -p "$HOME\.gemini\config\skills\rsm"
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o "$HOME\.gemini\config\skills\rsm\SKILL.md"

# Linux / macOS
mkdir -p ~/.gemini/config/skills/rsm
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o ~/.gemini/config/skills/rsm/SKILL.md
```

---

### 3. Claude Code
Install to your user-level skills:
```bash
mkdir -p ~/.claude/skills/rsm
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o ~/.claude/skills/rsm/SKILL.md
```
Or place it inside your project repo at `.claude/skills/rsm/SKILL.md`.

---

### 4. Cursor IDE
Create a custom rule file at `.cursor/rules/rsm.mdc`:
```bash
mkdir -p .cursor/rules
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md -o .cursor/rules/rsm.mdc
```
*(Or paste the contents of `SKILL.md` into your `.cursorrules` file).*

---

### 5. Windsurf
Append the contents of `SKILL.md` to your workspace `.windsurfrules`:
```bash
curl -sL https://raw.githubusercontent.com/LimaEdu-7x/omni-rsm/main/SKILL.md >> .windsurfrules
```

---

### 6. ChatGPT / Custom GPTs / Claude Projects / Open WebUI
1. Copy the raw text of [`SKILL.md`](SKILL.md).
2. Paste it into your Custom GPT **Instructions** or Claude Project **System Instructions**.
3. Prefix your prompts with `/rsm [URL]`.

---

## 🛠️ Recommended CLI Helper Tools

OmniRSM leverages battle-tested open-source utilities to extract media streams and clean web content:

1. **`yt-dlp`** (Media Ingestion):
   ```bash
   # Windows (winget)
   winget install yt-dlp.yt-dlp

   # macOS (Homebrew)
   brew install yt-dlp

   # Linux
   sudo apt install yt-dlp || sudo dnf install yt-dlp
   ```
2. **`faster-whisper`** (Audio-to-Text Fallback):
   ```bash
   pip install faster-whisper
   ```
3. **`repomix`** (Remote Git Ingestion):
   ```bash
   npx repomix --remote <owner/repo>
   ```
4. **`streamlink`** (Live Stream Slicing):
   ```bash
   pip install streamlink
   ```

---

## 🏆 Credits & Contributing Open-Source Projects

OmniRSM stands on the shoulders of giants. Special thanks and full credit to the authors of the following foundational projects:

- **[Daniel Miessler's Fabric](https://github.com/danielmiessler/fabric)** — The pioneering cognitive prompt architecture (`extract_wisdom`, `summarize_paper`, `analyze_claims`).
- **[Yamadashy's Repomix (formerly Repopack)](https://github.com/yamadashy/repomix)** — The single-file AI codebase consolidation and token budgeting standard.
- **[Jina AI Reader](https://jina.ai/)** — The LLM web scraper converting any URL into clean Markdown via `r.jina.ai`.
- **[yt-dlp Team](https://github.com/yt-dlp/yt-dlp)** — The Swiss army knife for video and subtitle extraction across 1000+ web platforms.
- **[OpenAI Whisper](https://github.com/openai/whisper) & [SYSTRAN faster-whisper](https://github.com/SYSTRAN/faster-whisper)** — Ultra-fast, highly accurate open speech-to-text recognition.
- **[Streamlink](https://github.com/streamlink/streamlink)** — Real-time streaming protocol extractor.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
