import { useRouter } from 'next/router';
import React from 'react';
import { FullImage } from '../../../src/styles';

const Voce: React.FC = () => {
    const router = useRouter();

    return (
        <FullImage
            src="/eh.png"
            onClick={() => {
                const text = prompt();
                if (text === "eh" || text === "é") {
                    router.push("/gustavo/voce/eh");
                }
            }}
        ></FullImage>
    );
};

export default Voce;
