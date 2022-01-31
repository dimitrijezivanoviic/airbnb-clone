import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Head from "next/head";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./login";
import { useEffect } from "react";
import Loading from "../components/Loading";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  console.log(user);
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
