const fs = require('fs');
const path = require('path');

const { DOMAIN, getFooter } = require('./sitelink_helpers');

// Build Optimized index.html
const indexHtml = `<!DOCTYPE html>
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
    <meta name="google-site-verification" content="mBobOyunnX9gkMCbddi_pvpycchqrBygdFRjN_sLGX0" />
    <title>Arihant City – Residential Homes in Bhiwandi, Maharashtra</title>

    <!-- SEO META TAGS -->
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta name="description" content="Arihant City: 32-acre integrated township in Bhiwandi, Maharashtra. Luxury 1 & 2 BHK balcony residences, MahaRERA approved, Metro Line 5 connectivity. Verified prices & plans." />
    <meta name="keywords" content="Arihant City, Arihant City Bhiwandi, Arihant City Maharashtra, Arihant City Price, Arihant City Floor Plans, Arihant City Location, Arihant City Amenities, Arihant City 1 BHK, Arihant City 2 BHK, Arihant City MahaRERA, Arihant City Developer" />
    <meta name="author" content="Arihant City Sales Advisory Team" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <link rel="canonical" href="${DOMAIN}/" />
    <link rel="shortcut icon" type="image/webp" href="${DOMAIN}/images/favicon.webp" />
    
    <!-- Geo / Local Meta Tags -->
    <meta name="geo.region" content="IN-MH" />
    <meta name="geo.placename" content="Bhiwandi, Thane, Maharashtra" />
    <meta name="geo.position" content="19.278547;73.071854" />
    <meta name="ICBM" content="19.278547, 73.071854" />

    <!-- Open Graph / Facebook -->
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="Arihant City Kalyan Bhiwandi" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Arihant City – Residential Homes in Bhiwandi, Maharashtra" />
    <meta property="og:description" content="Arihant City: 32-acre integrated township in Bhiwandi, Maharashtra. Luxury 1 & 2 BHK balcony residences, MahaRERA approved, Metro Line 5 connectivity." />
    <meta property="og:url" content="${DOMAIN}/" />
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Arihant City – Residential Homes in Bhiwandi, Maharashtra" />
    <meta name="twitter:description" content="Arihant City: 32-acre integrated township in Bhiwandi, Maharashtra. Luxury 1 & 2 BHK balcony residences, MahaRERA approved." />
    <meta name="twitter:image" content="${DOMAIN}/images/hero_banner_1777043167.webp" />

    <meta name="theme-color" content="#500115" />

    <!-- Structured Data: WebSite with Sitelinks Searchbox -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Arihant City",
      "url": "${DOMAIN}/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "${DOMAIN}/blog.html?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>

    <!-- Structured Data: ApartmentComplex -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Arihant City",
      "alternateName": "Arihant City Downtown",
      "description": "Master-planned 32-acre integrated residential township located on the Kalyan-Bhiwandi Bypass in Bhiwandi, Maharashtra, featuring 1, 2, and 3 BHK residences, 26-storey D3 Signature Tower, and 20+ lifestyle amenities.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalyan-Bhiwandi Bypass, Near Sai Baba Temple, Temghar",
        "addressLocality": "Bhiwandi",
        "addressRegion": "Maharashtra",
        "postalCode": "421302",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.278547,
        "longitude": 73.071854
      },
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Gymnasium", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Clubhouse", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Children Play Area", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Landscaped Gardens", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "24/7 Security & CCTV", "value": true}
      ]
    }
    </script>

    <!-- Structured Data: RealEstateAgent / Sales Office -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Arihant City Sales Advisory Office",
      "image": "${DOMAIN}/images/site_logo_1777043167.webp",
      "url": "${DOMAIN}/",
      "telephone": "+91-9028259563",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalyan-Bhiwandi Bypass, Near Sai Baba Temple",
        "addressLocality": "Bhiwandi",
        "addressRegion": "Maharashtra",
        "postalCode": "421302",
        "addressCountry": "IN"
      }
    }
    </script>

    <!-- Structured Data: FAQPage -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Arihant City located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arihant City is located directly on the Kalyan-Bhiwandi Bypass near Sai Baba Temple, Temghar, Bhiwandi, Maharashtra 421302. It is situated just 200 meters from the upcoming Metro Line 5 station."
          }
        },
        {
          "@type": "Question",
          "name": "What configurations and prices are offered at Arihant City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arihant City offers luxury 1 BHK residences (543 sq.ft. carpet) starting at ₹35 Lakhs* onwards, 2 BHK elite residences (793 sq.ft. carpet) starting at ₹52 Lakhs* onwards, and custom 1+1 Jodi (3 BHK) units (1,080 sq.ft. carpet)."
          }
        },
        {
          "@type": "Question",
          "name": "Is Arihant City MahaRERA approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Arihant City is fully approved by MahaRERA. Key registration numbers include Phase-I: P51700010884, D3 Signature Tower: P51700022743, and Phase-II: P51700028429, P51700028441, P51700044483."
          }
        },
        {
          "@type": "Question",
          "name": "Are ready possession flats with Occupancy Certificate (OC) available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Phase I and Phase II have received their Occupancy Certificate (OC), with over 1,200 families already residing. Buyers of ready-to-move units enjoy zero GST liability."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the developer of Arihant City?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Arihant City is developed by Arihant Enterprises (part of Arihant Group). The marketing and customer sales desk on this website is operated by an Authorized Channel Partner."
          }
        }
      ]
    }
    </script>

    <style>
        :root {
            --primary-maroon: #500115;
            --accent-gold: #a88c39;
            --light-maroon: #fdf2f4;
            --white: #ffffff;
            --dark-text: #222222;
            --gray-text: #555555;
            --footer-bg: #500115;
            --light-bg: #faf8f5;
            --border-color: #e5ded4;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { color: var(--dark-text); line-height: 1.6; background-color: var(--white); overflow-x: hidden; width: 100%; }
        img { max-width: 100%; height: auto; display: block; }
        a { color: var(--primary-maroon); text-decoration: none; }
        a:hover { color: var(--accent-gold); }

        .container { width: 90%; max-width: 1200px; margin: 0 auto; }
        .section-padding { padding: 55px 0; }
        .text-center { text-align: center; }

        /* Navigation */
        header { background-color: var(--primary-maroon); position: sticky; top: 0; z-index: 1000; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .nav-container { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; }
        .logo-img { height: 45px; width: auto; display: block; }
        .nav-links { display: flex; list-style: none; gap: 18px; align-items: center; }
        .nav-links a { color: var(--white); text-decoration: none; font-size: 0.85rem; text-transform: uppercase; font-weight: 600; transition: 0.3s; }
        .nav-links a:hover, .nav-links a.active { color: var(--accent-gold); }
        .menu-toggle { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
        .menu-toggle span { width: 25px; height: 3px; background-color: var(--white); }

        @media (max-width: 992px) {
            .menu-toggle { display: flex !important; }
            .nav-links { display: none; position: absolute; top: 100%; left: 0; width: 100%; background-color: var(--primary-maroon); flex-direction: column !important; text-align: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.1); }
            .nav-links.active { display: flex !important; }
            .nav-links li { margin: 12px 0; }
        }

        /* Hero */
        .hero { width: 100%; height: auto; max-height: 550px; object-fit: cover; }
        .hero-banner-title { background: linear-gradient(135deg, #3d0010 0%, var(--primary-maroon) 100%); color: #fff; padding: 35px 20px; text-align: center; border-bottom: 4px solid var(--accent-gold); }
        .hero-badge { display: inline-block; background: var(--accent-gold); color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .hero-h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 10px; color: #fff; }
        .hero-sub { font-size: 1.05rem; color: #f1dfa8; max-width: 850px; margin: 0 auto; }

        /* Section Headings */
        .section-title { color: var(--primary-maroon); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; font-size: 1.85rem; font-weight: 800; position: relative; display: inline-block; }
        .section-title::after { content: ''; display: block; width: 50px; height: 3px; background: var(--accent-gold); margin: 8px auto 0; }
        .section-subtitle { font-size: 1rem; color: var(--gray-text); margin-bottom: 30px; max-width: 850px; margin-left: auto; margin-right: auto; line-height: 1.6; }

        /* Grids & Cards */
        .grid-3x { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .grid-2x { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
        .grid-4x { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        .card { background: #fff; padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: 0.3s; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(80,1,21,0.08); border-color: var(--accent-gold); }

        /* Tables */
        .table-wrapper { overflow-x: auto; margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.04); border-radius: 8px; overflow: hidden; }
        th, td { padding: 14px 16px; border: 1px solid #eee; text-align: left; }
        th { background-color: var(--primary-maroon); color: #fff; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }

        /* Buttons */
        .btn { display: inline-block; background-color: var(--primary-maroon); color: var(--white); padding: 12px 28px; text-decoration: none; border-radius: 5px; text-transform: uppercase; font-size: 0.85rem; font-weight: bold; border: none; cursor: pointer; transition: 0.3s; }
        .btn:hover { background-color: var(--accent-gold); color: #fff; }
        .btn-gold { background-color: var(--accent-gold); color: #fff; }
        .btn-gold:hover { background-color: var(--primary-maroon); color: #fff; }

        /* Sitelink Callout Banner */
        .sitelink-callout-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 30px; text-align: left; }
        .sitelink-card { background: #fff; border: 1px solid var(--border-color); border-left: 4px solid var(--accent-gold); padding: 18px; border-radius: 6px; transition: 0.3s; }
        .sitelink-card:hover { border-left-color: var(--primary-maroon); transform: translateY(-3px); box-shadow: 0 4px 15px rgba(0,0,0,0.06); }
        .sitelink-card h4 { color: var(--primary-maroon); font-size: 1rem; margin-bottom: 6px; }
        .sitelink-card p { font-size: 0.85rem; color: #666; margin-bottom: 10px; }
        .sitelink-card a { font-weight: 700; font-size: 0.82rem; color: var(--accent-gold); display: inline-block; }

        /* FAQ */
        .faq-accordion { max-width: 900px; margin: 0 auto; text-align: left; }
        .faq-item { margin-bottom: 12px; border: 1px solid var(--border-color); border-radius: 8px; background: #fff; overflow: hidden; }
        .faq-q { padding: 16px 20px; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background-color: #fafafa; color: var(--primary-maroon); }
        .faq-a { padding: 18px 20px; display: none; color: #555; font-size: 0.95rem; line-height: 1.6; border-top: 1px solid #eee; }

        /* Contact Section */
        .contact-section { display: flex; background: var(--light-maroon); }
        .map-container { flex: 1.2; min-height: 480px; }
        .map-container iframe { width: 100%; height: 100%; border: none; }
        .form-container { flex: 1; padding: 45px 35px; background-color: var(--white); border-left: 5px solid var(--accent-gold); }
        .form-container input, .form-container select, .form-container textarea { width: 100%; padding: 12px; margin-bottom: 14px; border: 1px solid #ccc; border-radius: 4px; }

        /* Footer */
        footer { background-color: var(--footer-bg); color: var(--white); padding: 50px 0 20px; border-top: 4px solid var(--accent-gold); }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 30px; margin-bottom: 35px; }
        .footer-col h4 { color: #f1dfa8; font-size: 1rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px; }
        .footer-links { list-style: none; }
        .footer-links li { margin-bottom: 8px; }
        .footer-links a { color: #fff; font-size: 0.85rem; transition: 0.2s; }
        .footer-links a:hover { color: var(--accent-gold); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.15); padding-top: 20px; text-align: center; font-size: 0.8rem; }

        /* Mobile Contact Bar */
        .mobile-contact-bar { display: none; position: fixed; bottom: 0; left: 0; width: 100%; height: 60px; background-color: var(--primary-maroon); border-top: 3px solid var(--accent-gold); z-index: 9999; box-shadow: 0 -2px 10px rgba(0,0,0,0.15); }
        .mobile-contact-bar .contact-item { flex: 1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #ffffff; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; }
        .mobile-contact-bar .contact-item:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.25); }
        .mobile-contact-bar .contact-item svg { width: 20px; height: 20px; margin-bottom: 3px; fill: currentColor; }

        @media (max-width: 992px) {
            .footer-grid { grid-template-columns: 1fr 1fr; }
            .sitelink-callout-grid { grid-template-columns: repeat(2, 1fr); }
            .grid-4x { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .hero-h1 { font-size: 1.6rem; }
            .grid-2x, .grid-3x, .grid-4x, .contact-section { grid-template-columns: 1fr; flex-direction: column; }
            .sitelink-callout-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; }
            .form-container { padding: 30px 20px; border-left: none; border-top: 4px solid var(--accent-gold); }
            .mobile-contact-bar { display: flex; }
            body { padding-bottom: 60px; }
        }

        /* Modals */
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; justify-content: center; align-items: center; backdrop-filter: blur(8px); }
        .modal-content { background: var(--white); border-radius: 12px; width: 90%; max-width: 440px; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid rgba(168,140,57,0.3); }
        .modal-header { background: linear-gradient(135deg, var(--primary-maroon), #7a0220); color: var(--white); padding: 22px 20px; text-align: center; position: relative; }
        .modal-close { position: absolute; top: 12px; right: 18px; color: var(--white); font-size: 26px; cursor: pointer; }
        .modal-body { padding: 25px; }
        .modal-body input, .modal-body select { width: 100%; padding: 12px; margin-bottom: 14px; border: 1px solid #ccc; border-radius: 4px; font-size: 0.9rem; }
        .modal-submit-btn { background: linear-gradient(135deg, var(--accent-gold), #8a6d25); color: var(--white); width: 100%; padding: 13px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; text-transform: uppercase; }
    </style>
</head>

<body>
    <header>
        <div class="nav-container container">
            <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1;">
                <a href="/" aria-label="Arihant City Home"><img id="logo"
                    src="/images/site_logo_1777043167.webp"
                    alt="Arihant City Kalyan Bhiwandi logo - residential township in Thane district" class="logo-img" width="160" height="45" style="display: block;"></a>
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">Authorized Channel Partner</span>
            </div>
            <nav aria-label="Main Navigation">
                <div class="menu-toggle" id="mobile-menu" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links" id="nav-list">
                    <li><a href="/" class="active">Home</a></li>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="/arihant-city-price.html">Price</a></li>
                    <li><a href="/arihant-city-floor-plans.html">Floor Plans</a></li>
                    <li><a href="/arihant-city-amenities.html">Amenities</a></li>
                    <li><a href="/arihant-city-location.html">Location</a></li>
                    <li><a href="/arihant-city-configurations.html">Configurations</a></li>
                    <li><a href="/arihant-city-maharera.html">MahaRERA</a></li>
                    <li><a href="/arihant-city-developer.html">Developer</a></li>
                    <li><a href="/blog.html">Blogs</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero Title Banner (Section 4 Recommended H1) -->
        <div class="hero-banner-title">
            <div class="container">
                <span class="hero-badge">MahaRERA Approved | 32-Acre Township</span>
                <h1 id="main-content" class="hero-h1">Arihant City – Residential Homes in Bhiwandi, Maharashtra</h1>
                <p class="hero-sub">Sprawling 32-Acre Integrated Township on Kalyan-Bhiwandi Bypass featuring Luxury 1 & 2 BHK Balcony Homes, D3 Signature Tower, and Metro Line 5 Connectivity.</p>
            </div>
        </div>

        <img src="/images/hero_banner_1777043167.webp"
            alt="Arihant City aerial township view on Kalyan-Bhiwandi Bypass" class="hero" width="1200" height="600">

        <!-- Section 4 Recommended H2: About Arihant City -->
        <section id="about" class="section-padding container text-center">
            <h2 class="section-title">About Arihant City</h2>
            <div style="text-align: justify; max-width: 900px; margin: 0 auto 30px auto; font-size: 1rem; line-height: 1.8;">
                <p>Located on the bustling Kalyan-Bhiwandi Bypass corridor at Temghar, <strong>Arihant City</strong> is a signature 32-acre integrated township designed to provide modern, self-contained residential living in the Mumbai Metropolitan Region (MMR). Built by Arihant Enterprises, the township combines multi-storey residential towers—including the 26-storey D3 Signature Tower—with landscaped green parks, high-street retail conveniences, and world-class club recreation.</p>
                <p style="margin-top: 15px;">With over 1,200 families already residing in completed phases with Occupancy Certificates (OC), Arihant City stands out as a vibrant, fully established community supported by upcoming rapid transit infrastructure like Mumbai Metro Line 5.</p>
            </div>

            <!-- Primary Sitelink Candidates Direct Jump Grid -->
            <div class="sitelink-callout-grid">
                <div class="sitelink-card">
                    <h4>Arihant City Price</h4>
                    <p>Verified cost sheet for 1 & 2 BHK starting ₹35L* onwards.</p>
                    <a href="/arihant-city-price.html">Explore Pricing &rarr;</a>
                </div>
                <div class="sitelink-card">
                    <h4>Arihant City Floor Plans</h4>
                    <p>543 to 1080 sq.ft. carpet blueprints & dimensions.</p>
                    <a href="/arihant-city-floor-plans.html">View Floor Plans &rarr;</a>
                </div>
                <div class="sitelink-card">
                    <h4>Arihant City Location</h4>
                    <p>Bypass road touch, 200m to Metro 5, 8.4 km to Kalyan.</p>
                    <a href="/arihant-city-location.html">Check Commutes &rarr;</a>
                </div>
                <div class="sitelink-card">
                    <h4>Arihant City MahaRERA</h4>
                    <p>RERA Registration Nos: P51700010884, P51700022743.</p>
                    <a href="/arihant-city-maharera.html">Verify Compliance &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Project Overview -->
        <section id="overview" class="section-padding" style="background-color: var(--light-bg);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City Project Overview</h2>
                <p class="section-subtitle">A balanced master development designed for quality of life, sustainability, and long-term capital appreciation.</p>

                <div class="grid-4x">
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); font-size: 1.8rem; font-weight: 800; margin-bottom: 5px;">32 Acres</h3>
                        <p style="font-size: 0.9rem; color: #666; font-weight: 600;">Township Area</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); font-size: 1.8rem; font-weight: 800; margin-bottom: 5px;">26 Storeys</h3>
                        <p style="font-size: 0.9rem; color: #666; font-weight: 600;">D3 Signature Tower</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); font-size: 1.8rem; font-weight: 800; margin-bottom: 5px;">1200+</h3>
                        <p style="font-size: 0.9rem; color: #666; font-weight: 600;">Residing Families</p>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); font-size: 1.8rem; font-weight: 800; margin-bottom: 5px;">200 Meters</h3>
                        <p style="font-size: 0.9rem; color: #666; font-weight: 600;">To Metro Line 5</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Configuration & Homes -->
        <section id="configurations" class="section-padding container text-center">
            <h2 class="section-title">Arihant City Configuration & Homes</h2>
            <p class="section-subtitle">Thoughtfully engineered floor layouts designed to eliminate wasted passage space and maximize usable carpet areas.</p>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Unit Type</th>
                            <th>Carpet Area</th>
                            <th>Indicative Starting Price</th>
                            <th>Possession Status</th>
                            <th>Layout Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1 BHK Luxury</strong></td>
                            <td>543 Sq.Ft. Carpet</td>
                            <td>₹35 Lakhs* Onwards</td>
                            <td>Ready OC & Ongoing</td>
                            <td><a href="/arihant-city-configurations.html" style="font-weight: bold; color: var(--primary-maroon);">View 1 BHK Details &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><strong>2 BHK Elite</strong></td>
                            <td>793 Sq.Ft. Carpet</td>
                            <td>₹52 Lakhs* Onwards</td>
                            <td>Ready Possession & Ongoing</td>
                            <td><a href="/arihant-city-configurations.html" style="font-weight: bold; color: var(--primary-maroon);">View 2 BHK Details &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><strong>1+1 Jodi (3 BHK)</strong></td>
                            <td>1,080 Sq.Ft. Carpet</td>
                            <td>Price on Request</td>
                            <td>Limited Custom Jodi Units</td>
                            <td><a href="/arihant-city-configurations.html" style="font-weight: bold; color: var(--primary-maroon);">View Jodi Details &rarr;</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="margin-top: 25px;">
                <a href="/arihant-city-configurations.html" class="btn">Explore All Configurations &rarr;</a>
                <a href="/arihant-city-price.html" class="btn btn-gold" style="margin-left: 10px;">Download Price Breakdown</a>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Price -->
        <section id="price" class="section-padding" style="background-color: var(--light-maroon);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City Price</h2>
                <p class="section-subtitle">Transparent, verified pricing with all-inclusive cost clarity and flexible construction-linked payment milestones.</p>

                <div class="grid-3x">
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); margin-bottom: 8px;">1 BHK Luxury</h3>
                        <p style="font-size: 1.4rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 10px;">₹35 Lakhs* Onwards</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 15px;">543 sq.ft. carpet area. Attractive down payment options and flexible bank home loans available.</p>
                        <a href="/arihant-city-price.html" class="btn" style="width: 100%;">View Price Sheet</a>
                    </div>
                    <div class="card" style="border: 2px solid var(--accent-gold);">
                        <h3 style="color: var(--primary-maroon); margin-bottom: 8px;">2 BHK Elite</h3>
                        <p style="font-size: 1.4rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 10px;">₹52 Lakhs* Onwards</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 15px;">793 sq.ft. carpet area. Dual balconies, master bedroom with en-suite bath, and spacious living room.</p>
                        <a href="/arihant-city-price.html" class="btn btn-gold" style="width: 100%;">View Price Sheet</a>
                    </div>
                    <div class="card">
                        <h3 style="color: var(--primary-maroon); margin-bottom: 8px;">3 BHK Jodi / Commercial</h3>
                        <p style="font-size: 1.4rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 10px;">Price on Request</p>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 15px;">1,080 sq.ft. carpet area for Jodi flats. Road-frontage commercial shopfronts on request.</p>
                        <a href="/arihant-city-price.html" class="btn" style="width: 100%;">Enquire Price</a>
                    </div>
                </div>

                <div style="margin-top: 30px;">
                    <a href="/arihant-city-price.html" class="btn">Go to Dedicated Price Guide &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Floor Plans -->
        <section id="plans" class="section-padding container text-center">
            <h2 class="section-title">Arihant City Floor Plans</h2>
            <p class="section-subtitle">Sanctioned architectural blueprints offering 10-foot ceiling heights and Vastu-compliant layouts.</p>

            <div class="grid-2x">
                <div class="card" style="text-align: center;">
                    <img src="/images/fp1_img_1776490386.webp" alt="Arihant City 1 BHK and 2 BHK master floor plan layout" width="550" height="380" style="border: 1px solid #ddd; border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 6px;">1 BHK & 2 BHK Master Blueprints</h3>
                    <p style="font-size: 0.85rem; color: #555; margin-bottom: 15px;">Zero corridor wastage, attached balcony sundeck, and spacious kitchen with granite platform.</p>
                    <a href="/arihant-city-floor-plans.html" class="btn">Inspect Floor Plans &rarr;</a>
                </div>
                <div class="card" style="text-align: center;">
                    <img src="/images/fp2_img_1776490386.webp" alt="Arihant City 3 BHK jodi luxury floor plan layout" width="550" height="380" style="border: 1px solid #ddd; border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 6px;">3 BHK Jodi (1+1 Combination) Blueprint</h3>
                    <p style="font-size: 0.85rem; color: #555; margin-bottom: 15px;">Three full-sized bedrooms, three bathrooms, and expansive double-living room for grand family comfort.</p>
                    <a href="/arihant-city-floor-plans.html" class="btn">Inspect Jodi Plans &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Amenities -->
        <section id="amenities" class="section-padding" style="background-color: var(--light-bg);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City Amenities</h2>
                <p class="section-subtitle">Over 20 lifestyle and wellness amenities curated for residents of all age groups within a secure gated perimeter.</p>

                <div class="grid-4x">
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏊</span><h3 style="font-size:1rem;margin-top:10px;">Swimming Pool</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏋️</span><h3 style="font-size:1rem;margin-top:10px;">Gymnasium</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🌳</span><h3 style="font-size:1rem;margin-top:10px;">Landscaped Gardens</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛡️</span><h3 style="font-size:1rem;margin-top:10px;">24/7 Security</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🅿️</span><h3 style="font-size:1rem;margin-top:10px;">Covered Parking</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏫</span><h3 style="font-size:1rem;margin-top:10px;">School Nearby</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏥</span><h3 style="font-size:1rem;margin-top:10px;">Hospital Nearby</h3></div>
                    <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛒</span><h3 style="font-size:1rem;margin-top:10px;">Commercial Arcade</h3></div>
                </div>

                <div style="margin-top: 30px;">
                    <a href="/arihant-city-amenities.html" class="btn">Explore All 20+ Amenities &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Location & Connectivity -->
        <section id="location" class="section-padding container text-center">
            <h2 class="section-title">Arihant City Location</h2>
            <p class="section-subtitle">Located on the Kalyan-Bhiwandi Bypass near Sai Baba Temple, Temghar, Bhiwandi, Maharashtra 421302.</p>

            <h3 style="color: var(--primary-maroon); font-size: 1.4rem; margin: 25px 0 15px;">Arihant City Connectivity</h3>
            <p class="section-subtitle">Unmatched highway transit and upcoming metro connectivity across the Mumbai Metropolitan Region.</p>

            <div class="grid-4x">
                <div class="card" style="text-align: left;">
                    <h4 style="color: var(--primary-maroon); margin-bottom: 8px;">Transit Links</h4>
                    <p style="font-size: 0.85rem; color: #555;">• Metro Line 5: ~200 m<br>• Kalyan Junction: ~8.4 km<br>• Bhiwandi Station: ~4.5 km<br>• NH-3 Highway: ~3.0 km</p>
                </div>
                <div class="card" style="text-align: left;">
                    <h4 style="color: var(--primary-maroon); margin-bottom: 8px;">Education</h4>
                    <p style="font-size: 0.85rem; color: #555;">• Holy Cross School: ~2.0 km<br>• Swayam Siddhi College: ~1.5 km<br>• Presidency School: ~3.5 km<br>• Podar International: ~15 Mins</p>
                </div>
                <div class="card" style="text-align: left;">
                    <h4 style="color: var(--primary-maroon); margin-bottom: 8px;">Healthcare</h4>
                    <p style="font-size: 0.85rem; color: #555;">• Life Care Hospital: ~1.8 km<br>• Fortis Kalyan: ~15 Mins<br>• Ved Hospital: ~3.2 km<br>• 24x7 Ambulance: On-site</p>
                </div>
                <div class="card" style="text-align: left;">
                    <h4 style="color: var(--primary-maroon); margin-bottom: 8px;">Retail & Food</h4>
                    <p style="font-size: 0.85rem; color: #555;">• Township High-Street Retail<br>• D-Mart Bhiwandi: ~2.5 km<br>• McDonald's: ~1.2 km<br>• Metro Junction Mall: ~18 Mins</p>
                </div>
            </div>

            <div style="margin-top: 30px;">
                <a href="/arihant-city-location.html" class="btn">View Detailed Location & Commute Map &rarr;</a>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City MahaRERA -->
        <section id="maharera" class="section-padding" style="background-color: var(--light-maroon);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City MahaRERA</h2>
                <p class="section-subtitle">Fully verified project registration numbers ensuring absolute financial transparency and statutory buyer safety.</p>

                <div class="table-wrapper" style="max-width: 900px; margin: 0 auto 25px auto;">
                    <table>
                        <thead>
                            <tr>
                                <th>Project Wing / Phase</th>
                                <th>MahaRERA Registration No.</th>
                                <th>Legal Verification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arihant City Phase-I</td>
                                <td><strong>P51700010884</strong></td>
                                <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener">Verify on MahaRERA &rarr;</a></td>
                            </tr>
                            <tr>
                                <td>D3 Signature Tower (26-Storey)</td>
                                <td><strong>P51700022743</strong></td>
                                <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener">Verify on MahaRERA &rarr;</a></td>
                            </tr>
                            <tr>
                                <td>Arihant City Phase-II</td>
                                <td><strong>P51700028429, P51700028441, P51700044483</strong></td>
                                <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener">Verify on MahaRERA &rarr;</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <a href="/arihant-city-maharera.html" class="btn">Read Complete MahaRERA & Bank Approval Report &rarr;</a>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Developer -->
        <section id="developer" class="section-padding container text-center">
            <h2 class="section-title">Arihant City Developer</h2>
            <div style="text-align: justify; max-width: 900px; margin: 0 auto 30px auto; font-size: 1rem; line-height: 1.8;">
                <p>Developed by <strong>Arihant Enterprises (Arihant Group)</strong>, Arihant City represents a commitment to high-standard structural engineering, modern urban planning, and transparent customer relationships. Over 1,200 families currently live in Arihant City, enjoying active maintenance, functional community halls, and secure residential living.</p>
                <p style="margin-top: 15px;">The advisory desk operating this portal is an Authorized Channel Partner providing verified developer information, zero-brokerage direct booking assistance, and complimentary cab site visits.</p>
            </div>
            <a href="/arihant-city-developer.html" class="btn">View Developer Profile & History &rarr;</a>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Gallery -->
        <section id="gallery" class="section-padding" style="background-color: var(--light-bg);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City Gallery</h2>
                <p class="section-subtitle">View actual site photographs, completed building elevations, and designer sample flat interiors.</p>

                <div class="grid-2x">
                    <img src="/images/gal1_img_1777043382.webp" alt="Arihant City completed high-rise towers view" width="550" height="380" style="border: 1px solid #ddd; border-radius: 8px;">
                    <img src="/images/gal2_img_1777043382.webp" alt="Arihant City sample flat interior living room view" width="550" height="380" style="border: 1px solid #ddd; border-radius: 8px;">
                </div>

                <div style="margin-top: 30px;">
                    <a href="/arihant-city-gallery.html" class="btn">Browse Full Visual Gallery &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City FAQs -->
        <section id="faqs" class="section-padding container text-center">
            <h2 class="section-title">Arihant City FAQs</h2>
            <p class="section-subtitle">Verified answers to the most important property buyer questions.</p>

            <div class="faq-accordion">
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What is Arihant City and where is it located?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Arihant City is a 32-acre integrated residential township located on the Kalyan-Bhiwandi Bypass in Temghar, Bhiwandi, Maharashtra 421302. It is just 200 meters from the upcoming Metro Line 5 station.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What is the starting price for 1 BHK and 2 BHK flats?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Base prices start from ₹35 Lakhs* onwards for 1 BHK luxury residences (543 sq.ft. carpet) and ₹52 Lakhs* onwards for 2 BHK elite residences (793 sq.ft. carpet).</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Is Arihant City MahaRERA certified?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Yes, the project is fully registered under MahaRERA under numbers Phase-I: P51700010884, D3 Tower: P51700022743, and Phase-II: P51700028429, P51700028441, P51700044483.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Are ready-to-move flats with OC available?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Yes, completed wings have received their Occupancy Certificate (OC) with more than 1,200 families residing. Ready possession homes qualify for 0% GST.</div>
                </div>
            </div>

            <div style="margin-top: 30px;">
                <a href="/arihant-city-faqs.html" class="btn">View All 15+ Verified FAQs &rarr;</a>
            </div>
        </section>

        <!-- Section 4 Recommended H2: Arihant City Guides & Insights -->
        <section id="blogs" class="section-padding" style="background-color: var(--light-bg);">
            <div class="container text-center">
                <h2 class="section-title">Arihant City Guides & Insights</h2>
                <p class="section-subtitle">Expert property advice, market trend analysis, and homebuyer checklists for Bhiwandi and Thane real estate.</p>

                <div class="grid-3x">
                    <div class="card" style="text-align: left;">
                        <h3 style="color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 8px;">Arihant City Price & Cost Guide</h3>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px;">Detailed breakdown of base prices, stamp duty, registration, and monthly maintenance costs.</p>
                        <a href="/arihant-city-price.html" style="font-weight: bold; color: var(--accent-gold);">Read Guide &rarr;</a>
                    </div>
                    <div class="card" style="text-align: left;">
                        <h3 style="color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 8px;">Metro Line 5 Impact on Bhiwandi</h3>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px;">How the Thane-Bhiwandi-Kalyan metro line is elevating property values along the Kalyan Bypass.</p>
                        <a href="/blog/metro-line-5-bhiwandi-impact.html" style="font-weight: bold; color: var(--accent-gold);">Read Guide &rarr;</a>
                    </div>
                    <div class="card" style="text-align: left;">
                        <h3 style="color: var(--primary-maroon); font-size: 1.15rem; margin-bottom: 8px;">MahaRERA Buyer Rights Guide</h3>
                        <p style="font-size: 0.85rem; color: #555; margin-bottom: 12px;">Important legal factors and title certificates every homebuyer should check before booking.</p>
                        <a href="/blog/home-loan-and-maharera-guide-bhiwandi.html" style="font-weight: bold; color: var(--accent-gold);">Read Guide &rarr;</a>
                    </div>
                </div>

                <div style="margin-top: 30px;">
                    <a href="/blog.html" class="btn">Explore All Real Estate Guides &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Book a Free Guided Site Visit</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Register below for priority unit allotment, exclusive pricing sheets, and free cab pickup.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST" id="contact-form">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Homepage Booking Enquiry - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <select name="config">
                        <option value="1BHK">1 BHK Luxury (543 sq.ft.)</option>
                        <option value="2BHK">2 BHK Elite (793 sq.ft.)</option>
                        <option value="3BHK">1+1 Jodi (3 BHK)</option>
                        <option value="Commercial">Commercial Shop</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;">Submit Booking Request</button>
                </form>
            </div>
        </section>
    </main>

    <!-- Structured Footer Navigation (Section 10) -->
    ${getFooter()}
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf-8');
fs.writeFileSync(path.join(__dirname, 'index.php'), indexHtml, 'utf-8');
console.log('Successfully updated index.html and index.php with Google Sitelink architecture & Section 4 H2 structure!');
