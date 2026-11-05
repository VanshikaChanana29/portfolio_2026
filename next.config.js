/** @type {import('next').NextConfig} */
module.exports = {
  // Fully static site: fastest to load.
  output: "export",
  trailingSlash: true,
  images: {
    // Static export can't optimise images on request, so images are
    // pre-compressed to WebP by `npm run images` instead.
    unoptimized: true,
  },
};
