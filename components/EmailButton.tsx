import Image from "next/image";

export const EmailButton = () => (
  <a
    type="button"
    className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center"
    href="#mailgo"
    data-address="matteo.pelle.pellegrino"
    data-domain="gmail.com"
  >
    <Image src="/assets/icons/mail.svg" width={24} height={24} alt="email icon" />
    <span>Drop me a line</span>
  </a>
);
