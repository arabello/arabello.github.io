import type { NextPage } from "next";
import Head from "next/head";
import { ContactsCard } from "./components/ContactsCard";
import { Card } from "./components/Card";

const Index: NextPage = () => (
  <div className="min-vh-100 bg-gradient-custom">
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="min-vh-100 container-centered d-flex flex-column">
      <Card>
        <div className="card-body">
          <div className="d-flex align-items-center gap-3">
            <img
              className="rounded-circle avatar"
              src="assets/profile.jpg"
              alt="profile picture"
            ></img>

            <div className="flex-grow-1 me-3">
              <div className="d-flex align-items-center">
                <div className="fs-3 fw-bold text-primary flex-grow-1">
                  Matteo Pellegrino
                </div>
                <a
                  type="button"
                  href="https://github.com/arabello"
                  target="blank"
                >
                  <img src="assets/icons/github.svg"></img>
                </a>
              </div>
              <div className="fs-5 fw-light text-muted">
                Software Engineer, Electronic Music Nerd
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="row flex-grow-1">
        <div className="col">
          <ContactsCard />

          <Card href="https://hub.espanso.org">
            <div className="card-body p-0 d-flex flex-column align-items-center">
              <img src="assets/espansohub.svg"></img>
              <div className="mt-3 p-3">
                Espanso is a privacy-first cross-platform text expander.
                <span className="fw-bolder text-primary"> Espanso Hub</span> is
                the official web application, built using Nextjs SSG technology,
                to search and explore Espanso packages.
              </div>
            </div>
          </Card>
        </div>

        <div className="col">
          <Card href="https://matteopellegrino.dev/night-focus">
            <div className="card-body p-0 d-flex flex-column align-items-center">
              <div className="display-5">🌙</div>
              <div className="mt-3 p-3">
                I love to immerse myself with ambient sounds while coding or
                studying at night.I sought a customizable auditory experience,
                with a picky user experience that would reconcile my focus.{" "}
                <span className="fw-bolder text-primary"> Night Focus</span>{" "}
                helps me get into the Flow State.
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="text-white text-center justify-content-center fw-lighter mb-3">
        Copyright &#169; Matteo Pellegrino 2023. Mailto plugin by &nbsp;
        <a href="https://mailgo.dev/" style={{ color: "inherit" }}>
          mailgo.
        </a>
      </div>
    </div>
  </div>
);

export default Index;
