import React, { useEffect } from "react";
import Head from "next/head";
import { Box } from "grommet";

import Menu from "./components/Menu";

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const today = new Date();
  const currentHour = today.getHours();

  const isDark = currentHour < 7 || currentHour > 19;

  return (
    <Box background={isDark ? "dark-2" : "light-2"}>
      <Head>
        <title>Emin Durak | Infinitesimals Space | Research Projects </title>
      </Head>
      <Menu />
      <main>{children}</main>
    </Box>
  );
}

export default Layout;
