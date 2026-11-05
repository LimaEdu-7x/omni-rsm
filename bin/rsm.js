#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_SOURCE = path.resolve(__dirname, '..', 'SKILL.md');

function getHomeDir() {
  return os.homedir();
}

function printHelp() {
  console.log(`
🧠 OmniRSM — Universal Deep Research & Multimedia Distillation Engine

Usage:
  npx omni-rsm install [target]   Install the skill into your AI environment
  npx omni-rsm print              Print the raw SKILL.md content to stdout
  npx omni-rsm info               Show supported platforms and commands

Targets for 'install':
  antigravity  (default) Installs to ~/.gemini/config/skills/rsm/SKILL.md
  claude                 Installs to ~/.claude/skills/rsm/SKILL.md
  cursor                 Creates .cursor/rules/rsm.mdc in current working dir
  windsurf               Appends rule to .windsurfrules in current working dir
  local                  Copies SKILL.md into current working directory
`);
}

function installSkill(target = 'antigravity') {
  if (!fs.existsSync(SKILL_SOURCE)) {
    console.error('Error: SKILL.md source not found.');
    process.exit(1);
  }

  const skillContent = fs.readFileSync(SKILL_SOURCE, 'utf8');
  let destDir = '';
  let destFile = '';

  const normalizedTarget = target.toLowerCase();

  switch (normalizedTarget) {
    case 'antigravity':
    case 'gemini':
      destDir = path.join(getHomeDir(), '.gemini', 'config', 'skills', 'rsm');
      destFile = path.join(destDir, 'SKILL.md');
      break;

    case 'claude':
      destDir = path.join(getHomeDir(), '.claude', 'skills', 'rsm');
      destFile = path.join(destDir, 'SKILL.md');
      break;

    case 'cursor':
      destDir = path.join(process.cwd(), '.cursor', 'rules');
      destFile = path.join(destDir, 'rsm.mdc');
      break;

    case 'windsurf':
      destFile = path.join(process.cwd(), '.windsurfrules');
      fs.appendFileSync(destFile, `\n\n# OmniRSM Skill\n${skillContent}`);
      console.log(`✓ OmniRSM appended to ${destFile}`);
      return;

    case 'local':
    case '.':
      destDir = process.cwd();
      destFile = path.join(destDir, 'SKILL.md');
      break;

    default:
      console.error(`Unknown target: ${target}. Choose from: antigravity, claude, cursor, windsurf, local`);
      process.exit(1);
  }

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destFile, skillContent, 'utf8');
  console.log(`✓ OmniRSM successfully installed to:\n  ${destFile}`);
}

const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : 'help';

switch (command) {
  case 'install':
    installSkill(args[1] || 'antigravity');
    break;

  case 'print':
    if (fs.existsSync(SKILL_SOURCE)) {
      process.stdout.write(fs.readFileSync(SKILL_SOURCE, 'utf8'));
    } else {
      console.error('Error: SKILL.md not found.');
    }
    break;

  case 'info':
  case 'help':
  case '--help':
  case '-h':
  default:
    printHelp();
    break;
}
