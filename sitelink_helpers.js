const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.arihantcity.site';

// Shared Layout Header Generator
function getHeader(activeNav) {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Overview', href: '/#overview' },
        { label: 'Price', href: '/arihant-city-price.html', key: 'price' },
        { label: 'Floor Plans', href: '/arihant-city-floor-plans.html', key: 'floor-plans' },
        { label: 'Amenities', href: '/arihant-city-amenities.html', key: 'amenities' },
        { label: 'Location', href: '/arihant-city-location.html', key: 'location' },
        { label: 'Configurations', href: '/arihant-city-configurations.html', key: 'configurations' },
        { label: 'MahaRERA', href: '/arihant-city-maharera.html', key: 'maharera' },
        { label: 'Developer', href: '/arihant-city-developer.html', key: 'developer' },
        { label: 'Blogs', href: '/blog.html', key: 'blogs' },
        { label: 'Contact', href: '#contact', key: 'contact' }
    ];

    const linksHtml = navItems.map(item => {
        const isActive = item.key === activeNav ? ' class="active"' : '';
        return `<li><a href="${item.href}"${isActive}>${item.label}</a></li>`;
    }).join('\n                    ');

    return `
    <header>
        <div class="nav-container container">
            <div style="display: flex; flex-direction: column; align-items: flex-start; line-height: 1;">
                <a href="/" aria-label="Arihant City Home">
                    <img src="/images/site_logo_1777043167.webp" alt="Arihant City Kalyan Bhiwandi logo - premium residential township" class="logo-img" width="160" height="45">
                </a>
                <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">Authorized Channel Partner</span>
            </div>
            <nav aria-label="Main Navigation">
                <div class="menu-toggle" id="mobile-menu" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav-links" id="nav-list">
                    ${linksHtml}
                </ul>
            </nav>
        </div>
    </header>`;
}

