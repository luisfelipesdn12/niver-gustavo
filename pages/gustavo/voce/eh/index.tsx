import { useRouter } from 'next/router';
import React from 'react';
import { FullImage } from '../../../../src/styles';

const Eh: React.FC = () => {
    const router = useRouter();

    return (
        <FullImage
            src="/gustavo_selfie.jpg"
            onClick={() => {
                const text = prompt();
                if (text === "incrivel" || text === "incrível") {
                    router.push("/gustavo/voce/eh/incrivel");
                }
            }}
        ></FullImage>
    );
};

export default Eh;
