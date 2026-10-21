## 1.18.0
A Listen panel on the map and in the Bridge: channel lights, Scan, Lock, squelch and ⊘ to skip a channel (the marine weather broadcast), with a Pi-SDR receiver (needs Pi-SDR from 2026-10-21). [ais-monitor v1.18.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.18.0).

## 1.17.0
Listen can switch to a harbour's traffic channel when the vessel you follow sails in (a channel `area` in `card_options`). [ais-monitor v1.17.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.17.0).

## 1.16.0
A squelch slider (with an open light) while listening in the Bridge view. [ais-monitor v1.16.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.16.0).

## 1.15.2
Closing the tab while listening in the Bridge view works like Stop: the Pi-SDR is tuned back where it was. [ais-monitor v1.15.2](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.15.2).

## 1.15.1
The map opens on satellite imagery (the satellite button still switches to the gray map). [ais-monitor v1.15.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.15.1).

## 1.15.0
A **Listen** button in the Bridge view plays marine VHF from a [Pi-SDR](https://github.com/jchisholm59/Pi-SDR) receiver on your network. Set it up with `sdr` in `card_options`, e.g. `{"sdr": {"url": "http://192.168.1.30:8073", "channels": [{"name": "Ch 16", "freq": 156.8}]}}`. [ais-monitor v1.15.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.15.0).

## 1.14.1
Addresses in the options work without `http://` (it's added for you; `https://` for an ntfy topic). [ais-monitor v1.14.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.14.1).

## 1.14.0
CesiumJS (the Bridge and Follow views) now comes with the add-on instead of from Cesium's CDN, so the 3D views no longer depend on cesium.com. [ais-monitor v1.14.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.14.0).

## 1.13.1
The Vessel tab shows the ship's whole photo, scaled to fit, instead of a cropped strip. [ais-monitor v1.13.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.13.1).

## 1.13.0
Ship photos: the Vessel tab shows the selected ship's photo (photographer and licence underneath, tap for full size) and the Bridge and Follow views show it framed bottom left (tap to enlarge, **Photo** button to hide). Photos are now also found in Wikimedia Commons' "IMO <number>" categories, so more ships (and alerts) have one. [ais-monitor v1.13.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.13.0).

## 1.12.2
The AIS feed no longer stops for good when aisstream refuses a reconnect ("AIS feed problem" until the add-on was restarted): a connect attempt that hasn't opened within 2 minutes is retried. [ais-monitor v1.12.2](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.12.2).

## 1.12.1
*Manage locations* place search falls back to OpenStreetMap's Nominatim when Photon doesn't answer, instead of "Place search unavailable". [ais-monitor v1.12.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.12.1).

## 1.12.0
**Watched ships**: tap Watch on a ship's Vessel tab and it alerts whenever it arrives at or leaves a watched harbour, whatever its type. [ais-monitor v1.12.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.12.0).

## 1.11.0
Leaving alerts can have their own, smaller **departure circle** (Alerts tab), so a departure alerts as the ship pulls away from its berth rather than once it's out of the harbour circle (suggested in #2). [ais-monitor v1.11.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.11.0).

## 1.10.2
The Tides tab's moon is tilted as it really is in each place's sky. [ais-monitor v1.10.2](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.10.2).

## 1.10.1
Tides tab polish (icons, chart labels). [ais-monitor v1.10.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.10.1).

## 1.10.0
A Tides tab: tides at your locations (Canadian and US stations, a tide model anywhere else), following the location picker. Optional `worldtides_key` for WorldTides. [ais-monitor v1.10.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.10.0).

## 1.9.3
Steadier vessel in the Bridge and Follow views: it eases onto the water height instead of snapping to each reading. [ais-monitor v1.9.3](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.9.3).

## 1.9.2
The Bridge view's 3D world appears sooner: coarse first, then sharp. [ais-monitor v1.9.2](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.9.2).

## 1.9.1
The Bridge view loads the shore to either side without switching to Follow view first. [ais-monitor v1.9.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.9.1).

## 1.9.0
CruiseMapper links for cruise ships in the Vessel tab (suggested in #2). [ais-monitor v1.9.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.9.0).

## 1.8.2
Locations edited in the card are saved in the add-on's storage and survive restarts (#2). [ais-monitor v1.8.2](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.8.2).

## 1.8.1
Follow view: swapped AIS dimensions corrected (beam reported longer than length), and pleasure craft under 10 m drawn as a runabout. [ais-monitor v1.8.1](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.8.1).

## 1.8.0
Realistic 3D ships (CC BY 4.0 models, stretched to each vessel's AIS length and beam) and wakes in the Follow view; the Bridge tab says why Google's 3D tiles are unavailable and retries them. [ais-monitor v1.8.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.8.0).

## 1.7.0
Follow view: the vessel in 3D, built to scale from its AIS type, length and beam, with an orbit camera and Behind / Side / Front / Above / Auto angles; Smooth plays it 20 s behind live along its real path. [ais-monitor v1.7.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.7.0).

## 1.6.0
Guest mode: with `admin_password` set, people you share the dashboard with can look but not change alerts or saved locations; `cesium_token` gives them the Bridge view. [ais-monitor v1.6.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.6.0).

## 1.5.0
First release as an add-on: [ais-monitor v1.5.0](https://github.com/jchisholm59/ais-monitor/releases/tag/v1.5.0). See its release notes.
