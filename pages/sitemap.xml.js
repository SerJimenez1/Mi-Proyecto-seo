import { posts, staticPages } from "../../data/posts";

const BASE_URL = "https://mi-proyecto-seo-nine.vercel.app";

function generateSitemap() {
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
  const urls = [...staticPages, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${BASE_URL}${url}</loc></url>`).join("\n")}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}