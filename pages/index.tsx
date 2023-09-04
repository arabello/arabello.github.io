import type { NextPage } from "next";
import Head from "next/head";
import ContactsCard from "./components/ContactsCard";
import {
  Card,
  Column,
  Columns,
  Heading,
  Inline,
  Secondary,
  Stack,
} from "braid-design-system";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

const Index: NextPage = () => {
  const contacts = <ContactsCard />;
  const espanso = (
    <ProjectCard
      href="https://hub.espanso.org"
      header={
        <Image
          src="/assets/espansohub.svg"
          width={64}
          height={64}
          alt="espansohub logo icon"
        />
      }
    >
      Espanso is a privacy-first cross-platform text expander.
      <span className="fw-bolder text-primary"> Espanso Hub</span> is the
      official web application, built using Nextjs SSG technology, to search and
      explore Espanso packages.
    </ProjectCard>
  );
  const nightFocus = (
    <ProjectCard
      href="https://matteopellegrino.dev/night-focus"
      header={
        <Image src="/assets/moon.png" width={64} height={64} alt="moon icon" />
      }
    >
      I love to immerse myself with ambient sounds while coding or studying at
      night. I sought a customizable auditory experience, with a picky user
      experience that would reconcile my focus.{" "}
      <span className="fw-bolder text-primary"> Night Focus</span> helps me get
      into the Flow State.
    </ProjectCard>
  );
  return (
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

      <div className="min-vh-100 container-centered d-flex flex-column p-3 pt-0">
        <Card rounded>
          <Columns space="medium" alignY="center">
            <Column width="content">
              <Image
                className="rounded-circle avatar"
                src="/assets/profile.jpg"
                alt="profile picture"
                width={80}
                height={80}
              />
            </Column>

            <Column>
              <Stack space="none">
                <Columns space="medium">
                  <Column>
                    <Heading level="2">Matteo Pellegrino</Heading>
                  </Column>
                  <Column width="content">
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
                  </Column>
                </Columns>

                <Secondary>Software Engineer, Electronic Music Nerd</Secondary>
              </Stack>
            </Column>
          </Columns>
        </Card>

        <div className="row flex-grow-1">
          <div className="col d-none d-md-block">
            {contacts}
            {espanso}
          </div>

          <div className="col d-none d-md-block">{nightFocus}</div>

          <div className="col d-md-none">
            {contacts}
            {espanso}
            {nightFocus}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
