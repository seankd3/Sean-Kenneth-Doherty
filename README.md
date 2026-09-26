# Sean Kenneth Doherty

Personal site, served as plain static files by GitHub Pages.

- `index.html`: the front page, a showcase for **Marshlight Sanctuary** with the trailer, screenshots and a Play button.
- `marshlight-sanctuary/`: the playable game, a static build of [seankd3/Rodent-Sanctuary](https://github.com/seankd3/Rodent-Sanctuary). It runs in any modern browser and plays on phones with touch controls.
- `media/`: the trailer (1080p for large screens, 720p for phones), stills, the share image, the icon and the page's font.

## Updating the game

In the game repo:

```sh
npm run build:static
```

Then replace this repo's `marshlight-sanctuary/` folder with the contents of `dist-static/`, leaving out `og.png`.

## Hosting

GitHub Pages: Settings → Pages → Deploy from a branch → `main` / `(root)`. The site is then at
https://seankd3.github.io/Sean-Kenneth-Doherty/, and the game at
https://seankd3.github.io/Sean-Kenneth-Doherty/marshlight-sanctuary/.
If you add a custom domain, update the `og:image` address in `index.html` to match.
