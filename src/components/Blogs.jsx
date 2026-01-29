import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?_embed&per_page=3&order=desc&orderby=date`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching latest blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full bg-[#FFF8EF] sm:py-16 py-4  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#B87C72] mb-3">
            Knowledge & Care
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            Blogs
          </h1>
          <p className="mt-4 text-[#828D9C] max-w-2xl mx-auto">
            Explore expert insights and practical tips through our health and wellness blogs.
          </p>
        </motion.div>

        {/* ================= LOADING STATE ================= */}
        {loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-[420px] bg-white rounded-2xl animate-pulse"
              />
            ))}
          </div>
        )}

        {/* ================= BLOG GRID – LATEST 3 ================= */}
        {!loading && posts.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/blog-fallback.jpg";

              const author =
                post._embedded?.author?.[0]?.name || "Satya Clinic";

              return (
                <motion.article
                  key={post.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#FCEBDE] 
                           transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#9E4A47]/10"
                >
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="block h-full group"
                  >
                    {/* IMAGE */}
                    <div className="h-56 overflow-hidden">
                      <img
                        src={image}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col h-full">
                      <p className="text-xs uppercase tracking-wide text-[#B87C72] mb-3">
                        {new Date(post.date).toLocaleDateString("en-IN")} · {author}
                      </p>

                      <h2
                        className="text-xl md:text-2xl font-semibold text-[#2B333C] mb-3 line-clamp-2 group-hover:text-[#9E4A47] transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />

                      <div
                        className="text-sm text-[#828D9C] leading-relaxed line-clamp-3 mb-6"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />

                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#9E4A47] group-hover:text-[#84332F] transition">
                        Read Article →
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* ================= NO POSTS FALLBACK ================= */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-16 text-[#828D9C]">
            No recent insights available at the moment.
          </div>
        )}

        {/* Optional: small link to all blogs if you want */}
        {!loading && posts.length > 0 && (
          <div className="text-center mt-10">
            <Link
              to="/blogs" // ← change this route to your full blog list page
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E4A47] text-white rounded-full hover:bg-[#84332F] transition font-medium"
            >
              View All Insights →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}