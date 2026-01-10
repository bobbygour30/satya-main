import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data?.[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Single post fetch error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="bg-[#FFF8EF] py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white h-[600px] animate-pulse rounded-2xl" />
      </section>
    );
  }

  if (!post) {
    return (
      <section className="bg-[#FFF8EF] py-24 px-4 text-center">
        <h2 className="text-3xl font-semibold text-[#2B333C] mb-6">Blog not found</h2>
        <Link to="/blogs" className="text-[#9E4A47] hover:underline">
          ← Back to all blogs
        </Link>
      </section>
    );
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/blog-fallback.jpg";

  const author = post._embedded?.author?.[0]?.name || "Satya Clinic";

  return (
    <section className="bg-[#FFF8EF] py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/blogs" className="text-[#9E4A47] hover:underline mb-8 inline-block">
          ← Back to Blogs
        </Link>

        <img
          src={image}
          alt={post.title.rendered}
          className="w-full h-[420px] object-cover rounded-2xl mb-8"
        />

        <p className="text-xs uppercase text-[#B87C72] mb-4">
          {new Date(post.date).toLocaleDateString("en-IN")} · {author}
        </p>

        <h1
          className="text-4xl md:text-5xl font-semibold text-[#2B333C] mb-8"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <article
          className="prose prose-lg max-w-none text-[#2B333C]"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </section>
  );
}