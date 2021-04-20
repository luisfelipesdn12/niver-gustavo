import { useRouter } from 'next/router';
import React from 'react';

const Gvstavo: React.FC = () => {
    const router = useRouter();

    return (
        <video
            src="/fire.mp4"
            autoPlay={true}
            loop={true}
            controls={false}
            muted={true}
            style={{
                width: "100vw",
                height: "100vh"
            }}
            onClick={() => {
                // chave: fogo
                const text = prompt("oW7spS3KnHsbWQ0-Dw21YQ");
                if (text === "você" || text === "voce") {
                    router.push("/gustavo/voce");
                }
            }}
        ></video>
    );
};

export default Gvstavo;
