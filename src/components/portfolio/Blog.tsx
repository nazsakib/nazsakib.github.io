import { motion } from "framer-motion";
import { ExternalLink, Calendar, Heart, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  positive_reactions_count: number;
  comments_count: number;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
}

const fetchArticles = async (): Promise<DevToArticle[]> => {
  const res = await fetch("https://dev.to/api/articles?username=sakibsnaz&per_page=6");
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
};

const Blog = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["devto-articles"],
    queryFn: fetchArticles,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <section id="blog" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Blog</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Latest Articles</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </motion.div>

        {isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden animate-pulse">
                <div className="h-40 bg-secondary" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-secondary rounded w-3/4" />
                  <div className="h-3 bg-secondary rounded w-full" />
                  <div className="h-3 bg-secondary rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-sm text-muted-foreground text-center py-10">Unable to load articles. Please try again later.</p>
        )}

        {articles && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* Cover image */}
                <div className="relative overflow-hidden border-b border-border h-40 bg-secondary">
                  {article.cover_image ? (
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                      <span className="text-4xl">✍️</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-card/80 backdrop-blur-sm text-[0.65rem] font-bold text-muted-foreground">
                    {article.reading_time_minutes} min read
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2 flex-grow line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {article.positive_reactions_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} />
                        {article.comments_count}
                      </span>
                    </div>
                  </div>

                  {article.tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {article.tag_list.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-secondary text-muted-foreground group-hover:bg-teal-light group-hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://dev.to/sakibsnaz"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Articles
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
