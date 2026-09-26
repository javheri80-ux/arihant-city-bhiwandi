const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                replaceInDir(fullPath);
            }
        } else if (/\.(html|php|js|json|xml|txt)$/.test(file)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = content;
            updated = updated.split('https://arihantcity.site').join('https://arihantcity.site');
            updated = updated.split('https://arihantcity.site').join('https://arihantcity.site');
            updated = updated.split('https://arihantcity.site').join('https://arihantcity.site');
            if (updated !== content) {
                fs.writeFileSync(fullPath, updated, 'utf8');
                console.log(`Normalized domain in ${fullPath}`);
            }
        }
    });
}

replaceInDir(__dirname);
console.log("Domain normalization to arihantcity.site complete across all files!");
