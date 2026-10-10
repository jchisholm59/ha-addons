// Add-on entry point: the add-on's options (/data/options.json) become the monitor's environment variables
// (piaware -> PIAWARE, ...), its data lives in /data (kept across updates and in HA backups), then the monitor runs.
const fs = require('fs');
let opts = {};
try {
  opts = JSON.parse(fs.readFileSync('/data/options.json', 'utf8'));
} catch (e) {}
const { card_options: card, ...rest } = opts;
for (const [k, v] of Object.entries(rest)) if (v !== null && v !== undefined && v !== '') process.env[k.toUpperCase()] = String(v);
process.env.DATA_DIR = '/data/store';
fs.mkdirSync(process.env.DATA_DIR, { recursive: true });
// Card options for the dashboard (JSON, e.g. {"title": "Planes"}): written where the monitor serves them from.
const cardFile = '/data/store/card.json';
if (card && card.trim()) {
  try {
    fs.writeFileSync(cardFile, JSON.stringify(JSON.parse(card)));
  } catch (e) {
    console.error('card_options is not valid JSON, ignored:', e.message);
  }
} else fs.rmSync(cardFile, { force: true });
require('/app/server.js');
