// Add-on entry point: the add-on's options (/data/options.json) become the monitor's environment variables, its data
// lives in /data (kept across updates and in HA backups), then the monitor runs.
// Stations: this Home Assistant's own Ecowitt station first (through the Supervisor, so no token is needed; leave it
// out with this_ha: false), then any others listed under `stations` (another HA's address and a token from it).
const fs = require('fs');
let opts = {};
try {
  opts = JSON.parse(fs.readFileSync('/data/options.json', 'utf8'));
} catch (e) {}
const set = (k, v) => {
  if (v !== null && v !== undefined && v !== '') process.env[k] = String(v);
};
let n = 0;
if (opts.this_ha !== false) {
  n++;
  set(`STATION_${n}_NAME`, opts.station_name || 'Home');
  set(`STATION_${n}_HA_URL`, 'http://supervisor/core');
  set(`STATION_${n}_HA_TOKEN`, process.env.SUPERVISOR_TOKEN);
  set(`STATION_${n}_ID`, opts.station_id);
}
for (const s of opts.stations || []) {
  if (++n > 9) break;
  set(`STATION_${n}_NAME`, s.name);
  set(`STATION_${n}_HA_URL`, s.ha_url);
  set(`STATION_${n}_HA_TOKEN`, s.ha_token);
  set(`STATION_${n}_ID`, s.station_id);
}
for (const k of ['ha_webhook', 'ntfy_url', 'ntfy_token', 'dashboard_url', 'admin_password']) set(k.toUpperCase(), opts[k]);
process.env.DATA_DIR = '/data/store';
// Home Assistant's ingress proxy: its users have already signed in to HA, so the sidebar panel is never a guest.
process.env.ADMIN_TRUSTED_IPS = '172.30.32.2';
fs.mkdirSync(process.env.DATA_DIR, { recursive: true });
// Card options for the dashboard (JSON, e.g. {"title": "Weather"}): written where the monitor serves them from.
const cardFile = '/data/store/card.json';
if (opts.card_options && opts.card_options.trim()) {
  try {
    fs.writeFileSync(cardFile, JSON.stringify(JSON.parse(opts.card_options)));
  } catch (e) {
    console.error('card_options is not valid JSON, ignored:', e.message);
  }
} else fs.rmSync(cardFile, { force: true });
require('/app/server.js');
