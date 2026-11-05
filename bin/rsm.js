#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const prompts = require('prompts');

const SKILL_SOURCE = path.resolve(__dirname, '..', 'SKILL.md');

function getHomeDir() {
  return os.homedir();
}

const TARGET_OPTIONS = [
  { title: '🪐 Antigravity / Gemini CLI', value: 'antigravity', selected: true, description: '~/.gemini/config/skills/rsm' },
  { title: '🟣 Claude Code', value: 'claude', description: '~/.claude/skills/rsm' },
  { title: '⚡ Cursor IDE', value: 'cursor', description: '.cursor/rules/rsm.mdc' },
  { title: '🌊 Windsurf', value: 'windsurf', description: '.windsurfrules' },
  { title: '📁 Projeto Local', value: 'local', description: './SKILL.md' }
];

function printHelp() {
  console.log(`
🧠 OmniRSM — Universal Deep Research & Multimedia Distillation Engine

Usage:
  npx omni-rsm install           Interactive multi-selection menu
  npx omni-rsm install <targets> Direct install (e.g. npx omni-rsm install antigravity claude)
  npx omni-rsm print             Print the raw SKILL.md content to stdout
  npx omni-rsm info              Show supported platforms and commands

Available Targets:
  antigravity  Installs to ~/.gemini/config/skills/rsm/SKILL.md
  claude       Installs to ~/.claude/skills/rsm/SKILL.md
  cursor       Creates .cursor/rules/rsm.mdc in current working directory
  windsurf     Appends rule to .windsurfrules in current working directory
  local        Copies SKILL.md into current working directory
  all          Installs into all supported environments
`);
}

function installToTarget(target) {
  if (!fs.existsSync(SKILL_SOURCE)) {
    console.error('Error: SKILL.md source file not found.');
    process.exit(1);
  }

  const skillContent = fs.readFileSync(SKILL_SOURCE, 'utf8');
  let destDir = '';
  let destFile = '';

  const normalized = target.toLowerCase();

  switch (normalized) {
    case 'antigravity':
    case 'gemini':
      destDir = path.join(getHomeDir(), '.gemini', 'config', 'skills', 'rsm');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Antigravity] Instalado em: ${destFile}`);
      break;

    case 'claude':
      destDir = path.join(getHomeDir(), '.claude', 'skills', 'rsm');
      destFile = path.join(destDir, 'SKILL.md');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Claude Code] Instalado em: ${destFile}`);
      break;

    case 'cursor':
      destDir = path.join(process.cwd(), '.cursor', 'rules');
      destFile = path.join(destDir, 'rsm.mdc');
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Cursor IDE] Criado em: ${destFile}`);
      break;

    case 'windsurf':
      destFile = path.join(process.cwd(), '.windsurfrules');
      fs.appendFileSync(destFile, `\n\n# OmniRSM Skill\n${skillContent}`, 'utf8');
      console.log(`  ✓ [Windsurf] Adicionado a: ${destFile}`);
      break;

    case 'local':
    case '.':
      destDir = process.cwd();
      destFile = path.join(destDir, 'SKILL.md');
      fs.writeFileSync(destFile, skillContent, 'utf8');
      console.log(`  ✓ [Local] Arquivo salvo em: ${destFile}`);
      break;

    default:
      console.warn(`  ⚠ Destino desconhecido ignorado: ${target}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] ? args[0].toLowerCase() : 'install';

  if (command === 'info' || command === 'help' || command === '--help' || command === '-h') {
    printHelp();
    return;
  }

  if (command === 'print') {
    if (fs.existsSync(SKILL_SOURCE)) {
      process.stdout.write(fs.readFileSync(SKILL_SOURCE, 'utf8'));
    } else {
      console.error('Error: SKILL.md not found.');
    }
    return;
  }

  // Handle install command
  let targets = [];

  if (command === 'install') {
    const rawTargets = args.slice(1);
    if (rawTargets.length > 0) {
      targets = rawTargets.flatMap(t => t.toLowerCase() === 'all' ? TARGET_OPTIONS.map(o => o.value) : t.split(/[\s,]+/));
    }
  } else if (TARGET_OPTIONS.some(o => o.value === command) || command === 'all') {
    targets = command === 'all' ? TARGET_OPTIONS.map(o => o.value) : [command];
  }

  if (targets.length === 0) {
    const response = await prompts(
      {
        type: 'multiselect',
        name: 'selected',
        message: 'Em quais IAs você deseja instalar a OmniRSM?',
        choices: TARGET_OPTIONS,
        hint: '- Espaço para marcar/desmarcar. Enter para confirmar',
        instructions: false
      },
      {
        onCancel: () => {
          console.log('\nInstalação cancelada pelo usuário.');
          process.exit(0);
        }
      }
    );

    targets = response.selected || [];
    if (targets.length === 0) {
      console.log('Nenhuma IA selecionada. Usando Antigravity como padrão.');
      targets = ['antigravity'];
    }
  }

  console.log(`\nInstalando OmniRSM em [${targets.join(', ')}]...`);
  for (const target of targets) {
    installToTarget(target);
  }
  console.log(`\n🎉 OmniRSM configurado com sucesso! Utilize o comando /rsm em seus agentes.\n`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
