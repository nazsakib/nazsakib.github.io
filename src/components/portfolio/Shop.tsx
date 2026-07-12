import { useState, useEffect } from "react";
import { ShoppingBag, Loader2 } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: { url: string }[];
  variants: {
    unitPrice: {
      value: number;
      currency: string;
    };
    compareAtPrice?: {
      value: number;
      currency: string;
    };
  }[];
}

const FOURTHWALL_TOKEN = import.meta.env.VITE_FOURTHWALL_TOKEN;
const SHOP_URL = import.meta.env.VITE_SHOP_URL;

// TOGGLE THIS TO SHOW/HIDE PRODUCTS
const IS_COMING_SOON = true;

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (IS_COMING_SOON) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://storefront-api.fourthwall.com/v1/collections/all/products?storefront_token=${FOURTHWALL_TOKEN}`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        
        // Ensure data.results is an array
        if (data && Array.isArray(data.results)) {
          setProducts(data.results);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Fourthwall Fetch Error:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Helper to strip HTML tags for card preview
  const stripHtml = (html: string) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").trim();
  };

  // Helper to determine category dynamically
  const getCategory = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("shopify") || n.includes("store") || n.includes("design") || n.includes("cro")) {
      return "Store Design & CRO";
    }
    if (n.includes("generator") || n.includes("automation") || n.includes("software") || n.includes("tool")) {
      return "Software & Tools";
    }
    return "Digital Product";
  };

  if (IS_COMING_SOON) {
    return (
      <section id="shop" className="py-24 bg-slate-dark/5 border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
          <div className="absolute top-[-12%] left-[-8%] w-[35%] h-[35%] rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-[-14%] right-[-10%] w-[38%] h-[38%] rounded-full bg-teal blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Store</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Digital Products</h2>
            <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-dark text-white shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-teal/20 blur-3xl" />
              </div>

              <div className="relative z-10 grid md:grid-cols-[1.2fr_0.8fr] gap-8 p-8 md:p-12 items-center">
                <div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/40 bg-primary/20 text-primary text-[0.65rem] font-black uppercase tracking-[0.2em]">
                    Coming Soon
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-black leading-tight mt-5">
                    Premium support and automation packs are on the way.
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                    I am preparing practical digital resources for Shopify support teams, workflow automation, and operational troubleshooting.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Support Playbooks", "Automation Blueprints", "Troubleshooting Kits"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.14em] text-white/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:justify-self-end w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-3">Early Access</p>
                  <p className="text-sm text-white/75 leading-relaxed mb-6">
                    Want launch updates and early discounts?
                  </p>
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-xs font-black uppercase tracking-[0.16em] hover:shadow-glow transition-all duration-300"
                  >
                    Join Waitlist <ShoppingBag size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section id="shop" className="py-24 bg-slate-dark/5 border-y border-border/50 relative overflow-hidden">
        <div className="container flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground font-medium">Loading products...</p>
        </div>
      </section>
    );
  }

  // If there's an error or no products, we just hide the section silently
  // instead of crashing the whole page.
  if (error || !products || products.length === 0) return null;

  return (
    <section id="shop" className="py-24 bg-slate-dark/5 border-y border-border/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Store</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Digital Products</h2>
          <div className="w-10 h-0.5 bg-primary rounded-full mt-4 mb-10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => {
            // Robust check for prices and images
            const price = product.variants?.[0]?.unitPrice;
            const comparePrice = product.variants?.[0]?.compareAtPrice;
            const imageUrl = product.images?.[0]?.url || "";
            
            // If essential data is missing, skip this product instead of crashing
            if (!product.id || !product.name) return null;
            
            return (
              <div key={product.id} className={`group flex flex-col glass bg-card/40 border border-white/5 rounded-3xl overflow-hidden transition-all duration-400 backdrop-blur-md relative ${!IS_COMING_SOON ? 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-primary/5 hover:-translate-y-2' : ''}`}>
                {/* Coming Soon Center Overlay */}
                {IS_COMING_SOON && (
                  <div className="absolute inset-0 z-40 flex items-center justify-center p-6 bg-slate-dark/20 backdrop-blur-[2px]">
                    <div className="px-6 py-3 bg-slate-dark/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl scale-110">
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-white whitespace-nowrap">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                )}

                {/* Image Section */}
                <div className={`relative overflow-hidden aspect-[16/10] ${IS_COMING_SOON ? 'grayscale blur-[30px] opacity-20' : ''}`}>
                  <OptimizedImage
                    src={imageUrl}
                    alt={IS_COMING_SOON ? "Coming Soon" : product.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${!IS_COMING_SOON ? 'group-hover:scale-110' : ''}`}
                  />
                  
                  {!IS_COMING_SOON && (
                    <>
                      {/* Sale Badge */}
                      {price && comparePrice && comparePrice.value > price.value && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-tighter rounded-md shadow-xl animate-pulse-glow z-20">
                          Save {(100 - (price.value / comparePrice.value * 100)).toFixed(0)}%
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  )}
                </div>

                {/* Content Body */}
                <div className={`p-7 flex flex-col flex-grow relative ${IS_COMING_SOON ? 'opacity-20 blur-[4px]' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80">
                        {IS_COMING_SOON ? "Unannounced Release" : getCategory(product.name)}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-foreground leading-tight line-clamp-2">
                        {IS_COMING_SOON ? `Project ${String.fromCharCode(65 + i)}` : product.name}
                      </h3>
                      
                      {!IS_COMING_SOON && price && (
                        <div className="flex items-center gap-2 mt-2">
                          <div className="px-3 py-1 bg-background border border-primary/30 rounded-full shadow-sm">
                            <span className="text-sm font-black text-primary tracking-tight">
                              {price.currency === "USD" ? "$" : ""}{price.value.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    {!IS_COMING_SOON && (
                      <a
                        href={`${SHOP_URL}/products/${product.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 w-10 h-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLinkIcon size={16} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3 mb-8 italic">
                    "{IS_COMING_SOON ? "The details of this release are currently being finalized." : stripHtml(product.description)}"
                  </p>

                  <div className="mt-auto">
                    {IS_COMING_SOON ? (
                      <button
                        disabled
                        className="flex items-center justify-center w-full py-4 bg-white/5 border border-primary/30 text-xs font-bold uppercase tracking-[0.25em] rounded-2xl opacity-50 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <a
                        href={`${SHOP_URL}/products/${product.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn relative flex items-center justify-center w-full py-4 bg-white/5 border border-primary/30 text-xs font-bold uppercase tracking-[0.25em] rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/70 shadow-lg shadow-primary/5"
                      >
                        <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-primary transition-colors">
                          Unlock Access <ShoppingBag size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExternalLinkIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default Shop;
