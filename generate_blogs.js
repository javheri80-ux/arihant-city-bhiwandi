const fs = require('fs');
const path = require('path');

const keywords = [
  "1BHK flats in Thane",
  "2BHK flats in Thane",
  "1BHK for sale in Thane",
  "2BHK for sale in Thane",
  "New projects in Thane",
  "Affordable flats in Thane",
  "Ready to move flats in Thane",
  "Under construction flats in Thane",
  "Budget homes in Thane",
  "Residential projects in Thane",
  "Future of Bhiwandi Real Estate",
  "Arihant City Kalyan Bhiwandi"
];

const blogDir = path.join(__dirname, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir);
}

function createSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

const template = (title, slug) => `<!DOCTYPE html>
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
    <title>${title} | Arihant City Kalyan Bhiwandi | Insights</title>
    
    <meta name="description" content="Looking for details on ${title}? Find the best premium residences at Arihant City on the Kalyan-Bhiwandi Bypass. Explore configurations, prices, and amenities.">
    <meta name="keywords" content="${title}, Arihant City, Arihant City Bhiwandi, flats in Bhiwandi, flats on Kalyan-Bhiwandi Bypass, real estate Thane district">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://arihantcity.site/blog/${slug}.html">
    <link rel="icon" href="../images/favicon.webp" type="image/webp" sizes="16x16">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${title} | Arihant City Kalyan Bhiwandi">
    <meta property="og:description" content="Discover detailed information, configurations, pricing, and benefits of ${title} at Arihant City, Bhiwandi.">
    <meta property="og:url" content="https://arihantcity.site/blog/${slug}.html">
    <meta property="og:image" content="https://arihantcity.site/images/hero_banner_1777043167.webp">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title} | Arihant City Kalyan Bhiwandi">
    <meta name="twitter:description" content="Discover detailed information, configurations, pricing, and benefits of ${title} at Arihant City, Bhiwandi.">
    <meta name="twitter:image" content="https://arihantcity.site/images/hero_banner_1777043167.webp">

    <style>
        :root {
            --primary-maroon: #500115;
            --accent-gold: #a88c39;
            --light-maroon: #fdf2f4;
            --white: #ffffff;
            --dark-text: #333333;
            --gray-text: #555555;
            --footer-bg: #500115;
            --primary-green: #500115;
            --light-green: #fdf2f4;
            --mid-green: #a88c39;
            --tan-bg: #fdf2f4;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            color: var(--dark-text);
            line-height: 1.6;
            background-color: var(--white);
            overflow-x: hidden;
            width: 100%;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-padding {
            padding: 40px 0;
        }

        .top-disclaimer-bar {
            background-color: #ffd700;
            color: #222;
            text-align: center;
            padding: 8px 15px;
            font-size: 0.8rem;
            font-weight: bold;
            line-height: 1.4;
            border-bottom: 2px solid var(--accent-gold);
            position: relative;
            z-index: 1001;
        }

        .top-disclaimer-bar a {
            color: var(--primary-maroon);
            text-decoration: underline;
        }

        header {
            background-color: var(--primary-green);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-img {
            height: 45px;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 0.85rem;
            text-transform: uppercase;
            transition: 0.3s;
        }

        .nav-links a:hover {
            color: var(--accent-gold);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
        }

        .menu-toggle span {
            width: 25px;
            height: 3px;
            background-color: var(--white);
            transition: 0.3s;
        }

        @media (max-width: 992px) {
            .menu-toggle {
                display: flex !important;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--primary-maroon);
                flex-direction: column !important;
                text-align: center;
                padding: 20px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
            }

            .nav-links.active {
                display: flex !important;
            }

            .nav-links li {
                margin: 15px 0;
            }
        }

        .blog-header-section {
            background: linear-gradient(135deg, var(--primary-maroon), #7a0220);
            color: var(--white);
            padding: 60px 0;
            text-align: center;
            border-bottom: 5px solid var(--accent-gold);
        }

        .breadcrumbs {
            font-size: 0.85rem;
            margin-bottom: 15px;
            color: rgba(255, 255, 255, 0.8);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .breadcrumbs a {
            color: var(--white);
            text-decoration: none;
        }

        .breadcrumbs a:hover {
            text-decoration: underline;
        }

        .blog-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 15px;
            line-height: 1.2;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .star-rating {
            font-size: 1rem;
            color: #ffd700;
            margin-top: 10px;
        }

        .blog-container {
            max-width: 850px;
            margin: 40px auto;
            padding: 0 20px;
        }

        h2 {
            color: var(--primary-maroon);
            font-size: 1.6rem;
            margin-top: 35px;
            margin-bottom: 15px;
            border-bottom: 2px solid var(--light-maroon);
            padding-bottom: 8px;
        }

        p {
            margin-bottom: 20px;
            font-size: 1.05rem;
            color: #444;
            text-align: justify;
        }

        strong {
            color: var(--primary-maroon);
        }

        ul {
            margin-bottom: 25px;
            padding-left: 25px;
        }

        li {
            margin-bottom: 10px;
            font-size: 1.05rem;
            color: #444;
        }

        .table-wrapper {
            overflow-x: auto;
            margin: 25px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: var(--primary-maroon);
            color: var(--white);
            padding: 12px;
            text-transform: uppercase;
            font-size: 0.9rem;
            border: 1px solid var(--accent-gold);
        }

        td {
            padding: 12px;
            border: 1px solid #ddd;
            background-color: #fcfbf7;
            text-align: center;
            font-size: 0.95rem;
        }

        .cta-box {
            background: var(--light-maroon);
            border: 2px dashed var(--accent-gold);
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin: 40px 0;
        }

        .cta-box h3 {
            color: var(--primary-maroon);
            font-size: 1.4rem;
            margin-bottom: 10px;
        }

        .cta-box p {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 15px;
            color: #555;
        }

        .btn {
            display: inline-block;
            background-color: var(--primary-maroon);
            color: var(--white);
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            text-transform: uppercase;
            font-size: 0.85rem;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: 0.3s;
        }

        .btn:hover {
            background-color: var(--accent-gold);
            transform: translateY(-2px);
        }

        .back-to-blogs {
            display: inline-block;
            margin-top: 30px;
            color: var(--primary-maroon);
            text-decoration: none;
            font-weight: bold;
        }

        .back-to-blogs:hover {
            text-decoration: underline;
        }

        footer {
            background-color: var(--footer-bg);
            color: var(--white);
            padding: 40px 0;
            text-align: center;
            font-size: 0.85rem;
            border-top: 4px solid var(--accent-gold);
            margin-top: 60px;
        }

        footer a {
            color: var(--white);
            text-decoration: none;
            transition: 0.3s;
        }

        footer a:hover {
            color: var(--accent-gold);
        }

        /* Mobile Fixed Contact Bar styling */
        .mobile-contact-bar {
            display: none;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background-color: var(--primary-maroon, #500115);
            border-top: 3px solid var(--accent-gold, #a88c39);
            z-index: 9999;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
        }

        .mobile-contact-bar .contact-item {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            text-decoration: none;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            transition: background-color 0.3s ease;
        }

        .mobile-contact-bar .contact-item:not(:last-child) {
            border-right: 1px solid rgba(255, 255, 255, 0.25);
        }

        .mobile-contact-bar .contact-item:hover,
        .mobile-contact-bar .contact-item:active {
            background-color: var(--accent-gold, #a88c39);
        }

        .mobile-contact-bar .contact-item svg {
            width: 22px;
            height: 22px;
            margin-bottom: 4px;
            fill: currentColor;
        }

        @media (max-width: 768px) {
            .mobile-contact-bar {
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            
            /* Avoid bottom layout content overlap */
            body {
                padding-bottom: 60px;
            }
        }
    </style>

    <!-- Schema.org JSON-LD Structured Data for AEO / GEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "${title} - Arihant City Kalyan Bhiwandi",
      "description": "Comprehensive analysis of ${title} at the 32-acre mega township Arihant City on the Kalyan-Bhiwandi Bypass.",
      "image": "https://arihantcity.site/images/hero_banner_1777043167.webp",
      "author": {
        "@type": "Organization",
        "name": "Arihant City Advisor"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Arihant City Authorized Channel Partner",
        "logo": {
          "@type": "ImageObject",
          "url": "https://arihantcity.site/images/site_logo_1777043167.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://arihantcity.site/blog/${slug}.html"
      },
      "datePublished": "2026-06-22T03:00:00+05:30",
      "dateModified": "2026-06-22T03:00:00+05:30"
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
          "item": "https://arihantcity.site/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://arihantcity.site/blog.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${title}",
          "item": "https://arihantcity.site/blog/${slug}.html"
        }
      ]
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Arihant City RERA approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Arihant City is a fully registered MahaRERA project. The registration numbers are: Phase-I: P51700010884, D3 Tower: P51700022743, Phase-II: P51700028429, P51700028441, P51700044483, P51700010350."
          }
        },
        {
          "@type": "Question",
          "name": "What is the location advantage of Arihant City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arihant City is located directly on the Kalyan-Bhiwandi Bypass, just 1 minute from the Mumbai-Nashik Expressway and 2 minutes from the upcoming Temghar Metro Station (Line 5), offering superb connectivity to Thane, Mumbai, and Kalyan."
          }
        }
      ]
    }
    </script>
</head>
<body>
    <header>
        <div class="nav-container container">
            <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1;">
                <a href="/" aria-label="Arihant City Home">
                    <img src="../images/site_logo_1777043167.webp" alt="Arihant City Kalyan Bhiwandi logo - premium real estate township project in Thane district" class="logo-img" style="display: block;">
                </a>
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">Authorized Channel Partner</span>
            </div>
            <nav aria-label="Main Navigation">
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links" id="nav-list">
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../index.html#overview">Overview</a></li>
                    <li><a href="../index.html#amenities">Amenities</a></li>
                    <li><a href="../index.html#connectivity">Connectivity</a></li>
                    <li><a href="../index.html#plans">Floor Plans</a></li>
                    <li><a href="../index.html#gallery">Gallery</a></li>
                    <li><a href="../blog.html" style="color: var(--accent-gold); font-weight: bold;">Blogs</a></li>
                    <li><a href="../index.html#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="blog-header-section">
        <div class="container">
            <div class="breadcrumbs">
                <a href="../index.html">Home</a> &gt; <a href="../blog.html">Blogs</a> &gt; <span>${title}</span>
            </div>
            <h1 class="blog-title">${title}</h1>
            <div class="star-rating" itemscope itemtype="https://schema.org/Rating">
                <meta itemprop="worstRating" content="1">
                <meta itemprop="bestRating" content="5">
                <meta itemprop="ratingValue" content="4.9">
                <span aria-hidden="true">⭐⭐⭐⭐⭐</span> <strong>4.9 / 5</strong> based on <span itemprop="reviewCount">145</span> reviews
            </div>
        </div>
    </div>

    <div class="blog-container">
        <article>
            <p>Welcome to our comprehensive overview focusing on <strong>${title}</strong>. Selecting the right residential property requires analyzing various aspects such as pricing, connectivity, construction quality, and developer legacy. Thane district, particularly the rapidly developing Kalyan-Bhiwandi corridor, has emerged as the premier destination for modern home buyers and smart real estate investors.</p>
            
            <h2>Is Arihant City the Right Project for ${title}?</h2>
            <p><strong>Yes, Arihant City is the ideal residential choice matching the requirements of ${title.toLowerCase()}.</strong> Standing as a massive 32-acre premium integrated township, Arihant City Downtown offers a complete ecosystem designed for comfortable, high-class living. Strategically situated at the Kalyan-Bhiwandi Bypass touch, the project stands out for its high-rise architectural excellence, modern layout designs, and verified legality.</p>

            <h2>Overview of Arihant City Configurations & Area</h2>
            <p>To help you understand the dimensions and specifications of the available apartments, here is a detailed breakdown of the layouts in the newly launched 26-storey <strong>D3 Signature Tower</strong>:</p>
            
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Configuration Type</th>
                            <th>Total Carpet Area</th>
                            <th>Key Layout Features</th>
                            <th>Booking Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1 BHK Luxury</strong></td>
                            <td>543 Sq.Ft. Carpet</td>
                            <td>King-size balcony, 10ft ceiling, premium fittings</td>
                            <td><span style="color:#27ae60; font-weight:bold;">Selling Fast</span></td>
                        </tr>
                        <tr>
                            <td><strong>2 BHK Elite</strong></td>
                            <td>793 Sq.Ft. Carpet</td>
                            <td>Spacious bedrooms, double balcony, luxury lobbies</td>
                            <td><span style="color:#27ae60; font-weight:bold;">Selling Fast</span></td>
                        </tr>
                        <tr>
                            <td><strong>1+1 jodi( 3bhk )</strong></td>
                            <td>1080 Sq.Ft. Carpet</td>
                            <td>Ultra-spacious combined layouts, separate dining & living</td>
                            <td><span style="color:#e67e22; font-weight:bold;">Limited Stock</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Why Invest in Arihant City Kalyan-Bhiwandi?</h2>
            <p>Whether you are comparing projects or looking for budget homes, Arihant City stands out with unmatched benefits:</p>
            <ul>
                <li><strong>20-Year Legacy:</strong> Developed by the Arihant Group, having delivered over 12 Lacs Sq.Ft. of premium spaces with thousands of happy families.</li>
                <li><strong>Superb Connectivity:</strong> Located just 1 minute from the Mumbai-Nashik Expressway and 2 minutes from the upcoming Temghar Metro Station (Metro Line 5).</li>
                <li><strong>Modern Amenities:</strong> Dedicated club house, swimming pool, state-of-the-art gymnasium, open gardens, kids play areas, and multi-tier security.</li>
                <li><strong>RERA Compliant & Legal:</strong> A fully authorized project with OC received for completed phases, offering high transparency.</li>
            </ul>

            <div class="cta-box">
                <h3>Looking for the Best Deals on ${title}?</h3>
                <p>Register today to receive verified pricing sheets, floor plans, and exclusive partner discounts of up to ₹5 Lakhs* on select configurations.</p>
                <a href="../index.html#contact" class="btn" aria-label="Request details for ${title}">Enquire Now & Get Details</a>
            </div>

            <h2>Factual Market Growth & High ROI</h2>
            <p>The Kalyan-Bhiwandi Bypass corridor is experiencing massive public infrastructure investments. With the upcoming Ring Road and Metro Line 5 connectivity, property values in this 32-acre township are projected to grow exponentially. This makes it an ideal opportunity for self-use as well as generating rental yields and capital gains in Thane district real estate.</p>
        </article>
        
        <a href="../blog.html" class="back-to-blogs">&larr; Return to All Articles</a>
    </div>

    <footer>
        <div class="container">
            <div style="margin-bottom: 20px;">
                <a href="../index.html" style="margin: 0 10px;">Home</a> |
                <a href="../blog.html" style="margin: 0 10px;">Blogs</a> |
                <a href="../disclaimer.html" style="margin: 0 10px;">Disclaimer</a> |
                <a href="../privacy-policy.html" style="margin: 0 10px;">Privacy Policy</a> |
                <a href="../terms-and-conditions.html" style="margin: 0 10px;">Terms & Conditions</a>
            </div>
            
            <p style="margin-bottom: 10px;">© 2026 Arihant City Kalyan Bhiwandi. All Rights Reserved.</p>
            <p style="margin-bottom: 10px; font-size: 0.8rem;">
                <strong>Office Address:</strong> Kalyan-Bhiwandi Bypass, Bhiwandi, Maharashtra 421302. <br>
                <strong>Helpline:</strong> <a href="tel:+919028259563" style="text-decoration: underline;">+91 90282 59563</a> | 
                <strong>Email:</strong> <a href="mailto:javheri80@gmail.com" style="text-decoration: underline;">javheri80@gmail.com</a>
            </p>
            
            <p style="margin-top: 15px; font-size: 0.75rem; opacity: 0.8; line-height: 1.4; text-align: justify;">
                <strong>Disclaimer & Partner Disclosure:</strong> This website is owned and operated by an Authorized Channel Partner (Marketing Partner) of the developer. It is not the official developer website. The content, including images, graphics, floor plans, pricing, and availability of flats at Arihant City, is provided purely for informational and promotional purposes and is subject to change at the developer's discretion. The official RERA numbers for the project are: 
                <a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="text-decoration:underline;">MahaRERA Registration No</a>: Phase-I: P51700010884, D3 Tower: P51700022743, Phase-II: P51700028429, P51700028441, P51700044483, P51700010350. Please refer to official developer documents or RERA portal for binding specifications.
            </p>
        </div>
    </footer>

    <script>
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Mobile contact bar enquiry action
        document.querySelectorAll('.price-btn-mobile').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = document.getElementById('priceModal');
                if (modal) {
                    e.preventDefault();
                    modal.style.display = 'flex';
                }
            });
        });
    </script>

    <!-- Mobile Fixed Contact Bar -->
    <div class="mobile-contact-bar">
        <a href="tel:+919028259563" class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 004.7 1.01 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 001.01 4.7 1 1 0 01-.27 1.11z"/>
            </svg>
            <span>Call Now</span>
        </a>
        <a href="../index.html#contact" class="contact-item price-btn-mobile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Enquiry Now</span>
        </a>
        <a href="https://wa.me/919028259563?text=Hi!%20I%20am%20interested%20in%20Arihant%20City.%20Please%20send%20more%20details." target="_blank" rel="noopener" class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm5.835-3.528l.362.215c1.7.099 3.51.152 5.327.151 5.617 0 10.187-4.524 10.191-10.083.002-2.693-1.04-5.225-2.932-7.121-1.892-1.897-4.41-2.942-7.112-2.943-5.542 0-10.054 4.469-10.058 10.03-.002 1.782.47 3.52 1.36 5.068l.322.56-1.014 3.7.387-.22zm13.167-7.986c-.302-.151-1.785-.881-2.057-.98-.272-.1-.469-.151-.667.15-.198.3-.767.98-.94 1.18-.173.2-.346.225-.648.075-.302-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.132-.611.135-.134.302-.35.454-.525.151-.175.202-.3.303-.5.101-.2.05-.376-.025-.526-.076-.15-.667-1.606-.913-2.201-.24-.579-.484-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.032-1.436.247-.704.247-1.306.173-1.436-.074-.13-.272-.206-.575-.356z"/>
            </svg>
            <span>WhatsApp</span>
        </a>
    </div>
</body>
</html>`;

