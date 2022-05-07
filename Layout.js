import React, { useEffect } from "react";
import Head from "next/head";
import { Box } from "grommet";

import Menu from "./components/Menu";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box background="light-1">
      <Head>
        <title>Emin Durak | Infinitesimals Space | Research Projects </title>
      </Head>
      <Menu />
      <main>{children}</main>
    </Box>
  );
}

export default Layout;
