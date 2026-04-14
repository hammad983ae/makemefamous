/**
 * Generate static SEO files for production hosting.
 *
 * This project serves a single `index.html` for all routes, so we ship
 * `/robots.txt` and `/sitemap.xml` as real static files.
 *
 * Configure the canonical base URL via `SITE_URL` at build time.
 */
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function normalizeSiteUrl(input) {
  const raw = (input || '').trim();
  const fallback = 'https://www.makemefamous.net';

  const base = raw || fallback;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

function writeFileIfChanged(filePath, contents) {
  let existing = null;
  try {
    existing = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    // ignore
  }
  if (existing === contents) return false;
  fs.writeFileSync(filePath, contents, 'utf8');
  return true;
}

const appDir = path.resolve(process.cwd(), 'app');
const siteUrl = normalizeSiteUrl(process.env.SITE_URL);

const routes = ['/', '/services', '/portfolio', '/contact', '/agency'];
const today = new Date().toISOString().slice(0, 10);

const sitemapXml =
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(route => {
      const loc = `${siteUrl}${route === '/' ? '/' : route}`;
      const priority = route === '/' ? '1.0' : '0.7';
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    }),
    '</urlset>',
    '',
  ].join('\n');

const robotsTxt =
  [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

const sitemapPath = path.join(appDir, 'sitemap.xml');
const robotsPath = path.join(appDir, 'robots.txt');

const sitemapChanged = writeFileIfChanged(sitemapPath, sitemapXml);
const robotsChanged = writeFileIfChanged(robotsPath, robotsTxt);

console.log(
  `[seo] SITE_URL=${siteUrl} sitemap:${sitemapChanged ? 'updated' : 'ok'} robots:${
    robotsChanged ? 'updated' : 'ok'
  }`,
);

