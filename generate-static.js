import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes with their specific SEO data
const routes = [
  // ================= HOME =================
  {
    path: '/',
    title: 'Satya Skin Hair Solutions - Best Hair Transplant & Skin Clinic in Gurgaon',
    description: 'Advanced hair transplant and skin treatment clinic in Gurgaon and Delhi. Expert doctors, natural results, and personalized care for hair and skin concerns.',
    canonical: 'https://satyaskinhair.com/',
    keywords: 'Hair transplant, Skin treatment, Gurgaon clinic, Delhi clinic, FUT, FUE, Dermatologist'
  },



  // ================= BEFORE / AFTER =================
  {
    path: '/before-after',
    title: 'Before After Results | Hair Transplant & Skin Treatment Gallery | Satya',
    description: 'View real before after results of hair transplant and skin treatments at Satya Skin & Hair Solutions. See our success stories and patient transformations.',
    canonical: 'https://satyaskinhair.com/before-after',
    keywords: 'Before after hair transplant, Results gallery, Treatment transformations, Patient results'
  },

  // ================= CLINIC LOCATIONS =================
  {
    path: '/delhi',
    title: 'Satya Skin Hair Solutions Delhi | Best Hair Transplant Clinic in Delhi',
    description: 'Visit Satya Skin & Hair Solutions in Delhi for advanced hair transplant and skin treatments. Expert doctors, natural results, and affordable prices in Delhi NCR.',
    canonical: 'https://satyaskinhair.com/delhi',
    keywords: 'Hair transplant Delhi, Skin clinic Delhi, Dermatologist Delhi, Best hair transplant Delhi'
  },
  {
    path: '/gurgaon',
    title: 'Satya Skin Hair Solutions Gurgaon | Best Hair & Skin Clinic in Gurgaon',
    description: 'Leading hair transplant and skin clinic in Gurgaon. Dr. Shail Gupta and team offer advanced treatments with guaranteed natural results in DLF Phase 4.',
    canonical: 'https://satyaskinhair.com/gurgaon',
    keywords: 'Hair transplant Gurgaon, Skin clinic Gurgaon, Best dermatologist Gurgaon, DLF Phase 4 clinic'
  },

  // ================= HAIR TREATMENT PAGES =================
  {
    path: '/hair-treatment',
    title: 'Hair Treatment in Gurgaon | Advanced Hair Fall Solutions | Satya',
    description: 'Complete hair treatment solutions in Gurgaon. PRP, GFC, Mesotherapy, Laser Comb, and advanced hair loss treatments at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-treatment',
    keywords: 'Hair treatment, Hair fall solution, PRP therapy, GFC treatment, Laser therapy'
  },
  {
    path: '/skin-treatment',
    title: 'Skin Treatment in Gurgaon | Acne, Pigmentation & Anti-Aging | Satya',
    description: 'Advanced skin treatments in Gurgaon for acne, pigmentation, scars, and aging. Best dermatologists using latest technology at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin-treatment',
    keywords: 'Skin treatment, Acne treatment, Pigmentation removal, Anti-aging, Dermatologist'
  },
  {
    path: '/hair-transplant/fue',
    title: 'FUE Hair Transplant in Gurgaon | DSFT™ Advanced Hair Restoration | Satya',
    description: 'Looking for FUE Hair Transplant in Gurgaon? Satya Skin & Hair Solutions offers advanced DSFT™ technique, donor-safe planning, natural hairline design, and long-term results.',
    canonical: 'https://satyaskinhair.com/hair-transplant/fue',
    keywords: 'FUE hair transplant, Follicular Unit Extraction, Hair restoration Gurgaon, No scar transplant'
  },
  {
    path: '/hair-transplant/fut',
    title: 'FUT Hair Transplant in Gurgaon | Strip Method Hair Restoration | Satya',
    description: 'FUT Hair Transplant in Gurgaon at Satya Skin & Hair Solutions. Advanced strip method for maximum graft yield. Best results for advanced hair loss.',
    canonical: 'https://satyaskinhair.com/hair-transplant/fut',
    keywords: 'FUT hair transplant, Strip method, Hair restoration Gurgaon, Maximum grafts'
  },
  {
    path: '/hair-transplant/balanced',
    title: 'Balanced Hair Transplant | Combined FUE & FUT Technique | Satya Gurgaon',
    description: 'Balanced Hair Transplant combining FUE and FUT techniques for optimal results. Maximum graft survival with minimal scarring at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/balanced',
    keywords: 'Balanced hair transplant, Combined FUE FUT, Maximum grafts, Optimal results'
  },
  {
    path: '/hair-transplant/beard-hair-transplant',
    title: 'Beard Hair Transplant in Gurgaon | Natural Beard Restoration | Satya',
    description: 'Beard hair transplant in Gurgaon for patchy beard or no beard growth. Natural-looking results with advanced FUE technique at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/beard-hair-transplant',
    keywords: 'Beard transplant, Beard restoration, Facial hair transplant, Patchy beard solution'
  },
  {
    path: '/hair-transplant/eyebrow-transplant',
    title: 'Eyebrow Transplant in Gurgaon | Natural Eyebrow Restoration | Satya',
    description: 'Eyebrow transplant in Gurgaon for thin or overplucked eyebrows. Natural shape and density restoration using advanced FUE technique at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/eyebrow-transplant',
    keywords: 'Eyebrow transplant, Eyebrow restoration, Natural eyebrows, Permanent eyebrows'
  },
  {
    path: '/hair-transplant/female',
    title: 'Female Hair Transplant in Gurgaon | Hair Loss Solutions for Women | Satya',
    description: 'Female hair transplant in Gurgaon for women experiencing hair thinning or baldness. Expert female hair restoration specialists at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/female',
    keywords: 'Female hair transplant, Women hair loss, Hair restoration for women, Female pattern baldness'
  },
  {
    path: '/hair-transplant/body',
    title: 'Body Hair Transplant in Gurgaon | BHT Technique | Satya',
    description: 'Body hair transplant in Gurgaon using BHT technique. Harvest hair from chest, beard, or legs to restore scalp, beard, or eyebrows. Advanced procedure at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/body',
    keywords: 'Body hair transplant, BHT, Beard transplant, Scalp restoration, Donor hair'
  },
  {
    path: '/hair-transplant/repair',
    title: 'Hair Transplant Repair in Gurgaon | Failed Transplant Correction | Satya',
    description: 'Hair transplant repair for failed or unnatural-looking previous transplants. Expert correction of poor results, scars, and over-harvesting at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/repair',
    keywords: 'Hair transplant repair, Failed transplant correction, Revision transplant, Scar repair'
  },
  {
    path: '/hair-transplant/long',
    title: 'Long Hair Transplant in Gurgaon | No Shave FUE | Satya',
    description: 'Long hair transplant (No Shave FUE) in Gurgaon. Keep your existing hair length while undergoing transplant. Discrete procedure with natural results.',
    canonical: 'https://satyaskinhair.com/hair-transplant/long',
    keywords: 'Long hair transplant, No shave FUE, Discrete hair transplant, Unshaven transplant'
  },
  {
    path: '/hair-transplant/mht',
    title: 'Maximum Harvesting Technique MHT | High Graft Yield | Satya Gurgaon',
    description: 'Maximum Harvesting Technique (MHT) for high graft yield in a single session. Advanced method for maximum donor utilization at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/mht',
    keywords: 'Maximum harvesting, High graft count, MHT technique, Maximum grafts'
  },
  {
    path: '/hair-transplant/telogen',
    title: 'Telogen Effluvium Treatment | Temporary Hair Fall Solution | Satya',
    description: 'Expert treatment for Telogen Effluvium (temporary hair shedding) in Gurgaon. Diagnosis and management of stress-related hair fall at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/telogen',
    keywords: 'Telogen effluvium, Temporary hair fall, Stress hair loss, Hair shedding treatment'
  },
  {
    path: '/hair-transplant/alopecia',
    title: 'Alopecia Areata Treatment in Gurgaon | Patchy Hair Loss | Satya',
    description: 'Advanced treatment for Alopecia Areata (patchy hair loss) in Gurgaon. Immunotherapy, PRP, and latest treatments for bald patches at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/alopecia',
    keywords: 'Alopecia areata, Patchy hair loss, Bald patches treatment, Autoimmune hair loss'
  },
  {
    path: '/hair-transplant/male-hair-loss',
    title: 'Male Hair Loss Treatment in Gurgaon | Androgenetic Alopecia | Satya',
    description: 'Complete male hair loss treatment for androgenetic alopecia (pattern baldness). Medical and surgical solutions at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/male-hair-loss',
    keywords: 'Male hair loss, Pattern baldness, Androgenetic alopecia, Hair fall treatment men'
  },
  {
    path: '/hair-transplant/female-hair-loss',
    title: 'Female Hair Loss Treatment in Gurgaon | Hair Thinning Solutions | Satya',
    description: 'Effective female hair loss treatment for thinning hair, low density, and hormonal hair fall. Expert care at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/female-hair-loss',
    keywords: 'Female hair loss, Hair thinning, Women hair fall, Hormonal hair loss'
  },
  {
    path: '/hair-transplant/synthetic',
    title: 'Synthetic Hair Transplant in Gurgaon | Bio-Fibre | Satya',
    description: 'Synthetic hair transplant (Bio-Fibre) for patients with limited donor hair. Artificial hair fibers for instant density at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/hair-transplant/synthetic',
    keywords: 'Synthetic hair transplant, Bio-fibre, Artificial hair, Limited donor solution'
  },
  {
    path: '/hair-transplant/hair-weaving',
    title: 'Hair Weaving in Gurgaon | Non-Surgical Hair Replacement | Satya',
    description: 'Hair weaving and non-surgical hair replacement in Gurgaon. Instant hair density without surgery. Natural-looking hair systems at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/hair-weaving',
    keywords: 'Hair weaving, Non-surgical hair replacement, Hair system, Instant hair density'
  },
  {
    path: '/hair-transplant/mesotherapy',
    title: 'Mesotherapy for Hair Loss in Gurgaon | Vitamin Injection Therapy | Satya',
    description: 'Mesotherapy for hair loss in Gurgaon. Vitamin and nutrient injections to nourish scalp and promote hair growth. Effective treatment at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/mesotherapy',
    keywords: 'Mesotherapy hair loss, Vitamin injection, Scalp nutrition, Hair growth therapy'
  },
  {
    path: '/hair-transplant/stem-cell',
    title: 'Stem Cell Hair Transplant in Gurgaon | Regenerative Therapy | Satya',
    description: 'Stem cell hair transplant in Gurgaon using regenerative medicine. Growth factor therapy for natural hair regrowth. Advanced treatment at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/stem-cell',
    keywords: 'Stem cell hair transplant, Regenerative therapy, Growth factor, Natural hair regrowth'
  },
  {
    path: '/hair-transplant/prp',
    title: 'PRP Hair Treatment in Gurgaon | Platelet Rich Plasma Therapy | Satya',
    description: 'PRP hair treatment in Gurgaon using your own blood platelets. Natural growth factors to stimulate hair regrowth. Effective for hair thinning.',
    canonical: 'https://satyaskinhair.com/hair-transplant/prp',
    keywords: 'PRP hair treatment, Platelet rich plasma, Hair regrowth therapy, Natural treatment'
  },
  {
    path: '/hair-transplant/laser-comb',
    title: 'Laser Comb Treatment for Hair Loss in Gurgaon | Low Level Laser | Satya',
    description: 'Laser comb treatment (Low Level Laser Therapy) for hair loss in Gurgaon. Non-invasive light therapy to stimulate hair follicles at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/laser-comb',
    keywords: 'Laser comb, Low level laser therapy, LLLT, Light therapy for hair'
  },
  {
    path: '/hair-transplant/scalp-micropigmentation',
    title: 'Scalp Micropigmentation in Gurgaon | SMP for Hair Loss | Satya',
    description: 'Scalp micropigmentation (SMP) in Gurgaon for hair loss camouflage. Natural-looking scalp tattoo for buzz cut look or scar coverage at Satya.',
    canonical: 'https://satyaskinhair.com/hair-transplant/scalp-micropigmentation',
    keywords: 'Scalp micropigmentation, SMP, Hair tattoo, Buzz cut look, Scar camouflage'
  },

  // ================= SKIN TREATMENT PAGES =================
  {
    path: '/skin/laser-hair-reduction',
    title: 'Laser Hair Reduction in Gurgaon | Permanent Hair Removal | Satya',
    description: 'Safe and effective laser hair reduction in Gurgaon. Advanced laser technology for permanent hair removal. Book consultation at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/laser-hair-reduction',
    keywords: 'Laser hair reduction, Permanent hair removal, Laser treatment Gurgaon, Painless laser'
  },
  {
    path: '/skin/chemical-peel',
    title: 'Chemical Peel Treatment in Gurgaon | Skin Rejuvenation | Satya',
    description: 'Chemical peel treatment for glowing skin at Satya Skin & Hair Solutions. Reduce acne scars, pigmentation, and fine lines. Best dermatologist in Gurgaon.',
    canonical: 'https://satyaskinhair.com/skin/chemical-peel',
    keywords: 'Chemical peel, Skin rejuvenation, Acne scar treatment, Glowing skin, Pigmentation removal'
  },
  {
    path: '/skin/mole-removal',
    title: 'Mole Removal in Gurgaon | Safe & Scarless Procedure | Satya',
    description: 'Safe and scarless mole removal in Gurgaon. Advanced laser and surgical techniques for removing moles, skin tags, and warts at Satya.',
    canonical: 'https://satyaskinhair.com/skin/mole-removal',
    keywords: 'Mole removal, Skin tag removal, Wart removal, Scarless procedure'
  },
  {
    path: '/skin/laser-toning',
    title: 'Laser Toning in Gurgaon | Skin Brightening Treatment | Satya',
    description: 'Laser toning for skin brightening, pigmentation, and uneven skin tone in Gurgaon. Q-Switch laser treatment for radiant skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/laser-toning',
    keywords: 'Laser toning, Skin brightening, Pigmentation treatment, Q-Switch laser'
  },
  {
    path: '/skin/fractional-co2-laser',
    title: 'Fractional CO2 Laser in Gurgaon | Scar & Wrinkle Reduction | Satya',
    description: 'Fractional CO2 laser treatment for deep scars, wrinkles, and skin tightening in Gurgaon. Advanced resurfacing laser at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/fractional-co2-laser',
    keywords: 'Fractional CO2 laser, Scar reduction, Wrinkle treatment, Skin resurfacing'
  },
  {
    path: '/skin/mnrf-treatment',
    title: 'MNRF Treatment in Gurgaon | Microneedling with Radiofrequency | Satya',
    description: 'MNRF (Microneedling with Radiofrequency) for skin tightening, acne scars, and pore reduction in Gurgaon. Advanced collagen induction therapy at Satya.',
    canonical: 'https://satyaskinhair.com/skin/mnrf-treatment',
    keywords: 'MNRF treatment, Microneedling RF, Skin tightening, Acne scar treatment'
  },
  {
    path: '/skin/carbon-facial',
    title: 'Carbon Laser Facial in Gurgaon | Hollywood Facial | Satya',
    description: 'Carbon laser facial (Hollywood facial) for glowing, poreless skin in Gurgaon. Painless treatment for dull skin, blackheads, and oil control at Satya.',
    canonical: 'https://satyaskinhair.com/skin/carbon-facial',
    keywords: 'Carbon facial, Hollywood facial, Glowing skin, Pore reduction, Blackhead removal'
  },
  {
    path: '/skin/hifu',
    title: 'HIFU Treatment in Gurgaon | Non-Surgical Face Lift | Satya',
    description: 'HIFU (High Intensity Focused Ultrasound) for non-surgical face lift and skin tightening in Gurgaon. Anti-aging treatment without surgery at Satya.',
    canonical: 'https://satyaskinhair.com/skin/hifu',
    keywords: 'HIFU treatment, Non-surgical facelift, Skin tightening, Anti-aging ultrasound'
  },
  {
    path: '/skin/5d-facial',
    title: '5D Facial in Gurgaon | Multi-Dimensional Skin Treatment | Satya',
    description: '5D facial treatment for deep cleansing, exfoliation, and skin rejuvenation in Gurgaon. Complete facial experience at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/5d-facial',
    keywords: '5D facial, Multi-dimensional facial, Skin rejuvenation, Deep cleansing facial'
  },
  {
    path: '/skin/vampire-facelift',
    title: 'Vampire Facelift in Gurgaon | PRP Face Lift | Satya',
    description: 'Vampire facelift (PRP facelift) for natural facial rejuvenation in Gurgaon. Using your own platelets for youthful, glowing skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/vampire-facelift',
    keywords: 'Vampire facelift, PRP facelift, Natural facelift, Platelet rich plasma face'
  },
  {
    path: '/skin/mesotherapy',
    title: 'Skin Mesotherapy in Gurgaon | Vitamin Injection Facial | Satya',
    description: 'Skin mesotherapy with vitamin and nutrient injections for glowing, hydrated skin in Gurgaon. Customized skin rejuvenation treatment at Satya.',
    canonical: 'https://satyaskinhair.com/skin/mesotherapy',
    keywords: 'Skin mesotherapy, Vitamin injection facial, Skin hydration, Glowing skin'
  },
  {
    path: '/skin/lip-enhancement',
    title: 'Lip Enhancement in Gurgaon | Natural Lip Fillers | Satya',
    description: 'Lip enhancement with dermal fillers in Gurgaon. Natural-looking fuller lips with hyaluronic acid fillers. Safe and effective treatment at Satya.',
    canonical: 'https://satyaskinhair.com/skin/lip-enhancement',
    keywords: 'Lip enhancement, Lip fillers, Fuller lips, Hyaluronic acid lips'
  },
  {
    path: '/skin/photo-facial',
    title: 'IPL Photo Facial in Gurgaon | Skin Rejuvenation | Satya',
    description: 'IPL photo facial for skin rejuvenation, pigmentation, and redness in Gurgaon. Intense Pulsed Light treatment for clear, even skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/photo-facial',
    keywords: 'IPL photo facial, Intense pulsed light, Skin rejuvenation, Pigmentation treatment'
  },
  {
    path: '/skin/microdermabrasion',
    title: 'Microdermabrasion in Gurgaon | Skin Exfoliation Treatment | Satya',
    description: 'Microdermabrasion for gentle skin exfoliation and rejuvenation in Gurgaon. Remove dead skin cells for fresh, glowing complexion at Satya.',
    canonical: 'https://satyaskinhair.com/skin/microdermabrasion',
    keywords: 'Microdermabrasion, Skin exfoliation, Glowing skin, Dead skin removal'
  },
  {
    path: '/skin/botox',
    title: 'Botox Treatment in Gurgaon | Wrinkle Reduction & Anti-Aging | Satya',
    description: 'Botox treatment for wrinkles, fine lines, and facial rejuvenation in Gurgaon. Safe and effective results by expert dermatologists at Satya.',
    canonical: 'https://satyaskinhair.com/skin/botox',
    keywords: 'Botox treatment, Wrinkle reduction, Anti-aging, Facial rejuvenation'
  },
  {
    path: '/skin/clearskin-laser',
    title: 'ClearSkin Laser in Gurgaon | Acne & Scar Treatment | Satya',
    description: 'ClearSkin laser for active acne and acne scars in Gurgaon. Advanced laser technology for clear, blemish-free skin at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/clearskin-laser',
    keywords: 'ClearSkin laser, Acne treatment, Acne scar removal, Blemish-free skin'
  },
  {
    path: '/skin/clearlift-laser',
    title: 'ClearLift Laser in Gurgaon | Non-Surgical Face Lift | Satya',
    description: 'ClearLift laser for non-surgical facelift and skin tightening in Gurgaon. Painless laser treatment for wrinkles and sagging skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/clearlift-laser',
    keywords: 'ClearLift laser, Non-surgical facelift, Skin tightening, Wrinkle reduction'
  },
  {
    path: '/skin/forma-facial',
    title: 'Forma Facial in Gurgaon | Radiofrequency Skin Tightening | Satya',
    description: 'Forma facial using radiofrequency for skin tightening and collagen stimulation in Gurgaon. Non-invasive face lift treatment at Satya.',
    canonical: 'https://satyaskinhair.com/skin/forma-facial',
    keywords: 'Forma facial, Radiofrequency skin tightening, Collagen stimulation, Non-invasive facelift'
  },
  {
    path: '/skin/prp-therapy',
    title: 'PRP Therapy in Gurgaon | Hair & Skin Rejuvenation | Satya',
    description: 'PRP therapy for hair loss and skin rejuvenation in Gurgaon. Natural growth factor treatment for youthful skin and hair regrowth at Satya.',
    canonical: 'https://satyaskinhair.com/skin/prp-therapy',
    keywords: 'PRP therapy, Platelet rich plasma, Hair regrowth, Skin rejuvenation'
  },
  {
    path: '/skin/aft-ssr',
    title: 'AFT SSR Treatment in Gurgaon | Advanced Light Therapy | Satya',
    description: 'AFT SSR (Advanced Fluorescence Technology) for skin rejuvenation and hair removal in Gurgaon. Safe and effective light therapy at Satya.',
    canonical: 'https://satyaskinhair.com/skin/aft-ssr',
    keywords: 'AFT SSR, Advanced fluorescence technology, Light therapy, Skin rejuvenation'
  },
  {
    path: '/skin/dermal-fillers',
    title: 'Dermal Fillers in Gurgaon | Wrinkle & Volume Correction | Satya',
    description: 'Dermal fillers for wrinkle correction, volume restoration, and facial contouring in Gurgaon. Natural-looking results at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/dermal-fillers',
    keywords: 'Dermal fillers, Wrinkle correction, Volume restoration, Facial contouring'
  },
  {
    path: '/skin/wrinkles-fine-lines',
    title: 'Wrinkles & Fine Lines Treatment in Gurgaon | Anti-Aging | Satya',
    description: 'Advanced treatment for wrinkles and fine lines in Gurgaon. Botox, fillers, and laser treatments for youthful, smooth skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/wrinkles-fine-lines',
    keywords: 'Wrinkle treatment, Fine lines removal, Anti-aging, Youthful skin'
  },
  {
    path: '/skin/pigmentation',
    title: 'Pigmentation Treatment in Gurgaon | Dark Spots Removal | Satya',
    description: 'Effective pigmentation treatment for dark spots, melasma, and uneven skin tone in Gurgaon. Advanced laser and peel treatments at Satya.',
    canonical: 'https://satyaskinhair.com/skin/pigmentation',
    keywords: 'Pigmentation treatment, Dark spots removal, Melasma treatment, Even skin tone'
  },
  {
    path: '/skin/dull-skin-open-pores',
    title: 'Dull Skin & Open Pores Treatment in Gurgaon | Skin Radiance | Satya',
    description: 'Treatment for dull skin and open pores in Gurgaon. Carbon laser, chemical peels, and MNRF for radiant, poreless skin at Satya.',
    canonical: 'https://satyaskinhair.com/skin/dull-skin-open-pores',
    keywords: 'Dull skin treatment, Open pores reduction, Skin radiance, Poreless skin'
  },
  {
    path: '/skin/acne-scars',
    title: 'Acne Scar Treatment in Gurgaon | Scar Removal | Satya',
    description: 'Advanced acne scar treatment in Gurgaon. CO2 laser, MNRF, and chemical peels for smooth, scar-free skin at Satya Skin & Hair Solutions.',
    canonical: 'https://satyaskinhair.com/skin/acne-scars',
    keywords: 'Acne scar treatment, Scar removal, CO2 laser, MNRF, Smooth skin'
  },
  {
    path: '/skin/body-contouring-treatment-gurgaon',
    title: 'Body Contouring Treatment in Gurgaon | Non-Surgical Fat Reduction | Satya',
    description: 'Non-surgical body contouring for fat reduction and skin tightening in Gurgaon. Advanced treatments for sculpted body at Satya.',
    canonical: 'https://satyaskinhair.com/skin/body-contouring-treatment-gurgaon',
    keywords: 'Body contouring, Fat reduction, Non-surgical lipolysis, Skin tightening'
  },

];

