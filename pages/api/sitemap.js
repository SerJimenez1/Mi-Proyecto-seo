import { posts, staticPages } from "../../data/posts";

const BASE_URL = "https://incomparable-platypus-8ff45d.netlify.app";

export default async function handler(req, res) {
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
  const urls = [...staticPages, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.write(sitemap);
  res.end();
}