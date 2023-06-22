import { Card } from "./Card";

export const ContactsCard = () => (
  <Card>
    <p className="text-center">Let's keep in touch 👇</p>
    <a
      type="button"
      className="btn btn-light border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="/assets/matteo-pellegrino-cv.pdf"
    >
      <img src="assets/icons/file-text.svg"></img>
      <span>Curriculum Vitae</span>
    </a>
    <a
      type="button"
      className="btn btn-light border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="#mailgo"
      data-address="matteo.pelle.pellegrino"
      data-domain="gmail.com"
    >
      <img src="assets/icons/mail.svg"></img>
      <span>Drop me a line</span>
    </a>
    <a
      type="button"
      className="btn btn-light border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
      href="https://www.linkedin.com/in/mttpll"
    >
      <img src="assets/icons/linkedin.svg"></img>
      <span>Linkedin</span>
    </a>
  </Card>
);
