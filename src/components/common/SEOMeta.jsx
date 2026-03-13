import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOMeta({ caseStudy }) {
  // Force set document title directly as a fallback
  useEffect(() => {
    if (caseStudy?.seo?.metaTitle) {
      document.title = caseStudy.seo.metaTitle;
    } else if (caseStudy?.name) {
      const defaultTitle = `${caseStudy.name}'s Hair Transplant Journey | Satya Skin & Hair`;
      document.title = defaultTitle;
    }
  }, [caseStudy]);

  if (!caseStudy) return null;

  // Get SEO data with fallbacks
  const metaTitle = caseStudy.seo?.metaTitle || 
                    `${caseStudy.name}'s Hair Transplant Journey | Satya Skin & Hair`;
  
  const metaDescription = caseStudy.seo?.metaDescription || 
                         `View ${caseStudy.name}'s hair transplant case study. See before and after results, graft details, and transformation journey at Satya Skin & Hair.`;

  // ===== FEATURE IMAGE FOR SOCIAL SHARING =====
  // Priority: 1. Custom OG image from SEO, 2. First after image, 3. First before image
  const getFeatureImage = () => {
    // If custom OG image is set in SEO, use that
    if (caseStudy.seo?.ogImage) {
      return caseStudy.seo.ogImage;
    }
    
    // Otherwise, use the first "after" image (best result)
    if (caseStudy.heroImages?.after?.length > 0) {
      return caseStudy.heroImages.after[0].url;
    }
    
    // Fallback to first "before" image
    if (caseStudy.heroImages?.before?.length > 0) {
      return caseStudy.heroImages.before[0].url;
    }
    
    // Ultimate fallback - default clinic logo/image
    return 'https://satyaskinhair.com/default-og-image.jpg';
  };

  const featureImage = getFeatureImage();
  const canonicalUrl = `https://satyaskinhair.com/case/${caseStudy.slug}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={featureImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${caseStudy.name} hair transplant result`} />
      <meta property="og:site_name" content="Satya Skin & Hair" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={featureImage} />
      <meta name="twitter:image:alt" content={`${caseStudy.name} hair transplant result`} />
    </Helmet>
  );
}