import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Inter:wght@400;500&family=Caveat&display=swap" 
          rel="stylesheet" 
        />

        {/* Font Awesome for Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-1ycn6IcaQQ40/J4myo0g6bZ4cHP2lSbTvZf5e5r6pX1KtxR5vjw8aPqXf9Vf6Jr5Lr8bU3z3e3N8a4O7Gz+7w==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional Meta Tags for SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A professional portfolio showcasing skills, experiences, and projects." />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
