---
name: rsm
description: >
  Deep research, multi-source ingestion, and distillation engine (/rsm).
  Ingests and deeply summarizes YouTube, TikTok, Instagram Reels, Twitch, Kick,
  Twitter/X, GitHub repositories, web articles, documentation, and complex topics
  into high-signal architectural blueprints, executive summaries, and structured wisdom.
argument-hint: "[link or research topic] [--deep|--quick|--arch|--wisdom|--stream|--short]"
user-invocable: true
---

# OmniRSM — Universal Deep Research & Multimedia Distillation

OmniRSM is a high-signal knowledge extraction and research engine for AI coding agents and LLMs.
It blends established cognitive patterns and extraction pipelines:
- **Daniel Miessler's Fabric** (`extract_wisdom`, `summarize_lecture`, `analyze_claims`)
- **Repomix / Repopack** (Codebase packing, AST token budgeting, and architecture analysis)
- **Jina AI Reader & Search (`r.jina.ai`)** (Clean markdown extraction without web bloat)
- **Universal Media Extraction Pipeline** (`yt-dlp` + `faster-whisper` + `streamlink`)
- **Deep Research Frameworks** (Source triangulation, claim cross-examination, iterative exploration)

---

## Invocation

```text
/rsm [link or query] [flags]
```

### Supported Inputs:
- **YouTube:** `/rsm https://www.youtube.com/watch?v=xyz` (Timed transcript synthesis & wisdom extraction)
- **TikTok:** `/rsm https://www.tiktok.com/@user/video/123456` (Hook, core insight & actionable takeaway)
- **Instagram Reels:** `/rsm https://www.instagram.com/reel/xyz123` (Audio extraction, Whisper STT & caption synthesis)
- **Twitch VODs & Clips:** `/rsm https://www.twitch.tv/videos/12345678` (Topic timeline & high-impact highlights)
- **Kick Streams & Clips:** `/rsm https://kick.com/video/xyz` (Stream ingestion, discussion points & community consensus)
- **Twitter / X:** `/rsm https://x.com/user/status/123456` (Video transcription + post context)
- **GitHub Repositories:** `/rsm https://github.com/owner/repo` (Architecture overview, directory tree, Mermaid data flow & onboarding)
- **Web Articles & Papers:** `/rsm https://arxiv.org/abs/...` (Thesis, methodology, evidence, and practical takeaways)
- **Topic Deep Dive:** `/rsm "distributed consensus algorithms" --deep` (Multi-source technical dossier)

---

## Output Flags

- `--quick`: Ultra-dense executive summary (TL;DR in 2 sentences + 5 actionable points).
- `--deep`: Exhaustive technical analysis without omitting nuances, benchmarks, or edge cases.
- `--short`: Tailored for short-form video (TikTok, Reels, Shorts): Hook analysis, Single Big Idea, and Immediate Action.
- `--stream`: Tailored for long livestreams (Twitch, Kick): Chronological topic milestones, peak moments, and creator opinions.
- `--arch`: Tailored for codebases: Architecture pattern, folder breakdown, Mermaid diagram, and onboarding guide.
- `--wisdom`: Fabric format: Main ideas, verbatim quotes, habits/recommendations, and open questions.

---

## Extraction Pipeline & Fallback Architecture

### 1. Audio & Video Ingestion (YouTube, TikTok, Instagram, Twitch, Kick, X)
1. **Tier 1 (Native Subtitles):** Attempt instant extraction of auto/creator subtitles via `yt-dlp`:
   ```bash
   yt-dlp --skip-download --write-auto-sub --sub-lang "en,pt" <URL>
   ```
2. **Tier 2 (Speech-to-Text Fallback):** For platforms without public subtitles (TikTok, Reels, Kick, Twitch clips):
   ```bash
   yt-dlp -x --audio-format mp3 -o "temp_audio.mp3" <URL>
   # Transcribe using faster-whisper or Whisper API
   ```
3. **Tier 3 (Long Streams / VODs):** Slicing key segments to avoid memory saturation:
   ```bash
   yt-dlp --download-sections "*00:00:00-00:30:00" -x --audio-format mp3 <URL>
   ```

### 2. Code Repositories (GitHub / GitLab)
- Run `npx repomix --remote <owner/repo>` to pack the codebase with token budgeting, or inspect repository structure, entrypoints, and manifest files (`package.json`, `Cargo.toml`, `pyproject.toml`, etc.).

### 3. Web Pages & Documentation
- Fetch clean Markdown via `https://r.jina.ai/<URL>` to bypass popups, cookie consent banners, and client-side JavaScript overhead.

---

## Output Quality Principles
1. **Zero Fluff (No AI Slop):** Avoid empty introductory meta-commentary (e.g., "In this video the speaker discusses..."). Start directly with high-density insights.
2. **Literal Quotes:** Preserve exact words for counterintuitive or high-signal statements.
3. **Structured Visuals:** Use Markdown tables, Mermaid diagrams for architecture/dataflows, and clear visual hierarchies.
