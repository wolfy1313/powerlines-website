import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

interface TOCOpportunitiesComponentProps {
  header: string;
  content: string;
}

const TOCOpportunitiesComponent: React.FC<TOCOpportunitiesComponentProps> = ({
  header,
  content,
}) => {
  return (
    <section className="min-w-screen max-w-screen px-20 my-10">
      <h1
        className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 text-main-one ${cairo.className}`}
      >
        {header}
      </h1>
      <p
        className={`text-base md:text-xl font-light leading-6  ${robotoSlab.className}`}
      >
        {content}
      </p>
    </section>
  );
};

export default TOCOpportunitiesComponent;