export default routes;

// First, build your React app with Vite
console.log('📦 Building React app...');
import { execSync } from 'child_process';
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Read the built index.html from Vite (this contains the script tags)
const viteDistPath = path.join(__dirname, 'dist');
const baseHtmlPath = path.join(viteDistPath, 'index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('❌ Build failed - dist/index.html not found');
  process.exit(1);
}

let baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

// Function to inject SEO tags while preserving React app
function injectSEOTags(html, routeData) {
  // Remove existing title and meta tags
  html = html.replace(/<title>.*?<\/title>/, '');
  html = html.replace(/<meta name="description".*?>/, '');
  html = html.replace(/<meta name="keywords".*?>/, '');
  html = html.replace(/<meta property="og:title".*?>/, '');
  html = html.replace(/<meta property="og:description".*?>/, '');
  html = html.replace(/<link rel="canonical".*?>/, '');
  
  // Create SEO tags
  const seoTags = `
    <title>${routeData.title}</title>
    <meta name="description" content="${routeData.description}" />
    <meta name="keywords" content="${routeData.keywords}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${routeData.canonical}" />
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${routeData.title}" />
    <meta property="og:description" content="${routeData.description}" />
    <meta property="og:url" content="${routeData.canonical}" />
    <meta property="og:image" content="https://satyaskinhair.com/og-image.jpg" />
    <meta property="og:site_name" content="Satya Skin Hair Solutions" />
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${routeData.title}" />
    <meta name="twitter:description" content="${routeData.description}" />
    <meta name="twitter:image" content="https://satyaskinhair.com/og-image.jpg" />
  `;
  
  // Insert SEO tags after charset meta tag
  html = html.replace('<meta charset="UTF-8" />', `<meta charset="UTF-8" />${seoTags}`);
  
  return html;
}

