import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://blogs.satyaskinhair.com/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${POSTS_PER_PAGE}`
    )
      .then((res) => {
        const total = res.headers.get("X-WP-TotalPages");
        if (total) setTotalPages(Number(total));
        return res.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Blog fetch error:", err);
        setLoading(false);
      });
  }, [page]);

  return (
    <section className="bg-[#FFF8EF] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-[#B87C72] mb-3">
            Medical Knowledge
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            Satya Blog & Insights
          </h1>
          <p className="mt-5 text-[#828D9C]">
            Expert-backed articles on skin, hair & aesthetics.
          </p>
        </motion.div>

        {/* LOADING */}
        {loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[420px] bg-white rounded-2xl animate-pulse" />
            ))}
          </div>
        )}

        {/* GRID */}
        {!loading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              // Debug helper - remove later
              // console.log("Post:", post.id, "slug:", post.slug);

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
                           hover:-translate-y-2 transition duration-500 hover:shadow-2xl"
                >
                  <Link 
                    to={`/blogs/${post.slug}`}
                    className="block h-full"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={image}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <p className="text-xs uppercase text-[#B87C72] mb-2">
                        {new Date(post.date).toLocaleDateString("en-IN")} · {author}
                      </p>

                      <h2
                        className="text-xl font-semibold text-[#2B333C] mb-3 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />

                      <div
                        className="text-sm text-[#828D9C] line-clamp-3 mb-6"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />

                      <span className="mt-auto text-[#9E4A47] hover:underline inline-block">
                        Read Full Article →
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* Optional: Simple pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-6 py-2 bg-white border rounded-lg disabled:opacity-40"
            >
              Previous
            </button>
            <span className="px-6 py-2">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page >= totalPages}
              className="px-6 py-2 bg-white border rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}