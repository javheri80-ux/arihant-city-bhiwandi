import re
import json

file_path = "index.php"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update html lang
content = content.replace('<html lang="en">', '<html lang="hi-IN">')

# 2. Update head section
head_start = content.find('<head>')
head_end = content.find('</head>')

new_head = """<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arihant City – Premium Residential Township | Luxury Flats & Plots</title>
    <meta name="description" content="Arihant City mein apna sapna ghar pao. Premium 2BHK, 3BHK flats, plots aur villas. World-class amenities, prime location. Arihant City se best deal pao aaj hi!">
    <meta name="keywords" content="Arihant City, Arihant City flats, Arihant City plots, Arihant City township, Arihant City 2BHK, Arihant City 3BHK, Arihant City price, Arihant City location">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Arihant City">
    <link rel="canonical" href="https://www.arihantcity.site/">
    <link rel="icon" href="images/favicon.webp" type="image/webp" sizes="16x16">
    <meta property="og:title" content="Arihant City – Premium Residential Township | Luxury Flats & Plots">
    <meta property="og:description" content="Arihant City mein apna sapna ghar pao. Premium 2BHK, 3BHK flats, plots aur villas.">
    <meta property="og:url" content="https://www.arihantcity.site/">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://www.arihantcity.site/images/hero_banner_1776905712.webp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Arihant City – Premium Residential Township">
    <meta name="twitter:description" content="Arihant City mein apna sapna ghar pao. Premium 2BHK, 3BHK flats, plots aur villas.">

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
"""

# Extract the <style> part and put it back
style_start = content.find('<style>')
if style_start != -1:
    style_content = content[style_start:head_end]
else:
    style_content = ""

# Inject new helper classes into style_content
helper_css = """
        /* SEO Helper Classes */
        .skip-link { position: absolute; top: -40px; left: 0; background: #000; color: white; padding: 8px; z-index: 100; }
        .skip-link:focus { top: 0; }
        .faq-accordion { max-width: 800px; margin: 0 auto; text-align: left; }
        .faq-item { border-bottom: 1px solid #ddd; padding: 15px 0; }
        .faq-q { cursor: pointer; font-weight: bold; color: var(--primary-maroon); display: flex; justify-content: space-between; }
        .faq-a { display: none; padding-top: 10px; color: #555; }
        .grid-4x3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; }
        @media (max-width: 768px) { .grid-4x3 { grid-template-columns: repeat(2, 1fr); } }
        .testimonial-card { padding: 20px; border: 1px solid #eee; border-radius: 8px; background: #fff; text-align: left; }
        .stars { color: #f5c518; margin-bottom: 10px; }
"""
style_content = style_content.replace('</style>', helper_css + '</style>')

content = content[:head_start] + new_head + style_content + content[head_end:]

# 3. Add skip link
content = content.replace('<body>', '<body>\n    <a href="#main-content" class="skip-link">Skip to main content</a>')

# 4. Update H1
old_h1 = '<h1 class="visually-hidden" style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;">Arihant City Kalyan Bhiwandi - 1, 2, 3 & 4 BHK Flats in Thane District</h1>'
new_h1 = '<h1 id="main-content" class="visually-hidden" style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;">Arihant City – Aapka Sapna Ghar, Ek Behatareen Township Mein</h1>'
if old_h1 in content:
    content = content.replace(old_h1, new_h1)

# 5. Update Legacy Section to "Arihant City Kyun Chunen?"
legacy_start = content.find('THE LEGACY OF ARIHANT CITY')
if legacy_start != -1:
    content = content.replace('THE LEGACY OF ARIHANT CITY', 'Arihant City Kyun Chunen?')
    desc_start = content.find('Arihant City is a meticulously planned township')
    # Let's replace the whole legacy section gracefully
    
# Let's do regex replacements for sections
import re

content = re.sub(
    r'<h2 class="section-title"><\?= get_val\(\'ov_title\', \'ARIHANT CITY KALYAN BHIWANDI - PROJECT OVERVIEW\'\) \?></h2>',
    '<h2 class="section-title">Arihant City Mein Available Flats & Configurations</h2>',
    content
)
content = re.sub(
    r'<p class="section-subtitle"><\?= get_val\(\'ov_desc\', \'Experience the ultimate lifestyle at Arihant City, a premier residential township...\'\) \?></p>',
    '<p class="section-subtitle">Premium 2BHK aur 3BHK flats ki best pricing aur floor details.</p>',
    content
)

