"use client";
import React, { useState } from "react";

import { Cairo, Roboto_Slab } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

interface TrunctableTextProps {
  text: string;
  maxLength: number;
  color: string;
}

const TrunctableText: React.FC<TrunctableTextProps> = ({
  text,
  maxLength,
  color,
}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const body = isTruncated ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="overflow-hidden">
      <p
        className={`text-[15px] md:text-xl font-light leading-6 flex-grow ${robotoSlab.className} custom-truncate`}
      >
        {body}
      </p>
      <button
        onClick={() => setIsTruncated(!isTruncated)}
        className={`mb-4 ${
          color ? `text-${color}` : "text-yellow-dark"
        } text-base font-normal leading-8`}
      >
        {isTruncated ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default TrunctableText;
