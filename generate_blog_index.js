const fs = require('fs');
const path = require('path');
const { DOMAIN, getHeader, getFooter, getSharedStyles } = require('./sitelink_helpers');

const keywordsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'keywords_data.json'), 'utf-8'));

function toTitleCase(str) {
    return str.replace(/\b\w+/g, function(txt) {
        if (txt.toLowerCase() === 'bhk') return 'BHK';
        if (txt.toLowerCase() === 'rera') return 'MahaRERA';
        if (txt.toLowerCase() === 'olx') return 'OLX';
        if (txt.toLowerCase() === 'sq') return 'Sq.';
        if (txt.toLowerCase() === 'ft') return 'Ft.';
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Group keywords by category
const categoriesMap = {};
keywordsData.forEach(item => {
    if (!categoriesMap[item.category]) {
        categoriesMap[item.category] = [];
    }
    categoriesMap[item.category].push(item);
});

const categoryKeys = Object.keys(categoriesMap);

// Build Category Nav Pills
const navPillsHtml = categoryKeys.map((cat, idx) => {
    const slugCat = 'cat-' + idx;
    const cleanCatName = cat.replace(/^[^\w\s]+/, '').trim();
    return `<a href="#${slugCat}" class="cat-pill">${cleanCatName} (${categoriesMap[cat].length})</a>`;
}).join('\n                ');

// Build Category Sections
let categorySectionsHtml = '';

categoryKeys.forEach((cat, idx) => {
    const slugCat = 'cat-' + idx;
    const cleanCatName = cat.replace(/^[^\w\s]+/, '').trim();
    const items = categoriesMap[cat];
    
    let cardsHtml = items.map(item => {
        const title = toTitleCase(item.keyword);
        return `
            <div class="blog-card" data-keyword="${item.keyword.toLowerCase()}" data-category="${cleanCatName.toLowerCase()}">
                <span class="tag-pill">${cleanCatName}</span>
                <h3>${title}</h3>
                <p>Comprehensive guide to ${item.keyword} at Arihant City Kalyan-Bhiwandi Bypass. Discover prices, carpet configurations, floor plans, and amenities.</p>
                <a href="/blog/${item.slug}.html" class="read-link">Read Full Guide &rarr;</a>
            </div>`;
    }).join('\n');

    categorySectionsHtml += `
        <section id="${slugCat}" class="category-block" style="margin-bottom: 50px;">
            <div class="category-header">
                <h2>${cat} <span class="badge-count">${items.length} Articles</span></h2>
                <div class="header-divider"></div>
            </div>
            <div class="grid-3x">
                ${cardsHtml}
            </div>
        </section>
    `;
});

const blogHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Knowledge Hub & Guides (${keywordsData.length}+ Topics) | Arihant City</title>
    <meta name="description" content="Explore ${keywordsData.length}+ specialized guides on Arihant City, Bhiwandi real estate, 1 & 2 BHK flat prices, floor plans, Metro Line 5 impact, and MahaRERA buyer rights.">
    <meta name="keywords" content="Arihant City blog, Bhiwandi real estate blog, flats in Bhiwandi, 1 BHK in Bhiwandi, 2 BHK in Bhiwandi, Arihant City guides, Bhiwandi property rates">
    <meta name="author" content="Arihant City Sales Advisory Team">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <link rel="canonical" href="${DOMAIN}/blog.html">

    <!-- Geo Tags -->
    <meta name="geo.region" content="IN-MH">
    <meta name="geo.placename" content="Bhiwandi, Thane, Maharashtra">
    <meta name="geo.position" content="19.278547;73.071854">
    <meta name="ICBM" content="19.278547, 73.071854">

    <!-- Open Graph -->
    <meta property="og:locale" content="en_IN">
    <meta property="og:site_name" content="Arihant City Kalyan Bhiwandi">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Real Estate Knowledge Hub & Guides | Arihant City">
    <meta property="og:description" content="Explore ${keywordsData.length}+ in-depth property guides on flats, prices, floor plans, and infrastructure at Arihant City.">
    <meta property="og:url" content="${DOMAIN}/blog.html">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <!-- Schema Markup JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Arihant City Real Estate Knowledge Hub",
      "url": "${DOMAIN}/blog.html",
      "description": "Directory of ${keywordsData.length} comprehensive property guides covering Bhiwandi real estate, 1 & 2 BHK configurations, pricing, and infrastructure.",
      "publisher": {
        "@type": "Organization",
        "name": "Arihant City",
        "logo": {
          "@type": "ImageObject",
          "url": "${DOMAIN}/images/site_logo_1777043167.webp"
        }
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${DOMAIN}/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs & Guides",
          "item": "${DOMAIN}/blog.html"
        }
      ]
    }
    </script>

    ${getSharedStyles()}

    <style>
        .hub-hero { background: linear-gradient(135deg, #3d0010 0%, var(--primary-maroon) 100%); color: #fff; padding: 45px 20px 35px; text-align: center; border-bottom: 4px solid var(--accent-gold); }
        .hub-title { font-size: 2.3rem; font-weight: 800; margin-bottom: 12px; }
        .hub-subtitle { font-size: 1.05rem; color: #f1dfa8; max-width: 850px; margin: 0 auto 25px; line-height: 1.6; }
        .search-box-wrapper { max-width: 650px; margin: 0 auto; position: relative; }
        .search-input { width: 100%; padding: 15px 25px; border-radius: 35px; border: 2px solid var(--accent-gold); font-size: 1rem; outline: none; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .pills-container { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; padding: 20px 0; background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 65px; z-index: 900; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
        .cat-pill { background: #fdf2f4; color: var(--primary-maroon); padding: 7px 15px; border-radius: 20px; text-decoration: none; font-size: 0.8rem; font-weight: 600; border: 1px solid rgba(80, 1, 21, 0.15); transition: 0.3s; }
        .cat-pill:hover { background: var(--primary-maroon); color: #fff; }
        .category-header { margin: 40px 0 20px; display: flex; align-items: center; gap: 15px; }
        .category-header h2 { color: var(--primary-maroon); font-size: 1.45rem; font-weight: 800; display: flex; align-items: center; gap: 10px; white-space: nowrap; }
        .badge-count { background: var(--accent-gold); color: #fff; font-size: 0.75rem; padding: 3px 10px; border-radius: 12px; font-weight: 700; }
        .header-divider { flex: 1; height: 2px; background: linear-gradient(90deg, var(--accent-gold), transparent); }
        .blog-card { background: #fff; padding: 22px; border-radius: 8px; border: 1px solid #eee; box-shadow: 0 2px 10px rgba(0,0,0,0.03); display: flex; flex-direction: column; justify-content: space-between; transition: 0.3s; }
        .blog-card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(80, 1, 21, 0.09); border-color: var(--accent-gold); }
        .tag-pill { display: inline-block; background: #fdf2f4; color: var(--primary-maroon); font-size: 0.72rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-bottom: 10px; text-transform: uppercase; align-self: flex-start; }
        .blog-card h3 { color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 10px; font-weight: bold; line-height: 1.4; }
        .blog-card p { font-size: 0.9rem; color: #555; line-height: 1.5; margin-bottom: 18px; }
        .read-link { color: var(--accent-gold); font-weight: bold; text-decoration: none; font-size: 0.9rem; display: inline-block; transition: 0.2s; }
        .read-link:hover { color: var(--primary-maroon); text-decoration: underline; }
    </style>
</head>
<body>
    ${getHeader('blogs')}

    <main>
        <section class="hub-hero">
            <div class="container">
                <h1 class="hub-title">Bhiwandi & Thane Real Estate Knowledge Hub</h1>
                <p class="hub-subtitle">Explore ${keywordsData.length}+ specialized guides covering property rates, 1 & 2 BHK configurations, Metro Line 5 impact, and township investments.</p>
                <div class="search-box-wrapper">
                    <input type="text" id="blogSearch" class="search-input" placeholder="🔍 Search guides (e.g. 1 BHK, 2 BHK, price, Anjur Phata, commercial)..." aria-label="Search Property Guides">
                </div>
            </div>
        </section>

        <!-- Core Project Sitelink Reference Bar -->
        <div class="container" style="padding-top: 30px;">
            <div class="sibling-nav-box" style="margin: 0;">
                <h3 style="margin-bottom: 10px;">Primary Project Sitelink Portals</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-price.html" class="sibling-chip">Arihant City Price &rarr;</a>
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Arihant City Floor Plans &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Arihant City Location &rarr;</a>
                    <a href="/arihant-city-amenities.html" class="sibling-chip">Arihant City Amenities &rarr;</a>
                    <a href="/arihant-city-configurations.html" class="sibling-chip">Arihant City Configurations &rarr;</a>
                    <a href="/arihant-city-maharera.html" class="sibling-chip">Arihant City MahaRERA &rarr;</a>
                    <a href="/arihant-city-developer.html" class="sibling-chip">Arihant City Developer &rarr;</a>
                    <a href="/arihant-city-brochure.html" class="sibling-chip">Arihant City Brochure &rarr;</a>
                    <a href="/arihant-city-gallery.html" class="sibling-chip">Arihant City Gallery &rarr;</a>
                    <a href="/arihant-city-faqs.html" class="sibling-chip">Arihant City FAQs &rarr;</a>
                </div>
            </div>
        </div>

        <!-- Category Jump Pills -->
        <div class="pills-container container">
            ${navPillsHtml}
        </div>

        <div class="container" style="padding: 40px 0;">
            <p id="searchCount" style="display:none; font-weight: bold; margin-bottom: 20px; color: var(--primary-maroon);"></p>
            ${categorySectionsHtml}
        </div>
    </main>

    ${getFooter()}

    <script>
        // Search Filter
        const searchInput = document.getElementById('blogSearch');
        const cards = document.querySelectorAll('.blog-card');
        const blocks = document.querySelectorAll('.category-block');
        const searchCount = document.getElementById('searchCount');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const val = e.target.value.toLowerCase().trim();
                let visibleCount = 0;

                cards.forEach(card => {
                    const kw = card.getAttribute('data-keyword');
                    const cat = card.getAttribute('data-category');
                    const text = card.innerText.toLowerCase();

                    if (!val || kw.includes(val) || cat.includes(val) || text.includes(val)) {
                        card.style.display = 'flex';
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                blocks.forEach(block => {
                    const visibleInBlock = block.querySelectorAll('.blog-card[style*="display: flex"]').length;
                    if (val && visibleInBlock === 0) {
                        block.style.display = 'none';
                    } else {
                        block.style.display = 'block';
                    }
                });

                if (val) {
                    searchCount.style.display = 'block';
                    searchCount.textContent = 'Showing ' + visibleCount + ' matching guide(s) for "' + val + '"';
                } else {
                    searchCount.style.display = 'none';
                    cards.forEach(c => c.style.display = 'flex');
                }
            });
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'blog.html'), blogHtml, 'utf-8');
console.log('Successfully written updated blog.html with canonical domain and sitelink portal navigation!');
