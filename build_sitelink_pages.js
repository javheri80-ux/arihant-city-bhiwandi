const fs = require('fs');
const path = require('path');
const { DOMAIN, getHeader, getFooter, getSharedStyles } = require('./sitelink_helpers');

// 1. PRICE PAGE
function generatePricePage() {
    const title = "Arihant City Price – Verified Cost Sheet & Pricing Guide";
    const metaDesc = "Verified pricing and complete cost sheet for Arihant City Kalyan-Bhiwandi Bypass. 1 BHK starting ₹35 Lakhs, 2 BHK starting ₹52 Lakhs. Flexible payment plans & zero brokerage.";
    const canonical = `${DOMAIN}/arihant-city-price.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Price, Arihant City Price List, Arihant City 1 BHK Price, Arihant City 2 BHK Price, Arihant City cost, Arihant City Bhiwandi flat rate">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Price & Cost Sheet",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Price", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('price')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Price</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Transparent Pricing | Zero Brokerage</span>
                <h1 class="page-h1">Arihant City Price & Complete Cost Sheet</h1>
                <p class="page-lead">Comprehensive price breakdown for 1 BHK, 2 BHK, 3 BHK Jodi, and commercial retail units at Arihant City on the Kalyan-Bhiwandi Bypass corridor.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Verified Unit Configurations & Base Pricing</h2>
            <p class="section-subtitle">Real-time indicative pricing for residential residences. All figures are based on RERA carpet areas with flexible construction-linked payment milestones.</p>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Configuration</th>
                            <th>Carpet Area</th>
                            <th>Agreement Value (Base Price)</th>
                            <th>Possession Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1 BHK Luxury</strong></td>
                            <td>543 Sq.Ft. Carpet</td>
                            <td>₹35 Lakhs* Onwards</td>
                            <td>Ready OC & Under Construction</td>
                            <td><button class="btn price-btn-trigger">Request Cost Sheet</button></td>
                        </tr>
                        <tr>
                            <td><strong>2 BHK Elite</strong></td>
                            <td>793 Sq.Ft. Carpet</td>
                            <td>₹52 Lakhs* Onwards</td>
                            <td>Ready Possession & Ongoing Towers</td>
                            <td><button class="btn price-btn-trigger">Request Cost Sheet</button></td>
                        </tr>
                        <tr>
                            <td><strong>1+1 Jodi (3 BHK)</strong></td>
                            <td>1,080 Sq.Ft. Carpet</td>
                            <td>Price on Request</td>
                            <td>Limited Custom Jodi Units</td>
                            <td><button class="btn price-btn-trigger">Request Cost Sheet</button></td>
                        </tr>
                        <tr>
                            <td><strong>Commercial Shopfronts</strong></td>
                            <td>Varies (Ground Level)</td>
                            <td>Price on Request</td>
                            <td>Bypass Facing High Footfall</td>
                            <td><button class="btn price-btn-trigger">Enquire Shop Price</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p style="font-size: 0.8rem; color: #777; margin-top: 8px;">*Base prices exclude applicable statutory government levies (Maharashtra Stamp Duty, Registration Fees, and GST where applicable) as well as society formation and advance maintenance charges. Subject to revision by the developer.</p>

            <div class="grid-3x" style="margin-top: 40px;">
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 12px;">Zero GST on Ready Possession</h3>
                    <p style="font-size: 0.9rem; color: #555;">Towers with Occupancy Certificates (OC) already received in Phase I and Phase II qualify for 0% GST, saving homebuyers substantial upfront costs compared to new launches.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 12px;">Bank Approved Home Loans</h3>
                    <p style="font-size: 0.9rem; color: #555;">Pre-approved loan facilities available through State Bank of India (SBI), HDFC Bank, ICICI Bank, Bank of Baroda, and Axis Bank with flexible 20 to 30 year repayment terms.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 12px;">Construction Linked Plan (CLP)</h3>
                    <p style="font-size: 0.9rem; color: #555;">For ongoing towers including D3 Signature Tower, installment payments are strictly linked to verified MahaRERA slab completion stages, minimizing buyer financial risk.</p>
                </div>
            </div>

            <!-- In-Content Contextual Internal Links -->
            <div class="sibling-nav-box">
                <h3>Explore Related Arihant City Details</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Arihant City Floor Plans &rarr;</a>
                    <a href="/arihant-city-configurations.html" class="sibling-chip">Arihant City Configurations &rarr;</a>
                    <a href="/arihant-city-maharera.html" class="sibling-chip">Arihant City MahaRERA Compliance &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Arihant City Location & Commutes &rarr;</a>
                    <a href="/arihant-city-brochure.html" class="sibling-chip">Download Full Price List & Brochure &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Get Official Cost Sheet</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Receive the complete itemized cost sheet including stamp duty, registration, and payment schedule directly on WhatsApp or Email.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Price Page Enquiry - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <select name="config">
                        <option value="1BHK">1 BHK Luxury (₹35L* Onwards)</option>
                        <option value="2BHK">2 BHK Elite (₹52L* Onwards)</option>
                        <option value="3BHK">1+1 Jodi (3 BHK)</option>
                        <option value="Commercial">Commercial Retail Shop</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;">Get Instant Pricing PDF</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-price.html'), html, 'utf-8');
    console.log('Created arihant-city-price.html');
}

// 2. FLOOR PLANS PAGE
function generateFloorPlansPage() {
    const title = "Arihant City Floor Plans – 1, 2 & 3 BHK Layouts & Carpet Area";
    const metaDesc = "Inspect official architectural floor plans for Arihant City Kalyan-Bhiwandi Bypass. 1 BHK (543 sq.ft.), 2 BHK (793 sq.ft.), and 3 BHK Jodi (1080 sq.ft.). High ceilings & zero wastage.";
    const canonical = `${DOMAIN}/arihant-city-floor-plans.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Floor Plans, Arihant City Floor Plan, Arihant City 1 BHK Floor Plan, Arihant City 2 BHK Floor Plan, Arihant City 3 BHK Layout, Arihant City Carpet Area">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/fp1_img_1776490386.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Floor Plans & Layouts",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Floor Plans", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('floor-plans')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Floor Plans</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Vastu Compliant | 10 Ft Ceiling Height</span>
                <h1 class="page-h1">Arihant City Floor Plans & Carpet Dimensions</h1>
                <p class="page-lead">Explore sanctioned architectural blueprints, zero-wastage room layouts, and balcony dimensions across 1 BHK, 2 BHK, and 3 BHK Jodi configurations.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Architectural Layouts & Unit Specifications</h2>
            <p class="section-subtitle">Every apartment at Arihant City is crafted with spacious living rooms, cross-ventilation, designated dry balconies, and high 10-foot ceiling clearances.</p>

            <div class="grid-2x">
                <div class="card" style="text-align: center;">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">1 BHK & 2 BHK Typical Master Floor Plan</h3>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 15px;">Smart spatial distribution with distinct living, dining, kitchen, and private bedroom zones.</p>
                    <img src="/images/fp1_img_1776490386.webp" alt="Arihant City 1 BHK and 2 BHK master floor plan layout diagram" width="550" height="380" style="border: 1px solid #ddd; border-radius: 6px; margin: 0 auto 15px auto;">
                    <ul style="text-align: left; font-size: 0.85rem; color: #444; margin-bottom: 15px; padding-left: 20px;">
                        <li><strong>1 BHK Carpet:</strong> ~543 sq.ft. (Living: 10x14, Bed: 10x11, Kitchen: 7x8)</li>
                        <li><strong>2 BHK Carpet:</strong> ~793 sq.ft. (Living: 11x16, Master Bed: 11x12, Bed 2: 10x11)</li>
                        <li>Generous sundeck balconies with anti-skid ceramic tiles</li>
                    </ul>
                    <button class="btn price-btn-trigger">Download High-Res PDF</button>
                </div>

                <div class="card" style="text-align: center;">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">3 BHK Jodi (1+1 Combination) Layout</h3>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 15px;">Palatial double-unit combination featuring three expansive bedrooms and dual living pavilions.</p>
                    <img src="/images/fp2_img_1776490386.webp" alt="Arihant City 3 BHK jodi luxury floor plan layout diagram" width="550" height="380" style="border: 1px solid #ddd; border-radius: 6px; margin: 0 auto 15px auto;">
                    <ul style="text-align: left; font-size: 0.85rem; color: #444; margin-bottom: 15px; padding-left: 20px;">
                        <li><strong>3 BHK Jodi Carpet:</strong> ~1,080 sq.ft. usable internal area</li>
                        <li>Three full-size bathrooms with premium sanitary fittings</li>
                        <li>Double-width living room ideal for large multi-generational families</li>
                    </ul>
                    <button class="btn price-btn-trigger">Download High-Res PDF</button>
                </div>
            </div>

            <!-- In-Content Contextual Internal Links -->
            <div class="sibling-nav-box">
                <h3>Related Arihant City Sections</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-price.html" class="sibling-chip">Arihant City Price & Cost Sheet &rarr;</a>
                    <a href="/arihant-city-configurations.html" class="sibling-chip">1 BHK vs 2 BHK Comparison &rarr;</a>
                    <a href="/arihant-city-amenities.html" class="sibling-chip">Township Amenities &rarr;</a>
                    <a href="/arihant-city-gallery.html" class="sibling-chip">Sample Flat Visual Gallery &rarr;</a>
                    <a href="/arihant-city-brochure.html" class="sibling-chip">Download Complete Brochure &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Request Floor Plan Booklet</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Download architectural floor plans, dimension sheets, and furniture placement guides for all towers.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Floor Plan Request - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <select name="config">
                        <option value="1BHK">1 BHK Luxury Layout</option>
                        <option value="2BHK">2 BHK Elite Layout</option>
                        <option value="3BHK">1+1 Jodi (3 BHK) Layout</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;">Download Layout PDF</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-floor-plans.html'), html, 'utf-8');
    console.log('Created arihant-city-floor-plans.html');
}

