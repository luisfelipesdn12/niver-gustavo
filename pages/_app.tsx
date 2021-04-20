import type { AppProps } from 'next/app';
import Head from 'next/head';
import './global.css';

const NiverGustavo = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎂</text></svg>" />
                
                {/* Primary Meta Tags */}
                <title>🎉 Parabéns, Gustavo!</title>
                <meta name="title" content="🎉 Parabéns, Gustavo!" />
                <meta name="description" content="AMGINE" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://niver-gustavo.vercel.app/" />
                <meta property="og:title" content="🎉 Parabéns, Gustavo!" />
                <meta property="og:description" content="AMGINE" />
                <meta property="og:image" content="/cellbit.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://niver-gustavo.vercel.app/" />
                <meta property="twitter:title" content="🎉 Parabéns, Gustavo!" />
                <meta property="twitter:description" content="AMGINE" />
                <meta property="twitter:image" content="/cellbit.jpg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default NiverGustavo;
