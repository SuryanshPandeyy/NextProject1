import React from "react";
import Head from 'next/head';

const Heads = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://moneyondream.in/" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Business" />
      {/* <meta
        name="google-site-verification"
        content=""
      /> */}

      <meta property="fb:admins" content="MoneyOnDreams" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://moneyondream.in/" />
      <meta name="author" content="Suryansh Pandey" />
      <meta name="publisher" content="Suryansh Pandey" />
      <meta name="robots" content="nofollow" />
      {/* <meta
          property="og:image"
          content="/public/images/favicons/favicon.ico"
        /> */}
      <meta property="og:description" content={description} />

      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#ff7722"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="MoneyOnDreams" />
      <meta name="application-name" content="MoneyOnDreams" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Heads;
