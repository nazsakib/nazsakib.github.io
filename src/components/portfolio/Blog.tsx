import { motion } from "framer-motion";
import { ExternalLink, Heart, MessageCircle, Loader2 } from "lucide-react";
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
    staleTime: 0, 
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              if (i === 0) {
                return (
                  <motion.a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative md:col-span-3 flex flex-col bg-slate-dark border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-500 min-h-[400px] lg:min-h-[480px]"
                  >
                    {/* Background Layer with Multi-Glow */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] animate-pulse" />
                      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal/5 blur-[100px]" />
                    </div>

                    {/* Image Section (Hero Style) */}
                    <div className="relative w-full h-[300px] md:h-auto md:absolute md:inset-0 md:left-1/2 overflow-hidden">
                      {article.cover_image ? (
                        <OptimizedImage
                          src={article.cover_image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 md:opacity-70"
                          wrapperClassName="w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-dark to-slate-900" />
                      )}
                      
                      {/* Modern Floating Stats Pill */}
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-4 px-4 py-2 md:px-5 md:py-2.5 bg-slate-dark/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-20 transition-transform group-hover:translate-y-[-5px]">
                        <div className="flex items-center gap-2">
                          <Heart size={16} className="text-primary fill-primary/20" />
                          <span className="text-xs font-black text-white">{article.positive_reactions_count}</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2">
                          <MessageCircle size={16} className="text-primary fill-primary/20" />
                          <span className="text-xs font-black text-white">{article.comments_count}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark via-slate-dark/40 to-transparent md:bg-gradient-to-r md:from-slate-dark md:via-slate-dark/20 md:to-transparent" />
                    </div>

                    {/* Content Section (Smart Column) */}
                    <div className="relative z-10 w-full md:w-[60%] p-8 md:p-12 lg:p-20 flex flex-col justify-center items-start">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[0.65rem] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                          Latest Release
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[0.65rem] font-bold">
                          {article.reading_time_minutes} min read
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] mb-6 group-hover:text-primary transition-colors tracking-tighter">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm md:text-lg text-white/50 leading-relaxed line-clamp-2 mb-10 max-w-2xl font-light italic">
                        "{article.description}"
                      </p>

                      <div className="flex items-center gap-5 pt-8 border-t border-white/5 w-full group/author">
                        {article.user?.profile_image_90 && (
                           <div className="relative">
                             <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
                             <OptimizedImage 
                               src={article.user.profile_image_90} 
                               alt={article.user.name} 
                               className="relative w-14 h-14 rounded-2xl border-2 border-white/10 object-cover grayscale group-hover/author:grayscale-0 transition-all duration-500" 
                               wrapperClassName="w-14 h-14 rounded-2xl"
                             />
                           </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-white tracking-tight leading-none mb-1">{article.user?.name || "Sakib"}</span>
                          <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em]">Support Engineer & Author</span>
                        </div>
                        
                        <div className="ml-auto">
                           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 rotate-[-45deg] group-hover:rotate-0">
                             <ExternalLink size={18} />
                           </div>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              }

              return (
                <motion.a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
                >
                  <div className="relative overflow-hidden aspect-video bg-secondary shrink-0">
                    {article.cover_image ? (
                      <OptimizedImage
                        src={article.cover_image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        wrapperClassName="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                        <span className="text-4xl">✍️</span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm text-[0.65rem] font-bold text-muted-foreground z-10">
                      {article.reading_time_minutes} min read
                    </div>
                  </div>

                  <div className="p-5 pt-4 flex flex-col flex-grow">
                    <h3 className="font-heading text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed mt-2 flex-grow line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        {article.user?.profile_image_90 && (
                           <OptimizedImage 
                             src={article.user.profile_image_90} 
                             alt={article.user.name} 
                             className="w-5 h-5 rounded-full" 
                             wrapperClassName="w-5 h-5 rounded-full"
                           />
                        )}
                        <span className="text-[10px] font-medium text-foreground">{article.user?.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart size={12} />
                          <span>{article.positive_reactions_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={12} />
                          <span>{article.comments_count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}

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
