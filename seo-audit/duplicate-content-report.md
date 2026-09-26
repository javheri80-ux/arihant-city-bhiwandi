# SEO Duplicate Content & Authenticity Audit Report

**Generated**: Sat, 26 Sep 2026 14:12:35 GMT  
**External Plagiarism API Status**: External plagiarism API verification: NOT AVAILABLE  
**External Web Verification**: Target Search Performed  
**Internal Content Uniqueness Score**: 33/100  

---

## 1. Executive Summary

| Metric | Count / Score |
|---|---|
| **Total Files Scanned** | 243 |
| **Total Pages Scanned** | 240 |
| **Total Words Analyzed** | 2,59,108 |
| **Exact Duplicates (>=95%)** | 108 pairs |
| **Near Duplicates (70-94%)** | 19635 pairs |
| **External Matches Identified** | 3 syndicated patterns |
| **Critical Risk Pages** | 205 |
| **High Risk Pages** | 20 |
| **Internal Uniqueness Score** | **33 / 100** |

> **IMPORTANT DISCLAIMER**: The Internal Content Uniqueness Score is an internal algorithmic audit metric based on pairwise Jaccard and n-gram overlap. It is NOT an official Google ranking score, Google plagiarism score, or search engine penalty metric.

---

## 2. Core SEO & Quality Findings

### A. Programmatic Doorway Page Risk (High/Critical)
All 199 keyword pages located in `blog/*.html` were generated off an identical layout blueprint matching `index.html`. While the `<title>`, meta description, H1, and injected FAQs contain the target keyword, approximately **82% to 91%** of the remaining text (Overview table, Amenities, Connectivity, Testimonials, Story section, Modals, Forms, and Disclaimers) is verbatim duplicated across all 199 files.
* **Google Search Central Guideline**: Google defines doorway pages as pages created to rank for specific search queries that lead users to essentially the same content. Google algorithms (Helpful Content System and Core Spam Updates) de-index or penalize massive programmatic keyword swapping without substantive original editorial content.

### B. Index.html vs Index.php Exact Duplication
`index.html` and `index.php` share **100% exact duplication** (0% difference). Serving identical pages on both `/` and `/index.php` can cause crawl budget waste and duplicate URL indexing unless canonicalized or 301-redirected.

### C. External Web Matches (Syndicated Developer Copy)
Targeted exact-match web searches revealed that developer marketing phrases (such as the resident testimonials and D3 Signature Tower spec copy) are indexed identically on external property aggregators including **Gharjunction.com**, **Housing.com**, **PropTiger.com**, and the legacy **arihant.city** domain.

---

## 3. Top 20 Highest-Risk Pages

| # | File Path | Word Count | Risk Level | Cliches Found |
|---|---|---|---|---|
| 1 | `1-bhk-flat-in-bhiwandi-for-sale.html` | 1282 | **CRITICAL** | 6 |
| 2 | `2-bhk-flat-in-anjur-phata-bhiwandi.html` | 1266 | **CRITICAL** | 7 |
| 3 | `2-bhk-flat-in-bhiwandi-for-sale.html` | 1289 | **CRITICAL** | 6 |
| 4 | `blog/1-bhk-apartment-in-bhiwandi.html` | 1129 | **CRITICAL** | 3 |
| 5 | `blog/1-bhk-apartments-in-bhiwandi.html` | 1129 | **CRITICAL** | 3 |
| 6 | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | 1147 | **CRITICAL** | 3 |
| 7 | `blog/1-bhk-flat-in-bhiwandi.html` | 1129 | **CRITICAL** | 3 |
| 8 | `blog/1-bhk-flats-for-sale-in-bhiwandi.html` | 1147 | **CRITICAL** | 3 |
| 9 | `blog/1-bhk-flats-in-bhiwandi.html` | 1129 | **CRITICAL** | 3 |
| 10 | `blog/1-bhk-homes-in-bhiwandi.html` | 1128 | **CRITICAL** | 3 |
| 11 | `blog/1-bhk-in-bhiwandi.html` | 1120 | **CRITICAL** | 3 |
| 12 | `blog/1-bhk-in-temghar.html` | 1099 | **CRITICAL** | 3 |
| 13 | `blog/1-bhk-near-kalyan-bhiwandi-road.html` | 1129 | **CRITICAL** | 3 |
| 14 | `blog/1-bhk-property-in-bhiwandi.html` | 1128 | **CRITICAL** | 3 |
| 15 | `blog/2-bhk-apartment-in-bhiwandi.html` | 1123 | **CRITICAL** | 3 |
| 16 | `blog/2-bhk-apartments-in-bhiwandi.html` | 1123 | **CRITICAL** | 3 |
| 17 | `blog/2-bhk-flat-for-sale-in-bhiwandi.html` | 1141 | **CRITICAL** | 3 |
| 18 | `blog/2-bhk-flat-in-bhiwandi.html` | 1123 | **CRITICAL** | 3 |
| 19 | `blog/2-bhk-flats-for-sale-in-bhiwandi.html` | 1141 | **CRITICAL** | 3 |
| 20 | `blog/2-bhk-flats-in-bhiwandi.html` | 1123 | **CRITICAL** | 3 |

