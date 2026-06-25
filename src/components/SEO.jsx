import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
  robots = "index, follow",
  showSchema = false,
  image = "https://satyaskinhair.com/og-image.jpg",
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Satyaskinhair",
    url: "https://satyaskinhair.com/",
    logo: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Satyaskinhair",
    url: "https://satyaskinhair.com/",
    telephone: "+91 99995 70494",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4301, DLF Phase 4, Near Galleria",
      addressLocality: "Gurugram",
      postalCode: "122002",
      addressCountry: "IN",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Hair transplant, Skin treatment, Gurgaon clinic, Delhi clinic, FUT, FUE" />
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema */}
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