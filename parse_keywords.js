const fs = require('fs');

const raw = `
### 🏠 Bhiwandi General Real Estate Keywords

* property in Bhiwandi
* properties in Bhiwandi
* real estate in Bhiwandi
* Bhiwandi real estate
* Bhiwandi property
* Bhiwandi properties
* property for sale in Bhiwandi
* properties for sale in Bhiwandi
* residential property in Bhiwandi
* residential properties in Bhiwandi
* commercial property in Bhiwandi
* commercial properties in Bhiwandi
* new property in Bhiwandi
* new properties in Bhiwandi
* new projects in Bhiwandi
* upcoming projects in Bhiwandi
* residential projects in Bhiwandi
* real estate projects in Bhiwandi
* construction projects in Bhiwandi
* new construction projects in Bhiwandi

### 🏢 Flats & Apartments

* flats in Bhiwandi
* flat in Bhiwandi
* apartments in Bhiwandi
* apartment in Bhiwandi
* new flats in Bhiwandi
* new apartments in Bhiwandi
* new flat in Bhiwandi
* flat for sale in Bhiwandi
* flats for sale in Bhiwandi
* apartments for sale in Bhiwandi
* affordable flats in Bhiwandi
* affordable apartments in Bhiwandi
* luxury flats in Bhiwandi
* premium flats in Bhiwandi
* residential flats in Bhiwandi
* residential apartments in Bhiwandi
* under construction flats in Bhiwandi
* upcoming flats in Bhiwandi
* ready possession flats in Bhiwandi
* ready to move flats in Bhiwandi

### 🛏️ 1 BHK Keywords

* 1 BHK in Bhiwandi
* 1 BHK flat in Bhiwandi
* 1 BHK flats in Bhiwandi
* 1 BHK apartment in Bhiwandi
* 1 BHK apartments in Bhiwandi
* 1 BHK flat for sale in Bhiwandi
* 1 BHK flats for sale in Bhiwandi
* new 1 BHK in Bhiwandi
* new 1 BHK flats in Bhiwandi
* affordable 1 BHK in Bhiwandi
* cheap 1 BHK flats in Bhiwandi
* luxury 1 BHK in Bhiwandi
* ready possession 1 BHK in Bhiwandi
* under construction 1 BHK in Bhiwandi
* 1 BHK property in Bhiwandi
* 1 BHK homes in Bhiwandi

### 🛏️ 2 BHK Keywords

* 2 BHK in Bhiwandi
* 2 BHK flat in Bhiwandi
* 2 BHK flats in Bhiwandi
* 2 BHK apartment in Bhiwandi
* 2 BHK apartments in Bhiwandi
* 2 BHK flat for sale in Bhiwandi
* 2 BHK flats for sale in Bhiwandi
* new 2 BHK in Bhiwandi
* new 2 BHK flats in Bhiwandi
* affordable 2 BHK in Bhiwandi
* premium 2 BHK in Bhiwandi
* luxury 2 BHK in Bhiwandi
* ready possession 2 BHK in Bhiwandi
* under construction 2 BHK in Bhiwandi
* 2 BHK property in Bhiwandi
* 2 BHK homes in Bhiwandi

### 💰 Budget Keywords

* flats in Bhiwandi under 20 lakhs
* flats in Bhiwandi under 25 lakhs
* flats in Bhiwandi under 30 lakhs
* flats in Bhiwandi under 35 lakhs
* flats in Bhiwandi under 40 lakhs
* flats in Bhiwandi under 50 lakhs
* flats in Bhiwandi under 60 lakhs
* affordable property in Bhiwandi
* affordable homes in Bhiwandi
* budget flats in Bhiwandi
* low budget flats in Bhiwandi
* cheap flats in Bhiwandi
* best affordable flats in Bhiwandi
* investment property in Bhiwandi
* property investment in Bhiwandi

### 📍 Location-Based Keywords

* property in Temghar
* flats in Temghar
* 1 BHK in Temghar
* 2 BHK in Temghar
* property in Kamatghar
* flats in Kamatghar
* property in Anjurphata
* flats in Anjurphata
* property in Kalher
* flats in Kalher
* property in Mankoli
* flats in Mankoli
* property in Dhamankar Naka
* flats near Dhamankar Naka
* property near Bhiwandi Road
* flats near Bhiwandi Road
* property near Kalyan Bhiwandi Road
* flats near Kalyan Bhiwandi Road
* property near Mumbai Nashik Highway
* flats near Mumbai Nashik Highway
* property in Padgha
* flats in Padgha
* property in Narpoli
* flats in Narpoli

### 🚆 Connectivity Keywords

* flats near Bhiwandi railway station
* property near Bhiwandi railway station
* flats near Bhiwandi Road railway station
* property near Bhiwandi Road railway station
* flats near Kalyan
* property near Kalyan
* flats near Thane
* property near Thane
* flats near Mumbai Nashik Highway
* property near Mumbai Nashik Highway
* flats near Kalyan Bhiwandi Road
* property near Kalyan Bhiwandi Road
* flats near Mankoli bridge
* property near Mankoli bridge
* flats near Bhiwandi bypass
* property near Bhiwandi bypass

### 🏗️ Project Keywords

* Bhiwandi new projects
* Bhiwandi upcoming projects
* Bhiwandi new residential projects
* Bhiwandi upcoming residential projects
* Bhiwandi new launch projects
* Bhiwandi new launch
* Bhiwandi residential projects
* Bhiwandi township projects
* Bhiwandi integrated township
* Bhiwandi gated community
* Bhiwandi housing projects
* Bhiwandi apartment projects
* Bhiwandi affordable housing projects
* Bhiwandi luxury projects
* Bhiwandi premium residential projects

### 📞 High-Intent / Lead Keywords

* buy flat in Bhiwandi
* buy property in Bhiwandi
* buy apartment in Bhiwandi
* flat booking in Bhiwandi
* property booking in Bhiwandi
* new flat booking Bhiwandi
* flat for sale in Bhiwandi
* property for sale in Bhiwandi
* apartments for sale in Bhiwandi
* homes for sale in Bhiwandi
* Bhiwandi property dealer
* Bhiwandi real estate agent
* Bhiwandi property consultant
* Bhiwandi property broker
* Bhiwandi builders
* Bhiwandi developers
* Bhiwandi construction companies

### 🔍 Informational Keywords

* best places to live in Bhiwandi
* best residential areas in Bhiwandi
* best locality in Bhiwandi
* Bhiwandi property market
* Bhiwandi real estate market
* Bhiwandi property prices
* Bhiwandi flat prices
* Bhiwandi property rates
* Bhiwandi flat rates
* Bhiwandi real estate prices
* property rates in Bhiwandi
* flat rates in Bhiwandi
* average property price in Bhiwandi
* Bhiwandi real estate investment
* is Bhiwandi good for property investment
* Bhiwandi property investment guide
* Bhiwandi residential areas
* Bhiwandi developing areas
* upcoming areas in Bhiwandi

### 🏪 Commercial / Shop Keywords

* commercial property in Bhiwandi
* commercial shops in Bhiwandi
* shops for sale in Bhiwandi
* shop for sale in Bhiwandi
* commercial shop for sale in Bhiwandi
* office space in Bhiwandi
* office for sale in Bhiwandi
* commercial office in Bhiwandi
* commercial projects in Bhiwandi
* warehouse in Bhiwandi
* warehouses in Bhiwandi
* industrial property in Bhiwandi
* industrial land in Bhiwandi
* commercial land in Bhiwandi
* showroom for sale in Bhiwandi

### 🌐 Long-Tail Keywords

* best flats to buy in Bhiwandi
* best 1 BHK flats in Bhiwandi
* best 2 BHK flats in Bhiwandi
* affordable 1 BHK flats in Bhiwandi
* affordable 2 BHK flats in Bhiwandi
* new residential projects near Bhiwandi
* best residential projects in Bhiwandi
* upcoming residential projects in Bhiwandi
* new launch flats in Bhiwandi
* best property investment in Bhiwandi
* property near Kalyan Bhiwandi Road
* affordable flats near Kalyan Bhiwandi Road
* new flats near Kalyan Bhiwandi Road
* 1 BHK near Kalyan Bhiwandi Road
* 2 BHK near Kalyan Bhiwandi Road
`;

const lines = raw.split('\n');
let currentCategory = 'General';
const list = [];
const seen = new Set();

lines.forEach(line => {
    line = line.trim();
    if (line.startsWith('###')) {
        currentCategory = line.replace(/###\s*[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]*\s*/u, '').trim();
    } else if (line.startsWith('*')) {
        const kw = line.replace(/^\*\s*/, '').trim();
        if (kw && !seen.has(kw.toLowerCase())) {
            seen.add(kw.toLowerCase());
            const slug = kw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            list.push({ keyword: kw, category: currentCategory, slug: slug });
        }
    }
});

console.log('Total unique keywords:', list.length);
fs.writeFileSync('keywords_data.json', JSON.stringify(list, null, 2), 'utf8');
console.log('Saved to keywords_data.json');
