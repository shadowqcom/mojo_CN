import React from 'react';
import Head from 'next/head';

const GoogleAnalyticsScript = () => {
    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-7BDPKHVLRK`}
            />
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7BDPKHVLRK');`,
                }}
            />
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "lpo3k0x6fh");`,
                }}
            />
            <script 
                async 
                src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9179261695088632'}
                crossorigin="anonymous"
            />
        </>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <GoogleAnalyticsScript />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
