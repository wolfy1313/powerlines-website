import React,{useState} from 'react'

interface TrunctableTextProps {
    text: string;
    maxLength: number;
}

const TrunctableText: React.FC<TrunctableTextProps> = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const body = isTruncated ? text.slice(0, maxLength) + '...' : text;

    return (
        <div className="overflow-hidden">
            <p className={` text-black text-xl font-normal leading-9 custom-truncate`}>{body}</p>
            <button onClick={() => setIsTruncated(!isTruncated)} className={`text-darker-yellow text-base font-normal leading-8`}>
                {isTruncated ? 'Show More' : 'Show Less'}
            </button>
        </div>
    );
}

export default TrunctableText