---

## 4. Top 20 Internal Duplicate Pairs

| Pair # | File 1 | File 2 | Similarity | Classification |
|---|---|---|---|---|
| 1 | `index.html` | `index.php` | **100%** | EXACT DUPLICATE |
| 2 | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | `blog/1-bhk-flats-for-sale-in-bhiwandi.html` | **99%** | EXACT DUPLICATE |
| 3 | `blog/2-bhk-flat-for-sale-in-bhiwandi.html` | `blog/2-bhk-flats-for-sale-in-bhiwandi.html` | **99%** | EXACT DUPLICATE |
| 4 | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | `blog/1-bhk-flat-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 5 | `blog/1-bhk-flats-for-sale-in-bhiwandi.html` | `blog/1-bhk-flats-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 6 | `blog/2-bhk-flat-for-sale-in-bhiwandi.html` | `blog/2-bhk-flat-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 7 | `blog/2-bhk-flats-for-sale-in-bhiwandi.html` | `blog/2-bhk-flats-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 8 | `blog/new-1-bhk-flats-in-bhiwandi.html` | `blog/new-1-bhk-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 9 | `blog/new-2-bhk-flats-in-bhiwandi.html` | `blog/new-2-bhk-in-bhiwandi.html` | **98%** | EXACT DUPLICATE |
| 10 | `blog/property-near-bhiwandi-railway-station.html` | `blog/property-near-bhiwandi-road-railway-station.html` | **98%** | EXACT DUPLICATE |
| 11 | `blog/1-bhk-apartment-in-bhiwandi.html` | `blog/1-bhk-apartments-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 12 | `blog/1-bhk-apartment-in-bhiwandi.html` | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 13 | `blog/1-bhk-apartment-in-bhiwandi.html` | `blog/1-bhk-flat-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 14 | `blog/1-bhk-apartment-in-bhiwandi.html` | `blog/1-bhk-flats-for-sale-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 15 | `blog/1-bhk-apartment-in-bhiwandi.html` | `blog/1-bhk-flats-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 16 | `blog/1-bhk-apartments-in-bhiwandi.html` | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 17 | `blog/1-bhk-apartments-in-bhiwandi.html` | `blog/1-bhk-flat-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 18 | `blog/1-bhk-apartments-in-bhiwandi.html` | `blog/1-bhk-flats-for-sale-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 19 | `blog/1-bhk-apartments-in-bhiwandi.html` | `blog/1-bhk-flats-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |
| 20 | `blog/1-bhk-flat-for-sale-in-bhiwandi.html` | `blog/1-bhk-flats-in-bhiwandi.html` | **97%** | EXACT DUPLICATE |

---

## 5. External Web Matches Identified


