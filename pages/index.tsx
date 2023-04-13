import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => (
  <div className="container-fluid d-flex flex-column min-vh-100">
    <Head>
      <title>Matteo Pellegrino | Software Engineer</title>
      <meta
        name="description"
        content="Software Engineer and Full Stack Developer who loves building digital products.
        Specialized in web technologies and cloud infrastructures.
        Enthusiastic about requirements gathering, UI/UX design, and startup environment."
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="row py-5">
      <div className="d-flex flex-column align-items-center">
        <h1 className="display-5 text-danger fw-lighter">Matteo Pellegrino</h1>
        <h2 className="display-6 text-muted fw-lighter">Software Engineer</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end mb-4 pe-md-0 mb-md-0">
        <a
          type="button"
          style={{ maxWidth: 96 }}
          className="col d-flex flex-column align-items-center me-0 me-md-4"
          href="/assets/matteo-pellegrino-cv.pdf"
        >
          <i className="bi bi-file-earmark-text" style={{ fontSize: 24 }} />
          <span>Résumé</span>
        </a>

        <a
          type="button"
          style={{ maxWidth: 96 }}
          className="col d-flex flex-column align-items-center me-0 me-md-4"
          href="#mailgo"
          data-address="matteo.pelle.pellegrino"
          data-domain="gmail.com"
        >
          <i className="bi bi-envelope" style={{ fontSize: 24 }} />
          <span>Email</span>
        </a>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start ps-md-0">
        <a
          type="button"
          style={{ maxWidth: 96 }}
          className="col d-flex flex-column align-items-center me-0 me-md-4"
          href="https://github.com/arabello"
        >
          <i className="bi bi-github" style={{ fontSize: 24 }} />
          <span>GitHub</span>
        </a>
        <a
          type="button"
          style={{ maxWidth: 96 }}
          className="col d-flex flex-column align-items-center me-0 me-md-4"
          href="https://www.linkedin.com/in/mttpll"
        >
          <i className="bi bi-linkedin" style={{ fontSize: 24 }} />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
    <div className="row flex-grow-1 py-5">
      <div className="d-flex justify-content-center">
        <h3 className="text-muted fw-lighter">WIP</h3>
      </div>
    </div>
    <div className="row pb-2">
      <div
        className="text-center justify-content-center fw-lightergit"
        style={{ color: "rgb(209, 209, 214)" }}
      >
        Copyright &#169; Matteo Pellegrino 2023. Mailto plugin by &nbsp;
        <a href="https://mailgo.dev/" style={{ color: "inherit" }}>
          mailgo.
        </a>
      </div>
    </div>
  </div>
);

export default Index;
