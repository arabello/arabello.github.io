import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => (
  <div className="min-vh-100 bg-gradient-custom">
    <div className="container-centered d-flex flex-column">
      <Head>
        <title>Matteo Pellegrino | Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer and Full Stack Developer who loves building digital products.
        Specialized in web technologies and cloud infrastructures.
        Enthusiastic about requirements gathering, UI/UX design, and startup environment."
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="row mt-5">
        <div className="d-flex flex-column align-items-left">
          <div className="card shadow rounded-4 border-0 mb-5">
            <div className="card-body">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="rounded-circle avatar"
                  src="assets/profile.jpg"
                  alt="profile picture"
                ></img>

                <div>
                  <div className="fs-3 fw-bold text-danger">
                    Matteo Pellegrino
                  </div>
                  <div className="fs-5 fw-light text-muted">
                    Software Engineer and Electronic Music Nerd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex flex-column mt-3">
        <div className="d-flex align-items-center">
          <i className="bi bi-file-earmark-text" style={{ fontSize: 24 }} />
          <a
            type="button"
            style={{ maxWidth: 96 }}
            className="ms-2"
            href="/assets/matteo-pellegrino-cv.pdf"
          >
            <span>Résumé</span>
          </a>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-envelope" style={{ fontSize: 24 }} />
          <a
            type="button"
            style={{ maxWidth: 96 }}
            className="ms-2"
            href="#mailgo"
            data-address="matteo.pelle.pellegrino"
            data-domain="gmail.com"
          >
            <span>Email</span>
          </a>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-github" style={{ fontSize: 24 }} />
          <a
            type="button"
            style={{ maxWidth: 96 }}
            className="ms-2"
            href="https://github.com/arabello"
          >
            <span>GitHub</span>
          </a>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-linkedin" style={{ fontSize: 24 }} />
          <a
            type="button"
            style={{ maxWidth: 96 }}
            className="ms-2"
            href="https://www.linkedin.com/in/mttpll"
          >
            <span>Linkedin</span>
          </a>
        </div>
      </div>

      <div className="d-flex flex-column mt-5">
        <a href="https://hub.espanso.org" target="_blank">
          <div className="card bg-transparent mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex flex-column justify-content-center">
                <img
                  src="assets/thumbnail/espanso.webp"
                  className="img-fluid rounded-start"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Espanso</h5>
                  <p className="card-text">
                    Espanso is a privacy-first cross-platform text expander.
                    Espanso Hub is the official web application, built using
                    Nextjs SSG technology, to search and explore Espanso
                    packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://hub.espanso.org" target="_blank">
          <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div className="card-body p-0">
              <div className="d-flex align-items-center">
                <div className="p-5 col-7">
                  <h2 className="fw-bolder">Espanso Hub</h2>
                  <p>
                    Espanso is a privacy-first cross-platform text expander.
                    Espanso Hub is the official web application, built using
                    Nextjs SSG technology, to search and explore Espanso
                    packages.
                  </p>
                </div>

                <img
                  src="assets/thumbnail/espanso.webp"
                  alt="espanso.org preview thumbnail"
                ></img>
              </div>
            </div>
          </div>
        </a>

        <a href="night-focus" target="_blank">
          <div className="card bg-transparent mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-flex flex-column justify-content-center">
                <img
                  src="assets/thumbnail/night-focus.webp"
                  className="img-fluid rounded-start"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Night Focus</h5>
                  <p className="card-text">
                    I love to immerse myself with ambient sounds while coding or
                    studying at night. I wanted something tailored, with a picky
                    user experience to mix and fine-tune a variety of ambient
                    sounds. I sought a customizable auditory experience that
                    would reconcile my focus. Night Focus helps me get into the
                    Flow State.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="flex-grow-1"></div>
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
  </div>
);

export default Index;