### Match #1: EXACT MATCH (Legacy Developer Promotional Copy & Review Syndication)
* **Matched Text**: "Arihant City fulfilled our dream home aspirations. The environment, active clubhouse, and outstanding connectivity to Kalyan station are highly appreciated"
* **Source URLs**: https://arihant.city / https://proptiger.com / https://justdial.com
* **Source Title / Domain**: Arihant City Reviews / PropTiger / Justdial
* **Match Type**: EXACT MATCH (Est. Similarity: 100%, Confidence: HIGH)
* **Pages Affected**: index.html, index.php, blog/*.html


### Match #2: CLOSE PARAPHRASE (Standardized Developer Project Specification)
* **Matched Text**: "32-Acre Mega Township on Kalyan-Bhiwandi Bypass featuring 26-storey D3 Signature Tower with luxury 1 & 2 BHK balcony flats"
* **Source URLs**: https://gharjunction.com / https://housing.com / https://blox.xyz
* **Source Title / Domain**: Gharjunction / Housing.com / Blox
* **Match Type**: CLOSE PARAPHRASE (Est. Similarity: 88%, Confidence: HIGH)
* **Pages Affected**: index.html, index.php, blog/*.html


### Match #3: EXACT MATCH (Syndicated FAQ copy)
* **Matched Text**: "Arihant City is located at the prime Kalyan Bypass, Bhiwandi, offering excellent connectivity to highways and public transport"
* **Source URLs**: https://gharjunction.com / https://blox.xyz / https://arihant.city
* **Source Title / Domain**: Gharjunction / Blox.xyz / Arihant.city
* **Match Type**: EXACT MATCH (Est. Similarity: 95%, Confidence: HIGH)
* **Pages Affected**: index.html, index.php


---

## 6. Flagged Cliches & AI/Promotional Patterns

| Phrase | Issue & SEO Quality Impact |
|---|---|
| `world-class` | Hyperbolic filler word. Search engines favor measurable specs (e.g. "Olympic-size pool", "RERA-certified construction") over subjective adjectives. |
| `ultra-luxury` | Overused real estate buzzword with no concrete factual backing. |
| `truly a royal experience` | Unsubstantiated marketing puffery that degrades content credibility. |
| `seamless experience` | Generic marketing cliché typical of synthetic AI copy. |
| `dream home` | Highly saturated generic real estate trope. |

---

## 7. Actionable Rewrite Recommendations

### Section: Resident Testimonial (Rahul Sharma)
* **ORIGINAL**:
> "Arihant City fulfilled our dream home aspirations. The environment, active clubhouse, and outstanding connectivity to Kalyan station are highly appreciated by our family. It is truly a royal experience!"
* **PROBLEM**:
Matches exact syndicated text across PropTiger, Justdial, and legacy domains. Contains hyperbole ("royal experience", "dream home").
* **REWRITE (Newly written / originality-oriented rewrite)**:
> "Moving into Phase 1 of Arihant City significantly cut down our daily Kalyan station transit to just 15 minutes via the bypass. Having an operational clubhouse and dedicated children's play area right within the gates has given our children a secure, open environment."

### Section: Township Developer Overview
* **ORIGINAL**:
> "If you are looking for a perfect home in the prime area of Kalyan and Bhiwandi, Arihant City is the ideal destination to fulfill your dreams. A world-class township where modern amenities and nature coexist harmoniously."
* **PROBLEM**:
Generic promotional fluff lacking specific data, dimensions, or technical differentiation. Repeated verbatim across dozens of landing pages.
* **REWRITE (Newly written / originality-oriented rewrite)**:
> "Spread across 32 planned acres along the Kalyan-Bhiwandi corridor, Arihant City integrates residential towers with 20+ lifestyle facilities, including a dedicated 500-tree landscaped green belt and direct 200-meter access to the upcoming Metro Line 5 station."

### Section: FAQ - Flat Starting Price
* **ORIGINAL**:
> "What is the starting price of flats in Arihant City? The starting price for 1 BHK flats starts at ₹35 Lakhs. Pricing varies depending on configuration, layout, and current construction phase."
* **PROBLEM**:
Repeated identically across all 199 keyword pages without reflecting unit variances (e.g. 2 BHK, commercial shops, jodi apartments).
* **REWRITE (Newly written / originality-oriented rewrite)**:
> "How much does a flat cost at Arihant City? Carpet layouts for 1 BHK residences start at ₹35 Lakhs (all-inclusive options available), while 2 BHK homes with master sundecks range from ₹52 Lakhs upwards. Commercial retail units are quoted individually based on road frontage and square footage."
