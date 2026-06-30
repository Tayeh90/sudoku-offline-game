# sudoku-offline-game

Official landing page for **Sudoku Offline Classic Puzzle** by **ELECTRAGLOBE PTY LTD**.

## Description

A fast, static website for the Sudoku Offline Classic Puzzle mobile app. Includes a landing page, privacy policy, support page, and AdMob `app-ads.txt` for Cloudflare Pages deployment.

## Developer

**ELECTRAGLOBE PTY LTD**

- Website: https://electraglobe.com/
- Office: 15/218 Padstow Rd, Eight Mile Plains QLD 4113, Australia

## Deployment

**Platform:** [Cloudflare Pages](https://pages.cloudflare.com/)

**Project:** `sudoku-offline-game`

**Live URL:** https://sudoku-offline-game.pages.dev

### Cloudflare Pages settings

| Setting | Value |
|---------|-------|
| Build command | *(leave empty)* |
| Build output directory | `/` (root) |
| Root directory | `/` |

Connect the GitHub repository and deploy from the `main` branch.

## Pages

- `/` — Landing page
- `/privacy.html` — Privacy Policy
- `/support.html` — Support & Contact
- `/app-ads.txt` — AdMob publisher declaration

## Store links

- **Apple App Store:** https://apps.apple.com/app/sudoku-puzzle-offline-classic/id6782259803
- **Google Play:** https://play.google.com/store/apps/details?id=com.sudoku.offline.puzzle&hl=en

## Support

**Email:** Info@lwf.my

## app-ads.txt

Located at the repository root and served at:

```
https://sudoku-offline-game.pages.dev/app-ads.txt
```

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

```
├── index.html
├── privacy.html
├── support.html
├── styles.css
├── script.js
├── app-ads.txt
├── README.md
└── assets/
    ├── logo.png
    ├── screenshot-1.png … screenshot-5.png
    ├── favicon-32.png
    ├── apple-touch-icon.png
    ├── og-image.png
    ├── app-store-badge.svg
    └── google-play-badge.svg
```
