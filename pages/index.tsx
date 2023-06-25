import type { NextPage } from "next";
import Head from "next/head";
import ContactsCard from "./components/ContactsCard";
import Card from "./components/Card";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

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
    </Head>

    <div className="min-vh-100 container-centered d-flex flex-column">
      <Card>
        <div className="card-body">
          <div className="d-flex align-items-center gap-3">
            <Image
              className="rounded-circle avatar"
              src="/assets/profile.jpg"
              alt="profile picture"
              width={86}
              height={86}
            />

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
                  <Image
                    src="/assets/icons/github.svg"
                    width={24}
                    height={24}
                    alt="github icon link"
                  />
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

          <ProjectCard
            href="https://hub.espanso.org"
            header={
              <Image
                src="/assets/espansohub.svg"
                width={46}
                height={46}
                alt="espansohub logo icon"
              />
            }
          >
            Espanso is a privacy-first cross-platform text expander.
            <span className="fw-bolder text-primary"> Espanso Hub</span> is the
            official web application, built using Nextjs SSG technology, to
            search and explore Espanso packages.
          </ProjectCard>
        </div>

        <div className="col">
          <ProjectCard
            href="https://matteopellegrino.dev/night-focus"
            header={<div className="display-5">🌙</div>}
          >
            I love to immerse myself with ambient sounds while coding or
            studying at night. I sought a customizable auditory experience, with
            a picky user experience that would reconcile my focus.{" "}
            <span className="fw-bolder text-primary"> Night Focus</span> helps
            me get into the Flow State.
          </ProjectCard>
        </div>
      </div>

      <div className="text-light text-center justify-content-center fw-lighter mb-3">
        mailto plugin by &nbsp;
        <a href="https://mailgo.dev/" style={{ color: "inherit" }}>
          mailgo.
        </a>
      </div>
    </div>
  </div>
);

export default Index;
