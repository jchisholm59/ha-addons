# ADS-B Monitor

Watches your PiAware (or any dump1090-fa with SkyAware, or readsb/tar1090) around the clock and gives you:

- **Planes** in HA's sidebar: live map with range rings and trails, aircraft list, flight details, coverage history, a
  **3D cockpit** for any aircraft (green HUD, banking in turns, ILS-style approach guidance on final) and SkyAware itself.
- **Phone alerts**: emergency squawks, military aircraft and helicopters nearby, **every arrival** at your airport ("on
  final RWY 23", then "landed", with a photo of the airframe), watched flights.

The receiver doesn't have to be this machine: the add-on reads it over the network. **No receiver at all?** Set
`source` to `adsb.lol` or `adsb.fi` and it shows the aircraft around your `lat`/`lon` from that aggregator instead.

## Configuration
| Option | |
|---|---|
| `source` | `piaware` (your receiver), or with **no receiver** a public aggregator for the area around `lat`/`lon`: `adsb.lol` (free, ODbL data) or `adsb.fi` (personal, non-commercial use only). With an aggregator, set `lat`, `lon` and `radius_nm`; Coverage and SkyAware are hidden |
| `piaware` | Your PiAware / dump1090-fa address, e.g. `http://192.168.1.50` (ignored with an aggregator) |
| `radius_nm` | With an aggregator: the area's radius, up to 250 nm (default 100) |
| `skyaware_path` | Where SkyAware is served on it (`/skyaware/` for PiAware; `/tar1090/` for tar1090) |
| `airport` | Your airport's ICAO code (e.g. `KBOS`, `EGLL`, `CYHZ`) for arrival and watched-flight alerts. Blank: none |
| `ha_webhook` | Webhook for phone alerts through HA, e.g. `http://homeassistant:8123/api/webhook/<your-id>` (see below) |
| `ntfy_url` | Or/also [ntfy](https://ntfy.sh): a topic URL with a long random name, e.g. `https://ntfy.sh/planes-7f3k9q` |
| `ntfy_token`, `dashboard_url` | Optional: a token for a protected ntfy server; the page an ntfy alert opens |
| `lat`, `lon` | Receiver position, if not the one PiAware was set up with; **required with an aggregator** (the centre of your area) |
| `military_radius`, `heli_radius`, `cooldown_hours`, `overhead_radius` | Optional starting alert settings (nm, h); change them later in the dashboard's Alerts tab |
| `admin_password` | Optional: share the dashboard's port with guests who can look but not change anything; you sign in on the Alerts tab. The sidebar panel (through Home Assistant) is always signed in |
| `cesium_token` | Optional: a Cesium ion token (`assets:read`) for the Cockpit view, for everyone using the dashboard, guests included |
| `card_options` | Optional card options as JSON, e.g. `{"title": "Planes", "rings": [25, 50, 100]}` |

### Phone alerts through Home Assistant
Create an automation from [`ha-automation.yaml`](https://github.com/jchisholm59/adsb-monitor/blob/main/ha-automation.yaml)
(it turns each alert into a notification on your phone), with a long random webhook ID, and set `ha_webhook` to
`http://homeassistant:8123/api/webhook/<that id>`. Test it from the dashboard's **Alerts** tab.

## The 3D cockpit
Needs a free [Cesium ion](https://ion.cesium.com/tokens) token (scope `assets:read`): paste it into the Cockpit tab
once. Restrict its *Allowed URLs* to your Home Assistant address(es), since anyone who can open the dashboard can read it.

**Follow view** (button in the Cockpit tab) shows the aircraft itself in 3D: drag to circle it, wheel or pinch to zoom,
**View** for Behind, Side, Front, Above or Auto. Its models are [Flightradar24's](https://github.com/Flightradar24/fr24-3d-models)
(from FlightGear, GPL-2.0), downloaded by your browser from jsDelivr the first time each type is shown (1-7 MB, then
cached). **Smooth** (on by default) shows the aircraft 3 s behind live along its real path.

## The Lovelace card, and other browsers
The sidebar panel needs nothing else. To use the [card](https://github.com/jchisholm59/adsb-monitor) on a dashboard, or
open the page directly from another device, set a host port for `7100/tcp` under **Network**; the card's `monitor` and
`urls` are then `http://<ha-address>:7100`.

## Data
Settings, coverage history, the alert log and the downloaded aircraft database live in the add-on's storage: they
survive updates and are included in HA backups.
