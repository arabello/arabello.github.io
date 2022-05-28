import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <body className="min-vh-100">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