// Create a backup of the original Vite build
const staticDistPath = path.join(__dirname, 'static_dist');
if (fs.existsSync(staticDistPath)) {
  fs.rmSync(staticDistPath, { recursive: true, force: true });
}
fs.mkdirSync(staticDistPath);

// Copy all files from Vite dist to static_dist
console.log('📁 Copying build files...');
fs.cpSync(viteDistPath, staticDistPath, { recursive: true });

// Now generate SEO-optimized HTML files
console.log('\n📄 Generating SEO-optimized HTML files...');
routes.forEach(route => {
  // Read the current HTML (which has all React scripts)
  let html = fs.readFileSync(path.join(staticDistPath, 'index.html'), 'utf8');
  
  // Inject SEO tags
  html = injectSEOTags(html, route);
  
  if (route.path === '/') {
    fs.writeFileSync(path.join(staticDistPath, 'index.html'), html);
    console.log(`✅ Generated: index.html`);
  } else {
    // Create folder structure
    const folderPath = path.join(staticDistPath, route.path.slice(1));
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(path.join(folderPath, 'index.html'), html);
    console.log(`✅ Generated: ${route.path.slice(1)}/index.html`);
  }
});

// Also copy .htaccess if it exists
const htaccessPath = path.join(__dirname, '.htaccess');
if (fs.existsSync(htaccessPath)) {
  fs.copyFileSync(htaccessPath, path.join(staticDistPath, '.htaccess'));
  console.log('✅ Copied .htaccess');
}

console.log('\n🎉 Complete!');
console.log('📁 Files are in the "static_dist" folder');
console.log('📋 Upload the ENTIRE contents of "static_dist" to Hostinger');
console.log('\n⚠️ Make sure your .htaccess file is configured for React Router');