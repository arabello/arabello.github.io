import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.svg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body className="min-vh-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
