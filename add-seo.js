import fs from 'fs';
const html = fs.readFileSync('dist/index.html', 'utf8');
const seo = `<title>Satya Skin Hair Solutions</title>
<meta name="description" content="Best hair transplant and skin clinic in Gurgaon" />
<link rel="canonical" href="https://satyaskinhair.com/" />`;
const newHtml = html.replace('<head>', '<head>\n    ' + seo);
fs.writeFileSync('dist/index.html', newHtml);
console.log('✅ SEO added');