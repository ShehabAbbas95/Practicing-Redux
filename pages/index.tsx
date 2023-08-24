import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import App from "./_app";
export default function Home() {
  return (
    <>
      <Head>
        <title>Car App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <footer className="hidden">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </>
  );
}