// 3. LOCATION PAGE
function generateLocationPage() {
    const title = "Arihant City Location – Kalyan-Bhiwandi Bypass Connectivity & Map";
    const metaDesc = "Verified location and transit connectivity for Arihant City Kalyan-Bhiwandi Bypass. 200m from upcoming Metro Line 5, 8.4 km from Kalyan Station. Schools & hospitals nearby.";
    const canonical = `${DOMAIN}/arihant-city-location.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Location, Arihant City Bhiwandi, Arihant City Kalyan Bhiwandi Road, Arihant City Connectivity, Metro Line 5 Bhiwandi, Temghar Bhiwandi property">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Location & Connectivity",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Location", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('location')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Location</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Ring Road Touch | Metro Line 5 Connectivity</span>
                <h1 class="page-h1">Arihant City Location & Infrastructure Connectivity</h1>
                <p class="page-lead">Situated directly on the prime Kalyan-Bhiwandi Bypass at Temghar, offering rapid daily transit to Thane, Kalyan, Mumbai, and Navi Mumbai.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Verified Location Distances & Commutes</h2>
            <p class="section-subtitle">Strategically positioned to combine serene township living with quick highway and public transit accessibility across the Mumbai Metropolitan Region (MMR).</p>

            <div class="grid-4x">
                <div class="card">
                    <h3 style="color: var(--primary-maroon); font-size: 1.1rem; margin-bottom: 10px;">Transit & Highway</h3>
                    <ul style="list-style: none; font-size: 0.85rem; color: #555; line-height: 1.8;">
                        <li>• <strong>Metro Line 5:</strong> ~200 m (Upcoming)</li>
                        <li>• <strong>Bhiwandi Station:</strong> ~4.5 km</li>
                        <li>• <strong>Kalyan Junction:</strong> ~8.4 km</li>
                        <li>• <strong>NH-3 (Mumbai-Nashik):</strong> ~3.0 km</li>
                        <li>• <strong>Majiwada, Thane:</strong> ~25 Mins*</li>
                    </ul>
                </div>

                <div class="card">
                    <h3 style="color: var(--primary-maroon); font-size: 1.1rem; margin-bottom: 10px;">Reputed Schools</h3>
                    <ul style="list-style: none; font-size: 0.85rem; color: #555; line-height: 1.8;">
                        <li>• <strong>Holy Cross School:</strong> ~2.0 km</li>
                        <li>• <strong>Swayam Siddhi College:</strong> ~1.5 km</li>
                        <li>• <strong>Presidency School:</strong> ~3.5 km</li>
                        <li>• <strong>Podar International:</strong> ~15 Mins*</li>
                        <li>• <strong>Birla College Kalyan:</strong> ~20 Mins*</li>
                    </ul>
                </div>

                <div class="card">
                    <h3 style="color: var(--primary-maroon); font-size: 1.1rem; margin-bottom: 10px;">Healthcare Centers</h3>
                    <ul style="list-style: none; font-size: 0.85rem; color: #555; line-height: 1.8;">
                        <li>• <strong>Life Care Hospital:</strong> ~1.8 km</li>
                        <li>• <strong>Fortis Hospital Kalyan:</strong> ~15 Mins*</li>
                        <li>• <strong>Ved Hospital:</strong> ~3.2 km</li>
                        <li>• <strong>Kalyan Multi-speciality:</strong> ~8.0 km</li>
                        <li>• <strong>Apollo Clinic Thane:</strong> ~25 Mins*</li>
                    </ul>
                </div>

                <div class="card">
                    <h3 style="color: var(--primary-maroon); font-size: 1.1rem; margin-bottom: 10px;">Retail & Shopping</h3>
                    <ul style="list-style: none; font-size: 0.85rem; color: #555; line-height: 1.8;">
                        <li>• <strong>Township Retail Arcade:</strong> On-Premises</li>
                        <li>• <strong>D-Mart Bhiwandi:</strong> ~2.5 km</li>
                        <li>• <strong>McDonald's Drive-thru:</strong> ~1.2 km</li>
                        <li>• <strong>Metro Junction Mall:</strong> ~18 Mins*</li>
                        <li>• <strong>Viviana Mall Thane:</strong> ~28 Mins*</li>
                    </ul>
                </div>
            </div>
            <p style="font-size: 0.8rem; color: #777; margin-top: 15px;">*Approximate travel times; actual duration may vary depending on time of day, route, and vehicular traffic conditions.</p>

            <div class="sibling-nav-box">
                <h3>Connect with Other Sections</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-amenities.html" class="sibling-chip">Township Lifestyle Amenities &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Price & Cost Sheet &rarr;</a>
                    <a href="/arihant-city-maharera.html" class="sibling-chip">MahaRERA Registration & Approvals &rarr;</a>
                    <a href="/arihant-city-developer.html" class="sibling-chip">About Developer Arihant Enterprises &rarr;</a>
                    <a href="/blog/metro-line-5-bhiwandi-impact.html" class="sibling-chip">Metro Line 5 In-Depth Guide &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Book a Free Site Visit</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">We provide complimentary AC cab pickup and drop-off services from Thane, Kalyan, and neighboring stations for scheduled visits.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Site Visit Booking - Location Page">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <input type="date" name="visitDate" aria-label="Preferred Visit Date">
                    <button type="submit" class="btn" style="width: 100%;">Schedule Free Cab Pickup</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-location.html'), html, 'utf-8');
    console.log('Created arihant-city-location.html');
}

// 4. AMENITIES PAGE
function generateAmenitiesPage() {
    const title = "Arihant City Amenities – 20+ Township Facilities & Clubhouse";
    const metaDesc = "Discover 20+ lifestyle amenities at Arihant City Kalyan-Bhiwandi Bypass: semi-Olympic swimming pool, gym, grand clubhouse, landscaped gardens & commercial arcade.";
    const canonical = `${DOMAIN}/arihant-city-amenities.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Amenities, Arihant City Facilities, Arihant City Clubhouse, Arihant City Swimming Pool, Arihant City Lifestyle Amenities">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Amenities & Facilities",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Amenities", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('amenities')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Amenities</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Active Grand Clubhouse | 20+ Facilities</span>
                <h1 class="page-h1">Arihant City Amenities & Clubhouse Facilities</h1>
                <p class="page-lead">Experience modern gated-community living with world-class leisure, wellness, sports, and recreational amenities designed for all family generations.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Verified Township Lifestyle Features</h2>
            <p class="section-subtitle">Every facility is integrated inside the secure perimeter of the 32-acre township, providing safe, resort-style leisure every day.</p>

            <div class="grid-3x">
                <div class="card">
                    <span style="font-size: 2.2rem;">🏊</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Semi-Olympic Swimming Pool</h3>
                    <p style="font-size: 0.9rem; color: #555;">Full-length outdoor swimming pool with clean deck seating and an adjoining shallow wading pool for children.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🏋️</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Modern Fitness Gymnasium</h3>
                    <p style="font-size: 0.9rem; color: #555;">Fully air-conditioned fitness studio equipped with cardiovascular machines, free weights, and dedicated yoga zone.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">⛳</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Grand Community Clubhouse</h3>
                    <p style="font-size: 0.9rem; color: #555;">Spacious multi-purpose banquet hall and social lounge for resident festivals, birthdays, and private gatherings.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🌳</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Landscaped Gardens</h3>
                    <p style="font-size: 0.9rem; color: #555;">Lush tree-lined walking tracks, reflexology pathways, and quiet gazebos for senior citizens and evening strolls.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🎮</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Children's Adventure Play Park</h3>
                    <p style="font-size: 0.9rem; color: #555;">Safe, rubberized outdoor playground featuring slides, swing sets, and climbing structures within a secure gated perimeter.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🛒</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">High-Street Retail Promenade</h3>
                    <p style="font-size: 0.9rem; color: #555;">On-premises daily convenience stores, pharmacies, grocery shops, and cafes catering directly to township residents.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🛡️</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">24/7 Multi-Tier Security</h3>
                    <p style="font-size: 0.9rem; color: #555;">Gated entrance booms, intercom connectivity, continuous CCTV surveillance across all lobbies, and trained security personnel.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🅿️</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Organized Covered Parking</h3>
                    <p style="font-size: 0.9rem; color: #555;">Dedicated vehicle parking spaces on ground and podium levels with broad driveways and separate visitor parking bays.</p>
                </div>

                <div class="card">
                    <span style="font-size: 2.2rem;">🔌</span>
                    <h3 style="color: var(--primary-maroon); margin: 10px 0;">Continuous Utilities & Power Backup</h3>
                    <p style="font-size: 0.9rem; color: #555;">24x7 treated water supply, rainwater harvesting system, and generator power backup for lifts, water pumps, and common illumination.</p>
                </div>
            </div>

            <div class="sibling-nav-box">
                <h3>Explore Related Township Details</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Floor Plans & Room Layouts &rarr;</a>
                    <a href="/arihant-city-gallery.html" class="sibling-chip">Township Visual Gallery &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Flat Pricing & Booking Details &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Bypass Transit & Highways &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Experience the Amenities</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Book a guided site tour to inspect the operational clubhouse, swimming pool, and completed towers.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Amenities Page Site Visit Request">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <select name="config">
                        <option value="1BHK">1 BHK Luxury</option>
                        <option value="2BHK">2 BHK Elite</option>
                        <option value="3BHK">1+1 Jodi (3 BHK)</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;">Schedule Guided Tour</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-amenities.html'), html, 'utf-8');
    console.log('Created arihant-city-amenities.html');
}

