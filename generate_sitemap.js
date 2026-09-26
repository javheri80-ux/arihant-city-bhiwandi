const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.arihantcity.site';
const dateStr = new Date().toISOString().split('T')[0];

const rootPages = [
    { loc: '', priority: '1.0', changefreq: 'daily' },
    // Google Sitelink Candidate Pages (Primary Importance)
    { loc: 'arihant-city-price.html', priority: '0.95', changefreq: 'weekly' },
    { loc: 'arihant-city-floor-plans.html', priority: '0.95', changefreq: 'weekly' },
    { loc: 'arihant-city-location.html', priority: '0.95', changefreq: 'weekly' },
    { loc: 'arihant-city-amenities.html', priority: '0.90', changefreq: 'weekly' },
    { loc: 'arihant-city-configurations.html', priority: '0.90', changefreq: 'weekly' },
    { loc: 'arihant-city-maharera.html', priority: '0.90', changefreq: 'weekly' },
    { loc: 'arihant-city-developer.html', priority: '0.90', changefreq: 'weekly' },
    { loc: 'arihant-city-brochure.html', priority: '0.90', changefreq: 'weekly' },
    { loc: 'arihant-city-gallery.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'arihant-city-faqs.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'blog.html', priority: '0.90', changefreq: 'weekly' },

    // Existing High-Intent Root Landing Pages (Protected)
    { loc: '2-bhk-flat-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-bhiwandi-price.html', priority: '0.85', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-bhiwandi-for-sale.html', priority: '0.85', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-anjur-phata-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'ready-to-move-flats-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'bhiwandi-1-bhk-flat.html', priority: '0.85', changefreq: 'weekly' },
    { loc: '1-bhk-flat-in-bhiwandi-for-sale.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'bhiwandi-1-bhk-flat-price.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'flats-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'flats-for-sale-in-bhiwandi-millat-nagar.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'bhiwandi-flat-rate.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'commercial-property-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'bhiwandi-property-rates-per-square-feet.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi-millat-nagar.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'olx-bhiwandi-property.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'bhiwandi-property-tax.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi-for-sale.html', priority: '0.85', changefreq: 'weekly' },
    { loc: 'luxury-property-in-bhiwandi.html', priority: '0.85', changefreq: 'weekly' },

    // Legal & Trust
    { loc: 'privacy-policy.html', priority: '0.5', changefreq: 'monthly' },
    { loc: 'terms-and-conditions.html', priority: '0.5', changefreq: 'monthly' },
    { loc: 'disclaimer.html', priority: '0.5', changefreq: 'monthly' }
];

// Scan blog directory for articles
const blogDir = path.join(__dirname, 'blog');
let blogPages = [];
if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    files.forEach(file => {
        if (file.endsWith('.html') && file !== 'index.html') {
            blogPages.push({
                loc: `blog/${file}`,
                priority: '0.8',
                changefreq: 'weekly'
            });
        }
    });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Append root pages
rootPages.forEach(p => {
    const url = p.loc ? `${DOMAIN}/${p.loc}` : `${DOMAIN}/`;
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});

// Append blog pages
blogPages.forEach(p => {
    xml += `  <url>
    <loc>${DOMAIN}/${p.loc}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf-8');
console.log(`sitemap.xml generated successfully for domain: ${DOMAIN} with ${rootPages.length + blogPages.length} URLs`);
