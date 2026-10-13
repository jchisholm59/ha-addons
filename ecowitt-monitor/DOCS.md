# Ecowitt Monitor

For Ecowitt weather stations (HP2551 and other consoles or gateways) that Home Assistant's core **Ecowitt** integration
already receives. It gives you:

- **Weather** in HA's sidebar:
  - **Now**: outside temperature with today's high and low, feels-like, humidity and dew point; a wind compass with
    gusts; rain from this hour to this year; pressure and its 3-hour tendency; sun and UV; inside readings; sensor
    batteries.
  - **Graphs**: temperature, humidity, wind and gusts, rain and pressure over 6 h, 24 h, 7 d, 30 d or a year, from
    Home Assistant's own statistics, so the history is there from day one.
  - **Alerts**: wind gusts, heavy rain, a wet day, frost, heat, pressure falling fast, the station going quiet, a low
    sensor battery.
- **Lightning**, if this HA has the [Blitzortung](https://github.com/mrk-its/homeassistant-blitzortung) integration
  (HACS): recent strikes plotted around the station, counts, the nearest one, and a "lightning within X km" alert.
- **Several stations**, say home and a cottage, switched with a button: this HA's own station, plus any station in
  another Home Assistant you can reach (over Tailscale, say).

It only reads: states and statistics. This HA's station needs no token (the add-on asks HA through the Supervisor).

## Configuration
| Option | |
|---|---|
| `station_name` | What to call this HA's station, e.g. `Home` (blank: `Home`) |
| `this_ha` | Optional: `false` to leave out this HA's own station (only show the ones under `stations`) |
| `station_id` | Optional: which station, if this HA has more than one (the start of its Ecowitt sensors' unique IDs) |
| `stations` | Optional other stations, each in its own Home Assistant: `name`, `ha_url` (e.g. `http://cottage-ha:8123`), `ha_token` (a long-lived access token from **that** HA: its profile → Security), and optionally `station_id` |
| `ha_webhook` | Webhook for alerts through HA, e.g. `http://homeassistant:8123/api/webhook/<your-id>` (see below) |
| `ntfy_url` | Or/also [ntfy](https://ntfy.sh): a topic URL with a long random name |
| `ntfy_token`, `dashboard_url` | Optional: a token for a protected ntfy server; the page an ntfy alert opens |
| `admin_password` | Optional: share the dashboard's port with guests who can look but not change alerts; you sign in on the Alerts tab. The sidebar panel (through Home Assistant) is always signed in |
| `card_options` | Optional card options as JSON, e.g. `{"title": "Weather", "range": "7d"}` |

A second station, in YAML mode:
```yaml
stations:
  - name: Cottage
    ha_url: http://cottage-ha.example:8123
    ha_token: eyJ...
```

### Alerts through Home Assistant
Create an automation from [`ha-automation.yaml`](https://github.com/jchisholm59/ecowitt-monitor/blob/main/ha-automation.yaml)
(phone, watch and a spoken announcement on a speaker; delete what you don't have) with a long random webhook ID, and set
`ha_webhook` to `http://homeassistant:8123/api/webhook/<that id>`. Choose what alerts, and the thresholds, in the
dashboard's **Alerts** tab, per station, and send a test from there.

## The Lovelace card, and other browsers
The sidebar panel needs nothing else. To put the card on a dashboard, or open the page from another device, set a host
port for `7120/tcp` under **Network**, copy `ecowitt-card.js` from the
[repository's `dist/`](https://github.com/jchisholm59/ecowitt-monitor/tree/main/dist) to `/config/www/`, add it as a
resource, and use:
```yaml
type: custom:ecowitt-card
monitor:
  - http://<ha-address>:7120
```

## Data
Alert settings and the alert log live in the add-on's storage: they survive updates and are included in HA backups.
The weather history itself is Home Assistant's (its recorder keeps 5-minute statistics for 10 days by default, and the
hourly ones that make the 30-day and yearly graphs for good).