// 5. CONFIGURATIONS PAGE
function generateConfigurationsPage() {
    const title = "Arihant City Configurations – 1, 2 & 3 BHK Flat Comparison";
    const metaDesc = "Detailed configuration guide for Arihant City Kalyan-Bhiwandi Bypass. Compare carpet area, bedroom layouts, balconies, and prices between 1 BHK, 2 BHK & 3 BHK Jodi.";
    const canonical = `${DOMAIN}/arihant-city-configurations.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Configurations, Arihant City 1 BHK, Arihant City 2 BHK, Arihant City 3 BHK, Arihant City Flats, Arihant City Apartments">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Configurations & Comparison",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Configurations", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('configurations')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Configurations</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Optimal Space Planning | 1, 2 & 3 BHK</span>
                <h1 class="page-h1">Arihant City Configurations & Unit Comparison</h1>
                <p class="page-lead">Evaluate square footage, bedroom layouts, family suitability, and pricing across 1 BHK, 2 BHK, and custom 1+1 Jodi apartments.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Detailed Unit Comparison Matrix</h2>
            <p class="section-subtitle">Choose the residence that matches your family lifestyle, future expansion needs, and investment budget.</p>

            <div class="grid-3x">
                <div class="card">
                    <div style="background: var(--light-maroon); padding: 6px 12px; border-radius: 4px; display: inline-block; font-weight: bold; color: var(--primary-maroon); font-size: 0.8rem; margin-bottom: 12px;">FIRST-TIME BUYERS</div>
                    <h3 style="color: var(--primary-maroon); font-size: 1.3rem; margin-bottom: 8px;">1 BHK Luxury Residence</h3>
                    <p style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 12px;">543 Sq.Ft. Carpet</p>
                    <ul style="font-size: 0.85rem; color: #555; line-height: 1.8; margin-bottom: 15px; list-style: none;">
                        <li>✓ <strong>Starting Price:</strong> ₹35 Lakhs* onwards</li>
                        <li>✓ <strong>Ceiling Height:</strong> 10 Feet</li>
                        <li>✓ <strong>Balcony:</strong> Attached Living Room Sundeck</li>
                        <li>✓ <strong>Bathrooms:</strong> 1 Master + 1 Powder Room</li>
                        <li>✓ <strong>Best For:</strong> Singles, young couples, and investors targeting high rental yields near logistics hubs.</li>
                    </ul>
                    <a href="/arihant-city-price.html" class="btn" style="width: 100%; text-align: center;">View 1 BHK Price</a>
                </div>

                <div class="card" style="border: 2px solid var(--accent-gold);">
                    <div style="background: var(--accent-gold); color: #fff; padding: 6px 12px; border-radius: 4px; display: inline-block; font-weight: bold; font-size: 0.8rem; margin-bottom: 12px;">MOST POPULAR CHOICE</div>
                    <h3 style="color: var(--primary-maroon); font-size: 1.3rem; margin-bottom: 8px;">2 BHK Elite Residence</h3>
                    <p style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 12px;">793 Sq.Ft. Carpet</p>
                    <ul style="font-size: 0.85rem; color: #555; line-height: 1.8; margin-bottom: 15px; list-style: none;">
                        <li>✓ <strong>Starting Price:</strong> ₹52 Lakhs* onwards</li>
                        <li>✓ <strong>Ceiling Height:</strong> 10 Feet</li>
                        <li>✓ <strong>Balcony:</strong> Dual Balconies (Living + Bedroom)</li>
                        <li>✓ <strong>Bathrooms:</strong> 2 Full Bathrooms with Master En-suite</li>
                        <li>✓ <strong>Best For:</strong> Nuclear families desiring private bedrooms, home office flexibility, and long-term comfort.</li>
                    </ul>
                    <a href="/arihant-city-price.html" class="btn btn-gold" style="width: 100%; text-align: center;">View 2 BHK Price</a>
                </div>

                <div class="card">
                    <div style="background: var(--light-maroon); padding: 6px 12px; border-radius: 4px; display: inline-block; font-weight: bold; color: var(--primary-maroon); font-size: 0.8rem; margin-bottom: 12px;">MAXIMUM LUXURY</div>
                    <h3 style="color: var(--primary-maroon); font-size: 1.3rem; margin-bottom: 8px;">1+1 Jodi (3 BHK) Residence</h3>
                    <p style="font-size: 1.1rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 12px;">1,080 Sq.Ft. Carpet</p>
                    <ul style="font-size: 0.85rem; color: #555; line-height: 1.8; margin-bottom: 15px; list-style: none;">
                        <li>✓ <strong>Starting Price:</strong> Price on Request</li>
                        <li>✓ <strong>Ceiling Height:</strong> 10 Feet</li>
                        <li>✓ <strong>Balcony:</strong> Multi-aspect Sundecks</li>
                        <li>✓ <strong>Bathrooms:</strong> 3 Bathrooms</li>
                        <li>✓ <strong>Best For:</strong> Joint families or executives seeking expansive luxury space without Mumbai city prices.</li>
                    </ul>
                    <a href="/arihant-city-price.html" class="btn" style="width: 100%; text-align: center;">View Jodi Price</a>
                </div>
            </div>

            <div class="sibling-nav-box">
                <h3>Related Information</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Examine Detailed Floor Plans &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Verified Cost Sheet & EMI Calculator &rarr;</a>
                    <a href="/arihant-city-maharera.html" class="sibling-chip">MahaRERA Certifications &rarr;</a>
                    <a href="/arihant-city-brochure.html" class="sibling-chip">Download Project Brochure &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Select Your Configuration</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Register to receive specific floor plans, sample flat video walkthroughs, and available unit numbers.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Configuration Enquiry - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <select name="config">
                        <option value="1BHK">1 BHK Luxury (543 sq.ft.)</option>
                        <option value="2BHK">2 BHK Elite (793 sq.ft.)</option>
                        <option value="3BHK">1+1 Jodi (1080 sq.ft.)</option>
                    </select>
                    <button type="submit" class="btn" style="width: 100%;">Check Available Units</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-configurations.html'), html, 'utf-8');
    console.log('Created arihant-city-configurations.html');
}

// 6. MAHARERA PAGE
function generateMahaRERAPage() {
    const title = "Arihant City MahaRERA – Official Registration Numbers & Compliance";
    const metaDesc = "Verified MahaRERA registration numbers for Arihant City Kalyan-Bhiwandi: Phase-I P51700010884, D3 Tower P51700022743, Phase-II P51700028429. Clear title & OC status.";
    const canonical = `${DOMAIN}/arihant-city-maharera.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City MahaRERA, Arihant City RERA, Arihant City RERA Number, Arihant City registration, P51700010884, P51700022743, P51700028429">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City MahaRERA Compliance",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "MahaRERA", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('maharera')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>MahaRERA</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">100% Legal Clearance | Bank Approved</span>
                <h1 class="page-h1">Arihant City MahaRERA Registration & Approvals</h1>
                <p class="page-lead">Official MahaRERA registration details, sanctioned tower certificates, and title clearance information for transparent and risk-free homebuying.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Official Phase-wise MahaRERA Numbers</h2>
            <p class="section-subtitle">Every phase and high-rise tower at Arihant City is registered with Maharashtra Real Estate Regulatory Authority (MahaRERA). Details can be independently verified on the government portal.</p>

            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Phase / Tower Name</th>
                            <th>MahaRERA Registration Number</th>
                            <th>Status & Possession</th>
                            <th>Verification Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Arihant City Phase-I</strong></td>
                            <td><strong style="color: var(--primary-maroon);">P51700010884</strong></td>
                            <td>Occupancy Certificate (OC) Received</td>
                            <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: bold;">Verify on MahaRERA &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><strong>D3 Signature Tower (26-Storey)</strong></td>
                            <td><strong style="color: var(--primary-maroon);">P51700022743</strong></td>
                            <td>Active Construction Stage</td>
                            <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: bold;">Verify on MahaRERA &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><strong>Arihant City Phase-II</strong></td>
                            <td><strong style="color: var(--primary-maroon);">P51700028429, P51700028441, P51700044483</strong></td>
                            <td>Ongoing Phases & Possession Handover</td>
                            <td><a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: bold;">Verify on MahaRERA &rarr;</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="grid-2x" style="margin-top: 35px;">
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 12px;">Occupancy Certificate (OC) Benefit</h3>
                    <p style="font-size: 0.9rem; color: #555; line-height: 1.7;">
                        In completed wings of Phase I and Phase II, over 1,200 families already reside with full municipal occupancy clearances. For buyers selecting ready-possession inventory, this provides two major advantages: zero waiting time for handover and zero GST tax liability on the transaction value.
                    </p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 12px;">Bank Title Approvals</h3>
                    <p style="font-size: 0.9rem; color: #555; line-height: 1.7;">
                        Legal title clearance and project approvals have been granted by top nationalized and private financial institutions, including State Bank of India (SBI), HDFC Bank, ICICI Bank, and Bank of Baroda. Buyers can access direct APF (Approved Project Financial) loan sanctioning.
                    </p>
                </div>
            </div>

            <div class="sibling-nav-box">
                <h3>Related Verification Resources</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-developer.html" class="sibling-chip">Arihant Enterprises Developer Profile &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Pricing & Payment Milestones &rarr;</a>
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Sanctioned Floor Plans &rarr;</a>
                    <a href="/blog/home-loan-and-maharera-guide-bhiwandi.html" class="sibling-chip">MahaRERA Buyer Rights Guide &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Request RERA Documents</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Download official MahaRERA certificates, title search reports, and approved building layout blueprints.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="MahaRERA Document Request">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <button type="submit" class="btn" style="width: 100%;">Email Me RERA Certificates</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-maharera.html'), html, 'utf-8');
    console.log('Created arihant-city-maharera.html');
}

