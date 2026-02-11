import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://satyaskinhair.com",
});

const routes = [
  "/", 
  "/before-after",
  "/delhi",
  "/gurgaon",

  // Skin
  "/skin/laser-hair-reduction",
  "/skin/chemical-peel",
  "/skin/mole-removal",
  "/skin/laser-toning",
  "/skin/fractional-co2-laser",
  "/skin/mnrf-treatment",
  "/skin/botox",

  // Hair
  "/beard-hair-transplant",
  "/eyebrow-transplant",
  "/hair-transplant/female",
  "/hair-transplant/fue",
  "/hair-transplant/fut",
  "/hair-transplant/body",
  "/hair-transplant/repair",
  "/hair-transplant/long",
  "/hair-weaving",

  // Case Studies
  "/case/prakhar",
  "/case/shubham",
  "/case/arjun",
  "/case/lokesh",
  "/case/gopal",
];

async function generate() {
  routes.forEach((route) => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", sitemapOutput.toString());
}

generate();
