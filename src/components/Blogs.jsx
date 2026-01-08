import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const POSTS_PER_PAGE = 6;

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://satyaskinhair.com/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${POSTS_PER_PAGE}`
    )
      .then((res) => {
        const total = res.headers.get("X-WP-TotalPages");
        if (total) setTotalPages(Number(total));
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <section className="w-full bg-[#FFF8EF] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-[#B87C72] mb-3">
            Knowledge & Care
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2B333C]">
            Satya Insights
          </h2>
          <p className="mt-4 text-[#828D9C] max-w-2xl mx-auto">
            Honest medical perspectives, patient education, and science-led
            insights from Satya Skin & Hair Clinic.
          </p>
        </motion.div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="text-center text-[#828D9C] py-20">
            Loading articles…
          </div>
        )}

        {/* ================= GRID ================= */}
        {!loading && posts.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

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
                  {/* IMAGE */}
                  {image && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={image}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col h-full">
                    <p className="text-xs uppercase tracking-wider text-[#B87C72] mb-2">
                      {new Date(post.date).toLocaleDateString()} · {author}
                    </p>

                    <h3
                      className="text-xl font-semibold text-[#2B333C] mb-3 leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />

                    <div
                      className="text-sm text-[#828D9C] leading-relaxed mb-6 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />

                    <a
                      href={post.link}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-medium
                      text-[#9E4A47] hover:text-[#84332F] transition"
                    >
                      Read Article →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="mt-14 flex justify-center items-center gap-3 flex-wrap">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-5 py-2 rounded-full border border-[#DFDFDD]
              text-[#2B333C] bg-white hover:bg-[#FCEBDE] transition disabled:opacity-40"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition
                ${
                  page === i + 1
                    ? "bg-gradient-to-r from-[#9E4A47] to-[#84332F] text-white"
                    : "bg-white border border-[#DFDFDD] text-[#2B333C] hover:bg-[#FCEBDE]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-5 py-2 rounded-full border border-[#DFDFDD]
              text-[#2B333C] bg-white hover:bg-[#FCEBDE] transition disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
