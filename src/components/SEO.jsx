import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  robots = "index, follow",
  showSchema = false,
}) => {
  /* ================= ORGANIZATION SCHEMA ================= */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Satyaskinhair",
    "alternateName": "Satyaskinhairsolutions",
    "url": "https://satyaskinhair.com/",
    "logo":
      "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 99995 70494",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"],
    },
    "sameAs": [
      "https://www.youtube.com/@satyaskinhairsolutions",
      "https://www.instagram.com/satyaskinhairsolutions",
      "https://in.linkedin.com/company/satyaskinhairsolutions",
    ],
  };

  /* ================= LOCAL BUSINESS SCHEMA ================= */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "satyaskinhair",
    "image":
      "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png",
    "url": "https://satyaskinhair.com/",
    "telephone": "+91 99995 70494",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4301, DLF Phase 4, Near Galleria,",
      "addressLocality": "Gurugram",
      "postalCode": "122002",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.466383,
      "longitude": 77.0825009,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "10:00",
      "closes": "20:00",
    },
    "sameAs": [
      "https://www.facebook.com/satyaskinhairsolutions/",
      "https://www.instagram.com/satyaskinhairsolutions",
      "https://www.youtube.com/@satyaskinhairsolutions",
      "https://in.linkedin.com/company/satyaskinhairsolutions",
    ],
    "department": {
      "@type": "Dermatology",
      "name": "satyaskinhair",
      "image":
        "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png",
      "telephone": "+91 99100 94945",
    },
  };

  return (
    <Helmet>
      {/* ================= PRIMARY META ================= */}
      <title>{title}</title>

      <meta
        key="description"
        name="description"
        content={description}
      />

      {/* ================= CRAWLING ================= */}
      <meta name="robots" content={robots} />

      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      {/* ================= CANONICAL ================= */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ================= SCHEMA (HOME ONLY) ================= */}
      {showSchema && (
        <>
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>

          <script type="application/ld+json">
            {JSON.stringify(localBusinessSchema)}
          </script>
        </>
      )}
    </Helmet>
  );
};

export default SEO;
