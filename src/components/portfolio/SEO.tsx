import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Sakib MD Nazmush - Full-Stack Developer",
  description = "A versatile Full-Stack Developer & Tech Automation Expert specializing in React, Node.js, and WordPress. Explore my portfolio of high-performance web applications and automation tools.",
  name = "Sakib MD Nazmush",
  type = "website",
  image = "/og-image.png", // Ensure you have a nice preview image in the public folder
  url = "https://sakibsnaz.com", // Or your main URL
}: SEOProps) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="google-site-verification" content="A_KMFXmfMGUCa8Kd19jOQ5ZhDAMxbdZYjfRGKFvbKEQ" />
      <meta name="description" content={description} />
      
      {/* Open Graph tags for Facebook, LinkedIn, Discord etc. */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@sakibsnaz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* JSON-LD structured data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": name,
          "url": url,
          "sameAs": [
            "https://github.com/nazsakib",
            "https://linkedin.com/in/sakibsnaz",
            "https://dev.to/sakibsnaz"
          ],
          "jobTitle": "Full-Stack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Zepto Apps"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
