import React, { useEffect } from "react";
import Head from "next/head";

import Menu from "./components/Menu";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>Emin Durak | Infinitesimals Space | Research Projects </title>
      </Head>
      <Menu />
      <main>{children}</main>
    </>
  );
}

export default Layout;
