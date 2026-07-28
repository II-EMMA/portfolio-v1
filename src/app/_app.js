// pages/_app.js
import { useEffect } from "react";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* GA config script */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-36HMXERYTE');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