// 7. DEVELOPER PAGE
function generateDeveloperPage() {
    const title = "Arihant City Developer – Arihant Enterprises & Promoter Profile";
    const metaDesc = "About Arihant Enterprises: developer of Arihant City 32-acre township on Kalyan-Bhiwandi Bypass. Track record, vision, construction quality & channel partner advisory.";
    const canonical = `${DOMAIN}/arihant-city-developer.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Developer, Arihant Enterprises, Arihant Group Bhiwandi, Arihant City Promoter, real estate developer Bhiwandi">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/story_img_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Developer Profile",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Developer", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('developer')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Developer</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Proven Track Record | 1,200+ Residing Families</span>
                <h1 class="page-h1">Arihant City Developer & Promoter Profile</h1>
                <p class="page-lead">Discover the vision, legacy, and architectural commitment behind Arihant Enterprises—the master developer shaping modern residential townships in Bhiwandi.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">About Arihant Enterprises & Township Vision</h2>
            <p class="section-subtitle">Pioneering integrated township living that balances high-rise residences with self-sustaining community facilities along the Kalyan-Bhiwandi growth corridor.</p>

            <div class="grid-2x" style="align-items: center;">
                <div>
                    <h3 style="color: var(--primary-maroon); font-size: 1.4rem; margin-bottom: 15px;">Transforming Bhiwandi's Residential Landscape</h3>
                    <p style="font-size: 0.95rem; color: #444; line-height: 1.8; margin-bottom: 15px;">
                        <strong>Arihant Enterprises (Arihant Group)</strong> has been a cornerstone in transforming Bhiwandi from a traditional trading corridor into a flourishing residential suburban destination in the Mumbai Metropolitan Region (MMR). With <strong>Arihant City</strong>, the developer envisioned a 32-acre integrated township combining residential high-rises, expansive landscaped green belts, and road-front commercial retail avenues.
                    </p>
                    <p style="font-size: 0.95rem; color: #444; line-height: 1.8;">
                        Over 1,200 families have already received possession across earlier phases, making Arihant City a vibrant, living community with operational community facilities, active sports clubs, and round-the-clock security infrastructure.
                    </p>
                </div>
                <div>
                    <img src="/images/story_img_1777043167.webp" alt="Arihant Enterprises developer construction legacy" width="600" height="380" style="border: 4px solid #fff; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                </div>
            </div>

            <!-- E-E-A-T Transparency Box -->
            <div class="card" style="margin-top: 40px; background: #fffdfa; border-left: 5px solid var(--accent-gold);">
                <h3 style="color: var(--primary-maroon); font-size: 1.2rem; margin-bottom: 10px;">Clear Operational Demarcation & E-E-A-T Disclosure</h3>
                <p style="font-size: 0.9rem; color: #555; line-height: 1.7;">
                    <strong>Developer Entity:</strong> Arihant Enterprises / Arihant Group is the legal developer and promoter responsible for construction, MahaRERA filings, and project execution.<br>
                    <strong>Website Operator & Channel Partner:</strong> This website is operated by an Authorized Channel Partner (Marketing & Sales Advisory desk) providing property seekers with verified pricing sheets, guided site visits, and booking assistance. It is an informational property portal dedicated to assisting homebuyers with direct developer inventory.
                </p>
            </div>

            <div class="sibling-nav-box">
                <h3>Explore Related Project Information</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-maharera.html" class="sibling-chip">MahaRERA Certifications & RERA Numbers &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Current Pricing & Cost Sheet &rarr;</a>
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Floor Plans & Configurations &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Location & Infrastructure Roadmap &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Contact Sales Advisory Desk</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Connect directly with authorized sales managers for developer offers, priority allotment, and site tours.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Developer Page Sales Enquiry">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <button type="submit" class="btn" style="width: 100%;">Connect with Sales Advisory</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-developer.html'), html, 'utf-8');
    console.log('Created arihant-city-developer.html');
}

// 8. BROCHURE PAGE
function generateBrochurePage() {
    const title = "Arihant City Brochure – Download Official Project PDF & Master Plan";
    const metaDesc = "Download official brochure PDF for Arihant City Kalyan-Bhiwandi Bypass. Includes master layout, floor plans, amenity directory, location map & payment milestones.";
    const canonical = `${DOMAIN}/arihant-city-brochure.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Brochure, Arihant City Brochure PDF, Arihant City Project Brochure, Arihant City Floor Plan Brochure, download Arihant City brochure">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Brochure Download",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Brochure", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('brochure')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Brochure</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Official E-Brochure | Master Layout Kit</span>
                <h1 class="page-h1">Arihant City Project Brochure & Downloadable Kit</h1>
                <p class="page-lead">Access the full 32-acre township master plan, architectural specifications, tower elevations, and floor plan dimensions in high-resolution PDF format.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">What is Included in the Project Brochure?</h2>
            <p class="section-subtitle">The official project e-kit contains complete verified technical and lifestyle details for prospective homeowners and property investors.</p>

            <div class="grid-3x">
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">Township Master Layout</h3>
                    <p style="font-size: 0.9rem; color: #555;">Comprehensive aerial site plan showing tower locations, internal 40-foot arterial roads, podium recreation spaces, and commercial retail entry points.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">Architectural Floor Blueprints</h3>
                    <p style="font-size: 0.9rem; color: #555;">Accurate RERA carpet area measurements, wall thicknesses, balcony sundeck extensions, and room layouts for 1 BHK, 2 BHK, and custom 1+1 Jodi residences.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">Amenities & Clubhouse Catalog</h3>
                    <p style="font-size: 0.9rem; color: #555;">Detailed catalog of the 20+ lifestyle facilities including swimming pool specifications, gym equipment list, banquet hall capacity, and garden layouts.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">Location & Transit Roadmap</h3>
                    <p style="font-size: 0.9rem; color: #555;">In-depth connectivity roadmap detailing distances to upcoming Metro Line 5 station (200m), Kalyan Junction, schools, hospitals, and highway exits.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">Construction Specifications</h3>
                    <p style="font-size: 0.9rem; color: #555;">Earthquake-resistant RCC framed structure details, vitrified tile flooring, premium electrical modular switches, and high-quality sanitary fixtures.</p>
                </div>
                <div class="card">
                    <h3 style="color: var(--primary-maroon); margin-bottom: 10px;">MahaRERA Certifications</h3>
                    <p style="font-size: 0.9rem; color: #555;">Copies of phase-wise MahaRERA registration certificates, bank APF approvals, and legal title search clearance documents.</p>
                </div>
            </div>

            <div class="sibling-nav-box">
                <h3>Explore Supporting Sitelink Pages</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-price.html" class="sibling-chip">Detailed Cost Sheet & Pricing &rarr;</a>
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">View Floor Plans Online &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Location & Commute Details &rarr;</a>
                    <a href="/arihant-city-amenities.html" class="sibling-chip">20+ Township Amenities &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Download Official Brochure PDF</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Enter your mobile number to receive the instant download link directly on WhatsApp and email.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Brochure Download Request - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number (WhatsApp)" required>
                    <button type="submit" class="btn" style="width: 100%;">Download Brochure PDF Now</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-brochure.html'), html, 'utf-8');
    console.log('Created arihant-city-brochure.html');
}

