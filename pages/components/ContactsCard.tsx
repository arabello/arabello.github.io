import {
  ButtonLink,
  IconDocument,
  IconMail,
  IconSocialLinkedIn,
  Stack,
  Text,
} from "braid-design-system";
import Card from "./Card";

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

export default ContactsCard;