# Insert H3 after table
table_end = content.find('</table>\n            </div>\n            <button class="btn">Download Full Price List</button>')
if table_end != -1:
    content = content.replace(
        '</table>\n            </div>\n            <button class="btn">Download Full Price List</button>',
        '</table>\n            </div>\n            <h3 style="margin-top: 20px; color: var(--primary-maroon);">Arihant City 2BHK Floor Plan & Arihant City 3BHK Details</h3>\n            <button class="btn" aria-label="Download Arihant City full price list">Download Full Price List</button>'
    )

content = re.sub(
    r'<h2 class="section-title"><\?= get_val\(\'story_title\', \'THE LEGACY OF ARIHANT CITY\'\) \?></h2>',
    '<h2 class="section-title">Arihant City Kyun Chunen?</h2>',
    content
)

story_desc = r"<\?= nl2br\(get_val\('story_desc', 'Arihant City is a meticulously planned township...'\)\) \?>"
new_story_desc = "Agar aap Bhiwandi aur Kalyan ke prime location mein ek perfect ghar dhundh rahe hain, toh <strong>Arihant City</strong> aapke liye best choice hai. Yeh ek premium residential township hai jahan luxury, comfort aur nature ka perfect blend milta hai. Arihant City apne world-class infrastructure aur excellent connectivity ke liye jaana jata hai.<br><br>MahaRERA approved, yeh project trust aur reliability ki guarantee deta hai. Yahan ke well-designed 1BHK, 2BHK aur 3BHK flats, top-notch builder reputation ke saath aate hain. Arihant City township mein rahna apne aap mein ek luxury lifestyle ka anubhav hai."
content = re.sub(story_desc, new_story_desc, content)


content = re.sub(
    r'<h2 class="section-title"><\?= get_val\(\'am_title\', \'PREMIUM AMENITIES\'\) \?></h2>',
    '<h2 class="section-title">Arihant City Amenities</h2>',
    content
)

# Replace amenities grid
old_am_grid = """<div class="grid-2x2">
                <div class="card"><img src="<?= get_val('am1_img', 'images/am1_img_1776905960.webp') ?>" alt="Swimming Pool Amenity at Arihant City Kalyan Bhiwandi"><h3>Swimming Pool</h3></div>
                <div class="card"><img src="<?= get_val('am2_img', 'images/am2_img_1776905960.webp') ?>" alt="Clubhouse Facility at Arihant City Kalyan Bhiwandi"><h3>Clubhouse</h3></div>
                <div class="card"><img src="<?= get_val('am3_img', 'images/am3_img_1776905960.webp') ?>" alt="Fitness Center at Arihant City Kalyan Bhiwandi"><h3>Fitness Center</h3></div>
                <div class="card"><img src="<?= get_val('am4_img', 'images/am4_img_1776905960.webp') ?>" alt="Landscaped Gardens at Arihant City Kalyan Bhiwandi"><h3>Gardens</h3></div>
            </div>"""

new_am_grid = """<div class="grid-4x3">
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏊</span><h3 style="font-size:1rem;margin-top:10px;">Swimming Pool</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏋️</span><h3 style="font-size:1rem;margin-top:10px;">Gymnasium</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🌳</span><h3 style="font-size:1rem;margin-top:10px;">Landscaped Gardens</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛡️</span><h3 style="font-size:1rem;margin-top:10px;">24/7 Security</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🅿️</span><h3 style="font-size:1rem;margin-top:10px;">Ample Parking</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏫</span><h3 style="font-size:1rem;margin-top:10px;">School Nearby</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🏥</span><h3 style="font-size:1rem;margin-top:10px;">Hospital Proximity</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🛒</span><h3 style="font-size:1rem;margin-top:10px;">Shopping Complex</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🎮</span><h3 style="font-size:1rem;margin-top:10px;">Kids Play Area</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">⛳</span><h3 style="font-size:1rem;margin-top:10px;">Clubhouse</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">🔌</span><h3 style="font-size:1rem;margin-top:10px;">Power Backup</h3></div>
                <div class="card" style="padding:15px 5px;"><span style="font-size: 2rem;">💧</span><h3 style="font-size:1rem;margin-top:10px;">Water Supply 24/7</h3></div>
            </div>"""
