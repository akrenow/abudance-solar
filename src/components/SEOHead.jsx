import { useEffect } from "react";

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = "website",
  keywords,
  author = "Bronze Solar Panels Industries LLC"
}) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta tags
    const setMetaTag = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const setPropertyTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);
    setMetaTag("author", author);

    // Open Graph tags
    setPropertyTag("og:title", title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:type", ogType);
    setPropertyTag("og:url", canonicalUrl);
    if (ogImage) setPropertyTag("og:image", ogImage);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    if (ogImage) setMetaTag("twitter:image", ogImage);

    // Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonicalUrl;

  }, [title, description, canonicalUrl, ogImage, ogType, keywords, author]);

  return null;
};

export default SEOHead;
