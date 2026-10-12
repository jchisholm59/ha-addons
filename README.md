# Home Assistant add-ons: ADS-B Monitor and AIS Monitor

Two add-ons for **Home Assistant OS** (or Supervised), so everything runs on your HA box:

| Add-on | What it is |
|---|---|
| ✈️ **[ADS-B Monitor](adsb-monitor/DOCS.md)** | Your PiAware / dump1090-fa receiver as a dashboard (map, flights, coverage, a **3D cockpit with HUD**), and phone alerts (emergencies, military, helicopters, every arrival). Needs a PiAware somewhere on your network. Source: [adsb-monitor](https://github.com/jchisholm59/adsb-monitor) |
| 🚢 **[AIS Monitor](ais-monitor/DOCS.md)** | Ships near places you choose, live from AIS (a free aisstream.io key, no receiver needed): map, vessel details, a **3D bridge view**, and harbour arrival/departure alerts with ship photos. Source: [ais-monitor](https://github.com/jchisholm59/ais-monitor) |

![The ADS-B Monitor's HUD on final into Halifax](https://github.com/jchisholm59/adsb-monitor/raw/main/docs/hud.jpg)

## Install
1. **Settings → Add-ons → Add-on Store → ⋮ → Repositories**, add `https://github.com/jchisholm59/ha-addons`.
2. Find **ADS-B Monitor** and/or **AIS Monitor** in the store, **Install**.
3. Fill in the **Configuration** tab (each add-on's **Documentation** tab explains every option), **Start**.
4. Open **Planes** / **Ships** from HA's sidebar.

Each add-on builds the matching tagged release of its monitor on your HA box (Node.js 22, no dependencies): amd64,
aarch64 (Pi 4/5, most ARM boxes) and armv7.

## Updating
When a new version is out, HA shows it under **Settings → Updates** (or **Check for updates** in the Add-on Store's ⋮
menu); press **Update**. Your Configuration and the add-on's data (coverage, alert log, known vessels...) are kept.

Not on HA OS? The same monitors run anywhere with `./install.sh`, with or without Home Assistant: see their READMEs.
To update one of those, don't clone it again: `cd adsb-monitor && git pull && ./install.sh --yes` (or `ais-monitor`)
keeps your `.env` and `data/`.
