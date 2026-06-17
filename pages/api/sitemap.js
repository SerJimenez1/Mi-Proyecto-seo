import { posts, staticPages } from "../../data/posts";

const BASE_URL = "https://mi-sitio.com"; // lo actualizaremos con tu dominio real al desplegar

export default async function handler(req, res) {
  // Combina rutas fijas con rutas generadas dinámicamente desde los "datos" del CMS/BD
  const dynamicUrls = posts.map((post) => `/blog/${post.slug}`);
  const urls = [...staticPages, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}