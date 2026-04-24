#!/usr/bin/env node

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const websiteRoot = path.resolve(__dirname, '..');
const repoPath = process.env.ORBITAL_MECHANICS_REPO ||
  path.resolve(websiteRoot, '..', 'orbital-mechanics');
const outputPath = path.join(
  websiteRoot,
  'app',
  'src',
  'lib',
  'content',
  'project-updates',
  'orbital-mechanics.json'
);

const summaryOverrides = new Map([
  [
    'd893649',
    'Added burn-vector alignment guidance, ignition timing, and pointing error readouts so planned nodes connect directly to spacecraft attitude.',
  ],
  [
    'c00baa5',
    'Added click-to-place maneuver nodes on the orbit line, scene markers, map connectors, and a maneuver cue on the navball.',
  ],
  [
    '05703cc',
    'Added a MechJeb-style maneuver editor with prograde, normal, radial, TIG, AP/PE placement, predicted orbit, and burn timing.',
  ],
  [
    '085fc60',
    'Reworked the interface around Apollo mission-control references with clean lines, compact telemetry, and an updateable node editor.',
  ],
  [
    'd1ead05',
    'Added the first maneuver planning pass with flight display controls, predicted orbit telemetry, and burn execution.',
  ],
  [
    '89b51cd',
    'Updated the roadmap around a clean CRT display target and Apollo mission-control visual direction.',
  ],
  [
    '7f05060',
    'Added vector Earth grid and coastline rendering for clearer orbital position and horizon reference.',
  ],
  [
    '6016939',
    'Added Apollo simulator reference documentation to ground future cockpit and mission-control decisions.',
  ],
]);

const logFormat = '%h%x1f%cs%x1f%s';
const rawLog = execFileSync(
  'git',
  ['-C', repoPath, 'log', '--max-count=8', `--pretty=format:${logFormat}`],
  { encoding: 'utf8' }
).trim();

const updates = rawLog
  .split('\n')
  .filter(Boolean)
  .map((line) => {
    const [commit, date, subject] = line.split('\x1f');
    return {
      date,
      title: titleFromSubject(subject),
      summary: summaryOverrides.get(commit) || `${subject}.`,
      commit,
    };
  });

fs.writeFileSync(outputPath, `${JSON.stringify(updates, null, 2)}\n`);
console.log(`Wrote ${updates.length} updates to ${path.relative(websiteRoot, outputPath)}`);

function titleFromSubject(subject) {
  return subject
    .replace(/^(Add|Update|Refine|Render|Create|Fix)\s+/i, '')
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
