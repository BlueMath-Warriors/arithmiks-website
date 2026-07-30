export const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "engineering", label: "Engineering" },
  { slug: "product-design", label: "Product & Design" },
  { slug: "industry-insights", label: "Industry Insights" },
  { slug: "company-news", label: "Company News" },
];

export const getCategoryLabel = (slug) =>
  CATEGORIES.find((category) => category.slug === slug)?.label || slug;
