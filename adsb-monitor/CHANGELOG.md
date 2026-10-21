## 1.12.0
CesiumJS (the Cockpit and Follow views) now comes with the add-on instead of from Cesium's CDN, so the 3D views no longer depend on cesium.com. [adsb-monitor v1.12.0](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.12.0).

## 1.11.5
Smoother climbs and descents in the Cockpit view: no more pitching every couple of seconds. [adsb-monitor v1.11.5](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.5).

## 1.11.4
Aircraft no longer bob up and down in the Cockpit and Follow views (altitude's 25 ft steps are smoothed). [adsb-monitor v1.11.4](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.4).

## 1.11.3
The Cockpit's 3D world appears sooner: coarse first, then sharp. [adsb-monitor v1.11.3](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.3).

## 1.11.2
The Cockpit's 3D world loads the ground to either side straight away, not only in the middle of the screen. [adsb-monitor v1.11.2](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.2).

## 1.11.1
The Cockpit tab says why Google's 3D tiles are unavailable (rate limit, usage allowance, asset, Allowed URLs, network) and retries them, carrying on over a plain globe meanwhile. [adsb-monitor v1.11.1](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.1).

## 1.11.0
Follow view, like Flightradar24's 3D view: the aircraft in 3D (Flightradar24's models for its type, fetched from jsDelivr the first time they're needed) with an orbit camera and Behind / Side / Front / Above / Auto angles; Smooth plays it 3 s behind live along its real path. [adsb-monitor v1.11.0](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.11.0).

## 1.10.0
Guest mode: with `admin_password` set, people you share the dashboard with can look but not change alerts or watched flights; `cesium_token` gives them the Cockpit view. [adsb-monitor v1.10.0](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.10.0).

## 1.9.0
No receiver needed: `source` can be `adsb.lol` or `adsb.fi` (aircraft around `lat`/`lon`). [adsb-monitor v1.9.0](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.9.0).

## 1.8.0
First release as an add-on: [adsb-monitor v1.8.0](https://github.com/jchisholm59/adsb-monitor/releases/tag/v1.8.0). See its release notes.
