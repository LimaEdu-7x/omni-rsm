#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const SKILL_SOURCE = path.resolve(__dirname, '..', 'SKILL.md');

function getHomeDir() {
  return os.homedir();
}

const TARGET_OPTIONS = [
  { id: 'antigravity', label: '🪐 Antigravity / Gemini CLI (~/.gemini/config/skills/rsm/SKILL.md)', checked: true },
  { id: 'claude', label: '🟣 Claude Code (~/.claude/skills/rsm/SKILL.md)', checked: false },
  { id: 'cursor', label: '⚡ Cursor IDE (.cursor/rules/rsm.mdc)', checked: false },
  { id: 'windsurf', label: '🌊 Windsurf (.windsurfrules)', checked: false },
  { id: 'local', label: '📁 Diretório Atual / Projeto Local (./SKILL.md)', checked: false }
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

function interactiveSelect(options) {
  return new Promise((resolve) => {
    if (!process.stdin.isTTY) {
      console.log('\nEscolha em quais IAs deseja instalar a OmniRSM:');
      options.forEach((opt, idx) => {
        console.log(`  [${idx + 1}] ${opt.label}`);
      });
      console.log(`  [a] Todas as opções acima`);

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('\nDigite os números separados por vírgula (ex: 1, 3) ou Enter para [1]: ', (answer) => {
        rl.close();
        const trimmed = answer.trim().toLowerCase();
        if (!trimmed) {
          return resolve([options[0].id]);
        }
        if (trimmed === 'a' || trimmed === 'all' || trimmed === 'todas') {
          return resolve(options.map(o => o.id));
        }
        const selectedIndexes = trimmed
          .split(/[\s,]+/)
          .map(n => parseInt(n, 10) - 1)
          .filter(i => i >= 0 && i < options.length);

        if (selectedIndexes.length === 0) {
          return resolve([options[0].id]);
        }
        resolve(selectedIndexes.map(i => options[i].id));
      });
      return;
    }

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    let cursor = 0;
    const selected = options.map(o => !!o.checked);

    function render(isFirst = false) {
      if (!isFirst) {
        readline.moveCursor(process.stdout, 0, -(options.length + 3));
      }
      console.log('\x1b[1m\x1b[36m? Em quais IAs você deseja instalar a OmniRSM?\x1b[0m \x1b[2m(Setas: mover | Espaço: marcar/desmarcar | Enter: confirmar)\x1b[0m');
      options.forEach((opt, idx) => {
        const isCurrent = idx === cursor;
        const isChecked = selected[idx];
        const pointer = isCurrent ? '\x1b[36m❯\x1b[0m' : ' ';
        const box = isChecked ? '\x1b[32m[✓]\x1b[0m' : '\x1b[90m[ ]\x1b[0m';
        const text = isCurrent ? `\x1b[36m\x1b[1m${opt.label}\x1b[0m` : opt.label;
        console.log(` ${pointer} ${box} ${text}`);
      });
      console.log('\x1b[90m(Pressione Enter para confirmar a seleção)\x1b[0m');
    }

    render(true);

    function onKeypress(str, key) {
      if (key.ctrl && key.name === 'c') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.exit(0);
      }

      if (key.name === 'up') {
        cursor = (cursor - 1 + options.length) % options.length;
        render();
      } else if (key.name === 'down') {
        cursor = (cursor + 1) % options.length;
        render();
      } else if (key.name === 'space' || str === ' ') {
        selected[cursor] = !selected[cursor];
        render();
      } else if (key.name === 'return' || key.name === 'enter') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
        process.stdin.removeListener('keypress', onKeypress);
        const result = options.filter((_, idx) => selected[idx]).map(o => o.id);
        console.log('');
        if (result.length === 0) {
          result.push(options[0].id);
        }
        resolve(result);
      }
    }

    process.stdin.on('keypress', onKeypress);
  });
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
      targets = rawTargets.flatMap(t => t.toLowerCase() === 'all' ? TARGET_OPTIONS.map(o => o.id) : t.split(/[\s,]+/));
    }
  } else if (TARGET_OPTIONS.some(o => o.id === command) || command === 'all') {
    targets = command === 'all' ? TARGET_OPTIONS.map(o => o.id) : [command];
  }

  if (targets.length === 0) {
    // Show interactive selection menu
    console.log(`\n🧠 OmniRSM Installer`);
    targets = await interactiveSelect(TARGET_OPTIONS);
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
