import { motion } from "framer-motion";
import { ExternalLink, Calendar, Heart, MessageCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import OptimizedImage from "@/components/ui/OptimizedImage";

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
  user: {
    name: string;
    profile_image_90: string;
  };
}

const fetchArticles = async (): Promise<DevToArticle[]> => {
  const timestamp = new Date().getTime();
  const res = await fetch(`https://dev.to/api/articles/latest?username=sakibsnaz&per_page=6&t=${timestamp}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
};

const Blog = () => {
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ["devto-articles-fresh"],
    queryFn: fetchArticles,
    staleTime: 0, // Always refetch to ensure latest dev.to posts are shown
    refetchOnWindowFocus: true,
  });

  return (
    <section id="blog" className="py-24 bg-surface-warm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                {/* Cover image */}
                <div className={`relative overflow-hidden border-b border-border bg-secondary shrink-0 ${i === 0 ? "h-56 md:h-[22rem]" : "h-40"}`}>
                  {article.cover_image ? (
                    <OptimizedImage
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                      <span className="text-4xl">✍️</span>
                    </div>
                  )}
                  
                  {/* 1. "Latest" / "Featured" Badge */}
                  {i === 0 && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-[0.65rem] font-bold shadow-lg flex items-center gap-2 z-10">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                      </span>
                      Featured Post
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm text-[0.65rem] font-bold text-muted-foreground z-10">
                    {article.reading_time_minutes} min read
                  </div>

                  {/* 5. Hover Overlay Effects */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-0">
                    <span className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/10 text-white border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xl">
                      Read on Dev.to <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow relative">
                  <h3 className={`font-heading font-bold text-foreground leading-snug group-hover:text-primary transition-colors ${i === 0 ? "text-xl md:text-3xl line-clamp-3" : "text-sm line-clamp-2"}`}>
                    {article.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed mt-3 flex-grow ${i === 0 ? "text-sm md:text-base line-clamp-4" : "text-xs line-clamp-3"}`}>
                    {article.description}
                  </p>

                  {/* 3. Dynamic Tag Display */}
                  {article.tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 mb-2">
                      {article.tag_list.slice(0, i === 0 ? 5 : 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.6rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-secondary text-muted-foreground group-hover:bg-teal-light group-hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    {/* 4. Author Profile Image & Name */}
                    <div className="flex items-center gap-2">
                      {article.user?.profile_image_90 && (
                         <OptimizedImage 
                           src={article.user.profile_image_90} 
                           alt={article.user.name} 
                           className="w-5 h-5 rounded-full" 
                           wrapperClassName="w-5 h-5 rounded-full"
                         />
                      )}
                      <span className="text-xs font-medium text-foreground">{article.user?.name || "Sakib"}</span>
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
                      {/* 2. "Read Article ↗" Arrow (subtle icon at bottom) */}
                      <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