let indexLinks = "";

keywords.forEach(keyword => {
    const slug = createSlug(keyword);
    const html = template(keyword, slug);
    fs.writeFileSync(path.join(blogDir, `${slug}.html`), html);
    indexLinks += `
    <div class="card" style="text-align: left; padding: 25px; border-radius: 8px; border: 1px solid var(--light-green); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
            <h3 style="color: var(--primary-maroon); margin-bottom: 12px; font-size: 1.25rem;">${keyword}</h3>
            <p style="font-size: 0.95rem; color: #555; line-height: 1.5; margin-bottom: 15px;">Read expert guidance and market insights about ${keyword} at Arihant City, Kalyan-Bhiwandi Bypass...</p>
        </div>
        <a href="blog/${slug}.html" style="color: var(--accent-gold); font-weight: bold; text-decoration: none; font-size: 0.95rem; display: inline-block;">Read Article &rarr;</a>
    </div>`;
});

// Update blog/index.html with redirection to ../blog.html
const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=../blog.html">
    <title>Redirecting...</title>
</head>
<body>
    <p>Redirecting to <a href="../blog.html">Blogs</a>...</p>
</body>
</html>`;
fs.writeFileSync(path.join(blogDir, 'index.html'), redirectHtml);

console.log("Blog section created successfully!");
