import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap-theme.css";
import "../styles/bootstrap-override.css";
import { Metadata, Viewport } from "next";
import { Page } from "../components/layout";
import { BASE_URL } from "./constants";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
