import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
        );
        const data = await response.json();
        const blogPost = data?.[0] || null;
        setPost(blogPost);
        
        // Extract first paragraph for meta description
        if (blogPost && blogPost.content && blogPost.content.rendered) {
          // Create a temporary div to parse HTML content
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = blogPost.content.rendered;
          
          // Get the first paragraph text
          const firstParagraph = tempDiv.querySelector('p');
          let description = '';
          
          if (firstParagraph) {
            description = firstParagraph.textContent || firstParagraph.innerText;
          } else {
            // Fallback: get first 160 characters from plain text
            const plainText = tempDiv.textContent || tempDiv.innerText;
            description = plainText.substring(0, 160);
          }
          
          // Clean up description (remove extra spaces, limit length)
          description = description.trim().substring(0, 160);
          
          // If no description found, use excerpt
          if (!description && blogPost.excerpt && blogPost.excerpt.rendered) {
            const excerptDiv = document.createElement('div');
            excerptDiv.innerHTML = blogPost.excerpt.rendered;
            description = excerptDiv.textContent || excerptDiv.innerText;
            description = description.trim().substring(0, 160);
          }
          
          setMetaDescription(description);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Loading... | Satya Skin & Hair Clinic</title>
          <meta name="description" content="Please wait while we load the blog post." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <section className="bg-[#FFF8EF] py-24">
          <div className="max-w-7xl mx-auto h-[600px] bg-white animate-pulse rounded-2xl" />
        </section>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Blog Not Found | Satya Skin & Hair Clinic</title>
          <meta name="description" content="The requested blog post could not be found." />
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <section className="bg-[#FFF8EF] py-24 text-center">
          <h2 className="text-3xl text-[#2B333C]">Blog not found</h2>
          <Link to="/blogs" className="text-[#9E4A47] mt-4 inline-block">
            ← Back to Blogs
          </Link>
        </section>
      </>
    );
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-fallback.jpg";
  const author = post._embedded?.author?.[0]?.name || "Satya Clinic";
  
  // Get plain text title (remove HTML tags)
  const plainTitle = post.title.rendered.replace(/<[^>]*>/g, '');
  
  // Construct full title with site name for better SEO
  const fullTitle = `${plainTitle} | Satya Skin & Hair Clinic`;
  
  // Get current URL
  const currentUrl = `https://satyaskinhair.com/blogs/${slug}`; // Update with your actual domain

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription || "Read our latest blog post from Satya Skin & Hair Clinic"} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription || "Read our latest blog post from Satya Skin & Hair Clinic"} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={plainTitle} />
        <meta property="og:site_name" content="Satya Skin & Hair Clinic" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription || "Read our latest blog post from Satya Skin & Hair Clinic"} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={plainTitle} />
        
        {/* Article specific meta tags */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.modified || post.date} />
        <meta property="article:author" content={author} />
        <meta property="article:section" content="Blog" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content={author} />
        <meta name="keywords" content="hair transplant, skin care, satya clinic, dermatology, trichology" />
      </Helmet>

      <section className="bg-[#FFF8EF] py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": plainTitle,
              "image": image,
              "datePublished": post.date,
              "dateModified": post.modified || post.date,
              "author": {
                "@type": "Person",
                "name": author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Satya Skin & Hair Clinic",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://satyaskinhair.com/logo.png"
                },
                "url": "https://satyaskinhair.com"
              },
              "description": metaDescription,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": currentUrl
              },
              "url": currentUrl
            })}
          </script>

          <Link to="/blogs" className="text-[#9E4A47] text-sm mb-8 inline-block">
            ← Back to Blogs
          </Link>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden">
              {/* IMAGE */}
              <div className="blog-detail-image-container">
                <img
                  src={image}
                  alt={plainTitle}
                  className="w-full h-full object-cover blog-detail-image"
                  loading="eager"
                />
              </div>

              {/* CONTENT */}
              <div className="p-1 sm:p-4">
                <p className="text-xs uppercase text-[#B87C72] mb-3">
                  {new Date(post.date).toLocaleDateString("en-IN")} · {author}
                </p>

                <h1
                  className="text-3xl md:text-4xl font-semibold text-[#2B333C] leading-tight mb-8"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div className="h-px bg-[#DFDFDD] mb-10" />

                <article
                  className="wp-content text-[#2B333C]"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-8">
              {/* Search */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#2B333C] mb-4">Search</h3>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-[#DFDFDD] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                />
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#2B333C] mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/blogs/hair-loss-pcos" className="text-[#2B333C] hover:text-[#9E4A47]">
                      How to Stop Hair Loss Due to PCOS
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs/hair-transplant-side-effects" className="text-[#2B333C] hover:text-[#9E4A47]">
                      Side Effects of Hair Transplant
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs/best-nutrients-for-hair" className="text-[#2B333C] hover:text-[#9E4A47]">
                      Best Nutrients for Hair
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#2B333C] mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/blogs/category/hair" className="text-[#2B333C] hover:text-[#9E4A47]">
                      Hair
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs/category/skin" className="text-[#2B333C] hover:text-[#9E4A47]">
                      Skin
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          {/* LEAVE A REPLY */}
          <div className="bg-white rounded-2xl p-8 mt-16 max-w-3xl">
            <h3 className="text-2xl font-semibold text-[#2B333C] mb-2">
              Leave a Reply
            </h3>
            <p className="text-sm text-[#828D9C] mb-6">
              Your email address will not be published.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <textarea
                placeholder="Comment"
                className="w-full border border-[#DFDFDD] rounded-md p-4 h-32 focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="Name"
                  className="border border-[#DFDFDD] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="border border-[#DFDFDD] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9E4A47]"
                />
              </div>

              <button 
                type="submit"
                className="bg-[#9E4A47] text-white px-6 py-3 rounded-md hover:bg-[#7a3a38] transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}