// 9. GALLERY PAGE
function generateGalleryPage() {
    const title = "Arihant City Gallery – Project Photos, Sample Flats & Actual Views";
    const metaDesc = "View actual photos of Arihant City Kalyan-Bhiwandi: completed high-rise towers, sample flat living room interiors, amenities, and 32-acre aerial master layout.";
    const canonical = `${DOMAIN}/arihant-city-gallery.html`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City Gallery, Arihant City Photos, Arihant City Images, Arihant City Sample Flat, Arihant City actual site photos">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/gal1_img_1777043382.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Arihant City Visual Gallery",
      "url": "${canonical}",
      "description": "${metaDesc}",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
          { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "${canonical}" }
        ]
      }
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('gallery')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>Gallery</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Live Visual Tour | Actual Site Status</span>
                <h1 class="page-h1">Arihant City Visual Gallery & Actual Site Views</h1>
                <p class="page-lead">Inspect completed high-rise towers, designer sample flat interiors, landscaped amenities, and aerial views of the 32-acre master township.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Actual Project Imagery & Model Flats</h2>
            <p class="section-subtitle">Take a visual tour of the real lifestyle at Arihant City Downtown, where over 1,200 families reside comfortably.</p>

            <div class="grid-2x">
                <div class="card" style="text-align: center;">
                    <img src="/images/gal1_img_1777043382.webp" alt="Arihant City completed high-rise residential towers and construction progress" width="550" height="380" style="border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem;">Completed Residential Towers</h3>
                    <p style="font-size: 0.85rem; color: #555;">Modern multi-storey elevation featuring expansive balcony glasses, podium recreation decks, and wide internal avenues.</p>
                </div>

                <div class="card" style="text-align: center;">
                    <img src="/images/gal2_img_1777043382.webp" alt="Arihant City sample show flat designer living room interior decor" width="550" height="380" style="border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem;">Sample Flat Living Room</h3>
                    <p style="font-size: 0.85rem; color: #555;">Actual view of the designer show residence showcasing 10-foot ceiling height, generous natural lighting, and cross-ventilation.</p>
                </div>

                <div class="card" style="text-align: center;">
                    <img src="/images/hero_banner_1777043167.webp" alt="Arihant City Kalyan Bhiwandi 32-acre aerial township layout view" width="550" height="300" style="border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem;">32-Acre Master Township Aerial</h3>
                    <p style="font-size: 0.85rem; color: #555;">Expansive integrated development directly abutting the Kalyan-Bhiwandi Bypass road network.</p>
                </div>

                <div class="card" style="text-align: center;">
                    <img src="/images/story_img_1777043167.webp" alt="Arihant Enterprises developer construction heritage" width="550" height="300" style="border-radius: 6px; margin-bottom: 12px;">
                    <h3 style="color: var(--primary-maroon); font-size: 1.15rem;">Township Community & Landscaping</h3>
                    <p style="font-size: 0.85rem; color: #555;">Gated perimeter featuring green gardens, recreational areas, and active grand community clubhouse.</p>
                </div>
            </div>

            <div class="sibling-nav-box">
                <h3>Explore Supporting Information</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Floor Plans & Room Layouts &rarr;</a>
                    <a href="/arihant-city-amenities.html" class="sibling-chip">Township Lifestyle Amenities &rarr;</a>
                    <a href="/arihant-city-price.html" class="sibling-chip">Verified Price List &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Location & Map &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Experience the Site in Person</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Photos can only show so much. Schedule an on-site walkthrough to inspect the actual show flat and ongoing construction.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Gallery Page Site Visit Request">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <button type="submit" class="btn" style="width: 100%;">Book Actual Site Walkthrough</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-gallery.html'), html, 'utf-8');
    console.log('Created arihant-city-gallery.html');
}

