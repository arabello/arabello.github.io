import Link from "next/link";
import { Metadata } from "next";
import { Content } from "../components/layout";

export const metadata: Metadata = {
  title: "Matteo Pellegrino | 404 Not Found",
  description: "404 page not found on matteopellegrino.me",
  openGraph: {
    title: "Matteo Pellegrino | 404 Not Found",
    description: "404 page not found on matteopellegrino.me",
  },
};

export default function NotFound() {
  return (
    <Content>
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div>
          <h1 className="display-4 text-center">404</h1>
          <h1 className="display-6 text-center text-muted">Page not found</h1>
          <h4 className="text-center mt-5 fw-light">
            <Link href="/">bring me home</Link>
          </h4>
        </div>
      </div>
    </Content>
  );
}
