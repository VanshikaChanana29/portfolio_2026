# Vanshika Chanana: freelance portfolio

Live: https://vanshikachanana.netlify.app

Static Next.js 15 site (Tailwind CSS), deployed on Netlify. No server, no database.

## Edit content

Everything (hero text, stats, services, case studies, pricing, FAQs, testimonials, links) is in **`content/site-data.js`**.
The chatbot reads from the same file, so its answers update automatically.

- Leave a value empty (`""`) to hide it. Nothing broken or fake shows on the site.
- `npm run check` lists every placeholder that still needs real content. It also runs before each build.

### Add case-study screenshots or a demo video

1. Put files in `public/work/<case-study-slug>/` (e.g. `public/work/taggify-hrms/1.webp`). Use **anonymized data only**.
2. In `content/site-data.js`, fill `proof.screenshots` (`[{ src: "/work/taggify-hrms/1.webp", alt: "Leave approval screen" }]`) and `proof.video` (`"/work/taggify-hrms/demo.mp4"`) or `proof.embed` (a YouTube/Loom embed URL).

### Change the photo

Replace `assets/profile.jpeg`, then run `npm run images` to regenerate `public/images/vanshika.webp` and the favicons.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run check    # list missing content
npm run images   # compress photo + regenerate favicons
```

## Contact

There is no form. The Contact section lists email, phone, WhatsApp and LinkedIn from `person` and `links` in `content/site-data.js`.