// 10. FAQS PAGE
function generateFAQsPage() {
    const title = "Arihant City FAQs – Verified Answers on Price, RERA & Location";
    const metaDesc = "Verified answers to 15+ frequently asked questions about Arihant City Kalyan-Bhiwandi: pricing, floor plans, MahaRERA numbers, bank loans, possession & site visits.";
    const canonical = `${DOMAIN}/arihant-city-faqs.html`;

    const faqs = [
        {
            q: "What is Arihant City?",
            a: "Arihant City is a master-planned 32-acre integrated residential township located directly on the Kalyan-Bhiwandi Bypass in Temghar, Bhiwandi. It offers luxury 1 BHK, 2 BHK, and custom 3 BHK Jodi apartments across multiple high-rise towers including the 26-storey D3 Signature Tower, supported by 20+ world-class lifestyle amenities."
        },
        {
            q: "Where is Arihant City located in Bhiwandi?",
            a: "Arihant City is situated on the Kalyan-Bhiwandi Bypass Road near Sai Baba Temple, Temghar, Bhiwandi, Maharashtra 421302. Its geographic coordinates are 19.278547 N, 73.071854 E."
        },
        {
            q: "Who is the developer of Arihant City?",
            a: "Arihant City is developed by Arihant Enterprises (part of the Arihant Group), a leading real estate promoter in the Thane and Bhiwandi regions. The sales and marketing advisory desk on this website is operated by an Authorized Channel Partner."
        },
        {
            q: "Is Arihant City MahaRERA approved? What are the registration numbers?",
            a: "Yes, Arihant City is 100% registered with MahaRERA. The official registration numbers include Phase-I: P51700010884, D3 Signature Tower: P51700022743, and Phase-II: P51700028429, P51700028441, P51700044483, P51700010350. Details can be verified on maharerait.mahaonline.gov.in."
        },
        {
            q: "What configurations and carpet areas are available at Arihant City?",
            a: "Arihant City offers 1 BHK Luxury residences (~543 sq.ft. carpet), 2 BHK Elite residences (~793 sq.ft. carpet), and 1+1 Jodi (3 BHK) units (~1,080 sq.ft. carpet). Commercial retail shopfronts are also available on the ground level facing the bypass."
        },
        {
            q: "What is the starting price for flats in Arihant City?",
            a: "Starting prices for 1 BHK luxury residences begin at ₹35 Lakhs* onwards, while 2 BHK elite flats start at ₹52 Lakhs* onwards. Commercial units and custom Jodi residences are quoted on request based on carpet area."
        },
        {
            q: "Are ready-to-move flats available with Occupancy Certificate (OC)?",
            a: "Yes, completed wings in Phase I and Phase II have received their Occupancy Certificate (OC), with more than 1,200 families already residing comfortably. Ready-possession inventory carries the significant financial benefit of 0% GST."
        },
        {
            q: "What lifestyle amenities are available in the township?",
            a: "The township features over 20 lifestyle amenities, including a semi-Olympic swimming pool, an air-conditioned gymnasium and yoga studio, grand community clubhouse, landscaped gardens, children's play arena, high-street retail shops, multi-tier 24x7 security with CCTV, and generator power backup."
        },
        {
            q: "How far is the upcoming Metro Line 5 station from Arihant City?",
            a: "The upcoming Metro Line 5 (Thane-Bhiwandi-Kalyan) station is located approximately 200 meters from the main entrance of Arihant City, providing seamless connectivity to Thane and Kalyan once operational."
        },
        {
            q: "How is road and rail connectivity from Arihant City?",
            a: "Arihant City touches the 8-lane Kalyan-Bhiwandi Bypass. Kalyan Railway Junction is approximately 8.4 km (15-20 minutes away), Bhiwandi Road Railway Station is 4.5 km away, and the Mumbai-Nashik Expressway (NH-3) is only 3.0 km away."
        },
        {
            q: "Which banks have approved home loans for Arihant City?",
            a: "The project has received APF approval from leading financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Bank of Baroda, and Axis Bank. Homebuyers can access competitive interest rates and loan tenures up to 30 years."
        },
        {
            q: "What is the ceiling height in Arihant City flats?",
            a: "Apartments at Arihant City feature a generous ceiling height of 10 feet, providing superior air circulation, abundant natural light, and an open, spacious living experience."
        },
        {
            q: "How can I download the official brochure and floor plans?",
            a: "You can download the comprehensive project brochure, master plan, and high-resolution floor plans directly by visiting the Arihant City Brochure page or registering your contact details on the website."
        },
        {
            q: "Is there a complimentary site visit facility available?",
            a: "Yes, we provide complimentary air-conditioned cab pickup and drop-off services from Thane, Kalyan, and neighboring stations for scheduled site visits. You can register via the contact form or call +91 90282 59563."
        },
        {
            q: "How can I book a flat at Arihant City?",
            a: "You can initiate the booking process by visiting the sales office or submitting an enquiry on this website. Our advisory desk will assist you with unit selection, cost breakdown, loan documentation, and official registration."
        }
    ];

    const faqSchemaItems = faqs.map(f => `        {
          "@type": "Question",
          "name": "${f.q.replace(/"/g, '\\"')}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${f.a.replace(/"/g, '\\"')}"
          }
        }`).join(',\n');

    const faqHtmlItems = faqs.map(f => `                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>${f.q}</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">${f.a}</div>
                </div>`).join('\n');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18139553356"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18139553356');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${metaDesc}">
    <meta name="keywords" content="Arihant City FAQs, Arihant City questions, Arihant City price FAQ, Arihant City RERA FAQ, Arihant City location questions">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="icon" href="/images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DOMAIN}/images/hero_banner_1777043167.webp">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
${faqSchemaItems}
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 2, "name": "Arihant City", "item": "${DOMAIN}/" },
        { "@type": "ListItem", "position": 3, "name": "FAQs", "item": "${canonical}" }
      ]
    }
    </script>
    ${getSharedStyles()}