// Shared Footer Generator (Section 10 Navigation)
function getFooter() {
    return `
    <footer>
        <div class="container footer-content">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>Arihant City Township</h4>
                    <p style="font-size: 0.85rem; color: #f2e6d9; line-height: 1.6; margin-bottom: 15px;">
                        A master-planned 32-acre integrated township located on the Kalyan-Bhiwandi Bypass, offering 1, 2 & 3 BHK balcony residences with 20+ lifestyle amenities and direct access to the upcoming Metro Line 5.
                    </p>
                    <p style="font-size: 0.8rem; color: #f1dfa8;">
                        <strong>MahaRERA:</strong> Phase-I: P51700010884 | D3 Tower: P51700022743 | Phase-II: P51700028429
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Project Navigation</h4>
                    <ul class="footer-links">
                        <li><a href="/">Arihant City Home</a></li>
                        <li><a href="/#overview">Project Overview</a></li>
                        <li><a href="/arihant-city-price.html">Arihant City Price</a></li>
                        <li><a href="/arihant-city-floor-plans.html">Arihant City Floor Plans</a></li>
                        <li><a href="/arihant-city-amenities.html">Arihant City Amenities</a></li>
                        <li><a href="/arihant-city-location.html">Arihant City Location</a></li>
                        <li><a href="/arihant-city-configurations.html">Arihant City Configurations</a></li>
                        <li><a href="/arihant-city-maharera.html">Arihant City MahaRERA</a></li>
                        <li><a href="/arihant-city-developer.html">Arihant City Developer</a></li>
                        <li><a href="/arihant-city-gallery.html">Arihant City Gallery</a></li>
                        <li><a href="/arihant-city-brochure.html">Arihant City Brochure</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Resources & Guides</h4>
                    <ul class="footer-links">
                        <li><a href="/blog.html">All Real Estate Guides</a></li>
                        <li><a href="/arihant-city-faqs.html">Frequently Asked Questions</a></li>
                        <li><a href="/blog/arihant-city-kalyan-bhiwandi.html">Bhiwandi Township Guide</a></li>
                        <li><a href="/blog/metro-line-5-bhiwandi-impact.html">Metro Line 5 Impact</a></li>
                        <li><a href="/blog/home-loan-and-maharera-guide-bhiwandi.html">Home Loan & RERA Guide</a></li>
                        <li><a href="/blog/bhiwandi-property-rates-per-square-feet.html">Bhiwandi Property Rates</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Legal & Information</h4>
                    <ul class="footer-links">
                        <li><a href="/#contact">Contact Sales Desk</a></li>
                        <li><a href="/disclaimer.html">Disclaimer & Disclosures</a></li>
                        <li><a href="/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions.html">Terms & Conditions</a></li>
                        <li><a href="/sitemap.xml">XML Sitemap</a></li>
                    </ul>
                    <div style="margin-top: 15px; font-size: 0.85rem; color: #fff;">
                        <strong>Helpline:</strong> <a href="tel:+919028259563" style="color: #f1dfa8; text-decoration: underline;">+91 90282 59563</a><br>
                        <strong>Email:</strong> <a href="mailto:javheri80@gmail.com" style="color: #f1dfa8; text-decoration: underline;">javheri80@gmail.com</a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© 2026 Arihant City Kalyan Bhiwandi. All Rights Reserved.</p>
                <p style="font-size: 0.75rem; color: #e6ccb2; margin-top: 10px; line-height: 1.5; text-align: justify;">
                    <strong>Disclaimer & Partner Disclosure:</strong> This website is maintained by an Authorized Channel Partner (Marketing Partner) of the developer for informational and promotional guidance. It is not the official developer website. The content, including images, graphics, floor plans, pricing, and availability of flats at Arihant City, is provided purely for reference and is subject to change at the developer's discretion. The official project registration can be verified on the official MahaRERA website (<a href="https://maharerait.mahaonline.gov.in" target="_blank" rel="noopener" style="color:#f1dfa8; text-decoration:underline;">maharerait.mahaonline.gov.in</a>) under registration numbers Phase-I: P51700010884, D3 Tower: P51700022743, Phase-II: P51700028429, P51700028441, P51700044483, P51700010350.
                </p>
            </div>
        </div>
    </footer>

    <!-- Mobile Fixed Contact Bar -->
    <div class="mobile-contact-bar">
        <a href="tel:+919028259563" class="contact-item" aria-label="Call Arihant City Helpline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 004.7 1.01 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 001.01 4.7 1 1 0 01-.27 1.11z"/></svg>
            <span>Call Now</span>
        </a>
        <a href="#contact" class="contact-item price-btn-trigger" aria-label="Submit Price Enquiry">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>Enquiry</span>
        </a>
        <a href="https://wa.me/919028259563?text=Hi!%20I%20am%20interested%20in%20Arihant%20City." target="_blank" rel="noopener" class="contact-item" aria-label="Chat on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm5.835-3.528l.362.215c1.7.099 3.51.152 5.327.151 5.617 0 10.187-4.524 10.191-10.083.002-2.693-1.04-5.225-2.932-7.121-1.892-1.897-4.41-2.942-7.112-2.943-5.542 0-10.054 4.469-10.058 10.03-.002 1.782.47 3.52 1.36 5.068l.322.56-1.014 3.7.387-.22zm13.167-7.986c-.302-.151-1.785-.881-2.057-.98-.272-.1-.469-.151-.667.15-.198.3-.767.98-.94 1.18-.173.2-.346.225-.648.075-.302-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.783-1.676-2.083-.176-.3-.019-.462.132-.611.135-.134.302-.35.454-.525.151-.175.202-.3.303-.5.101-.2.05-.376-.025-.526-.076-.15-.667-1.606-.913-2.201-.24-.579-.484-.5-.667-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.785-.73 2.032-1.436.247-.704.247-1.306.173-1.436-.074-.13-.272-.206-.575-.356z"/></svg>
            <span>WhatsApp</span>
        </a>
    </div>

    <!-- Enquiry Modal -->
    <div class="modal-overlay" id="enquiryModal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-close" id="closeEnquiryModal">&times;</span>
                <h2>Request Project Details</h2>
                <p>Register for verified pricing, layout PDFs & site visit</p>
            </div>
            <div class="modal-body">
                <form action="https://formsubmit.co/javheri80@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="${DOMAIN}/thank-you.html">
                    <input type="hidden" name="_subject" value="Enquiry: Arihant City Information Request">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_template" value="table">
                    <input type="text" name="name" placeholder="Full Name" aria-label="Full Name" required>
                    <input type="tel" name="phone" placeholder="Mobile Number" aria-label="Mobile Number" required>
                    <select name="config" aria-label="Configuration">
                        <option value="" disabled selected>Interested Configuration</option>
                        <option value="1BHK">1 BHK Luxury (543 sq.ft.)</option>
                        <option value="2BHK">2 BHK Elite (793 sq.ft.)</option>
                        <option value="3BHK">1+1 Jodi / 3 BHK (1080 sq.ft.)</option>
                        <option value="Commercial">Commercial Retail Shop</option>
                    </select>
                    <button type="submit" class="modal-submit-btn">Submit Request</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        const mobileMenu = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
        if (mobileMenu && navList) {
            mobileMenu.addEventListener('click', () => { navList.classList.toggle('active'); });
        }

        const enquiryModal = document.getElementById('enquiryModal');
        const closeEnquiryModal = document.getElementById('closeEnquiryModal');
        document.querySelectorAll('.price-btn-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (enquiryModal) enquiryModal.style.display = 'flex';
            });
        });
        if (closeEnquiryModal && enquiryModal) {
            closeEnquiryModal.addEventListener('click', () => { enquiryModal.style.display = 'none'; });
            window.addEventListener('click', (e) => { if (e.target === enquiryModal) enquiryModal.style.display = 'none'; });
        }
    </script>`;
}

