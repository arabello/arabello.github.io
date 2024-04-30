"use client";

import mailgo from "mailgo";
import { Card } from "./Card";
import Image from "next/image";
import { useEffect } from "react";

export const ContactsCard = () => {
  useEffect(() => {
    mailgo({
      actions: {
        yahoo: false,
        gmail: false,
        outlook: false,
      },
      showFooter: false,
    });
  }, []);

  return (
    <Card>
      <div className="text-center">Let&apos;s keep in touch 👇</div>
      <a
        type="button"
        className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
        href="/assets/matteo-pellegrino-resume.pdf"
        target="blank"
      >
        <Image src="/assets/icons/file-text.svg" width={24} height={24} alt="Résumé icon" />
        <span>Résumé</span>
      </a>
      <a
        type="button"
        className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
        href="#mailgo"
        data-address="matteo.pelle.pellegrino"
        data-domain="gmail.com"
      >
        <Image src="/assets/icons/mail.svg" width={24} height={24} alt="email icon" />
        <span>Drop me a line</span>
      </a>
      <a
        type="button"
        className="btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2"
        href="https://www.linkedin.com/in/mttpll"
        target="blank"
      >
        <Image src="/assets/icons/linkedin.svg" width={24} height={24} alt="linkedin icon" />
        <span>Linkedin</span>
      </a>
    </Card>
  );
};
