import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

interface TOCSectionComponentProps {
  header: string;
  content: string;
  headerColor:string;
}

const TOCSectionComponent: React.FC<TOCSectionComponentProps> = ({
  header,
  content,
  headerColor
}) => {
  return (
    <section className="min-w-screen max-w-screen mx-6 mt-10 md:mx-20">
      <h1
        className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 ${
          headerColor ? `text-${headerColor}` : "text-primary"
        } ${cairo.className}`}
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

export default TOCSectionComponent;
