import Link from "next/link";

const Custom404 = () => (
  <div className="container-fluid d-flex flex-column min-vh-100">
    <div className="row min-vh-100 justify-content-center align-items-center">
      <div>
        <h1 className="display-4 text-center">404</h1>
        <h1 className="display-6 text-center text-muted">Page not found</h1>
        <h4 className="text-center mt-5 fw-light">
          <Link href="/">
            <a className="link-secondary">bring me home</a>
          </Link>
        </h4>
      </div>
    </div>
  </div>
);

export default Custom404;
