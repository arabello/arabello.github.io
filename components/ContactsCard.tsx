import Card from "./Card";
import Image from "next/image";

const ContactsCard = () => (
  <Card className="card-contacts">
    <div className="text-center">Let&apos;s keep in touch 👇</div>
    <a
      type="button"
      className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="/assets/matteo-pellegrino-cv.pdf"
      target="blank"
    >
      <Image
        src="/assets/icons/file-text.svg"
        width={24}
        height={24}
        alt="curriculum vitae icon"
      />
      <span>Curriculum Vitae</span>
    </a>
    <a
      type="button"
      className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="#mailgo"
      data-address="matteo.pelle.pellegrino"
      data-domain="gmail.com"
    >
      <Image
        src="/assets/icons/mail.svg"
        width={24}
        height={24}
        alt="email icon"
      />
      <span>Drop me a line</span>
    </a>
    <a
      type="button"
      className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="https://www.linkedin.com/in/mttpll"
      target="blank"
    >
      <Image
        src="/assets/icons/linkedin.svg"
        width={24}
        height={24}
        alt="linkedin icon"
      />
      <span>Linkedin</span>
    </a>
  </Card>
);

export default ContactsCard;
