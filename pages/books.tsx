import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HeaderCard } from "./components/HeaderCard";

const Books: NextPage = () => {
  return (
    <div className="min-vh-100">
      <div className="bg-gradient-custom"></div>
      <Head>
        <title>Matteo Pellegrino | Reading List</title>
        <meta
          name="description"
          content="Hand-picked books reccomendations."
        ></meta>
      </Head>

      <div className="min-vh-100 container-centered d-flex flex-column p-3 pt-4">
        <HeaderCard
          heading="Reading List"
          subheading="Books I have read and believe are worth sharing"
          avatar={() => <>📚</>}
          icon={() => (
            <a type="button" href="/">
              <Image
                src="/assets/icons/home.svg"
                width={24}
                height={24}
                alt="github icon link"
              />
            </a>
          )}
        />

        <div className="row flex-grow-1">
          <div className="col mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Books;
