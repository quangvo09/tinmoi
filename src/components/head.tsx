import * as React from "react";
import Head from "next/head";

export default ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      {/* HTML meta tags */}
      <meta
        name="description"
        content="Hey google, bing, altavista, etc this is my about page, please rank me nice!"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Eduardo P. Rivero" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@eperedo" />
      <meta name="twitter:title" content="Learning NextJs" />
      <meta
        name="twitter:description"
        content="Hey twitter users! This is my about page built with NextJs!"
      />

      {/* Facebook meta tags */}
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="Hello Facebook! This is my about page built with NextJs!"
      />
      <meta property="og:site_name" content="Learning NextJs" />
      <meta property="og:url" content="http://localhost:3000" />
      <meta
        property="og:image"
        content="https://picsum.photos/id/607/200/300"
      />
      <meta property="article:published_time" content="2019-06-22" />
      <meta
        property="article:author"
        content="https://facebook.com/my-profile"
      />
    </Head>
  );
};
