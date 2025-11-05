import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article" | "restaurant";
  publishedAt?: string;
  updatedAt?: string;
  schemaMarkup?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = window.location.href,
  image = "https://images.unsplash.com/photo-1707151550757-fd379e80d1d2?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  type = "website",
  publishedAt,
  updatedAt,
  schemaMarkup,
}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "TABOULEH 2 Restaurant",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ledebergplein 17",
      addressLocality: "Gent",
      postalCode: "9050",
      addressCountry: "BE",
    },
    // Added Geo Coordinates for potentially better local search matching
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.0385",
      longitude: "3.7495",
    },
    telephone: "+32 466 20 67 78",
    url: "https://tabouleh2.be/",
    image,
    servesCuisine: "Syrisch, Midden-Oosters, Halal",
    priceRange: "€€",
    openingHours: [
      "Mo 14:00-22:00",
      "We 14:00-22:00",
      "Th 14:00-22:00",
      "Fr 14:00-22:00",
      "Sa 14:00-22:00",
      "Su 14:00-22:00",
    ],
    menu: "https://tabouleh2.be/menu",
    // Include aggregateRating if you have reviews
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
    },
  };

  // Merge custom schema with base schema if provided
  const fullSchema = schemaMarkup
    ? { ...baseSchema, ...schemaMarkup }
    : baseSchema;

  const siteTitle = `${title} | TABOULEH 2 Restaurant`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="nl_BE" />
      <meta property="og:site_name" content="TABOULEH 2 Restaurant" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tabouleh2restaurant" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific tags */}
      {type === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === "article" && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(fullSchema)}</script>
    </Helmet>
  );
};

export default SEO;
