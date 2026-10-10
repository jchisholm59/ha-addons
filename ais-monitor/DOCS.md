# AIS Monitor

Keeps one connection to [aisstream.io](https://aisstream.io) (a free AIS feed; no receiver needed) and gives you:

- **Ships** in HA's sidebar: the vessels closest to places you choose, on a map, in a list and one at a time (classed as
  military, government, commercial, service, fishing or private), 43 historic wrecks with their stories, and a **3D
  bridge view** from any vessel.
- **Harbour alerts**: warships and cruise ships (optionally Coast Guard) **entering and leaving** a harbour, with a
  photo of the ship.

## Configuration
| Option | |
|---|---|
| `aisstream_key` | Your aisstream.io API key: sign in at aisstream.io, then *API Keys*. One key per running monitor |
| `locations` | Places to watch, `Name:lat,lon;Name:lat,lon`; the first is the default. You can add more later in the dashboard |
| `ha_webhook` | Webhook for phone alerts through HA, e.g. `http://homeassistant:8123/api/webhook/<your-id>` (see below) |
| `ntfy_url` | Or/also [ntfy](https://ntfy.sh): a topic URL with a long random name |
| `ntfy_token`, `dashboard_url` | Optional: a token for a protected ntfy server; the page an ntfy alert opens |
| `location_radius_nm` | Optional: AIS is received for a box this size around each location (default 40) |
| `worldwide` | Optional: receive every vessel aisstream has (~6.5 GB/day download, more memory) |
| `area_lat`, `area_lon`, `area_radius_nm` | Optional wider area to receive as well |
| `alert_radius_nm`, `closest` | Optional: starting harbour circle (nm); how many closest vessels to list |
| `admin_password` | Optional: share the dashboard's port with guests who can look but not change anything; you sign in on the Alerts tab. The sidebar panel (through Home Assistant) is always signed in |
| `cesium_token` | Optional: a Cesium ion token (`assets:read`) for the Bridge view, for everyone using the dashboard, guests included |
| `card_options` | Optional card options as JSON, e.g. `{"title": "Harbour", "n": 30}` |

### Phone alerts through Home Assistant
Create an automation from [`ha-automation.yaml`](https://github.com/jchisholm59/ais-monitor/blob/main/ha-automation.yaml)
with a long random webhook ID, and set `ha_webhook` to `http://homeassistant:8123/api/webhook/<that id>`. Choose which
harbours and ship types alert in the dashboard's **Alerts** tab, and test it there.

## The 3D bridge view
Needs a free [Cesium ion](https://ion.cesium.com/tokens) token (scope `assets:read`), pasted into the Bridge tab once;
restrict its *Allowed URLs* to your Home Assistant address(es).

## The Lovelace card, and other browsers
The sidebar panel needs nothing else. For the [card](https://github.com/jchisholm59/ais-monitor) on a dashboard, or to
open the page from another device, set a host port for `7110/tcp` under **Network**; the card's `monitor` is then
`http://<ha-address>:7110`.

## Data
Known vessels, locations, settings, the alert log and cached ship photos live in the add-on's storage: they survive
updates and are included in HA backups.