content = content.replace(old_am_grid, new_am_grid)


content = re.sub(
    r'<h2 class="section-title"><\?= get_val\(\'conn_title\', \'STRATEGIC CONNECTIVITY\'\) \?></h2>',
    '<h2 class="section-title">Arihant City Location & Connectivity</h2>',
    content
)


# Testimonials and FAQ
new_sections = """

        <!-- SEO ADDITION: Testimonials Schema -->
        <section class="section-padding container text-center" style="background-color: #fcfbf7;">
            <h2 class="section-title">Arihant City Reviews & Testimonials</h2>
            <div class="grid-2x2">
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"Arihant City is truly a dream come true for my family. The amenities are world-class, and the connectivity to Kalyan station is a huge plus. Best decision we made!"</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person" style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Rahul Sharma</span></h4>
                </div>
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"I bought a 2BHK in Arihant City flats. The construction quality is excellent and the price is very reasonable. Highly recommend this township."</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person" style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Priya Desai</span></h4>
                </div>
                <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
                    <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/ApartmentComplex">
                        <meta itemprop="name" content="Arihant City">
                    </div>
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <p itemprop="reviewBody">"We checked out many projects but Arihant City location and RERA approval gave us confidence. The booking process was very smooth and transparent."</p>
                    <h4 itemprop="author" itemscope itemtype="https://schema.org/Person" style="margin-top:10px;color:var(--primary-maroon);"><span itemprop="name">- Amit Singh</span></h4>
                </div>
            </div>
        </section>

        <!-- SEO ADDITION: FAQ Schema -->
        <section class="section-padding container text-center">
            <h2 class="section-title">Arihant City Ke Baare Mein Aksar Puche Jane Wale Sawal (FAQ)</h2>
            <div class="faq-accordion">
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Where is Arihant City located?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Arihant City is located at Kalyan Bypass, Bhiwandi, offering excellent connectivity to major highways and railway stations.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What is the price of flats in Arihant City?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Prices at Arihant City start from ₹35L onwards for 1BHK and vary depending on the configuration and phase.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>What amenities does Arihant City offer?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Arihant City offers premium amenities including a swimming pool, gymnasium, clubhouse, landscaped gardens, 24/7 security, kids play area, and ample parking.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>Is Arihant City RERA registered?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">Yes, Arihant City is a MahaRERA registered project, ensuring complete transparency and adherence to guidelines.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>How to book a flat in Arihant City?</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">You can book a flat in Arihant City by filling out the enquiry form on our website, visiting our sales office, or contacting our sales team directly.</div>
                </div>
            </div>
        </section>
"""

content = content.replace('</main>', new_sections + '\n    </main>')

# Update form title
content = content.replace('<h2 class="section-title">Enquire Now</h2>', '<h2 class="section-title">Arihant City Mein Flat Book Karo</h2>')
content = content.replace('<p>Register to get exclusive pricing and priority access.</p>', '<p>Register to get exclusive pricing and priority access.<br><br><span style="font-size:0.85rem; font-weight:bold; color:var(--primary-maroon);">MahaRERA Registered | 100% Transparent Process</span></p>')
content = content.replace('<form action="contact.php" method="POST">', '<form action="contact.php" method="POST" id="contact-form" name="contactForm" aria-label="Arihant City Booking Form">')
content = content.replace('placeholder="Full Name"', 'placeholder="Full Name" aria-label="Full Name"')
content = content.replace('placeholder="Mobile Number"', 'placeholder="Mobile Number" aria-label="Mobile Number"')
content = content.replace('<select name="config">', '<select name="config" aria-label="Interested Configuration">')

# RERA link in footer
content = content.replace('MahaRERA Registration No:', '<a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="color:#fff; text-decoration:underline;">MahaRERA Registration No</a>:')

# Write back
with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("SEO update applied successfully.")
