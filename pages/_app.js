import "../styles/globals.css";
import "../styles/styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Layout from "./Layout";

import { SessionProvider } from "next-auth/react";

function MyApp({  Component, pageProps: { session, ...pageProps }  }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
