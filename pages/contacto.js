import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nosotros para más información sobre nuestros servicios." />
        <meta name="keywords" content="contacto, soporte, Next.js" />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="Escríbenos y resolvemos tus dudas." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>Escríbenos a contacto@mi-sitio.com y te responderemos pronto.</p>
    </>
  );
}