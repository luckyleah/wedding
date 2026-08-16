# Leah & Peter Wedding Website

A static React + Vite site for Leah Cupp and Peter Price's June 5, 2027 wedding in Johnstown, Ohio.

## Development

```powershell
npm install
npm run dev
```

Create a production build with:

```powershell
npm run build
```

The `dist` directory can be deployed to any static host.

## Updating wedding details

All guest-facing details are centralized in `src/content.ts`, including:

- The Knot RSVP and registry URLs
- Event schedule and venue information
- Hotel booking link
- Wedding-party names, relationships, and future photo paths
- FAQ copy

Set `links.rsvp` and `links.registry` to their final The Knot URLs before launch. Empty values render an intentional “Coming soon” state rather than an invalid link.

The save-the-date artwork used in the hero is stored at `public/images/save-the-date.png`. Add future wedding-party or gallery images to `public/images`, then reference their `/images/...` paths in `src/content.ts`.
