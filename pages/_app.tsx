import type { AppProps } from 'next/app';
import './global.css';

const NiverGustavo = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default NiverGustavo;
