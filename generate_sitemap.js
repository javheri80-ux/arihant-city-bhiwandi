const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.arihantcity.site';
const dateStr = new Date().toISOString().split('T')[0];

const sitelinkPages = [
    'arihant-city-price.html',
    'arihant-city-floor-plans.html',
    'arihant-city-location.html',
    'arihant-city-amenities.html',
    'arihant-city-configurations.html',
    'arihant-city-maharera.html',
    'arihant-city-developer.html',
    'arihant-city-brochure.html',
    'arihant-city-gallery.html',
    'arihant-city-faqs.html'
];

const legalPages = [
    'privacy-policy.html',
    'terms-and-conditions.html',
    'disclaimer.html'
];

// 1. Root pages
const rootDir = __dirname;
const allRootHtml = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

const urlEntries = [];

// Homepage
urlEntries.push({
    loc: `${DOMAIN}/`,
    priority: '1.0',
    changefreq: 'daily'
});

allRootHtml.forEach(file => {
    if (file === 'index.html' || file === 'thank-you.html') return; // index.html is root, thank-you has noindex

    let priority = '0.85';
    let changefreq = 'weekly';

    if (sitelinkPages.includes(file)) {
        priority = '0.95';
        changefreq = 'weekly';
    } else if (file === 'blog.html') {
        priority = '0.90';
        changefreq = 'weekly';
    } else if (legalPages.includes(file)) {
        priority = '0.5';
        changefreq = 'monthly';
    }

    urlEntries.push({
        loc: `${DOMAIN}/${file}`,
        priority,
        changefreq
    });
});

// 2. Blog directory pages
const blogDir = path.join(rootDir, 'blog');
if (fs.existsSync(blogDir)) {
    const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.html') && f !== 'index.html');
    blogFiles.forEach(bf => {
        urlEntries.push({
            loc: `${DOMAIN}/blog/${bf}`,
            priority: '0.80',
            changefreq: 'weekly'
        });
    });
}

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urlEntries.forEach(entry => {
    xml += `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>\n`;
});

xml += `</urlset>`;

const sitemapPath = path.join(rootDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`sitemap.xml generated successfully for domain: ${DOMAIN} with total ${urlEntries.length} indexable URLs`);
