import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data?.[0] || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="bg-[#FFF8EF] py-24">
        <div className="max-w-7xl mx-auto h-[600px] bg-white animate-pulse rounded-2xl" />
      </section>
    );
  }

  if (!post) {
    return (
      <section className="bg-[#FFF8EF] py-24 text-center">
        <h2 className="text-3xl text-[#2B333C]">Blog not found</h2>
      </section>
    );
  }

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/blog-fallback.jpg";

  const author = post._embedded?.author?.[0]?.name || "Satya Clinic";

  return (
    <section className="bg-[#FFF8EF] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/blogs" className="text-[#9E4A47] text-sm mb-8 inline-block">
          ← Back to Blogs
        </Link>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden">
            {/* IMAGE */}
            <div className="h-[420px]">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-10">
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
                className="w-full border border-[#DFDFDD] px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#2B333C] mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="text-[#2B333C]">How to Stop Hair Loss Due to PCOS</li>
                <li className="text-[#2B333C]">Side Effects of Hair Transplant</li>
                <li className="text-[#2B333C]">Best Nutrients for Hair</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-[#2B333C] mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>Hair</li>
                <li>Skin</li>
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

          <form className="space-y-6">
            <textarea
              placeholder="Comment"
              className="w-full border border-[#DFDFDD] rounded-md p-4 h-32"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Name"
                className="border border-[#DFDFDD] p-3 rounded-md"
              />
              <input
                placeholder="Email"
                className="border border-[#DFDFDD] p-3 rounded-md"
              />
            </div>

            <button className="bg-[#9E4A47] text-white px-6 py-3 rounded-md">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
