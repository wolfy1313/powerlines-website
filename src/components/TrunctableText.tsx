import React, { useState } from 'react'

import { Josefin_Sans, Playfair_Display } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface TrunctableTextProps {
    text: string;
    maxLength: number;
}

const TrunctableText: React.FC<TrunctableTextProps> = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const body = isTruncated ? text.slice(0, maxLength) + '...' : text;

    return (
        <div className="overflow-hidden">
            <p className={` ${playfairDisplay.className} text-lg md:text-xl font-normal tracking-tighter leading-9 custom-truncate`}>{body}</p>
            <button onClick={() => setIsTruncated(!isTruncated)} className={`mb-4 text-darker-yellow text-base font-normal leading-8`}>
                {isTruncated ? 'Show More' : 'Show Less'}
            </button>
        </div>
    );
}

export default TrunctableText