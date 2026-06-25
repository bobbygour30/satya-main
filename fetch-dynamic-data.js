// fetch-dynamic-data.js
import fs from 'fs';
import path from 'path';

// Fetch blogs from WordPress
async function fetchBlogs() {
  try {
    const response = await fetch('https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?_embed&per_page=100');
    const posts = await response.json();
    
    return posts.map(post => {
      // Extract description from content
      let description = '';
      if (post.content?.rendered) {
        // Remove HTML tags and get first 160 characters
        const plainText = post.content.rendered.replace(/<[^>]*>/g, '');
        description = plainText.substring(0, 160) + '...';
      }
      
      return {
        slug: post.slug,
        title: post.title.rendered.replace(/<[^>]*>/g, ''),
        description: description || 'Read our latest blog post from Satya Skin & Hair Clinic',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://satyaskinhair.com/og-image.jpg',
        date: post.date,
        author: post._embedded?.author?.[0]?.name || 'Satya Clinic'
      };
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

// Fetch case studies from your backend API
async function fetchCaseStudies() {
  try {
    // Using your existing API structure
    const API_URL = 'https://satya-admin-backend.vercel.app/api';
    const response = await fetch(`${API_URL}/case-studies`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    // Handle both direct array and nested data structure
    const caseStudies = Array.isArray(data) ? data : (data.data || []);
    
    return caseStudies.map(cs => ({
      slug: cs.slug,
      title: cs.seo?.metaTitle || `${cs.name} | Hair Transplant Case Study | Satya`,
      description: cs.seo?.metaDescription || `${cs.name}'s hair transplant journey at Satya Skin & Hair Solutions.`,
      image: cs.heroImages?.after?.[0]?.url || cs.heroImages?.before?.[0]?.url || 'https://satyaskinhair.com/og-image.jpg',
      patientName: cs.name
    }));
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

// Main function to fetch all dynamic data
export async function fetchAllDynamicData() {
  console.log('📡 Fetching dynamic data for SEO...');
  
  const [blogs, caseStudies] = await Promise.all([
    fetchBlogs(),
    fetchCaseStudies()
  ]);
  
  console.log(`✅ Found ${blogs.length} blogs and ${caseStudies.length} case studies`);
  
  // Save to JSON file for build process
  const data = { blogs, caseStudies };
  fs.writeFileSync(
    path.join(process.cwd(), 'dynamic-data.json'),
    JSON.stringify(data, null, 2)
  );
  
  return data;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchAllDynamicData().catch(console.error);
}