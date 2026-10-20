// Builds the 1200x630 social share image (public/assets/og-image.jpg) from the monogram portrait.
// If you add a real photo, point PORTRAIT at a transparent PNG/WebP cutout and update profile.portrait in src/data/portfolio.ts.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
const PORTRAIT = 'public/assets/portrait.svg';
mkdirSync(OUT, { recursive: true });

const portrait = await sharp(PORTRAIT, { density: 150 }).resize({ height: 600 }).png().toBuffer();
const text = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#07070a"/>
  <rect x="0" y="0" width="1200" height="630" fill="url(#g)"/>
  <defs><radialGradient id="g" cx=".8" cy=".4" r=".7"><stop offset="0" stop-color="#e5132b" stop-opacity=".28"/><stop offset="1" stop-color="#07070a" stop-opacity="0"/></radialGradient></defs>
  <text x="70" y="150" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="8" fill="#9a9aa6" font-weight="700">A RATHORE ORIGINAL</text>
  <text x="66" y="300" font-family="Impact, 'Arial Narrow', Arial, sans-serif" font-size="150" fill="#f5f1ea" letter-spacing="4">JUNGJEET</text>
  <text x="70" y="380" font-family="Impact, 'Arial Narrow', Arial, sans-serif" font-size="64" fill="#e5132b" letter-spacing="10">THE SERIES</text>
  <text x="70" y="460" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#c9c9d2">Full-Stack Web Developer · B.Tech CSE · Class of 2028</text>
</svg>`;
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([{ input: Buffer.from(text) }, { input: portrait, left: 720, top: 30 }])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);
console.log('og-image.jpg written');
