import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import Test from "../components/test";
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
          <Test />
          <Component {...pageProps} />
        </>
      ) : (<Login setUserLogged={setUserLogged} />)}



    </SessionProvider>
  )
}