// Shared CSS Styles for all Sitelink Candidate Pages
function getSharedStyles() {
    return `
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
        body { color: var(--dark-text); line-height: 1.6; background-color: #ffffff; overflow-x: hidden; width: 100%; }
        img { max-width: 100%; height: auto; display: block; }
        a { color: var(--primary-maroon); text-decoration: none; }
        a:hover { color: var(--accent-gold); }

        .container { width: 90%; max-width: 1200px; margin: 0 auto; }
        .section-padding { padding: 50px 0; }
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

        /* Page Hero */
        .page-hero { background: linear-gradient(135deg, #3d0010 0%, var(--primary-maroon) 100%); color: #fff; padding: 40px 20px; text-align: center; border-bottom: 4px solid var(--accent-gold); }
        .hero-badge { display: inline-block; background: var(--accent-gold); color: #fff; padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
        .page-h1 { font-size: 2.3rem; font-weight: 800; margin-bottom: 12px; color: #ffffff; }
        .page-lead { font-size: 1.05rem; color: #f1dfa8; max-width: 850px; margin: 0 auto; line-height: 1.6; }

        /* Breadcrumbs */
        .breadcrumbs-bar { background: var(--light-bg); padding: 12px 0; border-bottom: 1px solid var(--border-color); font-size: 0.85rem; }
        .breadcrumbs-bar ol { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
        .breadcrumbs-bar li + li::before { content: ">"; color: #999; margin-right: 8px; }
        .breadcrumbs-bar a { color: var(--primary-maroon); font-weight: 500; }
        .breadcrumbs-bar span { color: var(--gray-text); }

        /* Typography & Sections */
        .section-title { color: var(--primary-maroon); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 15px; font-size: 1.8rem; font-weight: 800; position: relative; display: inline-block; }
        .section-title::after { content: ''; display: block; width: 45px; height: 3px; background: var(--accent-gold); margin: 8px auto 0; }
        .section-subtitle { font-size: 1rem; color: var(--gray-text); margin-bottom: 30px; max-width: 800px; margin-left: auto; margin-right: auto; }

        /* Cards & Grids */
        .grid-3x { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 25px 0; }
        .grid-2x { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 25px 0; }
        .grid-4x { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 25px 0; }
        .card { background: #fff; padding: 25px; border-radius: 8px; border: 1px solid var(--border-color); box-shadow: 0 2px 10px rgba(0,0,0,0.03); transition: 0.3s; }
        .card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(80,1,21,0.08); border-color: var(--accent-gold); }

        /* Tables */
        .table-wrapper { overflow-x: auto; margin: 25px 0; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        th, td { padding: 14px 16px; text-align: left; border: 1px solid #eee; }
        th { background: var(--primary-maroon); color: #fff; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; }

        /* Buttons */
        .btn { display: inline-block; background-color: var(--primary-maroon); color: var(--white); padding: 12px 28px; text-decoration: none; border-radius: 5px; text-transform: uppercase; font-size: 0.85rem; font-weight: bold; border: none; cursor: pointer; transition: 0.3s; }
        .btn:hover { background-color: var(--accent-gold); color: #fff; }
        .btn-gold { background-color: var(--accent-gold); color: #fff; }
        .btn-gold:hover { background-color: var(--primary-maroon); color: #fff; }

        /* In-Content Sibling Links */
        .sibling-nav-box { background: var(--light-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 25px; margin: 35px 0; }
        .sibling-nav-box h3 { color: var(--primary-maroon); font-size: 1.2rem; margin-bottom: 15px; font-weight: 700; }
        .sibling-links { display: flex; flex-wrap: wrap; gap: 10px; }
        .sibling-chip { background: #fff; border: 1px solid var(--border-color); color: var(--primary-maroon); padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; transition: 0.3s; }
        .sibling-chip:hover { background: var(--primary-maroon); color: #fff; border-color: var(--primary-maroon); }

        /* FAQ Accordion */
        .faq-accordion { max-width: 900px; margin: 0 auto; text-align: left; }
        .faq-item { margin-bottom: 12px; border: 1px solid var(--border-color); border-radius: 8px; background: #fff; overflow: hidden; }
        .faq-q { padding: 16px 20px; font-weight: 600; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background-color: #fafafa; color: var(--primary-maroon); }
        .faq-a { padding: 18px 20px; display: none; color: #444; font-size: 0.95rem; line-height: 1.6; border-top: 1px solid #eee; }

        /* Contact & Form */
        .contact-section { display: flex; background: var(--light-maroon); margin-top: 40px; }
        .map-container { flex: 1.2; min-height: 450px; }
        .map-container iframe { width: 100%; height: 100%; border: none; }
        .form-container { flex: 1; padding: 40px; background-color: var(--white); border-left: 4px solid var(--accent-gold); }
        .form-container input, .form-container select, .form-container textarea { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px; font-size: 0.9rem; }

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
            .grid-3x, .grid-4x { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            .page-h1 { font-size: 1.7rem; }
            .grid-2x, .grid-3x, .grid-4x, .contact-section { grid-template-columns: 1fr; flex-direction: column; }
            .footer-grid { grid-template-columns: 1fr; }
            .form-container { padding: 25px 15px; border-left: none; border-top: 4px solid var(--accent-gold); }
            .mobile-contact-bar { display: flex; }
            body { padding-bottom: 60px; }
        }

        /* Modal */
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; justify-content: center; align-items: center; backdrop-filter: blur(8px); }
        .modal-content { background: var(--white); border-radius: 12px; width: 90%; max-width: 440px; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid rgba(168,140,57,0.3); }
        .modal-header { background: linear-gradient(135deg, var(--primary-maroon), #7a0220); color: var(--white); padding: 22px 20px; text-align: center; position: relative; }
        .modal-close { position: absolute; top: 12px; right: 18px; color: var(--white); font-size: 26px; cursor: pointer; }
        .modal-body { padding: 25px; }
        .modal-body input, .modal-body select { width: 100%; padding: 12px; margin-bottom: 14px; border: 1px solid #ccc; border-radius: 4px; font-size: 0.9rem; }
        .modal-submit-btn { background: linear-gradient(135deg, var(--accent-gold), #8a6d25); color: var(--white); width: 100%; padding: 13px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; text-transform: uppercase; }
    </style>`;
}

module.exports = {
    DOMAIN,
    getHeader,
    getFooter,
    getSharedStyles
};
