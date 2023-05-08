import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "@/components/Navbar/Navbar.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
