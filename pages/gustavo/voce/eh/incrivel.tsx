import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { CenterDiv } from "../../../../src/styles";

const Incrivel: React.FC = () => {
    const { width, height } = useWindowSize();

    return (
        <>
            <CenterDiv>
                <h1>Gustavo, você é incrível!</h1>
                <img
                    src="/gustavo_chapeu.jpg"
                    alt="Gustavo de Chapéu"
                    style={{
                        width: "70%",
                    }}
                />
                <p>É isso, parabéns :)</p>
                <Confetti
                    width={width}
                    height={height}
                />
            </CenterDiv>
        </>
    );
};

export default Incrivel;
