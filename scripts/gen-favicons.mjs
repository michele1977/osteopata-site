import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "spine-logo.png");

// --- Step 1: trim whitespace borders ---
const trimmed = await sharp(src)
  .trim()
  .toBuffer({ resolveWithObject: true });

const { width: tw, height: th } = trimmed.info;
console.log(`Trimmed to ${tw}x${th}`);

// --- Step 2: upscale the ORIGINAL first, then do smooth color extraction ---
// Upscale the original teal-on-white image to high-res.
// Lanczos interpolation creates smooth antialiased teal-white transitions.
const hiResH = 512;
const hiResW = Math.round(hiResH * (tw / th));
const upscaled = await sharp(trimmed.data)
  .resize(hiResW, hiResH, { kernel: "lanczos3" })
  .raw()
  .toBuffer();

// Now on the high-res version, compute "tealness" per pixel as alpha.
// Teal is roughly (0-80, 120-180, 100-150). White is (255,255,255).
// Use distance from white as opacity: darker = more opaque.
const hiRgba = Buffer.alloc(hiResW * hiResH * 4);
for (let i = 0; i < hiResW * hiResH; i++) {
  const r = upscaled[i * 4], g = upscaled[i * 4 + 1], b = upscaled[i * 4 + 2];
  // Luminance-based distance from white (0 = white, 255 = black)
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const distFromWhite = 255 - lum;
  // Map to alpha: amplify so teal is fully opaque, near-white is transparent
  const alpha = Math.min(255, Math.round(distFromWhite * 2.5));
  hiRgba[i * 4 + 0] = 255; // white
  hiRgba[i * 4 + 1] = 255;
  hiRgba[i * 4 + 2] = 255;
  hiRgba[i * 4 + 3] = alpha;
}

const spineHiRes = await sharp(hiRgba, { raw: { width: hiResW, height: hiResH, channels: 4 } })
  .png()
  .toBuffer();

console.log(`HiRes spine: ${hiResW}x${hiResH}`);

// --- Step 3: generate icons at various sizes ---
async function generateIcon(size, radius, padding, outPath) {
  const bgSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
    `<rect width="${size}" height="${size}" rx="${radius}" fill="#0f766e"/>` +
    `</svg>`
  );
  const bg = await sharp(bgSvg).png().toBuffer();

  const innerH = size - padding * 2;
  const innerW = Math.round(innerH * (tw / th));
  const resized = await sharp(spineHiRes)
    .resize(innerW, innerH, {
      fit: "inside",
      kernel: "lanczos3",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  const rMeta = await sharp(resized).metadata();
  const left = Math.round((size - rMeta.width) / 2);
  const top = Math.round((size - rMeta.height) / 2);

  await sharp(bg)
    .composite([{ input: resized, left, top }])
    .png()
    .toFile(outPath);

  console.log(`${outPath.split(/[\\/]/).pop()} ${size}x${size} OK`);
}

// favicon.ico 32x32
await generateIcon(32, 6, 3, join(root, "app", "favicon.ico"));

// favicon-16.png 16x16
await generateIcon(16, 3, 1, join(root, "app", "favicon-16.png"));

// icon.png 192x192
await generateIcon(192, 38, 20, join(root, "app", "icon.png"));

// apple-icon.png 180x180
await generateIcon(180, 36, 18, join(root, "app", "apple-icon.png"));

// Save a large preview
await generateIcon(512, 96, 50, join(root, "public", "spine-icon-512.png"));
console.log("\nDone! All icons generated.");
