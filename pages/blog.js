import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos sobre SEO, rendimiento web y buenas prácticas con Next.js." />
        <meta name="keywords" content="blog, Next.js, SEO, artículos" />
        <meta property="og:title" content="Blog - Mi Sitio Optimizado" />
        <meta property="og:description" content="Lee nuestros últimos artículos sobre SEO y desarrollo web." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog</h1>
      <p>Aquí encontrarás artículos sobre SEO, rendimiento y buenas prácticas en Next.js.</p>
    </>
  );
}