</head>
<body>
    ${getHeader('faqs')}

    <div class="breadcrumbs-bar">
        <div class="container">
            <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Arihant City</a></li>
                <li><span>FAQs</span></li>
            </ol>
        </div>
    </div>

    <main>
        <div class="page-hero">
            <div class="container">
                <span class="hero-badge">Verified Answers | Homebuyer Guide</span>
                <h1 class="page-h1">Arihant City Frequently Asked Questions (FAQs)</h1>
                <p class="page-lead">Immediate, factual answers regarding pricing, floor plans, MahaRERA registrations, possession timelines, connectivity, and booking procedures.</p>
            </div>
        </div>

        <section class="section-padding container">
            <h2 class="section-title">Common Questions & Authoritative Answers</h2>
            <p class="section-subtitle">Click on any question below to view detailed, verified answers.</p>

            <div class="faq-accordion">
${faqHtmlItems}
            </div>

            <div class="sibling-nav-box">
                <h3>Still Have Questions? Explore In-Depth Guides</h3>
                <div class="sibling-links">
                    <a href="/arihant-city-price.html" class="sibling-chip">Price & Cost Sheet &rarr;</a>
                    <a href="/arihant-city-floor-plans.html" class="sibling-chip">Floor Plans & Dimensions &rarr;</a>
                    <a href="/arihant-city-maharera.html" class="sibling-chip">MahaRERA Certifications &rarr;</a>
                    <a href="/arihant-city-location.html" class="sibling-chip">Location & Map &rarr;</a>
                    <a href="/arihant-city-developer.html" class="sibling-chip">About Arihant Enterprises &rarr;</a>
                    <a href="/blog.html" class="sibling-chip">Read Real Estate Insights &rarr;</a>
                </div>
            </div>
        </section>

        <!-- Booking Form & Map -->
        <section id="contact" class="contact-section">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.432549557431!2d73.0718536!3d19.2785465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9114660073%3A0x673010b91d2c679a!2sArihant%20City%20Bhiwandi!5e0!3m2!1sen!2sin!4v1776843928830!5m2!1sen!2sin" loading="lazy" aria-label="Arihant City Map"></iframe>
            </div>
            <div class="form-container">
                <h2 style="color: var(--primary-maroon); font-size: 1.6rem; margin-bottom: 10px;">Have an Unanswered Question?</h2>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 20px;">Speak directly with an authorized sales consultant for specific unit allocations and payment terms.</p>
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Custom FAQ Question - Arihant City">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" required>
                    <textarea name="question" rows="3" placeholder="Enter your question..."></textarea>
                    <button type="submit" class="btn" style="width: 100%;">Submit Question</button>
                </form>
            </div>
        </section>
    </main>

    ${getFooter()}
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, 'arihant-city-faqs.html'), html, 'utf-8');
    console.log('Created arihant-city-faqs.html');
}

// Generate all 10 pages
generatePricePage();
generateFloorPlansPage();
generateLocationPage();
generateAmenitiesPage();
generateConfigurationsPage();
generateMahaRERAPage();
generateDeveloperPage();
generateBrochurePage();
generateGalleryPage();
generateFAQsPage();

console.log('Successfully created all 10 Sitelink candidate pages!');
