<?php
// Project: Arihant City Kalyan Bhiwandi
// Optimized for Local (XAMPP) and Vercel Deployment
$data_file = 'data.json';
$data = [];
if (file_exists($data_file)) {
    $data = json_decode(file_get_contents($data_file), true);
}

function get_val($key, $fallback = '')
{
    global $data;
    return (isset($data[$key]) && !empty($data[$key])) ? $data[$key] : $fallback;
}
?>
<!DOCTYPE html>
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
    <meta name="google-site-verification" content="BqrJA3zOXY1BMJfMDregV83Q_vmVHwKuDiYp21c-v24" />
    <title>Arihant City – Premium Residential Township | Luxury Flats & Plots</title>

    <!-- ================= UPDATED SEO META TAGS ================= -->
    <link rel="icon" href="images/favicon.webp" type="image/webp" sizes="16x16">
    <meta name="description"
        content="Find your dream home in Arihant City. Premium 2BHK, 3BHK flats, plots, and villas. World-class amenities, prime location. Get the best deal at Arihant City today!" />
    <meta name="keywords"
        content="Arihant City, Arihant City flats, Arihant City plots, Arihant City township, Arihant City 2BHK, Arihant City 3BHK, Arihant City price, Arihant City location" />
    <meta name="author" content="Arihant City" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="Arihant City" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Arihant City – Premium Residential Township | Luxury Flats & Plots" />
    <meta property="og:description"
        content="Find your dream home in Arihant City. Premium 2BHK, 3BHK flats, plots, and villas. World-class amenities, prime location." />
    <meta property="og:url" content="https://www.arihantcity.site/" />
    <meta property="og:image" content="https://www.arihantcity.site/images/hero_banner_1776905712.webp" />
    <meta property="article:published_time" content="2026-04-17T09:05:09+05:30" />
    <meta property="article:modified_time" content="2026-04-17T10:15:27+05:30" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Arihant City – Premium Residential Township | Luxury Flats & Plots" />
    <meta name="twitter:description"
        content="Find your dream home in Arihant City. Premium 2BHK, 3BHK flats, plots, and villas." />
    <meta name="twitter:image" content="https://www.arihantcity.site/images/hero_banner_1776905712.webp" />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#500115" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="Arihant City" />
    <meta name="apple-mobile-web-app-title" content="Arihant City" />
    <link rel="shortcut icon" type="image/webp" href="https://www.arihantcity.site/images/favicon.webp" />
    <link rel="canonical" href="https://www.arihantcity.site/" />

    <!-- Schema Markup JSON-LD SEO Additions -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arihant City",
      "url": "https://www.arihantcity.site",
      "logo": "https://www.arihantcity.site/images/site_logo_1776905712.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8000000000",
        "contactType": "sales"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Arihant City Residential Flats",
      "description": "Premium 2BHK and 3BHK flats in Arihant City township with world-class amenities.",
      "image": "https://www.arihantcity.site/images/hero_banner_1776905712.webp",
      "brand": {"@type": "Brand", "name": "Arihant City"},
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "3500000",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Where is Arihant City located?", "acceptedAnswer": {"@type": "Answer", "text": "Arihant City is located at Kalyan Bypass, Bhiwandi, offering excellent connectivity."}},
        {"@type": "Question", "name": "What is the price of flats in Arihant City?", "acceptedAnswer": {"@type": "Answer", "text": "Prices at Arihant City start from ₹35L onwards."}},
        {"@type": "Question", "name": "What amenities does Arihant City offer?", "acceptedAnswer": {"@type": "Answer", "text": "Arihant City offers swimming pool, gymnasium, clubhouse, landscaped gardens, 24/7 security, and more."}},
        {"@type": "Question", "name": "Is Arihant City RERA registered?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Arihant City is a MahaRERA registered project."}},
        {"@type": "Question", "name": "How to book a flat in Arihant City?", "acceptedAnswer": {"@type": "Answer", "text": "You can book a flat in Arihant City by filling the contact form on our website or calling our sales office."}}
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Arihant City Sales Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalyan Bypass",
        "addressLocality": "Bhiwandi",
        "addressRegion": "Maharashtra",
        "postalCode": "421302",
        "addressCountry": "IN"
      },
      "telephone": "+91-8000000000",
      "openingHours": "Mo-Su 09:00-19:00"
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.arihantcity.site"},
        {"@type": "ListItem", "position": 2, "name": "Real Estate", "item": "https://www.arihantcity.site/#"},
        {"@type": "ListItem", "position": 3, "name": "Arihant City", "item": "https://www.arihantcity.site/#"}
      ]
    }
    </script>
    <!-- ====================================================================== -->

    <style>
        /* CSS Variables */
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

        html {
            overflow-x: hidden;
            width: 100%;
        }

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-padding {
            padding: 60px 0;
        }

        .text-center {
            text-align: center;
        }

        .section-title {
            color: var(--primary-maroon);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 15px;
            font-size: 2rem;
            font-weight: 800;
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 50px;
            height: 3px;
            background: var(--accent-gold);
            margin: 10px auto 0;
        }

        .section-subtitle {
            font-size: 1rem;
            color: var(--gray-text);
            margin-bottom: 30px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .btn {
            display: inline-block;
            background-color: var(--primary-green);
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
            margin-top: 20px;
        }

        .btn:hover {
            background-color: var(--accent-gold);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(80, 1, 21, 0.3);
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

        /* Hamburger Menu Styles */
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

        .hero {
            width: 100%;
            display: block;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
        }

        th {
            background-color: var(--primary-maroon);
            color: var(--white);
            padding: 15px;
            text-transform: uppercase;
            border: 1px solid var(--accent-gold);
        }

        td {
            padding: 15px;
            border-bottom: 1px solid #ddd;
            background-color: #fcfbf7;
            text-align: center;
        }

        .grid-2x2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }

        .card {
            background: var(--white);
            padding: 15px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid var(--light-green);
        }

        .card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            margin-bottom: 15px;
        }

        .conn-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            text-align: left;
            margin-top: 30px;
        }

        .conn-col h4 {
            margin-bottom: 10px;
            color: var(--primary-green);
        }

        .conn-col ul {
            list-style: none;
            font-size: 0.9rem;
        }

        .conn-col li {
            margin-bottom: 8px;
        }

        .comfort-list-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            text-align: left;
        }

        .comfort-list-grid li {
            list-style: none;
            padding-left: 20px;
            position: relative;
        }

        .comfort-list-grid li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--primary-green);
        }

        .contact-section {
            display: flex;
            background: var(--light-maroon);
        }

        .map-container {
            flex: 1.5;
            min-height: 500px;
        }

        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        .form-container {
            flex: 1;
            padding: 50px 40px;
            background-color: var(--white);
            border-left: 5px solid var(--accent-gold);
        }

        .form-container input,
        .form-container select,
        .form-container textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        footer {
            background-color: var(--footer-bg);
            color: var(--white);
            padding: 40px 0;
            text-align: center;
            font-size: 0.85rem;
        }

        /* Table Responsiveness */
        .table-wrapper {
            overflow-x: auto;
            margin: 20px 0;
        }

        @media (max-width: 768px) {
            .container {
                width: 95%;
            }

            .section-padding {
                padding: 40px 0;
            }

            .section-title {
                font-size: 1.5rem;
            }

            .grid-2x2,
            .conn-grid,
            .comfort-list-grid,
            .contact-section {
                grid-template-columns: 1fr;
                flex-direction: column;
            }

            .card img {
                height: 200px;
            }

            .form-container {
                padding: 30px 20px;
                border-left: none;
                border-top: 5px solid var(--accent-gold);
            }

            .nav-container {
                padding: 0 10px;
            }
        }

        /* Modal Styles */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(8px);
        }

        .modal-content {
            background: var(--white);
            border-radius: 15px;
            width: 90%;
            max-width: 450px;
            position: relative;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            animation: modalFadeIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            overflow: hidden;
            border: 1px solid rgba(168, 140, 57, 0.3);
        }

        @keyframes modalFadeIn {
            from {
                transform: scale(0.9);
                opacity: 0;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        .modal-header {
            background: linear-gradient(135deg, var(--primary-maroon), #7a0220);
            padding: 25px 30px;
            color: var(--white);
            text-align: center;
            position: relative;
        }

        .modal-header h2 {
            margin: 0;
            font-size: 1.6rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--white);
        }

        .modal-header p {
            margin: 5px 0 0;
            font-size: 0.85rem;
            opacity: 0.9;
            color: var(--white);
        }

        .modal-body {
            padding: 30px;
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 20px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.7);
            transition: 0.3s;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }

        .modal-close:hover {
            color: var(--white);
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
        }

        .modal-body input,
        .modal-body select {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e1e1e1;
            background: #f9f9f9;
            margin-bottom: 15px;
            padding: 14px 15px;
            transition: 0.3s;
            font-size: 0.95rem;
            border-radius: 8px;
            display: block;
        }

        .modal-body input:focus,
        .modal-body select:focus {
            border-color: var(--accent-gold);
            background: var(--white);
            outline: none;
            box-shadow: 0 0 10px rgba(168, 140, 57, 0.1);
        }

        .modal-submit-btn {
            background: linear-gradient(to right, var(--accent-gold), #c4a75e);
            color: var(--primary-maroon) !important;
            width: 100%;
            padding: 15px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 800;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            transition: 0.4s;
            box-shadow: 0 4px 15px rgba(168, 140, 57, 0.3);
            margin-top: 10px;
        }

        .modal-submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(168, 140, 57, 0.4);
            filter: brightness(1.1);
        }

        /* SEO Helper Classes */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: white;
            padding: 8px;
            z-index: 100;
        }

        .skip-link:focus {
            top: 0;
        }

        .faq-accordion {
            max-width: 800px;
            margin: 0 auto;
            text-align: left;
        }

        .faq-item {
            border-bottom: 1px solid #ddd;
            padding: 15px 0;
        }

        .faq-q {
            cursor: pointer;
            font-weight: bold;
            color: var(--primary-maroon);
            display: flex;
            justify-content: space-between;
        }

        .faq-a {
            display: none;
            padding-top: 10px;
            color: #555;
        }

        .grid-4x3 {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        @media (max-width: 768px) {
            .grid-4x3 {
                grid-template-columns: repeat(2, 1fr);
            }

            .modal-content {
                width: 95%;
                max-width: 380px;
                margin: 10px;
            }

            .modal-header {
                padding: 20px 15px;
            }

            .modal-header h2 {
                font-size: 1.2rem;
            }

            .modal-body {
                padding: 20px 15px;
            }

            .modal-body input,
            .modal-body select {
                padding: 12px;
                font-size: 0.9rem;
            }

            .modal-submit-btn {
                padding: 13px;
                font-size: 0.9rem;
            }
        }

        .testimonial-card {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 8px;
            background: #fff;
            text-align: left;
        }

        .stars {
            color: #f5c518;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header>
        <div class="nav-container container">
            <a href="index.php" aria-label="Arihant City Home"><img id="logo"
                    src="<?= get_val('site_logo', 'images/site_logo_1776905712.webp') ?>"
                    alt="Arihant City Kalyan Bhiwandi - Premium Real Estate Project Logo" class="logo-img"></a>
            <nav aria-label="Main Navigation">
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links" id="nav-list">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#amenities">Amenities</a></li>
                    <li><a href="#connectivity">Connectivity</a></li>
                    <li><a href="#plans">Floor Plans</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <h1 id="main-content" class="visually-hidden"
            style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;">
            Your New Home in Arihant City – Premium Residential Township</h1>
        <img src="<?= get_val('hero_banner', 'images/hero_banner_1776905712.webp') ?>"
            alt="Arihant City township aerial view – premium residential project" class="hero" width="1200"
            height="600">

        <section id="overview" class="section-padding container text-center">
            <h2 class="section-title">Arihant City Floor Plans & Configurations</h2>
            <p class="section-subtitle">Discover luxury 1, 2, and 3 BHK flats with world-class features in Bhiwandi's finest township.</p>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Price Range</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 BHK Luxury</td>
                            <td><?= get_val('p_2bhk_area', '519 SqFt') ?></td>
                            <td><button class="btn price-btn" style="margin-top:0; padding: 5px 15px;">Price on Request</button></td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>2 BHK Elite</td>
                            <td><?= get_val('p_3bhk_area', '760 SqFt') ?></td>
                            <td><button class="btn price-btn" style="margin-top:0; padding: 5px 15px;">Price on Request</button></td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>3 BHK Premium</td>
                            <td><?= get_val('p_4bhk_area', '1100 SqFt') ?></td>
                            <td><button class="btn price-btn" style="margin-top:0; padding: 5px 15px;">Price on Request</button></td>
                            <td>Limited</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 style="margin-top: 20px; color: var(--primary-maroon);">Check Out Detailed 2BHK & 3BHK Floor Plans In
                Arihant City</h3>
            <button class="btn price-btn" aria-label="Download full price list">Download Full Price List</button>
        </section>

        <section class="section-padding" style="background-color: var(--light-green);">
            <div class="container text-center">
                <h2 class="section-title">Why Choose Arihant City?</h2>
                <div style="text-align: justify; max-width: 900px; margin: 0 auto; margin-bottom: 30px;">
                    <p>If you are looking for a perfect home in the prime area of Kalyan and Bhiwandi, <strong>Arihant City</strong> is the ideal destination to fulfill your dreams. A world-class township where modern amenities and nature coexist harmoniously. With its stunning architecture and excellent highway connectivity, this project has become the top choice for homebuyers.</p>
                    <p style="margin-top: 15px;">Being a fully MahaRERA-approved project, your investment here is completely secure. The premium 1BHK, 2BHK, and 3BHK apartments in this township offer an ultra-luxury lifestyle. Backed by the trust of the Arihant Group, living here is truly a royal experience.</p>
                </div>
                <img src="<?= get_val('story_img', 'images/story_img_1776905960.webp') ?>"
                    alt="Arihant City Kalyan Bhiwandi Legacy and Developer Story"
                    style="max-width: 700px; margin: 0 auto; border: 5px solid #fff;" loading="lazy" width="700"
                    height="400">
            </div>
        </section>

        <section id="amenities" class="section-padding container text-center">
            <h2 class="section-title">Exclusive Premium Amenities</h2>
            <p class="section-subtitle">Experience world-class luxury amenities for you and your family.</p>
            <div class="grid-4x3">
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏊</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Swimming Pool</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏋️</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Gymnasium</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🌳</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Landscaped Gardens</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛡️</span>
                    <h3 style="font-size:1rem;margin-top:10px;">24/7 Security</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🅿️</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Ample Parking</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏫</span>
                    <h3 style="font-size:1rem;margin-top:10px;">School Nearby</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏥</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Hospital Proximity</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛒</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Shopping Complex</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🎮</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Kids Play Area</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">⛳</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Clubhouse</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🔌</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Power Backup</h3>
                </div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">💧</span>
                    <h3 style="font-size:1rem;margin-top:10px;">Water Supply 24/7</h3>
                </div>
            </div>
        </section>

        <section id="connectivity" class="section-padding" style="background-color: var(--light-maroon);">
            <div class="container text-center">
                <h2 class="section-title">Prime Location & Unmatched Connectivity</h2>
                <p class="section-subtitle">School, hospital, mall aur highway—sab kuch aapke naye ghar ke bilkul
                    kareeb.</p>
                <div class="conn-grid">
                    <div class="conn-col">
                        <h4>Transport</h4>
                        <ul>
                            <li>Metro Line 5 - 0.2 km</li>
                            <li>Kalyan Station - 8.4 km</li>
                        </ul>
                    </div>
                    <div class="conn-col">
                        <h4>Education</h4>
                        <ul>
                            <li>Swayam Siddhi College</li>
                            <li>Holy Cross School</li>
                        </ul>
                    </div>
                    <div class="conn-col">
                        <h4>Lifestyle</h4>
                        <ul>
                            <li>McDonald's - 1.2 km</li>
                            <li>Dmart - 2.5 km</li>
                        </ul>
                    </div>
                    <div class="conn-col">
                        <h4>Healthcare</h4>
                        <ul>
                            <li>Life Care Hospital</li>
                            <li>Fortis Hospital</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="plans" class="section-padding container text-center">
            <h2 class="section-title"><?= get_val('fp_title', 'MASTER PLANS') ?></h2>
            <div class="grid-2x2">
                <img src="<?= get_val('fp1_img', 'images/fp1_img_1776490386.webp') ?>"
                    alt="1 BHK & 2 BHK Floor Plan of Arihant City Kalyan Bhiwandi" style="border: 1px solid #ddd;"
                    loading="lazy">
                <img src="<?= get_val('fp2_img', 'images/fp2_img_1776490386.webp') ?>"
                    alt="3 BHK & 4 BHK Floor Plan of Arihant City Kalyan Bhiwandi" style="border: 1px solid #ddd;"
                    loading="lazy">
            </div>
        </section>

        <section id="gallery" class="section-padding container text-center">
            <h2 class="section-title"><?= get_val('gal_title', 'PROJECT GALLERY') ?></h2>
            <p class="section-subtitle">
                <?= get_val('gal_desc', 'A glimpse into the premium lifestyle at Arihant City.') ?></p>
            <div class="grid-2x2">
                <img src="<?= get_val('gal1_img', 'images/gal1_img_1777043382.webp') ?>"
                    alt="Arihant City Kalyan Bhiwandi Project Actual Site Image"
                    style="border: 1px solid #ddd; border-radius: 8px;" loading="lazy">
                <img src="<?= get_val('gal2_img', 'images/gal2_img_1777043382.webp') ?>"
                    alt="Arihant City Kalyan Bhiwandi Sample Flat Interior"
                    style="border: 1px solid #ddd; border-radius: 8px;" loading="lazy">
            </div>
        </section>

        <section id="blogs" class="section-padding container">
            <h2 class="section-title text-center">LATEST INSIGHTS & REAL ESTATE BLOGS</h2>
            <p class="section-subtitle text-center">Bhiwandi-Thane property market aur Arihant City ke baare mein expert
                guidance aur latest updates.</p>
            <div class="grid-2x2">
                <div class="card" style="text-align: left; padding: 20px;">
                    <h3 style="color: var(--primary-green); margin-bottom: 10px;">Bhiwandi Mein 1 BHK Luxury Living</h3>
                    <p style="font-size: 0.9rem; color: #555;">Jaaniye kyun first-time homebuyers aur young
                        professionals ke liye Arihant City sabse best option hai...</p>
                    <a href="blog/1bhk-flats-in-thane.html"
                        style="color: var(--primary-green); font-weight: bold; text-decoration: none; display: block; margin-top: 10px;">Read
                        More &rarr;</a>
                </div>
                <div class="card" style="text-align: left; padding: 20px;">
                    <h3 style="color: var(--primary-green); margin-bottom: 10px;">Kalyan-Bhiwandi Bypass Ka Development
                    </h3>
                    <p style="font-size: 0.9rem; color: #555;">Bypass ke teji se ho rahe vikas se Arihant City kaise
                        sabse prime residential hub ban chuka hai...</p>
                    <a href="blog/residential-projects-in-thane.html"
                        style="color: var(--primary-green); font-weight: bold; text-decoration: none; display: block; margin-top: 10px;">Read
                        More &rarr;</a>
                </div>
                <div class="card" style="text-align: left; padding: 20px;">
                    <h3 style="color: var(--primary-green); margin-bottom: 10px;">Thane District Mein Affordable Premium
                        Flats</h3>
                    <p style="font-size: 0.9rem; color: #555;">Bina budget exceed kiye, Arihant City mein aapko milti
                        hain top-class luxury suvidhayein...</p>
                    <a href="blog/affordable-flats-in-thane.html"
                        style="color: var(--primary-green); font-weight: bold; text-decoration: none; display: block; margin-top: 10px;">Read
                        More &rarr;</a>
                </div>
                <div class="card" style="text-align: left; padding: 20px;">
                    <h3 style="color: var(--primary-green); margin-bottom: 10px;">Bhiwandi Real Estate Investment Guide
                    </h3>
                    <p style="font-size: 0.9rem; color: #555;">Real estate experts kyun mante hain ki Arihant City mein
                        nivesh karna aapke bhavishya ko secure karega...</p>
                    <a href="blog/future-of-bhiwandi-real-estate.html"
                        style="color: var(--primary-green); font-weight: bold; text-decoration: none; display: block; margin-top: 10px;">Read
                        More &rarr;</a>
                </div>
            </div>
            <div class="text-center" style="margin-top: 30px;">
                <a href="blog/index.html" class="btn">View All Articles</a>
            </div>
        </section>

        <!-- SEO ADDITION: Testimonials Schema -->
        <section class="section-padding container text-center" style="background-color: #fcfbf7;">
            <h2 class="section-title">Customer Reviews & Happy Families</h2>
            <div class="grid-2x2">
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"Arihant City ne hamara sapna poora kiya. Yahan ka vatavaran, club house
                        aur Kalyan station se nazdiki hamari family ko bahut pasand aayi. Yeh sach me best township
                        hai!"</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person"
                        style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Rahul Sharma</span>
                    </h4>
                </div>
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"Maine yahan 2BHK flat liya hai aur main construction quality se bahut
                        satisfy hu. Is price point par itni achi suvidhayein milna mushkil hai. Highly recommended."</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person"
                        style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Priya Desai</span>
                    </h4>
                </div>
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"Bhiwandi mein bahut saare projects dekhe, par MahaRERA registered hone ke
                        karan humein yahan bharosa hua. Yahan ka staff bahut helpful aur booking process bilkul smooth
                        tha."</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person"
                        style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Amit Singh</span>
                    </h4>
                </div>
            </div>
        </section>

        <!-- SEO ADDITION: FAQ Schema -->
        <section class="section-padding container text-center">
            <h2 class="section-title">Arihant City Ke Baare Mein Aksar Puche Jane Wale Sawal (FAQ)</h2>
            <div class="faq-accordion">
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Arihant City ka exact location kya hai?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Arihant City prime Kalyan Bypass, Bhiwandi par sthit hai, jahan se highways aur
                        public transport bahut kareeb hain.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Arihant City mein flats ki shuruati keemat kya hai?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Yahan 1BHK flats ki starting price ₹35 Lakh se shuru hoti hai. Prices flat ke
                        size aur phase ke anusaar alag ho sakte hain.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What amenities are available in this township?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">You will find all premium amenities here, including a swimming pool, modern gym, large clubhouse, garden, children's play area, and 24x7 security.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Is this project MahaRERA certified?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Yes, this project is fully MahaRERA registered, ensuring your investment is completely safe.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What is the process for booking a flat?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">For booking, you can fill out the form on this website or visit our sales office directly.</div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="<?= get_val('google_map', 'https://www.google.com/maps/embed?pb=...') ?>" loading="lazy"
                    aria-label="Arihant City Location Map"></iframe>
            </div>
            <div class="form-container">
                <h2 class="section-title">Book Your Dream Flat Today</h2>
                <p>Register now to receive exclusive deals and special offers.<br><br><span
                        style="font-size:0.85rem; font-weight:bold; color:var(--primary-maroon);">MahaRERA Approved
                        Project | Transparent & Secure Buying</span></p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST" id="contact-form" name="contactForm"
                    aria-label="Arihant City Booking Form">
                    <input type="hidden" name="_next" value="https://www.arihantcity.site/thank-you.html">
                    <input type="hidden" name="_subject" value="New Enquiry: Arihant City Kalyan Bhiwandi">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" aria-label="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number" required>
                    <select name="config" aria-label="Interested Configuration">
                        <option value="1BHK">1 BHK</option>
                        <option value="2BHK">2 BHK</option>
                        <option value="3BHK">3 BHK</option>
                        <option value="4BHK">4 BHK</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;"
                        aria-label="Submit Enquiry for Arihant City">Submit Enquiry</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div style="margin-bottom: 20px;">
                <a href="/" style="color: #fff; text-decoration: none; margin: 0 10px;">Home</a> |
                <a href="blog/index.html" style="color: #fff; text-decoration: none; margin: 0 10px;">Blogs</a> |
                <a href="disclaimer.html" style="color: #fff; text-decoration: none; margin: 0 10px;">Disclaimer</a> |
                <a href="privacy-policy.html" style="color: #fff; text-decoration: none; margin: 0 10px;">Privacy
                    Policy</a> |
                <a href="terms-and-conditions.html" style="color: #fff; text-decoration: none; margin: 0 10px;">Terms &
                    Conditions</a>
            </div>
            <p>© 2026 Arihant City Kalyan Bhiwandi. All Rights Reserved.</p>
            <p style="margin-top: 10px; font-size: 0.75rem; opacity: 0.8;">
                <a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener"
                    style="color:#fff; text-decoration:underline;">MahaRERA Registration No</a>: Phase-I: P51700010884,
                D3 Tower: P51700022743, Phase-II: P51700028429, P51700028441, P51700044483, P51700010350. <br>
                Disclaimer: All images and plans are artist's impressions. Please refer to RERA for accurate details.
            </p>
        </div>
    </footer>

    <!-- Price Modal -->
    <div class="modal-overlay" id="priceModal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-close" id="closeModal">&times;</span>
                <h2>Get Best Price</h2>
                <p>Register for exclusive offers & pricing</p>
            </div>
            <div class="modal-body">
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST" aria-label="Arihant City Price Request Form">
                    <input type="hidden" name="_next" value="https://www.arihantcity.site/thank-you.html">
                    <input type="hidden" name="_subject" value="Price Request: Arihant City Kalyan Bhiwandi">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Your Full Name" aria-label="Your Full Name" required>
                    <input type="tel" name="phone" placeholder="Your Mobile Number" aria-label="Your Mobile Number"
                        required>
                    <select name="config" aria-label="Select Configuration">
                        <option value="" disabled selected>Select Configuration</option>
                        <option value="1BHK">1 BHK Luxury</option>
                        <option value="2BHK">2 BHK Elite</option>
                        <option value="3BHK">3 BHK Platinum</option>
                        <option value="4BHK">4 BHK Premium</option>
                    </select>
                    <button type="submit" class="modal-submit-btn"
                        aria-label="Unlock Price Details for Arihant City">Unlock Price Details</button>
                </form>
            </div>
        </div>
    </div>

    <!-- On Page Load Popup -->
    <div class="modal-overlay" id="loadPopup" style="display:none;">
        <div class="modal-content" style="animation: popupBounce 0.5s ease-out;">
            <div class="modal-header" style="background: linear-gradient(135deg, #1a0a2e, var(--primary-maroon), #7a0220);">
                <span class="modal-close" id="closeLoadPopup">&times;</span>
                <h2 style="font-size:1.3rem;">🏠 Exclusive Offer!</h2>
                <p style="font-size:0.9rem; margin-top:8px;">Register now & get <strong style="color:#ffd700;">₹5 Lakh OFF*</strong> on booking</p>
            </div>
            <div class="modal-body">
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST" aria-label="Arihant City Page Load Enquiry Form">
                    <input type="hidden" name="_next" value="https://www.arihantcity.site/thank-you.html">
                    <input type="hidden" name="_subject" value="🔥 Hot Lead (Popup): Arihant City Kalyan Bhiwandi">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Your Full Name" aria-label="Your Full Name" required>
                    <input type="tel" name="phone" placeholder="Your Mobile Number" aria-label="Your Mobile Number" required>
                    <select name="config" aria-label="Select Configuration">
                        <option value="" disabled selected>Select Configuration</option>
                        <option value="1BHK">1 BHK Luxury</option>
                        <option value="2BHK">2 BHK Elite</option>
                        <option value="3BHK">3 BHK Platinum</option>
                        <option value="4BHK">4 BHK Premium</option>
                    </select>
                    <button type="submit" class="modal-submit-btn" aria-label="Claim Offer for Arihant City">🎯 Claim Your Offer Now</button>
                </form>
                <p style="text-align:center; font-size:0.7rem; color:#999; margin-top:12px;">*T&C Apply. Limited period offer.</p>
            </div>
        </div>
    </div>

    <style>
        @keyframes popupBounce {
            0% { transform: scale(0.7); opacity: 0; }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); opacity: 1; }
        }
    </style>

    <script>
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });

        // Modal Logic
        const priceModal = document.getElementById('priceModal');
        const closeModal = document.getElementById('closeModal');
        const priceBtns = document.querySelectorAll('.price-btn');

        priceBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                priceModal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', () => {
            priceModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === priceModal) {
                priceModal.style.display = 'none';
            }
        });

        // On Page Load Popup Logic
        const loadPopup = document.getElementById('loadPopup');
        const closeLoadPopup = document.getElementById('closeLoadPopup');

        window.addEventListener('load', () => {
            if (!sessionStorage.getItem('popupShown')) {
                setTimeout(() => {
                    loadPopup.style.display = 'flex';
                }, 1500);
                sessionStorage.setItem('popupShown', 'true');
            }
        });

        closeLoadPopup.addEventListener('click', () => {
            loadPopup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === loadPopup) {
                loadPopup.style.display = 'none';
            }
        });
    </script>
</body>

</html>