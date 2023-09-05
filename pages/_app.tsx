import "braid-design-system/reset";
import apacTheme from "braid-design-system/themes/apac";
import { BraidProvider } from "braid-design-system";
import type { AppProps } from "next/app";
import mailgo from "mailgo";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo({
      actions: {
        yahoo: false,
        gmail: false,
        outlook: false,
      },
      showFooter: false,
    });
  }, []);
  return (
    <BraidProvider theme={apacTheme}>
      <Component {...pageProps} />
    </BraidProvider>
  );
}

export default MyApp;
