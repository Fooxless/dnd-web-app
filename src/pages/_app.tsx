import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import Login from "./login";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  const [isUserLogged, setUserLogged] = useState(false);
  return (
    <SessionProvider
      session={pageProps.session}
    >
      {isUserLogged || session ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (<Login setUserLogged={setUserLogged} />)}



    </SessionProvider>
  )
}