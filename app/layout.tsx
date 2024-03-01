import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap-theme.css";
import "../styles/bootstrap-override.css";
import { Metadata, Viewport } from "next";
import { Page } from "../components/layout";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
  assets: [],
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
