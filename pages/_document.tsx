import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body className="min-vh-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
