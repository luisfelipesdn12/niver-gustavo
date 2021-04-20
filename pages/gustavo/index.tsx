import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Gvstavo: React.FC = () => {
    const router = useRouter();

    const [hinted, setHinted] = useState(false);

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
                } else if (!hinted) {
                    open("https://www.invertexto.com/texto-criptografado", "_blank");
                    setHinted(true);
                }
            }}
        ></video>
    );
};

export default Gvstavo;
