import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap-override.css";
import type { AppProps } from "next/app";
import mailgo from "mailgo";
import { useEffect } from "react";

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
  return <Component {...pageProps} />;
}

export default MyApp;
