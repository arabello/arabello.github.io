import {
  ButtonLink,
  Card,
  Column,
  Columns,
  Heading,
  Hidden,
  IconDocument,
  IconMail,
  IconSocialLinkedIn,
  Link,
  PageBlock,
  Secondary,
  Stack,
  Strong,
  Text,
} from "braid-design-system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const HeaderCard = () => (
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
);

const ContactsCard = () => (
  <Card>
    <Stack space="xsmall" align="center">
      <Text>Let&apos;s keep in touch 👇</Text>
      <Text />
      <ButtonLink
        href="/assets/matteo-pellegrino-cv.pdf"
        target="blank"
        variant="soft"
        size="small"
        icon={<IconDocument />}
        tone="neutral"
      >
        Curriculum Vitae
      </ButtonLink>
      <ButtonLink
        data-address="matteo.pelle.pellegrino"
        data-domain="gmail.com"
        href="#mailgo"
        variant="soft"
        size="small"
        icon={<IconMail />}
        tone="neutral"
      >
        Drop me a line
      </ButtonLink>
      <ButtonLink
        href="https://www.linkedin.com/in/mttpll"
        target="blank"
        variant="soft"
        size="small"
        icon={<IconSocialLinkedIn />}
        tone="neutral"
      >
        LinkedIn
      </ButtonLink>
    </Stack>
  </Card>
);

const ProjectCard = ({
  href,
  src,
  children,
}: {
  href: string;
  src: string;
  children: React.ReactNode;
}) => (
  <Card rounded>
    <Link href={href} target="blank">
      <Stack space="large">
        <Heading level="1" align="center">
          <Image src={src} width={64} height={64} alt="espansohub logo icon" />
        </Heading>
        <Text>{children}</Text>
      </Stack>
    </Link>
  </Card>
);

const Index: NextPage = () => {
  const espanso = (
    <ProjectCard href="https://hub.espanso.org" src="/assets/espansohub.svg">
      Espanso is a privacy-first cross-platform text expander.
      <Strong> Espanso Hub</Strong> is the official web application, built using
      Nextjs SSG technology, to search and explore Espanso packages.
    </ProjectCard>
  );

  const nightFocus = (
    <ProjectCard
      href="https://matteopellegrino.dev/night-focus"
      src="/assets/moon.png"
    >
      I love to immerse myself with ambient sounds while coding or studying at
      night. I sought a customizable auditory experience, with a picky user
      experience that would reconcile my focus. <Strong> Night Focus</Strong>{" "}
      helps me get into the Flow State.
    </ProjectCard>
  );

  return (
    <PageBlock width="medium">
      <Head>
        <title>Matteo Pellegrino | Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer and Full Stack Developer who loves building digital products.
          Specialized in web technologies and cloud infrastructures.
          Enthusiastic about requirements gathering, UI/UX design, and startup environment."
        ></meta>
      </Head>

      <Hidden below="tablet">
        <Stack space="medium">
          <HeaderCard />
          <Columns space="medium">
            <Column>
              <Stack space="medium">
                <ContactsCard />
                {espanso}
              </Stack>
            </Column>
            <Column>{nightFocus}</Column>
          </Columns>
        </Stack>
      </Hidden>

      <Hidden above="mobile">
        <Stack space="medium">
          <HeaderCard />
          <ContactsCard />
          {espanso}
          {nightFocus}
        </Stack>
      </Hidden>
    </PageBlock>
  );
};

export default Index;
