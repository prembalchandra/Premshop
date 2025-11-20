import { Helmet, HelmetProvider } from "react-helmet-async";

export default function SeoComponents({ title, description, keywords, canonical }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>

        {description && (
          <meta name="description" content={description} />
        )}

        {keywords && (
          <meta name="keywords" content={keywords} />
        )}

        {canonical && (
          <link rel="canonical" href={canonical} />
        )}

        {/* Open Graph */}
        <meta property="og:title" content={title} />

        {description && (
          <meta property="og:description" content={description} />
        )}

        {canonical && (
          <meta property="og:url" content={canonical} />
        )}
      </Helmet>
    </HelmetProvider>
  );
}
