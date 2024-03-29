import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from "next/image";
import YellowCircleWithImage from "./YellowCircleWithImage";

import { TOCOutcomesComponentProps, OutcomeCardProps } from "@/types/global";

const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const TOCOutcomesComponent: React.FC<TOCOutcomesComponentProps> = ({
  header,
  content,
  OutcomesCards,
}) => {
  return (
    <section className={`min-w-screen max-w-screen`}>
      <section className="flex flex-col bg-white px-20 my-10">
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
        <section className="flex flex-col sm:flex-row sm:justify-around">
          {OutcomesCards.map((OutcomeCard: OutcomeCardProps) => (
            <div key={OutcomeCard.text} className=" flex flex-col items-center">
              <YellowCircleWithImage
                image={OutcomeCard.image}
                text={OutcomeCard.text}
                alt={OutcomeCard.alt}
                height={OutcomeCard.height}
                width={OutcomeCard.width}
              />
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default TOCOutcomesComponent;
