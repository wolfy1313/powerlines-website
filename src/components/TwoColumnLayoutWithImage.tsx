import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from "next/image";
const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

interface TwoColumnLayoutWithImageProps {
  header: string;
  body: string;
  body2?: string;
  imageSrc: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
}

const TwoColumnLayoutWithImage: React.FC<TwoColumnLayoutWithImageProps> = ({
  header,
  imageSrc,
  body,
  body2,
  width,
  height,
  alt,
}) => {
  return (
    <section className="min-w-full max-w-full mx-auto">
      <section className="flex flex-col lg:flex-row bg-white px-20 lg:pr-0 my-10">
        {/* 
Text Column  */}
        <section className="w-full sm:w-full flex items-center md:order-1 order-1 justify-center h-auto order-2 ">
          <section className=" mt-0 md:mt-12">
            {/* Header hidden on small screens, shown on medium and larger screens */}
            <h2
              className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 text-main-one ${cairo.className}`}
            >
              {header}
            </h2>
            <p
              className={`text-base md:text-xl font-light leading-6  ${robotoSlab.className}`}
            >
              {body}
            </p>{" "}
            {body2 && (
              <p
                className={`text-base md:text-sm font-light leading-9 mt-8 ${robotoSlab.className}`}
              >
                {body2}
              </p>
            )}
          </section>
        </section>
        {/* Image Column  */}
        <section className="w-full flex items-center mt-5 lg:mt-0 sm:w-full order-2 ">
          <section className=" w-full sm:min-w-*[186px] h-auto md:max-w-*[555px] md:max-h-*[356px] md:mx-10 flex justify-center">
            <Image
              width={width}
              height={height}
              src={imageSrc}
              alt={alt}
              className="rounded-md"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default TwoColumnLayoutWithImage;
