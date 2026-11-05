// Compress images for the site. Run: npm run images
// Puts web-ready WebP files in public/images. Re-run after replacing the source photo.
import sharp from "sharp";

const jobs = [
  { src: "assets/profile.jpeg", out: "public/images/vanshika.webp", width: 560 },
];

for (const j of jobs) {
  const info = await sharp(j.src).rotate().resize({ width: j.width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(j.out);
  console.log(`${j.out}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
}

// Favicons from the SVG
await sharp("public/favicon.svg").resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("public/apple-touch-icon.png: 180x180");

// favicon.ico (a PNG wrapped in an ICO container)
import { writeFileSync } from "node:fs";
const png = await sharp("public/favicon.svg").resize(48, 48).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(48, 6); header.writeUInt8(48, 7); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
writeFileSync("public/favicon.ico", Buffer.concat([header, png]));
console.log("public/favicon.ico: 48x48");
